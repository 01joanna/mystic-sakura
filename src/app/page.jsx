import Card from "./components/card/Card";
import CardList from "./components/cardList/CardList";
import Button from "./components/button/Button";
import Image from "next/image";
import CardList from "@/app/components/cardList";

export default function Home() {
  const sampleCard = {
    id: "1",
    sakuraCard: "url-de-la-imagen",
    englishName: "The Windy",
    meaning: "Significado de la carta",
  };

  return (
    <>
      <div
        className="flex gap-6 pt-5" /*style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}*/
      >
        <Image
          width={250}
          height={300}
          src={"/assets/images/logo.png"}
          alt="kero"
          style={{
            top: "100px",
            marginLeft: "5%",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        />
        {/* <Image
          width={150}
          height={50}
          src={"/assets/images/kero-sakura.png"}
          alt="kero"
          style={{
            bottom: "100px",
            marginLeft: "40%",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        /> */}
      </div>
      <CardList />
    </>
  );
}
