"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/app/components/cardList/styles.module.css";
import Card from "@/app/components/card/Card";
import clsx from "clsx";
import Image from "next/image";
import fetchTarotCards from "@/app/services/tarotService";

export default function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTarotCards();
      setCards(data);
    };

    fetchData();
  }, []);

  const firstGroupCard = cards.slice(0, 27);
  const secondGropuCard = cards.slice(27, cards.length - 1);

  return (
    <section
      className={clsx(
        styles.sectionCards,
        "flex flex-col justify-center items-center xl:h-[45rem]"
      )}
    >
      <div className={clsx(styles.cardContainer, "w-[90%]")}>
        <div className={clsx(styles.cardGroupOne, "flex relative")}>
          {firstGroupCard.map((card) => {
            const reverseCardUrl = card.cardsReverse.sakuraReverse;

            return (
              <Card
                name={card}
                key={card.id}
                url={reverseCardUrl}
                id={card.id}
              />
            );
          })}
        </div>
        <div className={clsx(styles.cardGrouptwo, "flex relative z-1")}>
          {secondGropuCard.map((card) => {
            const reverseCardUrl = card.cardsReverse.sakuraReverse;
            return (
              <Card
                name={card}
                key={card.id}
                url={reverseCardUrl}
                id={card.id}
              />
            );
          })}
        </div>
      </div>
      <Image
        width={200}
        height={300}
        alt="icon scroll"
        src={"/assets/images/arrows.svg"}
        className={styles.scrollVector}
      />
    </section>
  );
}
