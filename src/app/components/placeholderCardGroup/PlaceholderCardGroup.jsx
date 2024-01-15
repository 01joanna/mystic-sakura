import React from 'react';
import PlaceholderCard from "../placeholderCard/PlaceholderCard";

export default function PlaceholderCardGroup() {
    return (
        <section className={`${'flex flex-row items-center justify-center'}`}>
            <PlaceholderCard className={'past'} time={'PASADO'} isClickable={false} notChangeStyles={true} />
            <PlaceholderCard className={'present'} time={'PRESENTE'} />
            <PlaceholderCard className={'future'} time={'FUTURO'} />
        </section>
    );
}