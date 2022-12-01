import {NavLink} from 'react-router-dom'
import './NavBar.css'

export const NavBar = () =>{
    const navStyleLink = ({isActive})=>{
        return{
            fontWeight:isActive?'bold':'normal',
            textDecoration:isActive?'none':'underline',
        }
    }
    return (
        <nav className = 'Nav'>
            <NavLink style = {navStyleLink} to='/'>Home</NavLink>
            <NavLink style = {navStyleLink} to='./Products/1'>Products</NavLink>
        </nav>
    )
}