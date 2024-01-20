"use client";
import Kero from "@/app/components/animation/kero/Kero";
import Star from "@/app/components/animation/star/Star";
import PlaceholderCardGroup from "@/app/components/placeholderCardGroup/PlaceholderCradGroup";
import ModalInfo from "@/app/components/modalInfo/ModalInfo";
import Button from "@/app/components/button/Button";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { SakuraContext } from "@/app/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/header/Header";
import styles from "@/app/reading/styles.module.css";
import clsx from "clsx";

export default function ReadingApp() {
  const {
    isAllCardsRevealed,
    isOpenModal,
    handleCloseModal,
    selectedItemsLength,
  } = useContext(SakuraContext);
  const router = useRouter();
  return (
    <>
      <Star />
      <Header />
      <Kero />
      <DndProvider backend={HTML5Backend}>
        <PlaceholderCardGroup />
      </DndProvider>
      <div
        className={clsx(
          !(selectedItemsLength === 3) && styles.btnReading,
          "flex justify-center mt-[8rem] mb-[6rem] lg:mt-[11rem] lg:mb-[8rem] min-[1400px]:mt-[19rem]  min-[1400px]:m-b[4rem] min-[1600px]:mt-[4rem]"
        )}
      >
        <Button
          disabled={!(selectedItemsLength === 3)}
          onClick={() => {
            router.push("/src/app/components/modalInfo");
          }}
          text={"VER SIGNIFICADO"}
          sourceIcon={"/assets/images/btn-icon-pink.svg"}
        />

        <Button
          disabled={!(selectedItemsLength === 3)}
          onClick={() => {
            router.push("/src/app/components/modalInfo");
          }}
          text={"VOLVER A TIRAR"}
          sourceIcon={"/assets/images/btn-icon-pink.svg"}
        />

      </div>
    </>
  );
}





