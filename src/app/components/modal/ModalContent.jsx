import Image from "next/image";
import './styles.module.css'
import SaltoSakura from "../../../../public/assets/images/Salto-Sakura.jpg"

export default function ModalContent({reverse}) {
    const containerStyle = reverse ? "flex-row-reverse" : "flex-row";

    return (
        <section className={`flex ${containerStyle} 
        w-[20rem] h-[14rem] lg:w-[41.4rem] lg:h-[23rem]`}>
            {/* Imagen de prueba para visualización  */}
        <figure>
            <Image
            src={SaltoSakura}
            alt="Imagen de la carta correspondiente"
            width={180}
            height={223}
            objectFit="cover"
            className="p-3"
            // style={{ width: '500px', height: '340px' }}
            />
        </figure>
        <aside className="relative z-0 flex flex-col items-center justify-center">
            {/* cambiar el color del titulo cuando consiga saber el porque no recoge purplecolor */}
            <h3 className=" text-yellowColor lg:text-purpleColor text-justify text-base font-showcard lg:text-5xl">El Salto</h3>
            <p className="text-pureWhite text-sm text-justify m-6 font-jost lg:text-3xl">Representa la evasión de los problemas.</p>
        </aside>
        </section>
    )
}