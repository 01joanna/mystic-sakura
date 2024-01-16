"use client";
import Image from "next/image";
import CardList from "@/app/components/cardList";
import Kero from "@/app/components/animation/kero";
import Star from "@/app/components/animation/star";
import styles from "@/app/home/styles.module.css";
import PlaceholderCardGroup from "@/app/components/placeholderCardGroup";
import Button from "@/app/components/button/Button";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
export default function Home() {
  return (
    <main className={styles.sky}>
      <DndProvider backend={HTML5Backend}>
        <Star />
        <div className="flex pt-[6rem] px-[3rem] flex-col justify-center gap-8 md:flex-row md:justify-between md:items-center lg:justify-between lg:px-[4rem] lg:pt-[3rem]">
          <Image
            width={250}
            height={80}
            src={"/assets/images/logo.svg"}
            alt="logo mistic shakura"
            className=" mb-4 lg:w-[20rem] mx-auto lg:h-[7rem] min-[1400px]:w-[22rem] min-[1400px]:h-[8rem] md:mx-[unset]"
          />
          <button className="flex items-center gap-[2rem] min-[1400px]:pr-[4rem]  min-[1600px]:pr-[3rem]">
            <Image
              width={50}
              height={50}
              src={"/assets/images/icon-user.svg"}
              alt="icon usuario mistic shakura"
            />
            <p className="text-[1.8rem] text-[#dec9f3] font-showcard inline-block">
              Hola, Sakura
            </p>
          </button>
        </div>
        <Kero />

        <PlaceholderCardGroup />
        <CardList />
        <div className="flex justify-center mt-[8rem] mb-[6rem] lg:mt-[11rem] lg:mb-[8rem] min-[1400px]:mt-[6rem]  min-[1400px]:m-b[4rem] min-[1600px]:mt-[4rem]">
          <Button
            text={"Lectura"}
            behaviour={"Link"}
            href="/reading"
            sourceIcon={"/assets/images/btn-icon-pink.svg"}
          />
        </div>
      </DndProvider>
    </main>
  );
}
