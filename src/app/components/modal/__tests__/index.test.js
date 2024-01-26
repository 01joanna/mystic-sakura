import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ModalDescription from "../ModalDescription";

describe("ModalDescription/>", () => {
  const pastCardPrediction = {
    id: "35",
    cardNumber: 35,
    spanishName: "Cambio",
    englishName: "The Change",
    kanji: "替",
    Rōmaji: "Kawa",
    appeardManga: "",
    appeardAnime: "32",
    clowCard: "https:/xmxSHrT/Cambio.jpg",
    sakuraCard: "https:/wMRvj2L/Cambio-Sakura.jpg",
    meaning: "Esta carta simboliza cambio, apariencia, adaptación.",
    __v: 0,
    cardsReverse: {
      clowReverse: "https://LJSmQ4f/Reverso-Clow.jpg",
      sakuraReverse: "https://XxrvMJ2/Reverso-Sakura.jpg",
    },
  };
  const presentCardPrediction = {
    id: "35",
    cardNumber: 35,
    spanishName: "Cambio",
    englishName: "The Change",
    kanji: "替",
    Rōmaji: "Kawa",
    appeardManga: "",
    appeardAnime: "32",
    clowCard: "https:///xmxSHrT/Cambio.jpg",
    sakuraCard: "https:/wMRvj2L/Cambio-Sakura.jpg",
    meaning: "Esta carta simboliza cambio, apariencia, adaptación.",
    __v: 0,
    cardsReverse: {
      clowReverse: "https://LJSmQ4f/Reverso-Clow.jpg",
      sakuraReverse: "https://XxrvMJ2/Reverso-Sakura.jpg",
    },
  };
  const futureCardPrediction = {
    id: "35",
    cardNumber: 35,
    spanishName: "Cambio",
    englishName: "The Change",
    kanji: "替",
    Rōmaji: "Kawa",
    appeardManga: "",
    appeardAnime: "32",
    clowCard: "https://i.ibb.co/xmxSHrT/Cambio.jpg",
    sakuraCard: "https://i.ibb.co/wMRvj2L/Cambio-Sakura.jpg",
    meaning: "Esta carta simboliza cambio, apariencia, adaptación.",
    __v: 0,
    cardsReverse: {
      clowReverse: "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg",
      sakuraReverse: "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg",
    },
  };
  test("test", async () => {
    render(
      <ModalDescription
        isOpen={true}
        onClose={() => {}}
        pastCardPrediction={pastCardPrediction}
        presentCardPrediction={presentCardPrediction}
        futureCardPrediction={futureCardPrediction}
      />
    );
    await waitFor(() => {
      expect(screen.getByTestId("buttonClose")).toBeInTheDocument();
    });
  });
  test("should style modal", async () => {
    render(
      <ModalDescription
        isOpen={true}
        onClose={() => {}}
        pastCardPrediction={pastCardPrediction}
        presentCardPrediction={presentCardPrediction}
        futureCardPrediction={futureCardPrediction}
      />
    );
    await waitFor(() => {
      const modal = screen.getByTestId("modalDescription");
      expect(modal).toHaveStyle({ backgroundColor: "purpleDark" });
    });
  });
});
