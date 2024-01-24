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
      <div
        className={clsx(
          styles.keroInfo,
          "relative inline-block left-[82%]  xl:left-[86%] min-[1400px]:left-[84%] min-[1600px]:left-[87%]"
        )}
      >
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
            "cursor-pointer absolute bottom-[0] min-[600px]:top-[-2rem] md:left-[5rem] lg:top-[12.6rem] lg:left-[6.5rem] lg:z-[1] min-[1500px]:top-[15.3rem] min-[1500px]:left-[8rem]"
          }
        >
          <div className={clsx(styles.info)}></div>
        </button>
        <ModalInfo
          isOpen={modalOpen}
          onClose={handleCloseModal}
          className={styles.modalInfo}
        >
          <div className={clsx(styles.modalDesing, "")}>
            <Image
              width={500}
              height={35}
              src={"/assets/images/adorno-horizontal.svg"}
              alt="adorno"
              className={clsx("pt-[1rem] w-full")}
            />
            <div className="lg:pl-[4rem]">
              <h2 className="text-[2rem] text-[#FEA5F7]  text-center font-showcard  mb-[1rem] md:text-[2.2rem] lg:text-[3rem] lg:pt-[0.5rem] min-[1400px]:text-[2.5rem] ">
                Instrucciones Magicas
              </h2>
              <div className="lg:flex ">
                <ul className="px-[4rem] text-[1.1rem] min-[700px]:text-[1.4rem] lg:[mb-0] lg:text-[1.6rem] lg:px-[0]  font-jost pt-0.5 tracking-[.07rem] min-[1400px]:text-[1.5rem] ">
                  <li className="flex items-center gap-[1rem] mb-[1rem] lg:gap-[2rem] lg:mb-[0]">
                    <Image
                      width={13}
                      height={18}
                      src={"/assets/images/petalo-icon.svg"}
                      alt="petalo sakura"
                      className={clsx(
                        "rotate-45 lg:w-[21.19px] lg:h-[29.72px]"
                      )}
                    />
                    <p>
                      1. Al inicio, tres cartas se presentan en la pantalla.
                    </p>
                  </li>
                  <li className="flex items-center gap-[1rem]  mb-[1rem] lg:gap-[2rem] lg:mb-[0]">
                    <Image
                      width={13}
                      height={18}
                      src={"/assets/images/petalo-icon.svg"}
                      alt="petalo sakura"
                      className={clsx(
                        "rotate-45 lg:w-[21.19px] lg:h-[29.72px]"
                      )}
                    />
                    <p>
                      2. Arrastra y suelta tres cartas a los espacios "Pasado",
                      "Presente" y "Futuro".
                    </p>
                  </li>
                  <li className="flex items-center gap-[1rem]  mb-[1rem] lg:gap-[2rem] lg:mb-[0]">
                    {" "}
                    <Image
                      width={13}
                      height={18}
                      src={"/assets/images/petalo-icon.svg"}
                      alt="petalo sakura"
                      className={clsx(
                        "rotate-45 lg:w-[21.19px] lg:h-[29.72px]"
                      )}
                    />
                    <p> 3. Después aparecera el botón "Lectura"</p>
                  </li>
                  <li className="flex items-center gap-[1rem]  mb-[1rem] lg:gap-[2rem] lg:mb-[0]">
                    <Image
                      width={13}
                      height={18}
                      src={"/assets/images/petalo-icon.svg"}
                      alt="petalo sakura"
                      className={clsx(
                        "rotate-45 lg:w-[21.19px] lg:h-[29.72px]"
                      )}
                    />
                    <p>4. Puedes dar click en el boton "ver significado".</p>
                  </li>
                  <li className="flex items-center gap-[1rem]  mb-[1rem] lg:gap-[2rem] lg:mb-[0]">
                    <Image
                      width={13}
                      height={18}
                      src={"/assets/images/petalo-icon.svg"}
                      alt="petalo sakura"
                      className={clsx(
                        "rotate-45 lg:w-[21.19px] lg:h-[29.72px]"
                      )}
                    />
                    <p>5. Botón "X" cierra la ventana de significado.</p>
                  </li>
                  <li className="flex items-center gap-[1rem]  mb-[1rem] lg:gap-[2rem] lg:mb-[0]">
                    <Image
                      width={13}
                      height={18}
                      src={"/assets/images/petalo-icon.svg"}
                      alt="petalo sakura"
                      className={clsx(
                        "rotate-45 lg:w-[21.19px] lg:h-[29.72px]"
                      )}
                    />
                    <p>
                      6. Puedes volver a la página de inicio desde el botón
                      "Volver a Tirar"
                    </p>
                  </li>
                  <li className="flex items-center gap-[1rem]  mb-[1rem] lg:gap-[2rem] lg:mb-[0]">
                    <Image
                      width={13}
                      height={18}
                      src={"/assets/images/petalo-icon.svg"}
                      alt="petalo sakura"
                      className={clsx(
                        "rotate-45 lg:w-[21.19px] lg:h-[29.72px]"
                      )}
                    />
                    <p>
                      7. Siempre puedes volver a estas instrucciones desde el
                      boton "i".
                    </p>
                  </li>
                </ul>
                <div className={"hidden lg:block lg:"}>
                  <Image
                    width={250}
                    height={350}
                    src={"/assets/images/cartas-info.svg"}
                    alt="cartas sakura"
                    className={clsx("ml-[4rem] pt-[2rem]")}
                  />
                </div>
              </div>
            </div>

            <Image
              width={500}
              height={35}
              src={"/assets/images/adorno-horizontal.svg"}
              alt="adorno"
              className={clsx("pb-[1rem] w-full")}
            />
          </div>
        </ModalInfo>
      </div>
    </>
  );
}
