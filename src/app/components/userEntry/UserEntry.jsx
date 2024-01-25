"use client";

import Image from "next/image";

function generateText(array) {
  const textoGenerado = array.map((objeto) => objeto.spanishName).join("/");
  return textoGenerado;
}

export default function UserEntry({
  readings,
  userData,
  handleDelete,
  handleOpenModal,
}) {
  console.log({ readings });
  return (
    <>
      {readings?.map((reading, index) => {
        return (
          <tr
            key={index}
            className="text-center h-[6rem] border-b-2 border-pink-800"
          >
            <td>
              <div className="flex justify-center">
                <Image
                  src={"/assets/images/kero-icon.svg"}
                  alt="Icono de Kero para plantilla de usuario"
                  width={15}
                  height={15}
                  className="lg:w-[3rem]"
                />
              </div>
            </td>
            <td className="w-[6rem] lg:w-[8rem]">{reading.day}</td>
            <td className="textwrap w-[6rem] pl-2 lg:w-[10rem] ">
              {userData.userName}
            </td>
            <td>
              <button className="" onClick={() => setIsOpenEdit(true)}>
                <Image
                  src={"/assets/images/user-icons/pencil-icon.svg"}
                  alt="Icono de editar para plantilla de usuario"
                  width={15}
                  height={15}
                  className="lg:w-[2.5rem]"
                />
              </button>
            </td>
            <td className="textwrap w-[5.6rem] pl-2 lg:w-[10rem] ">
              {generateText(reading.cards)}
            </td>
            <td>
              <button onClick={() => handleOpenModal(index)}>
                <Image
                  src={"/assets/images/user-icons/eye-icon.svg"}
                  alt="Icono de editar para plantilla de usuario"
                  width={15}
                  height={15}
                  className="lg:w-[2.5rem]"
                />
              </button>
            </td>
            <td>
              <button onClick={() => handleDelete(reading.id)}>
                <Image
                  src={"/assets/images/user-icons/trash-icon.svg"}
                  alt="Icono borrador para plantilla de usuario"
                  width={15}
                  height={15}
                  className="lg:w-[2.5rem]"
                />
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
