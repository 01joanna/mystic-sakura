"use client";
import Image from "next/image";
import styles from "@/app/components/placeholderCard/styles.module.css";
import { useDrop } from "react-dnd";
import { SakuraContext } from "@/app/context";
import { useContext, useState } from "react";
import clsx from "clsx";

export default function PlaceholderCard({
  predictionTime,
  time,
  background,
  showReveledBtn,
}) {
  const [currentCard, setCurrentCard] = useState(null);
  const [isDropEnabled, setIsDropEnable] = useState(true);
  // estado para revelar
  const [reveal, setReveal] = useState(false);
  // llamamamos al contexto:
  const {
    setSelectedItems,
    selectedItemsLength,
    filterSelectedItems,
    setCount,
  } = useContext(SakuraContext);

  const isDroppable = !currentCard;

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: "card",
      drop: (item, monitor) => {
        const currentCard = { ...item.name, predictionTime };
        setCurrentCard(currentCard);
        document.getElementById(currentCard.id).style.visibility = "hidden";
        setIsDropEnable(false);
        setSelectedItems((prevItems) => [...prevItems, currentCard]);
      },
      canDrop: () => isDroppable,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [isDropEnabled, selectedItemsLength, currentCard]
  );

  // function para manejar el revelado y a la vez setear un contador
  // para poder ver o no el boton de lectura.
  const handleReveal = () => {
    setReveal(true);
    setCount((prevCount) => prevCount + 1);
  };

  const handleEdit = () => {
    const id = currentCard?.id;
    console.log(id);
    document.getElementById(id).style.visibility = "visible";
    filterSelectedItems(id);
    setIsDropEnable(true);
    setCurrentCard(null);
  };

  // para cuando estas encima del drop y no has soltado.
  const isActive = canDrop && isOver;

  const renderRevealText = currentCard?.cardsReverse && !reveal;
  const renderImageCard = reveal
    ? currentCard?.sakuraCard
    : currentCard?.cardsReverse?.sakuraReverse;
  // const renderAnimationRevel = reveal ? styles.animationRevel : null;

  const backgroundClass = currentCard
    ? styles[`bgAnimation${time}`]
    : background;

  return (
    <div className="text-center">
      <p
        className={clsx(
          currentCard ? "block" : "hidden",
          "text-yellowColor text-center font-showcard text-[1.4rem] tracking-[.07rem] mb-10 w-[10rem] md:w-[18rem] md:text-[1.7rem] xl:w-[15rem] xl:text-[1.5rem] 2xl:w-[18rem] 2xl:text-[2rem]"
        )}
      >
        {renderRevealText
          ? "Carta encapsulada"
          : `${currentCard?.spanishName || ""} ${currentCard?.kanji || ""}`}
      </p>
      <article
        ref={drop}
        className={clsx(
          styles.placeholder,
          canDrop ? styles.dragAnimation : background,
          isOver ? styles.inAnimation : background,
          currentCard ? "0" : "px-1.5",
          currentCard ? "0" : "py-2",
          currentCard ? "bg-cover" : background,
          reveal ? styles.animationRevel : "",
          backgroundClass,
          "w-[94px] rounded-lg m-1 lg:w-[151px] h-[209px] md:w-[150px] md:h-[340px] lg:h-[341px]",
          "min-[1400px]:w-[160px] min-[1400px]:h-[360px]",
          currentCard ? "min-[1400px]:p-[0rem]" : "min-[1400px]:p-[0.8rem]"
        )}
        style={{
          backgroundImage: currentCard ? `url(${renderImageCard})` : "none",
        }}
      >
        {renderRevealText && showReveledBtn && (
          <button
            className={clsx(
              styles.btnRevelar,
              "bg- p-4 font-showcard tracking-[0.1rem] text-[1.4rem] lg:text-[1.8rem]"
            )}
            name="reveal"
            onClick={handleReveal}
          >
            REVELAR
          </button>
        )}
        {renderRevealText && (
          <button
            type="button"
            onClick={handleEdit}
            className={clsx(
              styles.btnCambiar,
              " relative bg- p-4 font-showcard tracking-[0.2rem] text-[1.4rem] lg:text-[1.8rem]"
            )}
            name="delete"
          >
            <div className={clsx(styles.iconTriangle, "hidden lg:block")}>
              <Image
                src={"/assets/images/triangle.png"}
                alt="triangulo magic"
                width={25}
                height={25}
                className={clsx(styles.triangle)}
              />
            </div>
            CAMBIAR
          </button>
        )}
        {!currentCard && (
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
              className={clsx(
                styles.placeholderAnimation,
                "pb-4 md:w-[100px] lg:w-[120px] min-[1400px]:w-[130px]"
              )}
            />
            <p className="text-yellowColor text-[12px] md:text-[1.2rem] lg:text-[1.5rem] lg:pt-[0.5rem] text-center font-jost w-3/4 pt-0.5 tracking-[.07rem] min-[1400px]:text-[1.5rem] ">
              Elige una carta
            </p>
            <h3 className="text-yellowColor text-[1.4rem] md:text-[2.2rem] lg:pt-[0.5rem] text-center font-showcard  min-[1400px]:text-[2.5rem] ">
              {time}
            </h3>
          </div>
        )}
      </article>
    </div>
  );
}
