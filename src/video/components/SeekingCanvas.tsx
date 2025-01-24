import React, {
  useRef,
  useEffect,
  //useState,
  //useCallback,
  useContext,
} from "react";
import styles from "../styles/video.module.scss";
import { VideoContext } from "../context";

interface SeekingCanvasProps {
  src: string;
  time: number;
  percentage: number;
  width?: number;
  height?: number;
}

export const SeekingCanvas: React.FC<SeekingCanvasProps> = ({
  time,
  percentage,
  width = 160,
  height = 90,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker | null>(null);
  //const [frameData, setFrameData] = useState<ImageData | null>(null);
  const { src } = useContext(VideoContext);

  // Initialize the frame extraction worker
  useEffect(() => {
    // Create a worker for frame extraction
    const workerCode = `
      let decoder = null;
      let frameCount = 0;

      async function initDecoder(videoUrl) {
        try {
          const response = await fetch(videoUrl);
          const videoData = await response.arrayBuffer();

          decoder = new VideoDecoder({
            output: frame => {
              const bitmap = frame.createImageBitmap();
              self.postMessage({ type: 'frame', bitmap });
              frame.close();
            },
            error: e => self.postMessage({ type: 'error', error: e.message })
          });

          const demuxer = new MP4Demuxer(videoData);
          await decoder.configure(demuxer.getConfig());

          return demuxer;
        } catch (e) {
          self.postMessage({ type: 'error', error: e.message });
        }
      }

      self.onmessage = async function(e) {
        const { type, videoUrl, timestamp } = e.data;

        if (type === 'init') {
          const demuxer = await initDecoder(videoUrl);
          if (demuxer) {
            self.postMessage({ type: 'ready' });
          }
        } else if (type === 'seek') {
          try {
            const frame = await decoder.decode(timestamp);
            frameCount++;
            if (frameCount > 30) {
              decoder.flush();
              frameCount = 0;
            }
          } catch (e) {
            self.postMessage({ type: 'error', error: e.message });
          }
        }
      };
    `;

    const blob = new Blob([workerCode], { type: "application/javascript" });
    workerRef.current = new Worker(URL.createObjectURL(blob));

    // Initialize the worker with the video source
    workerRef.current.postMessage({ type: "init", videoUrl: src });

    // Handle worker messages
    workerRef.current.onmessage = (e) => {
      const { type, bitmap, error } = e.data;

      if (type === "frame" && bitmap) {
        createImageBitmap(bitmap).then((img) => {
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
              ctx.drawImage(img, 0, 0, width, height);
            }
          }
        });
      } else if (type === "error") {
        console.error("Frame extraction error:", error);
      }
    };

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }
    };
  }, [src]);

  // Handle time updates
  useEffect(() => {
    if (workerRef.current) {
      workerRef.current.postMessage({ type: "seek", timestamp: time });
    }
  }, [time]);

  /* // Frame cache management
  const frameCache = useRef(new Map<number, ImageData>());

  const getFrameFromCache = useCallback((timestamp: number) => {
    const roundedTime = Math.round(timestamp * 10) / 10; // Round to 0.1s
    return frameCache.current.get(roundedTime);
  }, []);

  const cacheFrame = useCallback((timestamp: number, frameData: ImageData) => {
    const roundedTime = Math.round(timestamp * 10) / 10;
    frameCache.current.set(roundedTime, frameData);

    // Limit cache size
    if (frameCache.current.size > 100) {
      const firstKey = frameCache.current.keys().next().value;
      frameCache.current.delete(firstKey);
    }
  }, []); */

  return (
    <div className={styles.seekingPreviewContainer}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className={styles.seekingCanvas}
        style={{
          left: `${percentage - 5}%`,
          position: "absolute",
          border: "2px solid white",
          borderRadius: "4px",
          backgroundColor: "#000",
        }}
      />
      <div
        className={styles.seekingTimestamp}
        style={{ left: `${percentage}%` }}
      >
        {new Date(time * 1000).toISOString().substr(11, 8)}
      </div>
    </div>
  );
};

/* // Optional helper class for MP4 demuxing
class MP4Demuxer {
  private data: ArrayBuffer;

  constructor(data: ArrayBuffer) {
    this.data = data;
  }

  getConfig() {
    // Extract video config from MP4 container
    // This is a simplified version - you'd want to properly parse the MP4 header
    return {
      codec: "avc1.42E01E", // Basic H.264 codec
      codedHeight: 720,
      codedWidth: 1280,
      description: new Uint8Array([]),
    };
  }

  // Additional methods for frame extraction would go here
}
 */
