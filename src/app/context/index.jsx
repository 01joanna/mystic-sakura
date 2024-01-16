"use client";
import { createContext, useState } from "react";

export const initialValues = {
  selectedItems: [],
  setSelectedItems: () => undefined,
  setIsOpenModal: () => undefined,
  selectedItemsLength: 0,
  filterSelectedItems: () => undefined,
  handleCloseModal: () => undefined,
  isOpenModal: false,
};

export const SakuraContext = createContext([]);

export default function SakuraProvider({ children }) {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <SakuraContext.Provider value={{ selectedItems, setSelectedItems }}>
      {children}
    </SakuraContext.Provider>
  );
}
