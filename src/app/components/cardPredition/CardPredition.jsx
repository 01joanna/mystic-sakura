import Image from "next/image";
export default function CardPrediction({cardData}){
    //   const [card, setCard] = useState(null);
    console.log(cardData)
    return(
        <div key={cardData.id}>
            <h2>{cardData.predictionTime}</h2>
            <h3>{cardData.spanishName}</h3>
            <Image
            width={200}
            height={150}
            alt={cardData.englishName}
            src={cardData.sakuraCard}
            />
        </div>
        
    )
}