import { FormattedMessage } from "react-intl";


function Submenu(props: {name:string, changeLanguage?: (lang:string)=>void}){


function lang(e:any){
  if(!props.changeLanguage) return
  props.changeLanguage(e.target.innerHTML.toLowerCase() as string)
}

  return(
    <div className='menuItem' onClick={(e)=>{lang(e)}}>
    {props.changeLanguage ? props.name.toUpperCase() :   <FormattedMessage id='sub'/>}
    </div>
  )
}

export default Submenu
