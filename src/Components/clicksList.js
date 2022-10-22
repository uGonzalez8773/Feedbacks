export const ListOfClicks = ({clicks, counters}) => { //props son un objeto se puede extraer directamente
    <p>El numero total de feedbacks es: {counters.lenght} </p> 
    //console.log({ clicks })
    //debugger
    return <p> {clicks.join(", ")} </p>
    }