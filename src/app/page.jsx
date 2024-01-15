import Card from "./components/card/Card";
import CardList from "./components/cardList/CardList";

export default function Home() {
  const sampleCard = {
    id: "1",
    sakuraCard: "url-de-la-imagen",
    englishName: "The Windy",
    meaning: "Significado de la carta"
};

  return (
    <div className="container mx-auto p-4">
            <div className="my-4">
                <Card card={sampleCard} />
            </div>
            <CardList />
        </div>
  )
}
