"use client"
import React, { useState } from 'react';
import Image from "next/image";
import PlaceHolderImage from "../../../../public/assets/img/placeholder-image.png";
import styles from "@/app/components/placeholderCard/styles.module.css"


export default function PlaceholderCard({ time, isClickable = true, notChangeStyles }) {
    const [placeholderBgColor, changeBgColor] = useState(true);

    const activePlaceholder = () => {
        if (isClickable) {
            changeBgColor(!placeholderBgColor);
        }
    };

    return (
        <article className={`${notChangeStyles ? 'bg-purplePlaceholder' : placeholderBgColor ? 'bg-bluePlaceHolder' : 'bg-purplePlaceholder'} w-[86px] lg:w-[151px] h-[194px] lg:h-[341px] px-1.5 py-2 rounded-lg m-1`} onClick={activePlaceholder}>
            <div className={`${notChangeStyles ? styles.placeholderBorderActive : (placeholderBgColor ? styles.placeholderBorderInactive : styles.placeholderBorderActive)} ${'h-full flex items-center p-[3px] rounded-[20px]'}`}>
                <div className={`${notChangeStyles ? 'bg-purplePlaceholder' : (placeholderBgColor ? 'bg-bluePlaceHolder' : 'bg-purplePlaceholder')} h-full w-full flex flex-col items-center justify-center rounded-[20px] pb-2 pt-3 gap-y-1'}`} onClick={activePlaceholder}>
                    <Image
                        src={PlaceHolderImage}
                        alt='Círculo mágico de Sakura'
                        width={69}
                        height={72}
                        className={`${'lg:w-28'}`}
                    />
                    <p className='text-yellowColor text-[10px] lg:text-lg text-center font-jost w-3/4 pt-0.5' >
                        Elige una carta
                    </p>
                    <h3 className='text-yellowColor text-[13px] lg:text-2xl text-center font-showcard' >
                        {time}
                    </h3>
                </div>
            </div>
        </article>
    );
}