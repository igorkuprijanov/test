import logo from '../assets/logo.svg'
import menus from './menuItems.json'
import MenuItem from './MenuItem'


function Header(props: {changeLanguage: (lang:string)=>void}){
  return(
    <div id='headerContainer'>
    <img alt='police' src={logo}/>
    {menus.map((menu) =>{return <MenuItem changeLanguage={props.changeLanguage} key={menu.name} name={menu.name} submenus={menu.submenus}/>})}
    </div>
  )
}

export default Header
