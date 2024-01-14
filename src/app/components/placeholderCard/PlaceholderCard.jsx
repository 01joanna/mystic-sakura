import Image from "next/image";
import PlaceHolderImage from "../../../../public/assets/img/placeholder-image.png";

export default function PlaceholderCard({ time }) {

    return (
        <article>
            <div>
                <div>
                    <Image
                        src={PlaceHolderImage}
                        alt='Círculo mágico de Sakura'
                        width={69}
                        height={72}
                    />
                    <p>
                        Elige una carta
                    </p>
                    <h3>
                        {time}
                    </h3>
                </div>
            </div>
        </article>
    );
}