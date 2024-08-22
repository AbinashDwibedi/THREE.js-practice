import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import "./style.css"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create and add a light to the scene
const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);

// Set up the camera position
camera.position.z = 5;

const controls = new OrbitControls(camera , renderer.domElement)

// Load the GLTF model
const loader = new GLTFLoader();
loader.load('/buster_drone/scene.gltf', (gltf) => {
    scene.add(gltf.scene);
    // Optionally adjust the scale and position of the model
    gltf.scene.scale.set(1, 1, 1);
    gltf.scene.position.set(0, 0, 0);
}, undefined, (error) => {
    console.error('An error happened while loading the model:', error);
});

function animate() {
  controls.update()
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
