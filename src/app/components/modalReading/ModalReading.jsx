import Image from "next/image";



export default function ModalReading({ reverse, cardData }) {
    const containerStyle = reverse ? "flex-row-reverse lg:ml-4 lg:-mr-4" : "flex-row";

    return (
        <div className={`flex w-[28rem] lg:w-[41.4rem] lg:h-[23rem] lg:mx-4`}>
            <section className={`${containerStyle} flex flex-row lg:w-full lg:justify-between gap-4 lg:gap-8`}>
                <figure className=" flex lg:justify-center lg:w-1/3">
                    <Image
                        src={cardData.sakuraCard}
                        alt={`Imagen de la carta ${cardData.spanishName}`}
                        width={76}
                        height={184}
                        objectFit="cover"
                        className=" lg:w-[10rem]"
                    />
                </figure>
                <aside className="flex flex-col justify-center lg:gap-8 lg:w-2/3">
                    <h3 className=" text-yellowColor lg:text-purpleColor text-center text-base font-showcard lg:text-5xl">
                        {cardData.spanishName}
                    </h3>
                    <p className="text-pureWhite text-sm text-justify  font-jost w-[18.4rem] border-2 lg:w-full  lg:text-3xl">
                        {cardData.meaning}
                    </p>
                </aside>
            </section>
        </div>
    )
}