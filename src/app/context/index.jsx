"use client";
import { createContext, useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export const SakuraContext = createContext([]);

export default function SakuraProvider({ children }) {
  const [count, setCount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const selectedItemsLength = selectedItems.length;
  const isAllCardsRevealed = count === 3 ? false : true;

  const filterSelectedItems = (id) => {
    const filterResult = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(filterResult);
    // Remover el item de acuerdo al index y reemplazar por undefined.
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <SakuraContext.Provider
      value={{
        selectedItems,
        setSelectedItems,
        setIsOpenModal,
        selectedItemsLength,
        filterSelectedItems,
        handleCloseModal,
        isOpenModal,
        setCount,
        count,
        isAllCardsRevealed,
      }}
    >
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </SakuraContext.Provider>
  );
}
