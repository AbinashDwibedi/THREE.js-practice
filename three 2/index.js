const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const box = new THREE.Mesh(geometry, material);

scene.add(box);

const speed = 0.05;
let direction = 1;

function animate() {
    // Calculate screen boundaries in world coordinates
    const frustumSize = 2 * Math.tan((camera.fov * Math.PI) / 360) * Math.abs(camera.position.z);
    const aspectRatio = window.innerWidth / window.innerHeight;
    const frustumWidth = frustumSize * aspectRatio;
    const frustumHeight = frustumSize;

    // Adjust position to keep the box within screen boundaries
    if (box.position.x > frustumWidth / 2 - geometry.parameters.width / 2) {
        direction = -1;
    } else if (box.position.x < -frustumWidth / 2 + geometry.parameters.width / 2) {
        direction = 1;
    }

    box.position.x += speed * direction;
    box.rotation.z += 0.01;
    box.rotation.y += 0.01;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
