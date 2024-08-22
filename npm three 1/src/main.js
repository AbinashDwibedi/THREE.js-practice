import '../style.css'
import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight)
document.body.appendChild(renderer.domElement);



const geometry = new THREE.OctahedronGeometry(1,5);
const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLEffMxXE3eKWbxNG957EnhrUxeC2o-RGpRw&s');
const material = new THREE.MeshStandardMaterial({map: texture});

const box = new THREE.Mesh(geometry, material);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight)
const pointLight = new THREE.PointLight(0xffffff ,2, 5)
scene.add(pointLight)
let position = [2, 0,1];

const texture_1 = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR645qfP2jMUffXkoQioqF-9r0UtlLDqCBwJg&s');

const circleGeometry = new THREE.OctahedronGeometry(0.4,5);
const Circlematerial = new THREE.MeshBasicMaterial({map: texture_1});
const circle = new THREE.Mesh(circleGeometry , Circlematerial);
circle.position.set(position[0], position[1] , position[2]);

scene.add(circle);
pointLight.position.set(position[0], position[1] , position[2]);


scene.add(box);
renderer.render(scene ,camera)
// let direction = 1;
// const speed = 0.1
let q = 0
circle.rotation.y =2

//orbit controlls
const controls = new OrbitControls(camera, renderer.domElement)

animate();
function animate(){
     q+= 0.05;
    // if(box.position.x > 3){
    //     direction = -1
    // }
    // else if(box.position.x < -3){
    //     direction = +1
    // }
    // box.position.x += direction*speed;
    controls.update();
    circle.position.set(3*Math.cos(q), 0 , 2*Math.sin(q))
    // camera.position.set(0,3*Math.cos(q), 6 )
    // circle.rotation.y+=0.06
    pointLight.position.set(3*Math.cos(q), 0 , 2*Math.sin(q))
    box.rotation.x += 0.01
    box.rotation.y += 0.01
    // renderer.render(scene, camera); 
    requestAnimationFrame(animate)
}
