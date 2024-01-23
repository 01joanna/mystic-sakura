"use client";
import Image from "next/image";
import styles from "@/app/styles.module.css";
import Flowers from "@/app/components/animation/flowers/Flowers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Circles from "@/app/components/animation/circle/Circle";
import clsx from "clsx";

export default function AnimationPage() {
  const router = useRouter();
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsTransition(true);
      setTimeout(() => {
        router.push("/login-user");
      }, 100);
    }, 6000);
    return () => clearTimeout(timeOut);
  }, [router]);

  return (
    <section
      className={clsx(
        "flex justify-center overflow-hidden relative h-screen",
        isTransition ? "transition-opacity duration-500 opacity-0" : ""
      )}
    >
      <div className={styles.containerLogo}>
        <Image
          width={70}
          height={150}
          src={"/assets/images/bg-images/logo-1.png"}
          alt="logo"
          className={styles.wingOne}
        />
        <Image
          width={70}
          height={150}
          src={"/assets/images/bg-images/logo-2.png"}
          alt="logo"
          className={styles.wingTwo}
        />
      </div>
      <Flowers />
      <Circles />
      <div className={styles.animation}>
        <div>
          <div className={styles.glare}></div>
          <div className={styles.anime}>
            <Image
              width={150}
              height={200}
              src={"/assets/images/bg-images/carta-front.png"}
              alt="kero"
              className={styles.front}
            />
          </div>
          <div className={styles.anime}>
            <Image
              width={150}
              height={200}
              src={"/assets/images/bg-images/carta-back.png"}
              alt="kero"
              className={styles.back}
            />
          </div>
        </div>
      </div>
      <h1 className="text-yellowColor text-[2rem] absolute bottom-[9rem] font-jost tracking-[.07rem] sm:text-[2.5rem] md:text-[3rem] md:bottom-[7.5rem] min-[1400px]:text-[3.5rem] min-[1400px]:bottom-[6rem]">
        Cargando...
      </h1>
    </section>
  );
}
