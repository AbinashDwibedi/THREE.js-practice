import './style.css'
import vShader from './vShader';
import fShader from './fShader';
// import { Three } from './Three'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
const camera  = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 1000);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
document.getElementById("app").appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const texture1 = textureLoader.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsM880bjChhmZTh2vEnO9GT7BiNTMRs96d-g&s");
const texture2 = textureLoader.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqKBpp4ydpX2-nrgi-DFEnxHDThnD6HfkSNQ&s");
const texture3 = textureLoader.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFW1Z1ruJVuLqlZj9aIvbezX6EzW1RGleHg&s")
const shaderMaterial = new THREE.ShaderMaterial({
    fragmentShader : fShader ,
    vertexShader  : vShader,
    transparent : true,
    uniforms : {
        parameter : {value : 0 , type : 'f'},
        texture1 : {value: texture1 , type: 't'},
        texture2 : {value: texture2 , type: 't'},
        texture3 : {value: texture3 , type: 't'},
    }
})

const geometry = new THREE.BoxGeometry(2.5,3,2);
const box = new THREE.Mesh(geometry , shaderMaterial)
scene.add(box);


function animate(){
    shaderMaterial.uniforms.parameter.value+= 0.05
    renderer.render(scene,camera)
    requestAnimationFrame(animate);
}

animate();



