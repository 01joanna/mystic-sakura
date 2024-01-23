import Image from "next/image";
export default function CardPrediction({cardData}){
    //   const [card, setCard] = useState(null);
    console.log(cardData)
    return(
        <div key={cardData.id}>
            <h2 className="text-yellowColor text-[1.4rem] md:text-[2.2rem] lg:pt-[0.5rem] text-center font-showcard  min-[1400px]:text-[2.5rem]">{cardData.predictionTime}</h2>
            <h3 className="text-yellowColor text-[1rem] md:text-[2rem] lg:pt-[0.5rem] text-center font-showcard  min-[1400px]:text-[2.5rem]">{cardData.spanishName}</h3>
            <Image
            className="rounded-md"
            width={200}
            height={150}
            alt={cardData.englishName}
            src={cardData.sakuraCard}
            />
        </div>
        
    )
}