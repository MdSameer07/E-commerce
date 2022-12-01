import './Description2.css'

const Description2 = (props) =>{
    return (
        <div className = 'desc2'>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>Price : <strong>${props.price}</strong></p>
            <p>In Stock</p>
            <button className = 'ATC-button'>Add to cart</button>
        </div>
    )
}

export default Description2