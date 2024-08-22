import './style.css';
import *as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import fShader from './fShader';
import vShader from './vShader';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
document.getElementById("app").appendChild(renderer.domElement);


const shaderMaterial = new THREE.ShaderMaterial({
  fragmentShader: fShader,
  vertexShader : vShader,
  // transparent : true ,
  uniforms: {
    
  }
})
const sphere = new THREE.SphereGeometry(1);
const positionAttribute = sphere.attributes.position;
const positionPoints = positionAttribute.array.length / positionAttribute.itemSize ;
let randomAttribute = []
for(let i =0 ; i< positionPoints ;i++)
  randomAttribute.push(Math.random());
randomAttribute = new Float32Array(randomAttribute);
sphere.setAttribute("random" , new THREE.BufferAttribute(randomAttribute , 1));


// const sphere_material = new THREE.MeshBasicMaterial({color : "red"});
const mesh = new THREE.Mesh(sphere , shaderMaterial);

scene.add(mesh);

// const geometry = new THREE.BufferGeometry();
// const position = new Float32Array([
//   //first face
//   0,1,0,
//   1,1,0,
//   0,0,0
//   ,1,1,0,
//   1,0,0,
//   0,0,0,

//   //second side 


  
// ])
// geometry.setAttribute("position", new THREE.BufferAttribute(position , 3))
// const mesh = new THREE.Mesh(geometry , new THREE.MeshBasicMaterial({color: "lightpink" , side : THREE.DoubleSide}))
// scene.add(mesh);

// const controls = new OrbitControls(camera , renderer.domElement);


// function animate(){
//   renderer.render(scene , camera);
//   controls.update();
//   requestAnimationFrame(animate)
// }
// animate()


// //chatgpt
// import './style.css';
// import * as THREE from "three";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// const scene = new THREE.Scene();

// // Set up the camera
// const camera = new THREE.PerspectiveCamera(
//   75, 
//   window.innerWidth / window.innerHeight, 
//   0.1, 
//   1000
// );
// camera.position.z = 5;

// // Set up the renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById("app").appendChild(renderer.domElement);

// // Set up the geometry and mesh
// const geometry = new THREE.BufferGeometry();
// const position = new Float32Array([
//   // First Triangle (Top-left to bottom-left)
//   0, 1, 0,  // Vertex A (Top-left)
//   1, 1, 0,  // Vertex B (Top-right)
//   0, 0, 0,  // Vertex C (Bottom-left)

//   // Second Triangle (Top-right to bottom-right)
//   1, 1, 0,  // Vertex B (Top-right)
//   1, 0, 0,  // Vertex D (Bottom-right)
//   0, 0, 0   // Vertex C (Bottom-left)
// ]);

// geometry.setAttribute('position', new THREE.BufferAttribute(position, 3));
// const material = new THREE.MeshBasicMaterial({ color: 'red', side: THREE.DoubleSide });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// // Add OrbitControls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Animation loop
// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();

// // Adjust renderer on window resize
// window.addEventListener('resize', () => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
  
//   renderer.setSize(width, height);
//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();
// });
// const shaderMaterial = new THREE.ShaderMaterial({
//   fragmentShader: fShader,
//   vertexShader : vShader,
//   // transparent : true ,
//   uniforms: {

//   }
// })


// const mesh1 = new THREE.Mesh(new THREE.BoxGeometry(1.5,1.5,1.5) , shaderMaterial)
// scene.add(mesh1)
// mesh1.position.x = -1.5
// const mesh2 = new THREE.Mesh(new THREE.BoxGeometry(1.5,1.5,1.5) , shaderMaterial)
// scene.add(mesh2)
// mesh2.position.x = 1.5
const controls = new OrbitControls(camera , renderer.domElement);

const light = new THREE.PointLight(0xffffff , 10, 100);
light.position.z = 6
scene.add(light)

function animate(){
  controls.update();
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
}
animate()
