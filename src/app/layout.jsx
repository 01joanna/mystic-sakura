"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import SakuraProvider, { SakuraContext } from "./context";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const selectedItemsLength = selectedItems.length;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const filterSelectedItems = (id) => {
    const filterResult = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(filterResult);
    // Remover el item de acuerdo al index y reemplazar por undefined.
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <SakuraContext.Provider
          value={{
            selectedItems,
            setSelectedItems,
            setIsOpenModal,
            selectedItemsLength,
            filterSelectedItems,
            handleCloseModal,
            isOpenModal,
          }}
        >
          {children}
        </SakuraContext.Provider>
      </body>
    </html>
  );
}
