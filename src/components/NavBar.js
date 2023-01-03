import {NavLink} from 'react-router-dom'
import './NavBar.css'
import {Cart} from './Cart'

export const NavBar = () =>{
    const navStyleLink = ({isActive})=>{
        return{
            fontWeight:isActive?'bold':'normal',
            textDecoration:isActive?'none':'underline',
        }
    }
    return (
        <nav className = 'Nav'>
            <div className = 'Initial'>
                <NavLink style = {navStyleLink} to='/'>Home</NavLink>
                <NavLink style = {navStyleLink} to='./products/1'>Products</NavLink>
            </div>
            <Cart/>
        </nav>
    )
}