(function(){
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	var container, stats;

	var camera, scene, renderer, controls;

	init();
	animate();

	function init() {
		container = document.getElementById( 'container' );

		camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.z = 1800;

		controls = new THREE.OrbitControls(camera)
		scene = new THREE.Scene();

		// light = new THREE.DirectionalLight( 0xffffff );
		// light.position.set( 0, 0, 1 );
		// scene.add( light );

		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setClearColor( 0xffffff );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		container.appendChild( renderer.domElement );

		stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0px';
		container.appendChild( stats.domElement );

		var geometry	= new THREE.TorusKnotGeometry();
		var material	= new THREE.MeshNormalMaterial(); 
		var mesh	= new THREE.Mesh( geometry, material );
		scene.add( mesh );

		window.addEventListener( 'resize', onWindowResize, false );
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	function animate() {
		requestAnimationFrame( animate );

		render();
		stats.update();
	}

	function render() {
		renderer.render( scene, camera );
	}
})();