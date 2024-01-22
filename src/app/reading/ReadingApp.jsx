"use client";
import Kero from "@/app/components/animation/kero/Kero";
import Button from "@/app/components/button/Button";
import { SakuraContext } from "@/app/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import CardPrediction from "@/app/components/cardPredition/CardPredition";
import Header from "@/app/components/header/Header";
import styles from "@/app/reading/styles.module.css";
import clsx from "clsx";

export default function ReadingApp() {
  const {
    selectedItems,
  } = useContext(SakuraContext);

  const pastCardPrediction = selectedItems.find(
    (card)=> card.predictionTime === "pasado"
  );
  const presentCardPrediction = selectedItems.find(
    (card)=> card.predictionTime === "present"
  )
  const futureCardPrediction = selectedItems.find(
    (card)=> card.predictionTime === "futuro"
  );

  const router = useRouter();

  return (
    <>
      <Header />
      <Kero />
      <div className={clsx("cartas_style", styles["reading-page"])}>     
       <CardPrediction cardData={pastCardPrediction} />
       <CardPrediction cardData={presentCardPrediction} />
       <CardPrediction cardData={futureCardPrediction} />
    </div>
    <div className={clsx(
          "flex justify-center px-[8rem] mt-[8rem] mb-[6rem] lg:mt-[11rem] lg:mb-[8rem] min-[1400px]:gap-[8.15rem]   min-[1400px]:mt-[19rem]  min-[1400px]:m-b[4rem] min-[1600px]:mt-[4rem]"
        )}>

        <Button
          onClick={() => {
            router.push("/src/app/components/modalInfo");
          }}
          text={"VER SIGNIFICADO"}
          sourceIcon={"/assets/images/btn-icon-pink.svg"}
        />

        <Button
          onClick={() => {
            router.push("/home");
          }}
          text={"VOLVER A TIRAR"}
          sourceIcon={"/assets/images/btn-icon-pink.svg"}
        />
      </div>
    </>
  );
}





