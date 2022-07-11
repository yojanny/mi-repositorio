"use strict"

async function getData(url){
  const res = await fetch(url)
  const data = await res.json()

  return data
}

async function getLocationInfo(id){
  try{

    //Convertimos el id a numero
    id = +id

    if(isNaN(id)){
      throw new Error("EL id no es un número")
    }


    const data = await getData("https://rickandmortyapi.com/api/character")

  const personajes = data.results

  const personaje = personajes.find(pers => pers.id === id)
  
  if(!personaje){
    throw new Error("No existe ningún personaje con ese ID")
  }

  /* 
  function(pers){
    return pers.id === id
  }
  */

  const locationUrl = personaje.location.url

  const locationInfo = await getData(locationUrl)

  return locationInfo
} catch (e){
  console.error(e.message)
  alert(e)
}
}

getLocationInfo("a").then(info => console.log(info))
