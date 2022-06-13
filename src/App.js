import "./App.css";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import project from "./images/project.png";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import Timeline from "./Components/Timeline";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { GUI } from "dat.gui";

const timelineData = require("./data");

function App() {
  // // const [opts, setOpts] = useState({
  // //   posX: 0,
  // //   posY: 0,
  // //   posZ: -5,
  // //   color: "#99ccff",
  // // });

  // const mountRef = useRef(null);

  // useEffect(() => {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   const gui = new GUI();
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);

  //   // OBJECTS

  //   const boxGeometry = new THREE.BoxGeometry();
  //   const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //   const cube = new THREE.Mesh(boxGeometry, boxMaterial);
  //   cube.position.z = 5;
  //   scene.add(cube);

  //   // IMPORTING OBJECTS
  //   const gltfLoader = new GLTFLoader();
  //   var heroObject;
  //   gltfLoader.load(
  //     // resource URL
  //     "./weaved_spirals/scene.gltf",
  //     // called when the resource is loaded
  //     function (gltf) {
  //       heroObject = gltf.scene;
  //       heroObject.position.z = -3;
  //       scene.add(heroObject);

  //       // gltf.animations; // Array<THREE.AnimationClip>
  //       // gltf.scene; // THREE.Group
  //       // gltf.scenes; // Array<THREE.Group>
  //       // gltf.cameras; // Array<THREE.Camera>
  //       // gltf.asset; // Object
  //     },
  //     function (xhr) {
  //       console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  //     },

  //     function (error) {
  //       console.log("An error happened");
  //     }
  //   );

  //   // LIGHTS

  //   const heroLight0 = new THREE.PointLight(0x439cfb, 90, 8);
  //   const heroLight1 = new THREE.PointLight(0x35108c, 90, 8);
  //   const heroLight2 = new THREE.PointLight(0xf187fb, 90, 8);
  //   heroLight0.position.set(-2, 0, -3);
  //   heroLight1.position.set(0, 0, -3);
  //   heroLight2.position.set(2, 0, -3);
  //   // scene.add(heroLight0);
  //   scene.add(heroLight1);
  //   // scene.add(heroLight2);

  //   const sphereSize = 1;
  //   // const pointLightHelper0 = new THREE.PointLightHelper(heroLight0, sphereSize);
  //   const pointLightHelper1 = new THREE.PointLightHelper(heroLight1, sphereSize);
  //   // const pointLightHelper2 = new THREE.PointLightHelper(heroLight2, sphereSize);
  //   // scene.add(pointLightHelper0);
  //   scene.add(pointLightHelper1);
  //   // scene.add(pointLightHelper2);

  //   mountRef.current.appendChild(renderer.domElement);
  //   renderer.render(scene, camera);

  //   let onWindowResize = function () {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   };

  //   function moveCamera() {
  //     const t = document.body.getBoundingClientRect().top;
  //     camera.position.z = t * -0.01;
  //   }

  //   window.addEventListener("resize", onWindowResize, false);
  //   document.body.onscroll = moveCamera;

  //   var animate = function () {
  //     requestAnimationFrame(animate);
  //     cube.rotation.x += 0.02;
  //     cube.rotation.y += 0.02;
  //     if (heroObject && heroObject.rotation) {
  //       heroObject.rotation.x += 0.005;
  //       heroObject.rotation.y -= 0.003;
  //     }

  //     renderer.render(scene, camera);
  //   };
  //   animate();

  //   // Orbit Control
  //   const controls = new OrbitControls(camera, renderer.domElement);
  //   camera.position.z = 1;
  //   controls.enableDamping = true;
  //   controls.dampingFactor = 0.25;
  //   controls.enableZoom = true;
  //   controls.autoRotate = true;

  //   // DAT GUI

  //   return () => {
  //     mountRef.current.removeChild(renderer.domElement);
  //   };
  // }, []);

  return (
    <div className="home" >
      <section className="container hero  ">
        <div>
          <div>PRABHAV TEWARI</div>
          <div>FULLSTACK WEB DEVELOPER</div>
        </div>
      </section>
      <section className="container  ">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5 d-flex flex-column">
            <h1 className="text-center">ABOUT ME</h1>
            <div className="text-justify ">
              I'm a third year CS undergraduate at KIIT University with a keen
              interest in designing and developing web applications. I'm
              passionate about frontend developement and aim to create clean and
              intuitive UI's.
            </div>
            <div className="text-justify mt-2">
              When I'm not coding you can find me at the gym trying to lift
              heavy weights or managing the film society of our university.
            </div>
          </div>
        </div>
      </section>
      <section className="container  ">
        <h1 className="text-center mb-3">PROJECTS</h1>
        <div className="row">
          <div className="col-12">
            <div
              className="btn-group w-100 my-2"
              role="group"
              aria-label="Technology Group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btn-tech-html"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="btn-tech-html"
              >
                HTML / CSS / JS
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btn-tech-PHP"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btn-tech-PHP">
                PHP
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btn-tech-node"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="btn-tech-node"
              >
                Node.js
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btn-tech-React"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="btn-tech-React"
              >
                React
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btn-tech-python"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="btn-tech-python"
              >
                Python
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mt-3">
            <div className="project-card">
              <img
                src={project}
                alt=""
                srcSet=""
                className="project-thumbnail"
              />
              <div className="project-details">
                <div className="project-title">Project Title</div>
                <div className="project-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsa, architecto.
                </div>
                <ul className="project-tags">
                  <li>Lorem</li>
                  <li>Ipsum</li>
                  <li>Dolor</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-3">
            <div className="project-card">
              <img
                src={project1}
                alt=""
                srcSet=""
                className="project-thumbnail"
              />
              <div className="project-details">
                <div className="project-title">Project Title</div>
                <div className="project-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsa, architecto.
                </div>
                <ul className="project-tags">
                  <li>Lorem</li>
                  <li>Ipsum</li>
                  <li>Dolor</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-3">
            <div className="project-card">
              <img
                src={project2}
                alt=""
                srcSet=""
                className="project-thumbnail"
              />
              <div className="project-details">
                <div className="project-title">Project Title</div>
                <div className="project-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsa, architecto.
                </div>
                <ul className="project-tags">
                  <li>Lorem</li>
                  <li>Ipsum</li>
                  <li>Dolor</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-3">
            <div className="project-card">
              <img
                src={project}
                alt=""
                srcSet=""
                className="project-thumbnail"
              />
              <div className="project-details">
                <div className="project-title">Project Title</div>
                <div className="project-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsa, architecto.
                </div>
                <ul className="project-tags">
                  <li>Lorem</li>
                  <li>Ipsum</li>
                  <li>Dolor</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-3">
            <div className="project-card">
              <img
                src={project2}
                alt=""
                srcSet=""
                className="project-thumbnail"
              />
              <div className="project-details">
                <div className="project-title">Project Title</div>
                <div className="project-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsa, architecto.
                </div>
                <ul className="project-tags">
                  <li>Lorem</li>
                  <li>Ipsum</li>
                  <li>Dolor</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-3">
            <div className="project-card">
              <img
                src={project1}
                alt=""
                srcSet=""
                className="project-thumbnail"
              />
              <div className="project-details">
                <div className="project-title">Project Title</div>
                <div className="project-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsa, architecto.
                </div>
                <ul className="project-tags">
                  <li>Lorem</li>
                  <li>Ipsum</li>
                  <li>Dolor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" ">
        <h1 className="text-center mt-5 mb-3">TIMELINE</h1>
        <div className="d-flex justify-content-center">
          <div className="timeline-option mx-3">
            <FontAwesomeIcon
              icon={solid("briefcase")}
              className="timeline-option-icon"
              fixedWidth
            />
          </div>

          <div className="timeline-option mx-3">
            <FontAwesomeIcon
              icon={solid("graduation-cap")}
              className="timeline-option-icon"
              fixedWidth
            />
          </div>

          <div className="timeline-option mx-3">
            <FontAwesomeIcon
              icon={solid("medal")}
              className="timeline-option-icon"
              fixedWidth
            />
          </div>
        </div>
        <Timeline timelineData={timelineData} />
      </section>
      <section className="container  ">
        <h1 className="text-center">Contact</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <input
                className="form-control"
                name="Name"
                id="name"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="form-control"
                name="Email"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
              <textarea
                className="form-control"
                name="Message"
                id="message"
                placeholder="Message"
                rows="3"
                required
              ></textarea>
              <button className="btn btn-primary grow">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
