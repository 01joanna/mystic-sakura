"use client";
import Image from "next/image";
import styles from "./styles.module.css";

import ModalReading from "../modalReading/ModalReading";
import clsx from "clsx";

export default function ModalDescription({
  isOpen,
  onClose,
  pastCardPrediction,
  presentCardPrediction,
  futureCardPrediction,
}) {
  const modalDisplay = isOpen
    ? `${styles.modalOverlay} ${styles.modalOpen}`
    : styles.modalOverlay;

  return (
    <section onClick={onClose} className={`${modalDisplay}`}>
      <Image
        src={"/assets/images/wings-left.png"}
        alt="Imagen del ala izquierdo"
        width={300}
        height={266}
        className={clsx(
          styles.alaOneCardModal,
          "flex-none relative left-28 bottom-20 z-10 hidden lg:flex"
        )}
      />

      <div
        className={clsx(
          styles.containerGeneral,
          "bg-purpleDark w-[70vw] flex flex-col justify-center items-center rounded-[0.8rem] sm:w-[40%] md:w-[40%] min-[850px]:w-[30%] lg:w-[53rem] lg:h-[52vh] relative min-[1400px]:h-[56vh]  min-[1400px]:w-[40%] min-[1600px]:w-[35%] min-[1600px]:h-[48vh]"
        )}
      >
        <Image
          src={"/assets/images/adorno-horizontal.svg"}
          alt="Imagen de adorno horizontal, arriba"
          width={900}
          height={80}
          className={`${"horizontal-top"} mt-2 w-full`}
        />
        <button
          className="text-yellowColor absolute top-[4vh] right-[4vh] text-[2rem] lg:text-[3rem] 2xl:text-[3rem]"
          onClick={onClose}
          data-testid="buttonClose"
        >
          X
        </button>
        <section
          className={`${styles.scrollbar} flex flex-col w-full h-full  py-6 lg:overflow-y-scroll items-center justify-center lg:h-[45rem] lg:justify-start lg:gap-32 lg:px-[3rem] min-[1400px]:px-[4rem] min-[1400px]:gap-[4rem]`}
        >
          <ModalReading cardData={pastCardPrediction} />
          <ModalReading reverse cardData={presentCardPrediction} />
          <ModalReading cardData={futureCardPrediction} />
        </section>
        <Image
          src={"/assets/images/adorno-horizontal.svg"}
          alt="Imagen de adorno horizontal, abajo"
          width={900}
          height={80}
          className={`${"horizontal-bottom"} mt-2 w-full`}
        />
        <Image
          src={"/assets/images/icon-arrow-down.svg"}
          alt="Icon scroll down"
          width={45}
          height={45}
          className={`hidden lg:flex absolute bottom-[5rem]`}
        />
      </div>

      <Image
        src={"/assets/images/wings-right.png"}
        alt="Imagen del ala derecho"
        width={300}
        height={100}
        className={clsx(
          styles.alaTwoCardModal,
          "flex-none relative right-28 bottom-20 z-10 hidden lg:flex"
        )}
      />
    </section>
  );
}
