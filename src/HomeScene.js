import * as THREE from "three";
import SimplexNoise from "./vendor/SimplexNoise";
import GPUComputationRenderer from "./vendor/GPUComputationRenderer";
import {
  planeVertexShader,
  heightmapFragmentShader,
  smoothFragmentShader
} from "./vendor/Shaders";

const WIDTH = 254;

export default class HomeScene {
  constructor(container) {
    // Defining all required variables
    this.container = container;
    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseMoved = false;
    this.looping = true;

    this.init();
    this.addLights();
    // this.addFog();
    this.initPlane();
    this.initRaycasting();
    this.loop();

    // Adding required event listeners. Functions are placed at the bottom of the file
    window.addEventListener("resize", () => this.handleResize(), false);
    this.container.addEventListener(
      "mousemove",
      e => this.handleMouseMove(e),
      false
    );
    this.container.addEventListener(
      "touchstart",
      e => this.handleTouch(e),
      false
    );
    this.container.addEventListener(
      "touchmove",
      e => this.handleTouch(e),
      false
    );
  }

  width() {
    return this.container.clientWidth;
  }

  height() {
    return this.container.clientHeight;
  }

  // The init function is used in three.js to define the basic elements of the scene
  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width() / this.height(),
      1,
      3000
    );
    this.camera.position.set(0, 0, 128);
    // this.camera.lookAt(this.scene.position);

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width(), this.height());

    this.container.appendChild(this.renderer.domElement);

    this.raycaster = new THREE.Raycaster();
    this.simplex = new SimplexNoise();
  }

  // Scene is not visible without lights.
  // addLights() {
  //   const ambient = new THREE.AmbientLight(0xb2ebf2, 0.7);
  //   this.scene.add(ambient);

  //   const sun1 = new THREE.DirectionalLight(0xffffff, 1.0);
  //   sun1.position.set(300, 400, 175);
  //   this.scene.add(sun1);

  //   const sun2 = new THREE.DirectionalLight(0x40a040, 1.0);
  //   sun2.position.set(-100, 350, -200);
  //   this.scene.add(sun2);
  // }

  addLights() {
    // let light = new THREE.AmbientLight(0xffffff, 0.2);
    // this.scene.add(light);

    const hemlight = new THREE.HemisphereLight(0xfeee7d, 0x45d9fd, 0.3);
    this.scene.add(hemlight);

    let light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(0, 0, 1);
    light1.castShadow = true;
    light1.shadowDarkness = 0.5;
    light1.shadowCameraVisible = true;
    this.scene.add(light1);

    // fucsia
    let light2 = new THREE.DirectionalLight(0xea21a2, 0.4);
    light2.position.set(1, 1, -3);
    light2.castShadow = true;
    light2.shadowDarkness = 0.5;
    light2.shadowCameraVisible = true;
    this.scene.add(light2);

    // light blue
    let light3 = new THREE.DirectionalLight(0x9ffbfb, 0.4);
    light3.position.set(3, -1, -2);
    this.scene.add(light3);

    // electric purple
    let light4 = new THREE.DirectionalLight(0xa100ff, 0.2);
    light4.position.set(-4, 1, -1);
    this.scene.add(light4);

    // green
    let light5 = new THREE.DirectionalLight(0xa0e418, 0.1);
    light5.position.set(-10, -6, -4);
    this.scene.add(light5);
  }

  addFog() {
    this.scene.fog = new THREE.FogExp2(0xfffb85, 0.0007);
  }

  // Updating renderer and camera on resize
  handleResize() {
    this.renderer.setSize(this.width(), this.height());
    this.camera.aspect = this.width() / this.height();
    this.camera.updateProjectionMatrix();
  }

  handleMouseMove(e) {
    this.mouseMoved = true;
    this.mouseX = e.offsetX / this.width() * 2 - 1;
    this.mouseY = -(e.offsetY / this.height()) * 2 + 1;
  }

  handleTouch(e) {
    if (e.touches.length === 1) {
      this.mouseMoved = true;
      this.mouseX = e.touches[0].offsetX - this.width() / 2;
      this.mouseY = -(e.touches[0].offsetY - this.height() / 2);
    }
  }

  initPlane = () => {
    const materialColor = 0xa2a9af;
    const planeGeometry = new THREE.PlaneBufferGeometry(
      512,
      512,
      WIDTH - 1,
      WIDTH - 1
    );

    const material = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([
        THREE.ShaderLib["phong"].uniforms,
        {
          heightmap: { value: null }
        }
      ]),
      vertexShader: planeVertexShader,
      fragmentShader: THREE.ShaderChunk["meshphong_frag"]
    });

    material.lights = true;

    material.color = new THREE.Color(materialColor);
    material.specular = new THREE.Color(0x111111);
    material.shininess = 30;

    material.uniforms.diffuse.value = material.color;
    material.uniforms.specular.value = material.specular;
    material.uniforms.shininess.value = Math.max(material.shininess, 1e-4);
    material.uniforms.opacity.value = material.opacity;

    material.defines.WIDTH = WIDTH.toFixed(1);
    material.defines.BOUNDS = (512).toFixed(1);

    this.planeUniforms = material.uniforms;

    this.planeMesh = new THREE.Mesh(planeGeometry, material);
    // this.planeMesh.rotation.x = -Math.PI / 6;
    this.planeMesh.matrixAutoUpdate = false;
    this.planeMesh.updateMatrix();

    this.scene.add(this.planeMesh);
  };

  initRaycasting = () => {
    const geometryRay = new THREE.PlaneBufferGeometry(512, 512, 8, 8);

    this.meshRay = new THREE.Mesh(
      geometryRay,
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        visible: false
      })
    );
    // this.meshRay.rotation.x = -Math.PI / 6;
    this.meshRay.matrixAutoUpdate = false;
    this.meshRay.updateMatrix();

    this.scene.add(this.meshRay);

    this.gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, this.renderer);

    const heightmap0 = this.gpuCompute.createTexture();
    this.fillTexture(heightmap0);

    this.heightmapVariable = this.gpuCompute.addVariable(
      "heightmap",
      heightmapFragmentShader,
      heightmap0
    );
    this.gpuCompute.setVariableDependencies(this.heightmapVariable, [
      this.heightmapVariable
    ]);

    this.heightmapVariable.material.uniforms.mousePos = {
      value: new THREE.Vector2(10000, 10000)
    };
    this.heightmapVariable.material.uniforms.mouseSize = { value: 20 };
    this.heightmapVariable.material.uniforms.viscosityConstant = {
      value: 0.03
    };
    this.heightmapVariable.material.defines.BOUNDS = (512).toFixed(1);

    this.gpuCompute.init();

    this.smoothShader = this.gpuCompute.createShaderMaterial(
      smoothFragmentShader,
      { texture: { value: null } }
    );
  };

  fillTexture = texture => {
    const waterMaxHeight = 10;

    const noise = (x, y, z) => {
      let multR = waterMaxHeight;
      let mult = 0.025;
      let r = 0;
      for (let i = 0; i < 15; i++) {
        r += multR * this.simplex.noise(x * mult, y * mult);
        multR *= 0.53 + 0.025 * i;
        mult *= 1.25;
      }
      return r;
    };

    const pixels = texture.image.data;
    let p = 0;
    for (let j = 0; j < WIDTH; j++) {
      for (let i = 0; i < WIDTH; i++) {
        const x = i * 128 / WIDTH;
        const y = j * 128 / WIDTH;
        pixels[p + 0] = noise(x, y, 123.4);
        pixels[p + 1] = 0;
        pixels[p + 2] = 0;
        pixels[p + 3] = 1;
        p += 4;
      }
    }
  };

  loop() {
    this.render();

    if (!this.looping) {
      return;
    }

    requestAnimationFrame(() => {
      this.loop();
    });
  }

  stop = () => {
    this.looping = false;
  };

  // The camera is updated based on the position of the mouse. Particles rotate based on the time, and particles' color is changed based on the time as well
  render() {
    const uniforms = this.heightmapVariable.material.uniforms;
    if (this.mouseMoved) {
      this.raycaster.setFromCamera(
        { x: this.mouseX, y: this.mouseY },
        this.camera
      );
      const intersects = this.raycaster.intersectObject(this.meshRay);
      if (intersects.length > 0) {
        const point = intersects[0].point;
        uniforms.mousePos.value.set(point.x, -point.y);
      } else {
        uniforms.mousePos.value.set(10000, 10000);
      }
      this.mouseMoved = false;
    } else {
      uniforms.mousePos.value.set(10000, 10000);
    }

    this.gpuCompute.compute();
    this.planeUniforms.heightmap.value = this.gpuCompute.getCurrentRenderTarget(
      this.heightmapVariable
    ).texture;

    this.renderer.render(this.scene, this.camera);
  }
}
