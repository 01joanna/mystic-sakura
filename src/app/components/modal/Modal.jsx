import Image from "next/image"
import './styles.css'
import ModalVertical from "../../../../public/assets/images/modal-vertical.png"
import ModalHorizontal from "../../../../public/assets/images/adorno-horizontal.png"

import ModalContent from "./ModalContent"

export default function Modal() {
    return (
        <section className="relative flex flex-row items-center justify-center pb-10 lg:justify-between lg:border-s">
            <Image
            src={"/assets/images/wings-left.png"}
            alt="Imagen del ala izquierdo"
            width={400}
            height={266}
            className="flex-none absolute left-20 top-4 z-10 hidden lg:flex"
            />
            <div className="bg-purpleDark h-[55rem] w-[21.4rem] flex flex-col justify-around items-center rounded-3xl lg:w-[53rem] lg:h-[35.5rem]">
                <Image src={"/assets/images/adorno-horizontal.png"} alt="Imagen de adorno horizontal, arriba" width={324} height={22} className={`${"horizontal-top"}  lg:w-[52.8rem] lg:h-[3.6rem] top-1`}/>
                <section className="flex flex-col w-full h-full overflow-y-scroll items-center justify-center -mt-20 lg:mt-0">
                    <ModalContent />
                    <ModalContent reverse/>
                    <ModalContent />
                </section>
                <Image src={"/assets/images/adorno-horizontal.png"} alt="Imagen de adorno horizontal, abajo" width={324} height={22} className={`${"horizontal-bottom"} lg:w-[52.8rem] lg:h-[3.6rem]`}/>
                <Image src={"/assets/images/adorno-vertical.png"}  alt="Imagen de adorno horizontal, izquierda" width={355} height={57} className={`${"vertical-left"} hidden lg:flex`}/>
                <Image src={"/assets/images/adorno-vertical.png"}  alt="Imagen de adorno horizontal, derecha" width={355} height={57} className={`${"vertical-right"} hidden lg:flex`}/>
                {/* <Button /> */}
            </div>
            <Image
            src={"/assets/images/wings-right.png"}
            alt="Imagen del ala derecho"
            width={400}
            height={100}
            className="flex-none absolute right-20 top-4 z-10 hidden lg:flex"
            />
        </section>
    )
}