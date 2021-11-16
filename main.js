var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x002500 } );
var cube = new THREE.Mesh( geometry, material );
var edges = new THREE.EdgesGeometry( geometry );
var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
scene.add( cube );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();

//adding the  events
document.addEventListener('wheel',(e) => {
    let zoom = e.deltaY  * -0.01;
    camera.position.z -= zoom;
});


let isdown = false;
let xc = 0;
let yc = 0;
document.addEventListener("mousedown",e =>{
    isdown = true;
     xc = e.clientX;
     yc = e.clientY;
})

document.addEventListener("mousemove", e =>{
    let x = e.clientX - xc;
    let y = e.clientY - yc;
    if(isdown){
        scene.rotation.y +=( 0.0001 * x );
        scene.rotation.x +=( -0.0001 * y );
    }
   
})
document.addEventListener("mouseup", e=>{
    isdown = false;
})