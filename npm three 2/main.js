import './style.css';
import * as THREE  from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight , 0.1, 500);
camera.position.z = 2
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth ,window.innerHeight);
document.getElementById("app").appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const texture_1 = textureLoader.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR645qfP2jMUffXkoQioqF-9r0UtlLDqCBwJg&s")
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({map: texture_1});
const box = new THREE.Mesh(geometry, material);
scene.add(box);

const controls = new OrbitControls(camera, renderer.domElement);
renderer.render(scene,camera)

animate();
function animate(){
  controls.update();
  // renderer.render(scene, camera);
  requestAnimationFrame(animate);
}





// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });


