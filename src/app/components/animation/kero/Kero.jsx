"use client";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import styles from "@/app/components/animation/kero/styles.module.css";
import ModalInfo from "@/app/components/modalInfo/ModalInfo";
export default function Kero() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="relative inline-block left-[80%]  xl:left-[86%] min-[1400px]:left-[84%] min-[1600px]:left-[87%]">
        <div className={clsx(styles.kero, " hidden lg:block lg:w-[15rem] ")}>
          <Image
            width={65}
            height={50}
            src={"/assets/images/kero/ala.png"}
            alt="kero"
            className={clsx(
              styles.wing,
              "absolute right-[0.5rem] bottom-[7rem] min-[1500px]:bottom-[8rem] min-[1500px]:right-[1.4rem] "
            )}
          />
          <Image
            width={55}
            height={50}
            src={"/assets/images/kero/eye.png"}
            alt="kero"
            className={clsx(
              styles.eye,
              "absolute left-[1.8rem] top-[5rem] min-[1500px]:top-[6.2rem] min-[1500px]:left-[2.2rem]"
            )}
          />
        </div>
        <button
          onClick={handleOpenModal}
          className={
            "cursor-pointer absolute bottom-[0] min-[600px]:top-[-2rem] md:left-[5rem] lg:top-[12.6rem] lg:left-[6.5rem] lg:z-[1] min-[1500px]:top-[14.5rem] min-[1500px]:left-[8rem]"
          }
        >
          <div className={clsx(styles.info)}></div>
        </button>
        <ModalInfo isOpen={modalOpen} onClose={handleCloseModal}>
          <h2>Instrucciones Magicas</h2>
          <ul>
            <li>Al inicio, tres cartas se presentan en la pantalla.</li>
            <li>
              Arrastra y suelta tres cartas a los espacios "Pasado", "Presente"
              y "Futuro".
            </li>
            <li>Desencapsula tus cartas para ver tu suerte</li>
            <li>Después aparecera el botón "Lectura"</li>
            <li>Puedes dar click en el boton "ver significado"</li>
            <li>Botón "X" cierra la ventana de significado.</li>
            <li>
              Puedes volver a la página de inicio desde el botón "Volver a
              Tirar"
            </li>
            <li>
              Siempre puedes volver a estas instrucciones desde el boton "i".
            </li>
          </ul>
        </ModalInfo>
      </div>
    </>
  );
}
