"use client";
import React from "react";
import PlaceholderCard from "@/app/components/placeholderCard/PlaceholderCard";

export default function PlaceholderCardGroup() {
  return (
    <section
      className={
        "mt-[5rem] mb-[4rem] flex flex-row gap-[6rem] items-center justify-center lg:mt-[0] lg:mb-[2rem] min-[1400px]:mt-[-7rem]  min-[1400px]:mb-[0] "
      }
    >
      <PlaceholderCard
        className={"past"}
        time={"PASADO"}
        background={"bg-purpleDrak"}
        predictionTime="Pasado"
        showReveledBtn={false}
      />
      <PlaceholderCard
        className={"present"}
        time={"PRESENTE"}
        background={"bg-blueDark"}
        predictionTime="Presente"
        showReveledBtn={false}
      />
      <PlaceholderCard
        className={"future"}
        time={"FUTURO"}
        background={"bg-blueLigth"}
        predictionTime="Futuro"
        showReveledBtn={false}
      />
    </section>
  );
}
