import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import vShader from "./vShader";
import fShader from "./fShader";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("app").appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const texture1 = textureLoader.load(
  "https://imgv3.fotor.com/images/side/random-pictures-in-various-styles-and-of-all-types-in-fotor.jpg"
);

// const geometry = new THREE.SphereGeometry(1, 30, 100);
const shaderMaterials = new THREE.ShaderMaterial({
  fragmentShader: fShader,
  vertexShader: vShader,
  uniforms: {
    parameter: { type: "f", value: 0 },
    texture1: { type: "t", value: texture1 },
  },
});
// const obj = new THREE.Mesh(geometry, shaderMaterials);
// scene.add(obj);

//creating new buffer model;
const bufferGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    -10  , 10 , 0 ,
    10, 10 , 0 ,
    10, -10 , 0,
    -10, -10 , 0 ,
]);
const indeces = [
  0, 3, 1,
  1,3, 2
]

bufferGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
bufferGeometry.setIndex(indeces);

const uvs = new Float32Array([
  0 , 1,
  1, 1 ,
  1 , 0,
  0,0
])
bufferGeometry.setAttribute("uv", new THREE.BufferAttribute(uvs , 2));
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(bufferGeometry, shaderMaterials);
mesh.position.z = 3;
scene.add(mesh);

//setup Orbit Control
const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  shaderMaterials.uniforms.parameter.value += 0.01;
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
