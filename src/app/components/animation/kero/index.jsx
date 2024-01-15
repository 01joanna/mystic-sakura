import Image from "next/image";
import clsx from "clsx";
import styles from "@/app/components/animation/kero/styles.module.css";
export default function Kero() {
  return (
    <div className={clsx(styles.kero, "relative")}>
      <Image
        width={70}
        height={50}
        src={"/assets/images/kero/ala.png"}
        alt="kero"
        className={clsx(styles.wing, "absolute right-4 top-3")}
      />
      <Image
        width={65}
        height={50}
        src={"/assets/images/kero/eye.png"}
        alt="kero"
        className={clsx(styles.eye, "absolute left-[2.1rem] top-[6.2rem]")}
      />
    </div>
  );
}
