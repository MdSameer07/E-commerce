import { Link } from "react-router-dom"

export const GetVariants = ({variants,onClick}) =>{
    return(
        variants.map((variant)=>{
            return (
                <div><Link style = {{"textDecoration":"none"}} onClick = {()=>onClick(variant.image)}>{variant.color}</Link></div>
            )
        })
    )
}