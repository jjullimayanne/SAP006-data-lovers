import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

let maxCp = []

function sortData(dados, sortBy, sortOrder){
  for(let i=0; i <= data.length; i++){   
    maxCp.push(dados[i]["stats"]["max-cp"])
    maxCp.sort(numericOrder)
    console.log(maxCp.reverse())
  }
  
}
sortData(data.pokemon, "MaxCP", "decrescente")

function numericOrder(a, b){
  return a - b


let typeFilter = []
let typeSearcher = []




function filterData(data, condition){
    for (let j=0; j <= data.length; j++){
      typeSearcher = data[j]["type"]
      if(typeSearcher.includes(condition)){
      typeFilter = data[j]["name"]
      }
  
    }
  return typeFilter
  }

export function filterData()
export function sortData()
