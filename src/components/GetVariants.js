import { Link } from "react-router-dom"
import './Variants.css'

export const GetVariants = ({variants,onClick}) =>{
    return(
        variants.map((variant)=>{
            return (
                <div className = 'Variants'><Link style = {{"textDecoration":"none"}} onClick = {()=>onClick(variant.image)}>{variant.color}</Link></div>
            )
        })
    )
}