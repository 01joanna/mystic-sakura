"use client";
import UserTable from "@/app/components/UserTable/UserTable";
import clsx from "clsx";
import styles from "./styles.module.css";
import Image from "next/image";
import Button from "@/app/components/button/Button";
export default function App({ readings, userData }) {
  return (
    <section className="flex flex-col  items-center  w-[90%] lg:w-full mx-auto h-[100vh]">
      <div className="pt-[2rem]">
        <div className={styles.logoLogin}>
          <Image
            width={60}
            height={150}
            src={"/assets/images/logo/logo-1.png"}
            alt="logo"
            className={styles.wingLoginOne}
          />
          <Image
            width={60}
            height={150}
            src={"/assets/images/logo/logo-2.png"}
            alt="logo"
            className={styles.wingLoginTwo}
          />
        </div>
      </div>
      <h1
        className={
          "text-yellowColor text-[jost] text-[1.2rem] my-[2rem] md:text-[1.2rem] lg:text-[1.5rem] lg:pt-[0.5rem] text-center font-jost w-3/4 pt-0.5 tracking-[.07rem] min-[1400px]:text-[2rem] min-[1400px]:mt-[3rem]"
        }
      >
        “Revive tus lecturas pasadas y encuentra conexiones en tu camino con el
        historial de cartas.
      </h1>
      <UserTable readings={readings} userData={userData} />;
      <Button
        text={"EMPEZAR"}
        sourceIcon={"/assets/images/kero-icon.svg"}
        behaviour={"Link"}
        href={"/home"}
        pinkColor={true}
        className={"mt-[1rem]  mr-[2rem]"}
      />
    </section>
  );
}
