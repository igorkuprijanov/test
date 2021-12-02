import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import { FormattedMessage } from "react-intl";


function linkRedirect(targtet: any){
  let destination
  switch (targtet.target.getAttribute('id')) {
    case 'facebook':
      destination = 'https://www.facebook.com'
      break;
    case 'instagram':
      destination = 'https://www.instagram.com'
      break;
    case 'twitter':
      destination = 'https://twitter.com'
      break;
    default:
      destination = 'https://www.google.ee/'
      break;
  }
  window.open(destination, '_blank')
}


function Footer(){
  return(
    <div id='footer'>

    <div id='footerContainerBig'>
    <div className='footerContainerSmall'>
    <FaFacebookF id='facebook' onClick={((e)=>linkRedirect(e))}className='socialIcon'/>
    <FaInstagram id='instagram' onClick={((e)=>linkRedirect(e))} className='socialIcon'/>
    <FaTwitter id='twitter' onClick={((e)=>linkRedirect(e))} className='socialIcon'/>
    </div>

    <div className='footerContainerSmall'>
    <p onClick={((e)=>linkRedirect(e))}><FormattedMessage defaultMessage="Info" id='info'/></p>
    <p onClick={((e)=>linkRedirect(e))}><FormattedMessage defaultMessage="Support" id='support'/></p>
    <p onClick={((e)=>linkRedirect(e))}><FormattedMessage defaultMessage="Marketing" id='marketing'/></p>
    </div>

    <div className='footerContainerSmall'>
    <p onClick={((e)=>linkRedirect(e))}><FormattedMessage defaultMessage="Terms of Use" id='tou'/></p>
    <p onClick={((e)=>linkRedirect(e))}><FormattedMessage defaultMessage="Privacy Policy" id='privacy'/></p>
    </div>

    <div className='footerContainerSmall'>
    <p id='copyRight'>@2021 Something Inc</p>
    </div>

    </div>
    </div>
  )
}

export default Footer
