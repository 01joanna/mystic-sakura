import Image from "next/image"
import LeftWing from "../../../../public/assets/img/wings-left.png"
import RightWing from "../../../../public/assets/img/wings-right.png"
import SaltoSakura from "../../../../public/assets/img/Salto-Sakura.jpg"
import ModalVertical from "../../../../public/assets/img/modal-vertical.png"
import ModalHorizontal from "../../../../public/assets/img/adorno-horizontal.png"
import CloseIcon from '../../../../public/assets/img/xmark-solid.svg'

export default function Modal() {
    return (
        <section className="relative flex flex-row items-center justify-center p">
            <Image 
            src={LeftWing}
            alt="Imagen del ala izquierdo"
            width={400}
            height={266}
            className="flex-none absolute -left-20 z-10"
            />
            <div className="bg-purple-950 h-[35.6rem] w-[53rem] flex flex-row relative">            
            <div>
                <Image src={ModalHorizontal} alt="Imagen de adorno horizontal, arriba" width={846} height={58} className="absolute top-0 left-1/2 transform -translate-x-1/2" />
                <Image src={ModalHorizontal} alt="Imagen de adorno horizontal, abajo" width={846} height={58} className="absolute bottom-0 left-1/2 transform -translate-x-1/2"/>
                {/* <Image src={ModalVertical} alt="Imagen de adorno horizontal, izquierda" width={582} height={10} className="absolute inset-y-0 right-full rotate-90"/> */}
                {/* <Image src={ModalVertical} alt="Imagen de adorno horizontal, derecha" width={582} height={30} className="absolute inset-y-0 left-0 rotate-90"/> */}
            </div>
                <span>{/* Imagen de prueba para visualización  */}
                    <Image
                    src={SaltoSakura}
                    alt="Imagen de la carta correspondiente"
                    width={700}
                    height={340}
                    className="p-6 mt-10"
                    />
                </span>
                <div className="relative z-0">
                    <h3 className="text-fuchsia-600 text-center text-2xl mt-20 ">Card name</h3>
                    <p className="text-slate-50 text-justify m-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra lobortis lorem, sit amet efficitur justo tempor non. In hac habitasse platea dictumst. Morbi pellentesque erat neque, at hendrerit lacus hendrerit porta. Curabitur ornare fringilla quam, nec tristique lectus pharetra vel. Sed finibus arcu quis enim accumsan hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
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