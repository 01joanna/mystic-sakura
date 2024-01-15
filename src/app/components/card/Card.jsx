export default function Card({ card }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={card.sakuraCard} alt={card.englishName} />
        </div>
    );
}