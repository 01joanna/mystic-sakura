"use client";
import Image from "next/image";
import styles from "../modal/styles.module.css";
import UserEntries from "../userEntries/UserEntries";

export default function UserTable({ readings, userData }) {
  return (
    <section>
      <Image
        src={"/assets/images/wings-left.png"}
        alt="Imagen del ala izquierdo"
        width={300}
        height={266}
        className="flex-none relative right-[230px] top-[250px] z-10 hidden lg:flex"
      />

      <div className="bg-purpleDark w-[35rem] flex flex-col justify-center items-center rounded-3xl lg:w-[68rem] lg:h-[40rem]">
        <Image
          src={"/assets/images/adorno-horizontal.png"}
          alt="Imagen de adorno horizontal, arriba"
          width={324}
          height={22}
          className={`${"horizontal-top"} mt-2 lg:mt-4 lg:w-[66.5rem] lg:h-[3.6rem]`}
        />

        <section
          className={`${styles.scrollbar} flex flex-col w-full h-full lg:overflow-y-scroll items-center justify-center p-4 lg:justify-start lg:gap-32 gap-4 lg:py-4`}
        >
          <UserEntries readings={readings} userData={userData} />
        </section>
        <Image
          src={"/assets/images/adorno-horizontal.png"}
          alt="Imagen de adorno horizontal, abajo"
          width={324}
          height={22}
          className={`${"horizontal-bottom"} mb-2 lg:mb-0 lg:w-[66rem] lg:h-[3.6rem] lg:mt-2`}
        />
        <Image
          src={"/assets/images/modal-vertical.png"}
          alt="Imagen de adorno vertical, izquierda"
          width={380}
          height={57}
          className={`hidden lg:flex rotate-90 relative bottom-[19rem] right-[32.4rem]`}
        />
        <Image
          src={"/assets/images/modal-vertical.png"}
          alt="Imagen de adorno vertical, derecha"
          width={380}
          height={57}
          className={`hidden lg:flex rotate-90 relative bottom-[19.5rem] left-[32rem]`}
        />
      </div>
      <Image
        src={"/assets/images/wings-right.png"}
        alt="Imagen del ala derecho"
        width={300}
        height={100}
        className="flex-none relative left-[600px] bottom-[350px] z-10 hidden lg:flex"
      />
    </section>
  );
}
