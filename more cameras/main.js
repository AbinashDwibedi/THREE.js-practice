import './style.css'
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {FirstPersonControls} from "three/examples/jsm/controls/FirstPersonControls.js";
// import { degToRad } from 'three/src/math/MathUtils.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight , 0.1, 1000);
camera.position.z = 5;
camera.position.x = -10
camera.position.y = 3

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth , window.innerHeight);
document.getElementById("app").appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(ambientLight);

// const PointLight = new THREE.HemisphereLight(0xffffff, 20);
// // PointLight.position.set(2, 2, 2)

// scene.add(PointLight);

const textureLoader = new THREE.TextureLoader();
const texture1 = textureLoader.load(
    "/brick-wall-1916752_1280.jpg"
);

const texture2 = textureLoader.load(
    "/brick-wall-1916752_1280-modified.jpg"
);

const boxGeometry = new THREE.TorusGeometry();
const boxTexture = new THREE.MeshStandardMaterial({
    map: texture1,
    bumpMap: texture2,
    bumpScale: .8,
    // displacementMap: texture2,
    // displacementScale: 10
    // roughness: 1
    // metalness: 1,
    // roughness: 0


});

const box = new THREE.Mesh(boxGeometry, boxTexture);
box.position.y = 1.4;
scene.add(box);

const groundGeometry = new THREE.PlaneGeometry(100, 100);
const groundTexture = new THREE.MeshStandardMaterial({
    
    map : texture2})
const ground = new THREE.Mesh(groundGeometry, groundTexture);
scene.add(ground)
ground.rotation.x = -1.57

const grid = new THREE.GridHelper();
// scene.add(grid);

// const controls = new OrbitControls(camera, renderer.domElement);
const controls = new FirstPersonControls(camera , renderer.domElement)
const clock = new THREE.Clock();
controls.movementSpeed  = 15;
// controls.activeLook = false
controls.lookSpeed = 0.1

const speed = 0.01
let direction = 1
function animate() {
    if(box.position.x >3){
        direction= -1
    }
    else if(box.position.x<-3){
        direction = 1
    }
    box.position.x += speed*direction
    box.rotation.z += -(direction*0.019)
    // controls.update();
    controls.update(clock.getDelta())
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();