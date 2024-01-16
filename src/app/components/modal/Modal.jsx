import Image from "next/image"
import './styles.module.css'
import LeftWing from "../../../../public/assets/img/wings-left.png"
import RightWing from "../../../../public/assets/img/wings-right.png"
import ModalVertical from "../../../../public/assets/img/modal-vertical.png"
import ModalHorizontal from "../../../../public/assets/img/adorno-horizontal.png"
import CloseIcon from '../../../../public/assets/img/xmark-solid.svg'

import ModalContent from "./ModalContent"

export default function Modal() {
    return (
        <section className="relative flex flex-row items-center justify-center">
            <Image
            src={LeftWing}
            alt="Imagen del ala izquierdo"
            width={400}
            height={266}
            className="flex-none absolute -left-20 z-10 hidden lg:flex"
            />
            <div className="bg-purpleDark h-[50rem] w-[21.4rem] flex flex-col justify-between items-center rounded-3xl lg:w-[53rem] lg:h-[35.5rem]">
                <Image src={ModalHorizontal} alt="Imagen de adorno horizontal, arriba" width={324} height={22} className={`${"horizontal-top"} lg:w-[52.8rem] lg:h-[3.6rem]`}/>
                <section className="content-container">
                    <ModalContent />
                    <ModalContent reverse/>
                    <ModalContent />
                </section>
                <Image src={ModalHorizontal} alt="Imagen de adorno horizontal, abajo" width={324} height={22} className={`${"horizontal-bottom"} lg:w-[52.8rem] lg:h-[3.6rem]`}/>
                <Image src={ModalVertical} alt="Imagen de adorno horizontal, izquierda" width={566} height={57} className={`${"vertical-left"}`}/>
                <Image src={ModalVertical} alt="Imagen de adorno horizontal, derecha" width={566} height={57} className="vertical-right"/>
                {/* <Button /> */}
            </div>
            <Image
            src={RightWing}
            alt="Imagen del ala derecho"
            width={400}
            height={100}
            className="flex-none absolute -right-20 z-10 hidden lg:flex"
            />
        </section>
    )
}