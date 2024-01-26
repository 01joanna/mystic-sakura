"use client";
import UserEntry from "../userEntry/UserEntry";
import ModalDescription from "@/app/components/modal/ModalDescription";
import Modal from "@/app/components/modalInfo/ModalInfo";
import Button from "@/app/components/button/Button";
import { deleteReading } from "@/app/services/reading";
import { updateUser } from "@/app/services/login";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function UserEntries({ readings, userData }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isUserNameUpdated, setIsUserNameUpdated] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleDelete = async (index) => {
    const respuesta = await deleteReading(index);
    router.refresh();
  };

  const handleSubmitEdit = async (event) => {
    event.preventDefault();
    if (!newUserName.trim()) {
      setErrorMsg(true);
      return;
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
    <div
      className={clsx(
        styles.scrollbar,
        "w-full  lg:max-h-[25rem] min-[1400px]:max-h-[30rem] min-[1600px]:max-h-[40rem]"
      )}
    >
      <table className=" w-full table-auto border-collapse">
        <thead className="font-showcard text-xl lg:text-2xl text-yellowColor h-7 lg:h-9 min-[750px]:text-[2rem] ">
          <tr>
            <th></th>
            <th>Fecha</th>
            <th colSpan="2">Usuario</th>
            <th colSpan="2" className="w-[8rem]">
              Lectura
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody
          className={clsx(
            "font-jost text-sm lg:text-xl text-white divide-y divide-pink-800"
          )}
        >
          <UserEntry
            readings={readings}
            userData={userData}
            handleOpenModal={handleOpenModal}
            handleDelete={handleDelete}
            setIsOpenEdit={setIsOpenEdit}
            setNewUserName={setNewUserName}
          />
        </tbody>
      </table>
      <ModalDescription
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pastCardPrediction={readings[0]?.cards[0]}
        presentCardPrediction={readings[0]?.cards[1]}
        futureCardPrediction={readings[0]?.cards[2]}
      />

      <Modal isOpen={isOpenEdit} onClose={() => setIsOpenEdit(false)}>
        <div className="p-[3rem] h-[17rem]">
          {isUserNameUpdated ? (
            <div className="w-full h-full flex justify-center items-center text-[1.5rem]">
              {" "}
              <p> :) Tu nombre se actualizo !!</p>
            </div>
          ) : (
            <div className="relative">
              <form
                onSubmit={handleSubmitEdit}
                className={clsx(
                  "w-full flex flex-col justify-center items-center"
                )}
              >
                <label
                  htmlFor="userName"
                  className={
                    "text-yellowColor text-[1.8rem] text-center font-showcard md:text-[2.2rem] lg:pt-[0.5rem] lg:text-[3rem] min-[1400px]:text-[2.5rem]"
                  }
                >
                  Escribe tu nombre...
                </label>
                <input
                  className={clsx(
                    errorMsg ? "border-[#ff8d8d]" : "border-yellowColor",
                    "w-full border-4 border-solid text-[1.5rem] text-white px-[0.8rem] py-[0.8rem] bg-purpleDark my-[1rem] lg:w-[77%] lg:text-[2rem]"
                  )}
                  id="name"
                  type="text"
                  value={newUserName}
                  onChange={(event) => {
                    setErrorMsg(false);
                    setNewUserName(event.target.value);
                  }}
                />
                {errorMsg && (
                  <p className="text-[1.5em] text-[#ff8d8d]  min-[1100px]:text-[1.8em] ">
                    Rellena tu nombre!
                  </p>
                )}
                <Button
                  text={"ACTUALIZAR"}
                  sourceIcon={"/assets/images/kero-icon.svg"}
                  pinkColor={true}
                  className={
                    "absolute  mt-[8rem] !animate-none mr-[2rem] lg:bottom-[-6rem]  min-[1400px]:bottom-[-6rem] min-[1600px]:bottom-[-10rem]"
                  }
                />
              </form>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
