// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Load the texture
// const textureLoader = new THREE.TextureLoader();
// const texture = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqKBpp4ydpX2-nrgi-DFEnxHDThnD6HfkSNQ&s', function (texture) {
//     // Create a material with the loaded texture
//     const material = new THREE.MeshBasicMaterial({ map: texture });

//     // Create the geometry
//     const geometry = new THREE.BoxGeometry(1, 1, 1);

//     // Create the mesh with the geometry and material
//     const cube = new THREE.Mesh(geometry, material);

//     // Add the cube to the scene
//     scene.add(cube);

//     // Variables for smooth animation
//     let direction = 1;
//     const speed = 0.01;

//     // Animation loop
//     function animate() {
//         if (cube.position.x > 3) {
//             direction = -1;
//         } else if (cube.position.x < -3) {
//             direction = 1;
//         }

//         cube.position.x += direction * speed;
//         cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     cube.rotation.z += 0.01; 
//         renderer.render(scene, camera);
//         requestAnimationFrame(animate);
//     }

//     animate(); // Start the animation loop
// });



// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.CapsuleGeometry(1, 3, 10 , 10);
// const material = new THREE.MeshBasicMaterial({ color: "red" });

// // const cube = new THREE.Mesh(geometry, material);
// // scene.add(cube);

// const cube = new THREE.Line(geometry, material);
// scene.add(cube);

// // let direction = 1;
// // const speed = 0.01;

// // function animate() {
// //     if (cube.position.x > 3) {
// //         direction = -1;
// //     } else if (cube.position.x < -3) {
// //         direction = 1;
// //     }

// //     cube.position.x += direction * speed;
// //     cube.rotation.x += 0.01;
// //     cube.rotation.y += 0.01;
// //     cube.rotation.z += 0.01; 
// //     renderer.render(scene, camera);
// //     requestAnimationFrame(animate);
// // }

// // animate();


// let q = 0;


// function animate() {
//     cube.position.x = 3*Math.sin(q+=0.01)

//     // cube.position.x += direction * speed;
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     cube.rotation.z += 0.01; 
//     // renderer.render(scene, camera);
//     requestAnimationFrame(animate);
// }

// animate();



//Lightning starts here 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambient = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambient)
const pointLight = new THREE.PointLight(0xffffff, 1, 100)
pointLight.position.set(1,-1,-1)
scene.add(pointLight)
const geometry = new THREE.BoxGeometry(1, 3, 3 );
const material = new THREE.MeshStandardMaterial({ color: "red" });

// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const lightGeometry  = new THREE.SphereGeometry(1,30,20);
const lightMaterial = new THREE.MeshBasicMaterial({color: "yellow"});
const lightSphere = new THREE.Mesh(lightGeometry , lightMaterial)
lightSphere.position.set(1,1,-1)
scene.add(lightSphere)

let q = 0;
function animate() {
    cube.position.x = 3*Math.sin(q+=0.01)

    // cube.position.x += direction * speed;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01; 
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();