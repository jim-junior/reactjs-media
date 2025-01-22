import React, { useState, useRef, useCallback, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  lazy?: boolean;
  placeholder?: string;
  srcSet?: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  filter?: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
  caption?: string;
  overlay?: React.ReactNode;
  zoomable?: boolean;
  fallbackSrc?: string;
}

interface ImageState {
  isLoaded: boolean;
  hasError: boolean;
  isZoomed: boolean;
  zoomPosition: { x: number; y: number };
}

export const Img: React.FC<ImageProps> = ({
  src,
  alt,
  width = "auto",
  height = "auto",
  lazy = true,
  placeholder,
  srcSet,
  sizes,
  className = "",
  style = {},
  filter,
  onLoad,
  onError,
  onClick,
  caption,
  overlay,
  zoomable = false,
  fallbackSrc,
}) => {
  const [state, setState] = useState<ImageState>({
    isLoaded: false,
    hasError: false,
    isZoomed: false,
    zoomPosition: { x: 0, y: 0 },
  });

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection observer for lazy loading
  const { isIntersecting } = useIntersectionObserver(containerRef, {
    threshold: 0.1,
    triggerOnce: true,
  });

  // Handle image loading
  const handleLoad = useCallback(() => {
    setState((prev) => ({ ...prev, isLoaded: true }));
    onLoad?.();
  }, [onLoad]);

  // Handle image error
  const handleError = useCallback(() => {
    const error = new Error("Image failed to load");
    setState((prev) => ({ ...prev, hasError: true }));
    onError?.(error);
  }, [onError]);

  // Handle zoom functionality
  const handleZoom = useCallback(
    (event: React.MouseEvent<HTMLImageElement>) => {
      if (!zoomable || !imageRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      setState((prev) => ({
        ...prev,
        isZoomed: !prev.isZoomed,
        zoomPosition: { x, y },
      }));
    },
    [zoomable]
  );

  // Apply CSS filters
  const filterStyle = filter ? { filter } : {};

  // Combine custom styles with filter
  const combinedStyle: React.CSSProperties = {
    ...style,
    ...filterStyle,
    width: width,
    height: height,
    objectFit: "cover",
    transition: "opacity 0.3s ease-in-out",
  };

  // Handle WebP support detection
  useEffect(() => {
    const checkWebPSupport = async () => {
      const webPImage = new Image();
      webPImage.src =
        "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
      return new Promise<boolean>((resolve) => {
        webPImage.onload = () => resolve(true);
        webPImage.onerror = () => resolve(false);
      });
    };

    checkWebPSupport().then((hasWebP) => {
      if (hasWebP && srcSet && !srcSet.includes(".webp")) {
        console.warn("WebP format is supported but not included in srcSet");
      }
    });
  }, [srcSet]);

  // Render placeholder while loading
  const renderPlaceholder = () => (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {placeholder ? (
        <img
          src={placeholder}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(10px)",
          }}
        />
      ) : (
        <div role="presentation">Loading...</div>
      )}
    </div>
  );

  // Render error state
  const renderError = () => (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: "#fee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {fallbackSrc ? (
        <img
          src={fallbackSrc}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div role="alert">Failed to load image</div>
      )}
    </div>
  );

  // Main render
  return (
    <div
      ref={containerRef}
      className={`image-container ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: zoomable ? "zoom-in" : "initial",
      }}
    >
      {(!lazy || isIntersecting) && (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          srcSet={srcSet}
          sizes={sizes}
          style={{
            ...combinedStyle,
            opacity: state.isLoaded ? 1 : 0,
            transform: state.isZoomed ? `scale(2)` : "none",
            transformOrigin: `${state.zoomPosition.x * 100}% ${
              state.zoomPosition.y * 100
            }%`,
          }}
          onLoad={handleLoad}
          onError={handleError}
          onClick={(e) => {
            handleZoom(e);
            onClick?.(e);
          }}
          loading={lazy ? "lazy" : undefined}
        />
      )}

      {!state.isLoaded && !state.hasError && renderPlaceholder()}
      {state.hasError && renderError()}

      {overlay && state.isLoaded && !state.hasError && (
        <div
          className="image-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {overlay}
        </div>
      )}

      {caption && state.isLoaded && !state.hasError && (
        <figcaption
          className="image-caption"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "8px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            textAlign: "center",
          }}
        >
          {caption}
        </figcaption>
      )}
    </div>
  );
};

export default Img;
