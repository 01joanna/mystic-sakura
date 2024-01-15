import Image from "next/image";
import SaltoSakura from "../../../../public/assets/img/Salto-Sakura.jpg"

export default function ModalContent() {
    return (
        <section className="flex flex-row 
        m-20
        ">
            {/* Imagen de prueba para visualización  */}
        <section>
            <Image
            src={SaltoSakura}
            alt="Imagen de la carta correspondiente"
            // width={500}
            // height={341}
            objectFit="cover"
            className="p-6"
            style={{ width: '500px', height: '340px' }}
            />
        </section>
        <aside className="relative z-0 flex flex-col items-center justify-center">
            {/* cambiar el color del titulo cuando consiga saber el porque no recoge purplecolor */}
            <h3 className="text-yellowColor text-justify text-5xl font-showcard">El Salto</h3>
            <p className="text-pureWhite text-3xl text-justify m-6 font-jost">Representa la evasión de los problemas.</p>
        </aside>
        </section>
    )
}