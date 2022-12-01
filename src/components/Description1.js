import './Description1.css'

const Description1 = (props) =>{
    return(
        <>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>Price : <strong>${props.price}</strong></p>
        </>
    )
}

export default Description1