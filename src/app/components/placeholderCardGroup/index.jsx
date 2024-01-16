import React from "react";
import PlaceholderCard from "@/app/components/placeholderCard";

export default function PlaceholderCardGroup() {
  return (
    <section
      className={
        "mt-[9rem] mb-[4rem] flex flex-row gap-[2rem] items-center justify-center lg:mt-[0] lg:mb-[2rem] min-[1400px]:mt-[-6rem]  min-[1400px]:mb-[0] "
      }
    >
      <PlaceholderCard
        className={"past"}
        time={"PASADO"}
        isClickable={false}
        notChangeStyles={true}
        background={"bg-purpleDrak"}
      />
      <PlaceholderCard
        className={"present"}
        time={"PRESENTE"}
        background={"bg-blueDark"}
      />
      <PlaceholderCard
        className={"future"}
        time={"FUTURO"}
        background={"bg-blueLigth"}
      />
    </section>
  );
}
