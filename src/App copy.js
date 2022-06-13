import "./App.css";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import Head from "./Components/Head";

function App() {
  const mountRef = useRef(null);
  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    var renderer = new THREE.WebGLRenderer();
    // scene.background = new THREE.Color(0x779968);
    renderer.setSize(window.innerWidth, window.innerHeight);

    mountRef.current.appendChild(renderer.domElement);

    const color = 0xFFFAAF;
    const intensity = 1;
    const light = new THREE.AmbientLight(color, intensity);
    scene.add(light);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x000ff0 });
    var cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

    animate();
    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return (
    <div className="home" ref={mountRef}>
      <Head />
      <div className="container h-100">
        <div className="row">
          <div className="col-md-7">
            Hey! Im Prabhav
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
