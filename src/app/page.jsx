import Card from "./components/card/Card";
import CardList from "./components/cardList/CardList";
import Button from "./components/button/Button";
import Image from "next/image";

export default function Home() {
  const sampleCard = {
    id: "1",
    sakuraCard: "url-de-la-imagen",
    englishName: "The Windy",
    meaning: "Significado de la carta",
  };

  return (
    <div className="flex gap-6 pt-5">
      <Button
        text="Ver significado"
        sourceIcon="/assets/images/btn-icon-blue.svg"
      />
      <Button
        text="Volver a tirar"
        sourceIcon="/assets/images/btn-icon-pink.svg"
      />
    </div>
  );
}
