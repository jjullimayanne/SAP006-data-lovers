import filterData from "./data.js"
import sortData from "./data.js"
import data from './data/pokemon/pokemon.js';

document.getElementById("type").addEventListener("click", pickType)

function pickType(e){
  e.preventDefault()
  let select = document.getElementById("tipoPokemon");
  let type = select.options[select.selectedIndex].text;
  let condition = new String(type)
  let result = methods.filter(data, condition)
  
  console.log(condition);



}
