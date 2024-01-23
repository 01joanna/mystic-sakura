import Image from "next/image";
import styles from "./styles.module.css";
import clsx from "clsx";
export default function CardPrediction({ cardData }) {
  //   const [card, setCard] = useState(null);
  return (
    <>
      {cardData && (
        <div key={cardData.id} className={clsx(styles.containerCardFront)}>
          <h2 className="text-yellowColor text-[1.5rem] mb-[0.8rem] md:text-[2.2rem] lg:pt-[0.5rem] text-center font-jost min-[1400px]:text-[2.5rem] min-[1400px]:mb-[0]">
            {cardData.predictionTime}
          </h2>
          <h3 className="text-yellowColor text-[2rem] pb-4 md:text-[2rem] lg:pt-[0.5rem] text-center font-showcard min-[1400px]:text-[2.5rem]">
            {cardData.spanishName}
          </h3>
          <div className={styles.cardSakura}>
            <Image
              className="rounded-md min-[1400px]:w-[151px] min-[1400px]:h-[340px] min-[1600px]:w-[189px] min-[1600px]:h-[426px]"
              width={179}
              height={404}
              alt={cardData.englishName}
              src={cardData.sakuraCard}
            />
          </div>
        </div>
      )}
    </>
  );
}
