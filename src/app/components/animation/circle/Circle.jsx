import styles from "@/app/components/animation/circle/styles.module.css";
import clsx from "clsx";

export default function Circles() {
  return (
    <div
      className={clsx(
        styles.containerAnimationGeneral,
        "absolute bottom-0 left-0 w-full top-[15vh] lg:top-[20vh]"
      )}
    >
      <div className={clsx(styles.containerLights, "lg:opacity-[0.5]")}>
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
