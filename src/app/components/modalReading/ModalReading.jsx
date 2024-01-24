import clsx from "clsx";
import Image from "next/image";
import styles from "./styles.module.css";
export default function ModalReading({ reverse, cardData }) {
  const containerStyle = reverse
    ? "flex-row-reverse lg:ml-4 lg:-mr-4"
    : "flex-row";

  return (
    <div
      className={clsx(
        "flex justify-center items-center w-full lg:w-[90%] lg:mx-4"
      )}
    >
      <section
        className={`${containerStyle} flex flex-row lg:w-full lg:justify-between gap-[2rem] lg:gap-[0] lg:h-[24rem] min-[1400px]:h-[25rem] min-[1400px]:gap-[3rem] min-[1600px]:h-[30rem]`}
      >
        <figure
          className={clsx(
            styles.containerCardSakura,
            " flex w-1/3 lg:justify-center lg:w-1/3 lg:mx-[2rem]"
          )}
        >
          <Image
            src={cardData?.sakuraCard}
            alt={`Imagen de la carta ${cardData?.spanishName}`}
            width={110}
            height={252}
            objectFit="cover"
            className=" lg:w-[12rem] lg:h-full rounded-[0.2rem] z-10"
          />
        </figure>
        <aside className="flex flex-col justify-center lg:gap-4 lg:w-2/3">
          <h3 className=" text-yellowColor text-[1.5rem]  tracking-[.07rem] mb-[1rem] font-showcard lg:text-[2.5rem] min-[1400px]:text-[3.5rem]">
            {cardData?.spanishName}
          </h3>
          <p className="text-pureWhite text-[1.1rem] font-jost w-[12rem] lg:w-full  lg:text-[1.7rem] min-[1400px]:text-[2rem]">
            {cardData?.meaning}
          </p>
        </aside>
      </section>
    </div>
  );
}
