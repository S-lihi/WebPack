import Results from './Components/Results.js'
import Button from './Components/Button.js'
import Search from './Components/Search.js'
import ButtonSettings from "./Components/ButtonSettings.js"
import './style.css'

const resultsElem = new Results('results')
const buttonElem = new Button('addButton', resultsElem)
new Search('search', 'Найти / Создать', buttonElem)
new ButtonSettings(resultsElem)
