"use client";
import Kero from "@/app/components/animation/kero/Kero";
import Button from "@/app/components/button/Button";
import { SakuraContext } from "@/app/context";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import CardPrediction from "@/app/components/cardPredition/CardPredition";
import Header from "@/app/components/header/Header";
import styles from "@/app/reading/styles.module.css";
import Image from "next/image";
import clsx from "clsx";
import ModalDescription from "../components/modal/ModalDescription";

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

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    console.log("click");
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <Kero />
      {selectedItems.length > 0 ? (
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
      ) : (
        <section className="h-[50vh] w-[80%] mx-auto mt-[8rem] flex flex-col justify-center items-center gap-[2rem] min-[1400px]:mt-[2rem] min-[1400px]:mb-[6rem]">
          <Image
            className="rounded-md min-[1400px]:w-[200px] min-[1400px]:h-[250px]"
            width={150}
            height={404}
            alt={"kero personaje sakura"}
            src={"/assets/images/bara.gif"}
          />
          <p className="text-yellowColor text-[12px] md:text-[1.2rem] lg:text-[2rem] lg:pt-[0.5rem] text-center font-jost pt-0.5 tracking-[.07rem] min-[1400px]:text-[2rem] min-[1600px]:text-[2.5rem] ">
            "¡Oops! Parece que olvidaste elegir tus cartas. vuelve a tirar y
            descubre el misterio que revelarán tus elecciones mágicas. ¡Tu
            destino aguarda!"
          </p>
        </section>
      )}

      <div
        className={clsx(
          "flex justify-center gap-10 py-14 w-[60%] min-[400px]:w-[50%] sm:w-[40%] sm:gap-[5rem] sm:my-[4rem] mx-auto lg:w-full flex-col lg:flex-row rounded-lg min-[1400px]:mt-[0] min-[1400px]:pt-[0rem] min-[1400px]:gap-[10rem]"
        )}
      >
        <Button
          onClick={handleOpenModal}
          text={"VER SIGNIFICADO"}
          sourceIcon={"/assets/images/btn-icon-pink.svg"}
          className={clsx(
            selectedItems.length > 0 ? "block" : "hidden",
            "!text-[1.4rem] !pr-[5rem] !pl-[3rem] !flex-basis-[50%] sm:!text-[1.8rem] md:!text-[2.5rem] min-[1400px]:!pr-[6rem]"
          )}
        />
        <ModalDescription
          isOpen={modalOpen}
          onClose={handleCloseModal}
          pastCardPrediction={pastCardPrediction}
          presentCardPrediction={presentCardPrediction}
          futureCardPrediction={futureCardPrediction}
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
