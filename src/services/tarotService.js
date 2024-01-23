const fetchTarotCards = async () => {
    try {
        const response = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching tarot cards: ", error);
        return [];
    }
};

export default fetchTarotCards;