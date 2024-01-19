import Image from "next/image";
import styles from "@/app/styles.module.css";
import Flowers from "@/app/components/animation/flowers/Flowers";
import Circles from "@/app/components/animation/circle/Circle";

export default function AnimationPage() {
  return (
    <section className="flex justify-center overflow-hidden relative h-screen">
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
    </section>
  );
}
