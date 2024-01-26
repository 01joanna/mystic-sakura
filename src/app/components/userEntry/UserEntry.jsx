"use client";

import Image from "next/image";

function generateText(array) {
  const textoGenerado = array.map((objeto) => objeto.spanishName).join("/");
  const segmentos = textoGenerado.split("/");
  return (
    <div className="w-[10rem] min-[500px]:w-[12rem]  whitespace-pre-wrap sm:inline">
      {segmentos.map((text, index) => (
        <span
          key={index}
          className={
            index === segmentos.length - 1
              ? "md:inline"
              : "block min-[500px]:inline"
          }
        >
          {index === segmentos.length - 1 ? text : `${text}/`}
        </span>
      ))}
    </div>
  );
}
export default function UserEntry({
  readings,
  userData,
  handleDelete,
  handleOpenModal,
  setIsOpenEdit,
  setNewUserName,
}) {
  return (
    <>
      {readings?.map((reading, index) => {
        return (
          <tr
            key={index}
            className="text-center h-[6rem] !border-b-1.8 !border-pink-800"
          >
            <td>
              <div className="flex justify-center">
                <Image
                  src={"/assets/images/kero-icon.svg"}
                  alt="Icono de Kero para plantilla de usuario"
                  width={20}
                  height={20}
                  className="min-[500px]:w-[4rem]"
                />
              </div>
            </td>
            <td className="text-[1.2rem] w-[6rem] min-[500px]:text-[1.6rem] lg:w-[8rem]">
              {reading.day}
            </td>
            <td className="leading-[2rem] text-[1.2rem] textwrap w-[6rem] pl-2 min-[500px]:text-[1.6rem] min-[700px]:pl-[3rem] min-[750px]:w-[12rem] lg:w-[10rem] ">
              {userData.userName}
            </td>
            <td>
              <button
                className=""
                onClick={() => {
                  setNewUserName("");
                  setIsOpenEdit(true);
                }}
              >
                <Image
                  src={"/assets/images/user-icons/pencil-icon.svg"}
                  alt="Icono de editar para plantilla de usuario"
                  width={15}
                  height={15}
                  className="min-[500px]:w-[2.5rem] min-[700px]:w-[3rem]"
                />
              </button>
            </td>
            <td className="leading-[2rem] text-[1.2rem] textwrap pl-2 min-[500px]:text-[1.6rem] min-[750px]:w-[6rem] lg:w-[10rem] ">
              {generateText(reading.cards)}
            </td>
            <td className="">
              <button
                onClick={() => handleOpenModal(index)}
                className="ml-[1rem]"
              >
                <Image
                  src={"/assets/images/user-icons/eye-icon.svg"}
                  alt="Icono de editar para plantilla de usuario"
                  width={20}
                  height={20}
                  className="min-[500px]:w-[2.5rem] min-[500px]:ml-[0.5rem] min-[700px]:w-[3rem]"
                />
              </button>
            </td>
            <td className="">
              <button onClick={() => handleDelete(reading.id)}>
                <Image
                  src={"/assets/images/user-icons/trash-icon.svg"}
                  alt="Icono borrador para plantilla de usuario"
                  width={20}
                  height={20}
                  className="min-[500px]:w-[2.5rem] min-[700px]:w-[3rem]"
                />
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
