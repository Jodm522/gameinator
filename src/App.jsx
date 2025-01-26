import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as themes from './tags.json'
import * as assets from "./assets.json"

function App() {
//State variables for themes
const[themeOne,setThemeOne]= useState("Click below to choose a theme")
const[themeTwo,setThemeTwo]= useState("Click below to choose a theme")
const[themeThree,setThemeThree]= useState("Click below to choose a theme")

//State Variables for assets
const[assetOne, setAssetOne]= useState(false)
const[assetTwo, setAssetTwo]= useState(false)
const[assetThree, setAssetThree]= useState(false)


//this function picks themes from the JSON page and returns one that hasn't been picked yet
function picker(type){
  let possibleReturn
  let itemFound = false
  let currentItems
  let jsonPage
  // False until a theme that isn't currently in the array is found,
  // then is changed to true and the while loop is exited
  if(type == "theme"){
   currentItems = [themeOne,themeTwo,themeThree]
   jsonPage = themes
  }
  else if(type == "asset"){
   currentItems = [assetOne,assetTwo,assetThree]
   jsonPage = assets
  }

  while(itemFound == false){
  //generates a random number between 0 and the size of the themes array (inclusive)
  let randomNum = Math.floor(Math.random()*jsonPage.default.length-1)
  //changes possible theme to the one at the random index
  possibleReturn = jsonPage.default[randomNum]
  //if the found theme is in the array, we stop
  if(possibleReturn in currentItems){
    itemFound = false
  }
  else{ itemFound = true}
  }

  return possibleReturn
}

function triplePicker(type){
  if(type == "theme"){
 setThemeOne(picker("theme"))
  setThemeTwo(picker("theme"))
  setThemeThree(picker("theme"))

  }
  else if(type=="asset"){
    setAssetOne(picker("asset"))
  setAssetTwo(picker("asset"))
  setAssetThree(picker("asset"))

  }
 
}

  return (
    <>
    <div className='themes'>
    <div className='themeBar'>
          <div className='singleTheme'><div className='themeTitle'>{themeOne}</div>      <button onClick={(e)=>{e.preventDefault; setThemeOne(picker("theme"))}}>Pick Theme One</button></div>
          <div className='singleTheme'><div className='themeTitle'>{themeTwo}</div>      <button onClick={(e)=>{e.preventDefault; setThemeTwo(picker("theme"))}}>Pick Theme Two</button></div>
          <div className='singleTheme'><div className='themeTitle'>{themeThree}</div>      <button onClick={(e)=>{e.preventDefault; setThemeThree(picker("theme"))}}>Pick Theme Three</button></div>
    </div>
    <button onClick={()=>{triplePicker("theme")}}>Randomize all</button>
    </div>
    <div className='assets'>
    <div className='themeBar'>
          <div className='singleTheme'><div className='themeTitle'>{assetOne && <a href={assetOne} target="_blank">Go to asset</a> }</div>      <button onClick={(e)=>{e.preventDefault; setAssetOne(picker("asset"))}}>Pick Theme One</button></div>
          <div className='singleTheme'><div className='themeTitle'>{assetTwo && <a href={assetTwo} target="_blank"> Go to asset</a>}</div>      <button onClick={(e)=>{e.preventDefault; setAssetTwo(picker("asset"))}}>Pick Theme Two</button></div>
          <div className='singleTheme'><div className='themeTitle'>{assetThree && <a href={assetThree} target="_blank">Go to asset</a>}</div>      <button onClick={(e)=>{e.preventDefault; setAssetThree(picker("asset"))}}>Pick Theme Three</button></div>
    </div>
    <button onClick={()=>{triplePicker("asset")}}>Randomize all</button>
    </div>
    </>
  )
}

export default App
