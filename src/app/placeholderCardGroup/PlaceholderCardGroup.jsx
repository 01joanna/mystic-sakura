import PlaceholderCard from "../components/placeholderCard/PlaceholderCard";


export default function PlaceholderCardGroup() {
   
    return (
        <section className={`${'flex flex-row items-center justify-center'}`}>
            <PlaceholderCard className={'past'} time={'PASADO'} />
            <PlaceholderCard className={'present'} time={'PRESENTE'}/>
            <PlaceholderCard className={'future'} time={'FUTURO'}/>
        </section>
    );
}