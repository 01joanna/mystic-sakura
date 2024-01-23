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
  const { selectedItems, setSelectedItems } = useContext(SakuraContext);

  const pastCardPrediction = selectedItems.find(
    (card) => card.predictionTime === "Pasado"
  );
  const presentCardPrediction = selectedItems.find(
    (card) => card.predictionTime === "Presente"
  );
  const futureCardPrediction = selectedItems.find(
    (card) => card.predictionTime === "Futuro"
  );

  const router = useRouter();

  return (
    <>
      <Header />
      <Kero />
      <div className="flex flex-col justify-center  lg:-mt-12  items-center mb-4rem">
        <div
          className={clsx(
            styles.cardContainerOnly,
            "flex justify-center items-center gap-10 mt-[6rem] w-[80%] mx-auto lg:gap-28 lg:flex-row flex-col lg:pb-28 min-[1400px]:mt-[0] min-[1600px]:mt-[8rem]"
          )}
        >
          <div className="flex flex-row gap-20 lg:gap-40">
            <CardPrediction cardData={pastCardPrediction} />
            <CardPrediction cardData={presentCardPrediction} />
          </div>
          <div className="flex justify-center gap-20 ">
            <CardPrediction cardData={futureCardPrediction} />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "flex justify-center gap-10 py-14 w-[60%] min-[400px]:w-[50%] sm:w-[40%] sm:gap-[5rem] sm:my-[4rem] mx-auto lg:w-full flex-col lg:flex-row rounded-lg min-[1400px]:mt-[0] min-[1400px]:pt-[0rem] min-[1400px]:gap-[10rem]"
        )}
      >
        <Button
          onClick={() => {
            router.push("/src/app/components/modalInfo");
          }}
          text={"VER SIGNIFICADO"}
          sourceIcon={"/assets/images/btn-icon-pink.svg"}
          className={
            "!text-[1.4rem] !pr-[5rem] !pl-[3rem] !flex-basis-[50%] sm:!text-[1.8rem] md:!text-[2.5rem] min-[1400px]:!pr-[6rem]"
          }
        />

        <Button
          onClick={() => {
            setSelectedItems([]);
            router.push("/home");
          }}
          text={"VOLVER A TIRAR"}
          sourceIcon={"/assets/images/btn-icon-pink.svg"}
          className={
            "!text-[1.4rem] !pr-[6rem] !pl-[3rem] !animate-none !flex-basis-[50%] sm:!text-[1.8rem] md:!text-[2.5rem]"
          }
        />
      </div>
    </>
  );
}
