"use client";
import Image from "next/image"
import styles from './styles.module.css'

import ModalReading from "../modalReading/ModalReading"

export default function ModalDescription({ isOpen, onClose, pastCardPrediction, presentCardPrediction, futureCardPrediction }) {

      const modalDisplay = isOpen
      ? `${styles.modalOverlay} ${styles.modalOpen}`
      : styles.modalOverlay

    return (
        <section onClick={onClose} className={`${modalDisplay}`}>
            <Image
            src={"/assets/images/wings-left.png"}
            alt="Imagen del ala izquierdo"
            width={300}
            height={266}
            className="flex-none relative left-28 bottom-20 z-10 hidden lg:flex"
            />

            <div className="bg-purpleDark w-[30rem] flex flex-col justify-center items-center rounded-3xl lg:w-[53rem] lg:h-[40rem]">
                <Image src={"/assets/images/adorno-horizontal.png"} alt="Imagen de adorno horizontal, arriba" width={324} height={22} className={`${"horizontal-top"} mt-2 lg:w-[52.8rem] lg:h-[3.6rem]`}/>
                <button className="text-yellowColor flex relative top-0 left-[13.5rem] lg:top-0 lg:left-[22rem] text-xl lg:text-2xl" onClick={onClose}>
          X
        </button>
                <section className={`${styles.scrollbar} flex flex-col w-full h-full lg:overflow-y-scroll items-center justify-center p-4 ml-4 lg:justify-start lg:gap-32 gap-4 lg:py-4`}>
                    <ModalReading cardData={pastCardPrediction}/>
                    <ModalReading reverse cardData={presentCardPrediction}/>
                    <ModalReading cardData={futureCardPrediction}/>
                </section>
                <Image src={"/assets/images/icon-arrow-down.svg"} alt="Icon scroll down" width={30} height={30} className={`hidden lg:flex relative -bottom-[1rem]`}/>
                <Image src={"/assets/images/adorno-horizontal.png"} alt="Imagen de adorno horizontal, abajo" width={324} height={22} className={`${"horizontal-bottom"} mb-2 lg:w-[52.8rem] lg:h-[3.6rem] lg:mt-2`}/>
                <Image src={"/assets/images/modal-vertical.png"}  alt="Imagen de adorno vertical, izquierda" width={380} height={57} className={`hidden lg:flex rotate-90 relative bottom-[19rem] right-[24.5rem]`}/>
                <Image src={"/assets/images/modal-vertical.png"}  alt="Imagen de adorno vertical, derecha" width={380} height={57} className={`hidden lg:flex rotate-90 relative bottom-[19.5rem] left-[24.5rem]`}/>
                
            </div>
            <Image
            src={"/assets/images/wings-right.png"}
            alt="Imagen del ala derecho"
            width={300}
            height={100}
            className="flex-none relative right-28 bottom-20 z-10 hidden lg:flex"
            />
        </section>
    )
}