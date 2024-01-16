import Image from "next/image";
import clsx from "clsx";
import styles from "@/app/components/animation/kero/styles.module.css";
export default function Kero() {
  return (
    <>
      <div className="relative inline-block left-[82%]  xl:left-[86%] min-[1400px]:left-[84%] min-[1600px]:left-[87%]">
        <div className={clsx(styles.kero, " hidden lg:block lg:w-[15rem] ")}>
          <Image
            width={65}
            height={50}
            src={"/assets/images/kero/ala.png"}
            alt="kero"
            className={clsx(
              styles.wing,
              "absolute right-[0.5rem] bottom-[7rem] min-[1500px]:bottom-[8rem] min-[1500px]:right-[1.4rem] "
            )}
          />
          <Image
            width={55}
            height={50}
            src={"/assets/images/kero/eye.png"}
            alt="kero"
            className={clsx(
              styles.eye,
              "absolute left-[1.8rem] top-[5rem] min-[1500px]:top-[6.2rem] min-[1500px]:left-[2.2rem]"
            )}
          />
        </div>
        <button
          className={
            "cursor-pointer absolute md:top-[8rem]  md:left-[5rem] lg:top-[12.6rem] lg:left-[6.5rem] lg:z-[1] min-[1500px]:top-[15.3rem] min-[1500px]:left-[8rem]"
          }
        >
          <div className={clsx(styles.info)}></div>
        </button>
      </div>
    </>
  );
}
