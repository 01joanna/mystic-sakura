import Image from "next/image";
import '../modal/styles.css'


export default function ModalReading({reverse}) {

    const containerStyle = reverse ? "flex-row-reverse" : "flex-row";

    return (
        <div className={`flex
        w-[20rem] h-[14rem] lg:w-[41.4rem] lg:h-[23rem]`}> {isAllCardsRevealed.map((card) => {
            return (
                <section className={`${containerStyle} flex flex-row relative z-0`}>
            <figure>
                <Image
                src={card.sakuraCard}
                alt={`Imagen de la carta ${card.spanishName}`}
                width={86}
                height={223}
                objectFit="cover"
                className="p-3 lg:w-[140px]"
                />
        </figure>
            <aside className="flex flex-col items-center justify-center">
                <h3 className=" text-yellowColor lg:text-purpleColor text-justify text-base font-showcard lg:text-5xl">{card.spanishName}</h3>
                <p className="text-pureWhite text-sm text-justify m-6 font-jost lg:text-3xl">{card.meaning}</p>
            </aside>
        </section>
            )
        })
    }

        </div>
    )
}