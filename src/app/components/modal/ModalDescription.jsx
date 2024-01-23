"use client";
import Image from "next/image"
import styles from './styles.module.css'
// import { SakuraContext } from "@/app/context";
// import { useContext } from "react";
// import { useRouter } from "next/navigation";

import ModalReading from "../modalReading/ModalReading"

export default function ModalDescription({ isOpen, onClose, pastCardPrediction, presentCardPrediction, futureCardPrediction }) {

    // const {
    //     selectedItems,
    //   } = useContext(SakuraContext);
    
    //   const pastCardPrediction = selectedItems.find(
    //     (card)=> card.predictionTime === "pasado"
    //   );
    //   const presentCardPrediction = selectedItems.find(
    //     (card)=> card.predictionTime === "present"
    //   )
    //   const futureCardPrediction = selectedItems.find(
    //     (card)=> card.predictionTime === "futuro"
    //   );
    
    //   const router = useRouter();
      const modalDisplay = isOpen
      ? `${styles.modalOverlay} ${styles.modalOpen}`
      : styles.modalOverlay

    return (
        <section onClick={onClose} className={modalDisplay}>
            <Image
            src={"/assets/images/wings-left.png"}
            alt="Imagen del ala izquierdo"
            width={300}
            height={266}
            className="flex-none absolute right-[460px] top-14 z-10 hidden lg:flex"
            />

            <div className="bg-purpleDark h-full w-[21.4rem] flex flex-col justify-center items-center rounded-3xl lg:w-[53rem] lg:h-[40rem]">
                <Image src={"/assets/images/adorno-horizontal.png"} alt="Imagen de adorno horizontal, arriba" width={324} height={22} className={`${"horizontal-top"} mt-2 lg:w-[52.8rem] lg:h-[3.6rem] lg:mb-8`}/>
                <button className="text-yellowColor flex absolute top-8 right-4 lg:top-12 lg:right-12 text-xl lg:text-2xl" onClick={onClose}>
          X
        </button>
                <section className="flex flex-col w-full h-full lg:overflow-y-scroll items-center justify-center pt-8 lg:justify-start lg:gap-32 lg:py-10">
                    <ModalReading cardData={pastCardPrediction}/>
                    <ModalReading reverse cardData={presentCardPrediction}/>
                    <ModalReading cardData={futureCardPrediction}/>
                </section>
                <Image src={"/assets/images/icon-arrow-down.svg"} alt="Icon scroll down" width={30} height={30} className={`hidden lg:flex absolute bottom-20`}/>
                <Image src={"/assets/images/adorno-horizontal.png"} alt="Imagen de adorno horizontal, abajo" width={324} height={22} className={`${"horizontal-bottom"} mb-2 lg:w-[52.8rem] lg:h-[3.6rem] lg:mt-8`}/>
                <Image src={"/assets/images/modal-vertical.png"}  alt="Imagen de adorno vertical, izquierda" width={380} height={57} className={`hidden lg:flex rotate-90 absolute bottom-65 right-[325px]`}/>
                <Image src={"/assets/images/modal-vertical.png"}  alt="Imagen de adorno vertical, derecha" width={380} height={57} className={`hidden lg:flex rotate-90 absolute bottom-65 left-[325px]`}/>
                
            </div>
            <Image
            src={"/assets/images/wings-right.png"}
            alt="Imagen del ala derecho"
            width={300}
            height={100}
            className="flex-none absolute left-[460px] top-14 z-10 hidden lg:flex"
            />
        </section>
    )
}