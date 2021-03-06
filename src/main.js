function init() {
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setClearColor(0x000000);
    var scene = new THREE.Scene();
    
    // camera
    var camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
    camera.position.set(25, 25, 25);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);
    
    // draw axes to help you understand the coordinate
    drawAxes(scene);
    
    var material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
    });
    
     drawCube(scene, material);
    // drawPlane(scene, material);
    // drawSphere(scene, material);
    // drawCircle(scene, material);
    // drawCylinder(scene, material);
    // drawTetra(scene, material);
    // drawOcta(scene, material);
    // drawIcosa(scene, material);
    // drawTorus(scene, material);
    // drawTorusKnot(scene, material);
    
    // render
    renderer.render(scene, camera);
}

function drawCube(scene, material) {
    var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3,2,3,5), material);
    scene.add(cube);
}

function drawPlane(scene, material) {
    var plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 4), material);
    scene.add(plane);
}

function drawSphere(scene, material) {
    //var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6), material);
    // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
    //      0, Math.PI * 2, Math.PI / 6, Math.PI / 2), material);
    // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
    //      Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2), material);
    // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
    //      Math.PI / 6, Math.PI / 3), material);
    // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
    //      0, Math.PI * 2, Math.PI / 6, Math.PI / 3), material);
    // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
    //      Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2), material);
    scene.add(sphere);
}

function drawCircle(scene, material) {
    var circle = new THREE.Mesh(new THREE.CircleGeometry(3, 18, Math.PI / 3, Math.PI / 3 * 4), material);
    scene.add(circle);
}

function drawCylinder(scene, material) {
    var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 4, 18, 3), material);
    // var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(2, 3, 4, 18, 3), material);
    // var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(2, 3, 4, 18, 3, true), material);
    scene.add(cylinder);
}

function drawTetra(scene, material) {
    var tetra = new THREE.Mesh(new THREE.TetrahedronGeometry(3), material);
    scene.add(tetra);
}

function drawOcta(scene, material) {
    var octa = new THREE.Mesh(new THREE.OctahedronGeometry(3), material);
    scene.add(octa);
}

function drawIcosa(scene, material) {
    var icosa = new THREE.Mesh(new THREE.IcosahedronGeometry(3), material);
    scene.add(icosa);
}

function drawTorus(scene, material) {
    var torus = new THREE.Mesh(new THREE.TorusGeometry(3, 1, 4, 8), material);
    // var torus = new THREE.Mesh(new THREE.TorusGeometry(3, 1, 12, 18), material);
    // var torus = new THREE.Mesh(new THREE.TorusGeometry(3, 1, 4, 8, Math.PI / 3 * 2), material);
    scene.add(torus);
}

function drawTorusKnot(scene, material) {
    var torus = new THREE.Mesh(new THREE.TorusKnotGeometry(2, 0.5, 32, 8), material);
    scene.add(torus);
}

function drawTube(scene, material) {
    var tube = new THREE.Mesh(new THREE.TubeGeometry(1, 0.5), material);
    scene.add(tube);
}

function drawAxes(scene) {
    // x-axis
    var xGeo = new THREE.Geometry();
    xGeo.vertices.push(new THREE.Vector3(0, 0, 0));
    xGeo.vertices.push(new THREE.Vector3(3, 0, 0));
    var xMat = new THREE.LineBasicMaterial({
        color: 0xff0000
    });
    var xAxis = new THREE.Line(xGeo, xMat);
    scene.add(xAxis);
    
    // y-axis
    var yGeo = new THREE.Geometry();
    yGeo.vertices.push(new THREE.Vector3(0, 0, 0));
    yGeo.vertices.push(new THREE.Vector3(0, 3, 0));
    var yMat = new THREE.LineBasicMaterial({
        color: 0x00ff00
    });
    var yAxis = new THREE.Line(yGeo, yMat);
    scene.add(yAxis);
    
    // z-axis
    var zGeo = new THREE.Geometry();
    zGeo.vertices.push(new THREE.Vector3(0, 0, 0));
    zGeo.vertices.push(new THREE.Vector3(0, 0, 3));
    var zMat = new THREE.LineBasicMaterial({
        color: 0x00ccff
    });
    var zAxis = new THREE.Line(zGeo, zMat);
    scene.add(zAxis);
}
