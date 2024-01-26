"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import UserEntries from "../userEntries/UserEntries";

export default function UserTable({ readings, userData }) {
  return (
    <section className="">
      <div className="w-[90vw] min-[500px]:w-[80vw]  mx-auto min-[1000px]:w-full lg:relative min-[1600px]:mt-[6rem]">
        <Image
          src={"/assets/images/wings-left.png"}
          alt="Imagen del ala izquierdo"
          width={300}
          height={266}
          className="min-[1200px]:block min-[1200px]:w-[250px] absolute min-[1400px]:w-[300px] min-[1400px]:left-[-26rem] min-[1400px]:top-[5rem] z-10 hidden lg:left-[-22rem] lg:top-[10rem]"
        />

        <div className="bg-purpleDark max-h[30rem] w-full flex flex-col justify-center items-center rounded-3xl lg:w-[60rem]">
          <Image
            src={"/assets/images/adorno-horizontal.png"}
            alt="Imagen de adorno horizontal, arriba"
            width={500}
            height={120}
            className={`${"horizontal-top"} mt-2 lg:mt-4 lg:w-[66.5rem] lg:h-[3.6rem]`}
          />

          <section className="w-[90%]">
            <UserEntries readings={readings} userData={userData} />
          </section>
          <Image
            src={"/assets/images/adorno-horizontal.png"}
            alt="Imagen de adorno horizontal, abajo"
            width={500}
            height={220}
            className={`${"horizontal-bottom"} mb-2 lg:mb-0 lg:w-[66rem] lg:h-[3.6rem] lg:mt-2`}
          />
        </div>
        <Image
          src={"/assets/images/wings-right.png"}
          alt="Imagen del ala derecho"
          width={300}
          height={100}
          className="min-[1200px]:block absolute min-[1200px]:w-[250px] min-[1400px]:w-[300px] min-[1400px]:right-[-26rem] min-[1400px]:top-[5rem] z-10 hidden lg:right-[-22rem] lg:top-[10rem]"
        />
      </div>
    </section>
  );
}
