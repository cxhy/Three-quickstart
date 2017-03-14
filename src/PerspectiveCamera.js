function init(){
  var renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('mainCanvas')
  });
  
  renderer.setClearColor(0x000000);
  
  var scene = new THREE.Scene();
  
    //var camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10);
    var camera = new THREE.PerspectiveCamera(45, 400/300, 1, 10);      
    camera.position.set(0, 0, 5);
    //camera.lookAt(new THREE.Vector3(0,0,0))
  scene.add(camera);
  
  var xx = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
          new THREE.MeshBasicMaterial({
              color: 0xff0000,
              wireframe: true
          })
  );
  scene.add(xx);
    renderer.render(scene, camera);

    
}
