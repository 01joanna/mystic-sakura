"use client";
import UserEntry from "../userEntry/UserEntry";
import ModalDescription from "@/app/components/modal/ModalDescription";
import Modal from "@/app/components/modalInfo/ModalInfo";
import { deleteReading } from "@/app/services/reading";
import { updateUser } from "@/app/services/login";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function UserEntries({ readings, userData }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [newUserName, setNewUserName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isUserNameUpdated, setIsUserNameUpdated] = useState(false);

  const handleOpenModal = (index) => {
    const cards = readings[index].cards;
    setModalData(cards);
    setIsOpen(true);
  };
  const handleDelete = async (index) => {
    console.log(index);
    const respuesta = await deleteReading(index);
    router.refresh();
  };

  const handleSubmitEdit = async (event) => {
    event.preventDefault();
    if (!newUserName.trim()) {
      setErrorMsg("escribe algoooo.!!!!!!!");
    }
    await updateUser(userData.id, { ...userData, userName: newUserName });
    setNewUserName("");
    setIsUserNameUpdated(true);
    router.refresh();
    setTimeout(() => {
      setIsUserNameUpdated(false);
      setIsOpenEdit(false);
    }, 2000);
  };
  return (
    <div className="w-[33rem] lg:w-[62rem]">
      <table className=" w-full table-auto border-collapse">
        <thead className="font-showcard text-xl lg:text-2xl text-yellowColor h-7 lg:h-9">
          <tr>
            <th>Fecha</th>
            <th colSpan="2">Usuario</th>
            <th colSpan="2" className="w-[8rem]">
              Lectura
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="font-jost text-sm lg:text-xl text-white divide-y divide-pink-800">
          <UserEntry
            readings={readings}
            userData={userData}
            handleOpenModal={handleOpenModal}
            handleDelete={handleDelete}
          />
        </tbody>
      </table>
      <Modal isOpen={isOpen}>
        {modalData.map((card) => (
          <div key={card.id}>
            <h4>{card.spanishName}</h4>
            <p>{card.meaning}</p>
          </div>
        ))}
      </Modal>

      <ModalDescription
        isOpen={isOpenEdit}
        onClose={() => setIsOpenEdit(false)}
      >
        {isUserNameUpdated ? (
          <p>Tu nombre se actualizo !!</p>
        ) : (
          <form onSubmit={handleSubmitEdit}>
            <label htmlFor="userName">Escribe tu nombre...</label>
            <input
              id="name"
              type="text"
              value={newUserName}
              onChange={(event) => setNewUserName(event.target.value)}
            />
            <button>Actualizar</button>
          </form>
        )}
      </ModalDescription>
    </div>
  );
}
