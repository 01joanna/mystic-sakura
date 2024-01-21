import Image from "next/image"
import './styles.css'

import ModalReading from "../modalReading/ModalReading"

export default function Modal({ children }) {
    return (
        <section className="relative flex items-center justify-center">
            <Image
            src={"/assets/images/wings-left.png"}
            alt="Imagen del ala izquierdo"
            width={300}
            height={266}
            className="flex-none absolute right-[460px] top-14 z-10 hidden lg:flex"
            />

            <div className="bg-purpleDark h-full w-[21.4rem] flex flex-col justify-center items-center rounded-3xl lg:w-[53rem] lg:h-[40rem]">
                <Image src={"/assets/images/adorno-horizontal.png"} alt="Imagen de adorno horizontal, arriba" width={324} height={22} className={`${"horizontal-top"} mt-2 lg:w-[52.8rem] lg:h-[3.6rem] lg:mb-8`}/>
                <section className="flex flex-col w-full h-full lg:overflow-y-scroll items-center justify-center lg:justify-start lg:gap-32 lg:py-10">
                    <ModalReading />
                    <ModalReading reverse />
                    <ModalReading />
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