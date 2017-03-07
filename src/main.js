function init(){
  var renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('mainCanvas')
  });
  
  renderer.setClearColor(0x000000);
  
  var scene = new THREE.Scene();
  
  var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
  camera.position.set(0, 0, 5);
  scene.add(camera);
  
  var xx = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
          new THREE.MeshBasicMaterial({
              color: 0xffe000
          })
  );
  scene.add(xx);
  
  renderer.render(scene, camera);

}
