/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import { VideoContext } from "../context";
import styles from "../styles/video.module.scss";
import { ContextMenuItem } from "../types";

export const ContextMenu = ({
  renderCustomMenu,
}: {
  renderCustomMenu?: (
    contextMenuItems: Array<ContextMenuItem>
  ) => React.ReactNode | null;
}) => {
  const { contextMenuItems, menuOpen, setMenuOpen, menuClientX, menuClientY } =
    useContext(VideoContext);
  if (!menuOpen) {
    return null;
  }

  return (
    <div
      className={styles.contextPageOverlay}
      onClick={() => setMenuOpen(false)}
    >
      <div
        className={styles.contextMenuCard}
        style={{ top: menuClientY, left: menuClientX }}
      >
        {renderCustomMenu ? (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          renderCustomMenu(contextMenuItems)
        ) : (
          <div className={styles.contextMenu}>
            {contextMenuItems?.map((item: ContextMenuItem, index: number) => (
              <button
                key={index}
                className={styles.contextMenuItem}
                onClick={item.onClick}
              >
                <span className={styles.contextMenuItemIcon}>{item.icon}</span>
                <span className={styles.contextMenuItemLabel}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
