import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as themes from './my.json'

function App() {
//State variables for themes
const[themeOne,setThemeOne]= useState("Click below to choose a theme")
const[themeTwo,setThemeTwo]= useState("Click below to choose a theme")
const[themeThree,setThemeThree]= useState("Click below to choose a theme")

//this function picks themes from the JSON page and returns one that hasn't been picked yet
function themePicker(){
  let possibleTheme
  // False until a theme that isn't currently in the array is found,
  // then is changed to true and the while loop is exited
  let themeFound = false

  while(themeFound == false){
    //tracks current themes to ensure no duplicates
  let currentThemes =[themeOne,themeTwo,themeThree]
  //generates a random number between 0 and the size of the themes array (inclusive)
  let randomNum = Math.floor(Math.random()*446)
  //changes possible theme to the one at the random index
  possibleTheme = themes.default[randomNum]
  //if the found theme is in the array, we stop
  if(possibleTheme in currentThemes){
    themeFound = false
  }
  else{ themeFound = true}
  }



  return possibleTheme
}

function triplePicker(){
  setThemeOne(themePicker)
  setThemeTwo(themePicker)
  setThemeThree(themePicker)
}

  return (
    <>
    <div className='themeBar'>
          <div className='singleTheme'><div className='themeTitle'>{themeOne}</div>      <button onClick={(e)=>{e.preventDefault; setThemeOne(themePicker())}}>Pick Theme One</button></div>
          <div className='singleTheme'><div className='themeTitle'>{themeTwo}</div>      <button onClick={(e)=>{e.preventDefault; setThemeTwo(themePicker())}}>Pick Theme Two</button></div>
          <div className='singleTheme'><div className='themeTitle'>{themeThree}</div>      <button onClick={(e)=>{e.preventDefault; setThemeThree(themePicker())}}>Pick Theme Three</button></div>
    </div>
    <button onClick={()=>{triplePicker()}}>Randomize all</button>
    
    </>
  )
}

export default App
