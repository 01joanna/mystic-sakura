import Image from "next/image";
export default function CardPrediction({cardData}){
    
    console.log(cardData)
    return(
        <div key={cardData.id} className="flex flex-col justify-center items-center">
            <h2 className="text-yellowColor text-[1rem]  lg:pt-[0.5rem] text-center font-jost  min-[1400px]:text-[2.5rem]">{cardData.predictionTime}</h2>
            <h3 className="text-yellowColor text-[1rem] pb-6 lg:pt-[0.5rem] text-center font-showcard  min-[1400px]:text-[2.5rem]">{cardData.spanishName}</h3>
            <Image
            className="rounded-md lg:w-[151px] "
            width={86}
            height={194}
            alt={cardData.englishName}
            src={cardData.sakuraCard}
            />
        </div>
        
    )
}