import Image from "next/image"
import LeftWing from "../../../../public/assets/img/modal-images/wings-left.png"
import RightWing from "../../../../public/assets/img/modal-images/wings-right.png"
import SaltoSakura from "../../../../public/assets/img/Salto-Sakura.jpg"
// import ModalVertical from "../../../../public/assets/img/modal-images/odal-vertical.png"
// import ModalHorizontal from "../../../../public/assets/img/modal-images/modal-horizontal.png"

export default function Modal() {
    return (
        <section className="flex flex-row">
            <Image 
            src={LeftWing}
            alt="Imagen del ala izquierdo"
            width={190}
            height={50}
            className="flex"
            />
            <div className="bg-purple-950 h-auto w-[35rem] flex flex-row p-4">

                <Image
                src={SaltoSakura}
                alt="Imagen de la carta correspondiente"
                width={170}
                height={40}
                className="p-6"
                />
                <div>

                    <h1 className="text-fuchsia-600 text-center text-2xl mt-4">Card name</h1>
                    <p className="text-slate-50 text-justify m-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra lobortis lorem, sit amet efficitur justo tempor non. In hac habitasse platea dictumst. Morbi pellentesque erat neque, at hendrerit lacus hendrerit porta. Curabitur ornare fringilla quam, nec tristique lectus pharetra vel. Sed finibus arcu quis enim accumsan hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                {/* <Button /> */}
            </div>
            <Image 
            src={RightWing}
            alt="Imagen del ala derecho"
            width={190}
            height={100}
            className="flex-none"
            />
        </section>
    )
}