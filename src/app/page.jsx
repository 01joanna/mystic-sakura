import Button from "./components/button/Button";

export default function Home() {
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
