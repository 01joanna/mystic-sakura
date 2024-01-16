"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/components/placeholderCard/styles.module.css";

export default function PlaceholderCard({
  time,
  background,
  isClickable = true,
  notChangeStyles,
}) {
  //   const [placeholderBgColor, changeBgColor] = useState(true);

  //   const activePlaceholder = () => {
  //     if (isClickable) {
  //       changeBgColor(!placeholderBgColor);
  //     }
  //   };

  return (
    <article
      className={`${styles.placeholder} ${background} w-[94px] px-1.5 py-2  rounded-lg m-1 lg:w-[151px] h-[209px] md:w-[150px] md:h-[340px] lg:h-[341px] min-[1400px]:w-[160px] min-[1400px]:h-[360px] min-[1400px]:p-[0.8rem] min-[1600px]:w-[180px] min-[1600px]:h-[409px] `}
    >
      <div
        className={
          "h-full flex justify-center border-2 border-violet-800  flex-col items-center p-[3px] rounded-[0.8rem] md:border-4"
        }
      >
        <Image
          src={"/assets/images/placeholder-image.svg"}
          alt="Círculo mágico de Sakura"
          width={69}
          height={72}
          className={"pb-4 md:w-[100px] lg:w-[120px] min-[1400px]:w-[130px]"}
        />
        <p className="text-yellowColor text-[12px] md:text-[1.2rem] lg:text-[1.5rem] lg:pt-[0.5rem] text-center font-jost w-3/4 pt-0.5 tracking-[.07rem] min-[1400px]:text-[1.5rem] ">
          Elige una carta
        </p>
        <h3 className="text-yellowColor text-[1.4rem] md:text-[2.2rem] lg:pt-[0.5rem] text-center font-showcard  min-[1400px]:text-[2.5rem] ">
          {time}
        </h3>
      </div>
    </article>
  );
}
