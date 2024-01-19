import styles from "@/app/components/animation/circle/styles.module.css";
import clsx from "clsx";

export default function Circles() {
  return (
    <div
      className={clsx(
        styles.containerAnimationGeneral,
        "absolute top-0 bottom-0 left-0 w-full"
      )}
    >
      <div className={styles.containerLights}>
        <div className={styles.lights}>
          <div className={styles.lightsA}></div>
          <div className={styles.lightsB}></div>
        </div>
      </div>
      <div className={styles.circle_all}>
        <div className={styles.circle_A}></div>
        <div className={styles.circle_B}></div>
        <div className={styles.circle_C}></div>
        <div className={styles.circle_D}></div>
        <div className={styles.circle_E}></div>
      </div>
    </div>
  );
}
