import {useState} from 'react'
import Submenu from './Submenu'
import { FormattedMessage } from "react-intl";

function MenuItem(props: {name:string, submenus: Array<string> | undefined, changeLanguage: (lang:string)=>void}){

const [dropdown, setDropdown] = useState(false)

  return(
    <div id='menuContainer' onMouseEnter={()=>setDropdown(true)}  onMouseLeave={() => setDropdown(false)}>
    <div className='menuItem'>{props.name === 'lang' ? props.name.toUpperCase() : <FormattedMessage id='menu'/>}</div>
    {dropdown && props.submenus ?
       <div>{props.submenus.map((submenu)=>{
      return props.name === "lang" ?
       <Submenu changeLanguage={props.changeLanguage} key={submenu} name={submenu}/>
       :
       <Submenu key={submenu} name={submenu}/>})}
       </div> : null}
    </div>
  )
}

export default MenuItem
