import './style.css'
import Game from './game'

window.addEventListener("DOMContentLoaded", ()=>{
    const canvas = document.getElementById("app");
    const game = new Game({canvas})
})



