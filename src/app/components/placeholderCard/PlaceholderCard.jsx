"use client"
import React, { useState } from 'react';
import Image from "next/image";
import PlaceHolderImage from "../../../../public/assets/img/placeholder-image.png";
import styles from "./placeholderCard.module.css"


export default function PlaceholderCard({ time, isClickable = true, notChangeStyles }) {
    const [placeholderBgColor, changeBgColor] = useState(true);

    const activePlaceholder = () => {
        if (isClickable) {
            changeBgColor(!placeholderBgColor);
        }
    };

    return (
        <article className={`${notChangeStyles ? 'bg-purplePlaceholder' : placeholderBgColor ? 'bg-bluePlaceHolder' : 'bg-purplePlaceholder'} w-24 lg:w-36 h-48 lg:h-80 px-1.5 py-2 rounded-lg m-1`} onClick={activePlaceholder}>
            <div className={`${notChangeStyles ? styles.placeholderBorderActive : (placeholderBgColor ? styles.placeholderBorderInactive : styles.placeholderBorderActive)} ${'h-full flex items-center p-1 rounded-2xl'}`}>
                <div className={`${notChangeStyles ? 'bg-purplePlaceholder' : (placeholderBgColor ? 'bg-bluePlaceHolder' : 'bg-purplePlaceholder')} h-full w-full flex flex-col items-center justify-center rounded-2xl pb-2 pt-5 gap-x-0.5'}`} onClick={activePlaceholder}>
                    <Image
                        src={PlaceHolderImage}
                        alt='Círculo mágico de Sakura'
                        width={69}
                        height={72}
                        className={`${'lg:w-28'}`}
                    />
                    <p className='text-yellowColor text-xs lg:text-lg text-center font-jost w-3/4' >
                        Elige una carta
                    </p>
                    <h3 className='text-yellowColor text-sm lg:text-2xl text-center font-showcard' >
                        {time}
                    </h3>
                </div>
            </div>
        </article>
    );
}