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
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-yellowColor md:text-[2rem] pb-[2rem]">"Las cartas revelan un camino lleno de secretos. Tu futuro está escrito en símbolos mágicos."</h1>
      <div className={clsx(
        "flex lg:justify-center lg:items-center lg:gap-[8rem] h-[45rem] md:h-[5rem]"
        )}>     
        <CardPrediction cardData={pastCardPrediction} />
        <CardPrediction cardData={presentCardPrediction} />
        <CardPrediction cardData={futureCardPrediction} />
      </div>
    </div>  

    <div className={clsx(
          "flex justify-center flex-col md:flex-row mx-[8rem] my-[8rem] gap-[8rem]"
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





