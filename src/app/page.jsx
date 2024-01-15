import Button from "./components/button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-6 pt-5" /*style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}*/>
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
      <Button
        text="Ver significado"
        sourceIcon="/assets/images/btn-icon-blue.svg"
      />
      <Button
        text="Volver a tirar"
        sourceIcon="/assets/images/btn-icon-pink.svg"
      />
     <Image
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
      />
    </div>
  );
}


