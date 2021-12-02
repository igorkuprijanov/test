import './styles/stylesheet.scss'
import Header from './components/Header'
import Main from './components/Main'
import messages from './components/languages'
import { IntlProvider } from 'react-intl'
import Footer from './components/Footer'
import {useState} from 'react'

function App() {

const [locale, setLocale] = useState(navigator.language.split('-')[0])

  function changeLanguage(lang:string){
    setLocale(lang)
  }

  return (
    <div className="App">
    <IntlProvider locale={locale} messages={messages[locale]}>
    <Header changeLanguage={changeLanguage}/>
    <Main/>
    <Footer/>
    </IntlProvider>
    </div>
  );
}

export default App;
