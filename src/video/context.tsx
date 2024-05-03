import { Context, createContext, useRef, useState } from "react";
import { ContextMenuItem, VideoCTX } from "./types";

export const VideoContext: VideoCTX = createContext({
  videoRef: { current: null },
  containerRef: { current: null },
  overlayRef: { current: null },
  seekPreview: false,
  setSeekPreview: (seekPreview: boolean) => {},
  menuClientX: 0,
  setMenuClientX: (menuClientX: number) => {},
  menuClientY: 0,
  setMenuClientY: (menuClientY: number) => {},
  contextMenuItems: [],
  setContextMenuItems: (contextMenuItems: Array<ContextMenuItem>) => {},
  menuOpen: false,
  setMenuOpen: (menuOpen: boolean) => {},
}) as VideoCTX;

export const VideoCTXProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [seekPreview, setSeekPreview] = useState(false);
  const [menuClientX, setMenuClientX] = useState(0);
  const [menuClientY, setMenuClientY] = useState(0);
  const [contextMenuItems, setContextMenuItems] = useState<
    Array<ContextMenuItem>
  >([]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <VideoContext.Provider
      value={{
        videoRef,
        containerRef,
        seekPreview,
        setSeekPreview,
        menuClientX,
        setMenuClientX,
        menuClientY,
        setMenuClientY,
        contextMenuItems,
        setContextMenuItems,
        menuOpen,
        setMenuOpen,
        overlayRef,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
