/* eslint-disable react/react-in-jsx-scope */
import styles from "../styles/video.module.scss";

export const Settings = ({}) => {
  return (
    <div className={styles.settingsOverlay}>
      <div className={styles.settingRoot}>
        <div className={styles.settingHeader}>
          <h3>Settings</h3>
        </div>
        <div className={styles.settingsSidebar}>
          <div className={styles.settingsSidebarItem}>
            <h4></h4>
          </div>
        </div>
      </div>
    </div>
  );
};
