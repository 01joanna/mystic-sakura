"use client";

import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import fetchTarotCards from "@/services/tarotService";
import "./CardList.css";

/*export default function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTarotCards();
            setCards(data);
        };
    
        fetchData();
    }, []);
    
    const getRowCards = (row) => {
        switch (row) {
            case 1:
                return cards.slice(0, 19);
            case 2:
                return cards.slice(19, 37);
            case 3:
                return cards.slice(37, 55);
            default:
                return [];
        }
    };

    return (
        <div className="block md:flex md:flex-row md:overflow-x-auto">
            {[1, 2, 3].map((row) => (
                <div key={row} className="flex flex-row space-x-2 md:space-x-0">
                    {getRowCards(row).map((card, index) => (
                        <div key={card.id} className={`transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} -ml-4 md:ml-0`}>
                            <Card card={card} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTarotCards();
            setCards(data);
        };
    
        fetchData();
    }, []);

    const getRowCards = (row) => {
        return row === 1 ? cards.slice(0, 28) : cards.slice(28);
    };

    return (
        <div className="flex flex-col space-y-4">
            {[1, 2].map((row) => (
                <div key={row} className="flex overflow-x-auto no-scrollbar">
                    {getRowCards(row).map((card, index) => (
                        <div key={card.id} className="min-w-[150px] shrink-0" style={{ marginLeft: index === 0 ? '0' : '-20px' }}>
                            <Card card={card} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}*/

export default function CardList() {
    const [cards, setCards] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchTarotCards();
        setCards(data);
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="card-list">
        <div className="card-row">
          {cards.slice(0, 28).map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
        <div className="card-row">
          {cards.slice(28, 55).map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    );
  }
