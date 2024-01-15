'use client'

import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import fetchTarotCards from '@/services/tarotService';


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
        <div className="flex overflow-x-auto">
            {cards.map(card => <Card key={card.id} card={card} />)}
        </div>
    );
}