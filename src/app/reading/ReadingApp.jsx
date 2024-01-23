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
    (card)=> card.predictionTime === "Pasado"
  );
  const presentCardPrediction = selectedItems.find(
    (card)=> card.predictionTime === "Presente"
  )
  const futureCardPrediction = selectedItems.find(
    (card)=> card.predictionTime === "Futuro"
  );

  const router = useRouter();

  return (
    <>
      <Header />
      <Kero />
      <div className="flex flex-col justify-center  lg:-mt-12  items-center">
        <div className={clsx(
        "flex justify-center lg:gap-28 lg:flex-row flex-col lg:pb-28 lg:gap-40 gap-10"
        )}>     
        <div className="flex flex-row gap-20 lg:gap-40">
          <CardPrediction cardData={pastCardPrediction} />
          <CardPrediction cardData={presentCardPrediction} />
        </div>
       <div className="flex justify-center"><CardPrediction cardData={futureCardPrediction} /></div>
      </div>
    </div>  

    <div className={clsx(
          "flex justify-center lg:gap-60 flex-col lg:flex-row gap-10 py-14 px-28 rounded-lg"
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





