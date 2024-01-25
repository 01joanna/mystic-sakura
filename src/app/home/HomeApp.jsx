"use client";
import CardList from "@/app/components/cardList/CardList";
import Kero from "@/app/components/animation/kero/Kero";
import PlaceholderCardGroup from "@/app/components/placeholderCardGroup/PlaceholderCradGroup";
import ModalInfo from "@/app/components/modalInfo/ModalInfo";
import Button from "@/app/components/button/Button";
import { SakuraContext } from "@/app/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Header from "@/app/components/header/Header";
import styles from "@/app/home/styles.module.css";
import clsx from "clsx";

export default function HomeApp() {
  const {
    isAllCardsRevealed,
    isOpenModal,
    handleCloseModal,
    selectedItems,
    setSelectedItems,
    selectedItemsLength,
  } = useContext(SakuraContext);

  useEffect(() => {
    setSelectedItems([]);
  }, []);

  const router = useRouter();
  return (
    <>
      <Header />
      <Kero />
      <PlaceholderCardGroup />
      <CardList />
      <div
        className={clsx(
          !(selectedItemsLength === 3) && styles.btnReading,
          "flex justify-center mt-[8rem] mb-[6rem] lg:mt-[11rem] lg:mb-[8rem] min-[1400px]:mt-[0]  min-[1600px]:mt-[2rem]"
        )}
      >
        <Button
          disabled={!(selectedItemsLength === 3)}
          onClick={() => {
            router.push("/reading");
          }}
          text={"Lectura"}
          sourceIcon={"/assets/images/btn-icon-pink.svg"}
          data-testid={"btnReading"}
        />
      </div>
      <div className={styles.modalHome}>
        <ModalInfo
          isOpen={isOpenModal}
          onClose={handleCloseModal}
          className={styles.modalIncorrect}
        >
          <div className="w-full flex justify-center items-center mt-4">
            <Image
              width={50}
              height={50}
              src={"/assets/images/bg-images/alert.png"}
              className={"min-[1400px]:w-[8rem]"}
            />
            <p> "Solo puedes elegir hasta tres cartas."</p>
          </div>
        </ModalInfo>
      </div>
    </>
  );
}
