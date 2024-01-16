"use client";
import CardList from "@/app/components/cardList";
import Kero from "@/app/components/animation/kero";
import Star from "@/app/components/animation/star";
import PlaceholderCardGroup from "@/app/components/placeholderCardGroup";
import Button from "@/app/components/button/Button";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { SakuraContext } from "@/app/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/header";
export default function HomeApp() {
  const { isAllCardsRevealed } = useContext(SakuraContext);
  const router = useRouter();

  return (
    <>
      <Star />
      <Header />
      <Kero />
      <DndProvider backend={HTML5Backend}>
        <PlaceholderCardGroup />
        <CardList />
      </DndProvider>
      <div className="flex justify-center mt-[8rem] mb-[6rem] lg:mt-[11rem] lg:mb-[8rem] min-[1400px]:mt-[6rem]  min-[1400px]:m-b[4rem] min-[1600px]:mt-[4rem]">
        <Button
          disabled={isAllCardsRevealed}
          onClick={() => {
            router.push("/reading");
          }}
          text={"Lectura"}
          sourceIcon={"/assets/images/btn-icon-pink.svg"}
        />
      </div>
    </>
  );
}
