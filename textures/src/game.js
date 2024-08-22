import * as THREE  from "three";
export default class Game{
    constructor ({canvas}){
        this.canvas = canvas;
        this.init();
    }
    init(){
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight , 0.1, 1000);
        
    }
}