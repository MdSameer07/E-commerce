const Image = (props) =>{
    return (
        <img src={props.src} alt={props.description} width={props.width} height={props.height}></img>
    )
}

export default Image