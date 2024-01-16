"use client";
import { SakuraContext } from "@/app/context";
import Image from "next/image";
import { useContext } from "react";
export default function App() {
  const { selectedItems } = useContext(SakuraContext);

  const pastCardPrediction = selectedItems.find(
    (card) => card.predictionTime === "pasado"
  );
  const presentCardPrediction = selectedItems.find(
    (card) => card.predictionTime === "present"
  );
  const futureCardPrediction = selectedItems.find(
    (card) => card.predictionTime === "futuro"
  );

  console.log({
    pastCardPrediction,
    presentCardPrediction,
    futureCardPrediction,
  });
  return (
    <>
      <div className="flex gap-6">
        <CardPrediction cardData={pastCardPrediction} />
        <CardPrediction cardData={presentCardPrediction} />
        <CardPrediction cardData={futureCardPrediction} />
      </div>
      <a href="/" className="bg-white p-5">
        Ir a Home
      </a>
      <button className="bg-white p-5">Lectura</button>;
    </>
  );
}
// Mover este componente a un archivo
const CardPrediction = ({ cardData }) => {
  return (
    <div key={cardData.id}>
      <h2 className="text-white text-2xl">{cardData.predictionTime}</h2>
      <h3 className="text-white text-2xl">{cardData.spanishName}</h3>
      <Image
        width={200}
        height={150}
        alt={cardData.englishName}
        src={cardData.sakuraCard}
      />
    </div>
  );
};
