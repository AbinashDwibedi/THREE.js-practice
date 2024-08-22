import *as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import gsap from "gsap";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

// initialization
const scene = new THREE.Scene();
const app = document.getElementById("app");
const camera = new THREE.PerspectiveCamera(75, app.clientWidth/app.clientHeight , 0.1, 1000);
camera.position.z = 5;
scene.background = null
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(app.clientWidth , app.clientHeight);
document.getElementById("app").appendChild(renderer.domElement);

//lightning 
const lightning = new THREE.DirectionalLight(0x2543ff , 10);
scene.add(lightning)

//model loading and animations
const loader = new GLTFLoader();
loader.load("Aztec skull.glb" , (gltf)=>{
  const model = gltf.scene;
  model.position.z = 4.7
  scene.add(model);
  // model.position.x = 0.3
  const mixer = new THREE.AnimationMixer(model);
  const animations = gltf.animations;
  const animation = mixer.clipAction(animations[0])
  animation.play();
  const clock = new THREE.Clock()
  

  function animate(){
    let delta = clock.getDelta();
    mixer.update(delta)
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
  }
  animate()
},(loading)=>{console.log(loading)} , (err)=> {console.log(err)})
// const controls = new OrbitControls(camera , renderer.domElement);

// const mesh = new THREE.Mesh(new THREE.BoxGeometry(1,1,1) , new THREE.MeshBasicMaterial({color: "red"}));
// scene.add(mesh)
let val = 0
function animate(){
  // controls.update();
  val+= 0.01
  lightning.position.x += 2*Math.cos(val);
  lightning.position.z+= 2*Math.sin(val);
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
}
animate()
// window.addEventListener('resize', () => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   // Update camera
//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();

//   // Update renderer
//   renderer.setSize(width, height);
//   // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Keep it responsive on high-DPI screens
// });