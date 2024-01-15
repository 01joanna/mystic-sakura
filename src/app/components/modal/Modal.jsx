import Image from "next/image"
import './modal.css'
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
            className="flex-none absolute -left-20 z-10"
            />
            <div className="bg-purpleDark h-[35.6rem] w-[53rem] items-center justify-center">
                <Image src={ModalHorizontal} alt="Imagen de adorno horizontal, arriba" width={846} height={58} className="horizontal-top" />
                <Image src={ModalHorizontal} alt="Imagen de adorno horizontal, abajo" width={846} height={58} className="horizontal-bottom"/>
                <Image src={ModalVertical} alt="Imagen de adorno horizontal, izquierda" width={566} height={57} className="vertical-left"/>
                <Image src={ModalVertical} alt="Imagen de adorno horizontal, derecha" width={566} height={57} className="vertical-right"/>
                <section className="content-container">
                    <ModalContent />
                    <ModalContent />
                    <ModalContent />
                </section>
                {/* <Button /> */}
            </div>
            <Image
            src={RightWing}
            alt="Imagen del ala derecho"
            width={400}
            height={100}
            className="flex-none absolute -right-20 z-10"
            />
        </section>
    )
}