import "@testing-library/jest-dom";
import { getByTestId, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { wrapInTestContext } from "react-dnd-test-utils";
import userEvent from "@testing-library/user-event";

import Card from "../Card";
import SakuraProvider from "../../../context/index.jsx";

const sakuraMock = {
  id: "55",
  cardNumber: 55,
  spanishName: "La Esperanza",
  englishName: "The Hope",
  kanji: "希望",
  Rōmaji: "Kibo",
  appeardManga: "",
  appeardAnime: "Movie n° 2",
  clowCard: "",
  sakuraCard: "https://i.ibb.co/sPmXJ7n/La-esperanza.jpg",
  meaning: "Simboliza la esperanza de un amor.",
  __v: 0,
  cardsReverse: {
    sakuraReverse: "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg",
  },
};

describe("<Card/>", () => {
  test("should render the component card", async () => {
    const [BoxContext, getBackend] = wrapInTestContext(Box);
    render(
      <SakuraProvider>
        <BoxContext>
          <Card
            name={sakuraMock.spanishName}
            url={sakuraMock.sakuraReverse}
            id={sakuraMock.id}
          />
        </BoxContext>
      </SakuraProvider>
    );
    const cardElement = getByTestId("card-1");
    expect(cardElement).toBeInTheDocument();
    expect(true).toBe(true);
  });
});
