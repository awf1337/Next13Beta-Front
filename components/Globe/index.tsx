import { OrbitControls } from '@three-ts/orbit-controls';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import pointsCoordonate from './coordonates/pointsCoordonateGlobe.json';
import pointsCoordonateNY from './coordonates/pointsCoordonateNY.json';
import pointsCoordonateSH from './coordonates/pointsCoordonateSH.json';
import pointsCoordonateUK from './coordonates/pointsCoordonateUK.json';

const defaultGlobeColor = '#3993fe'; // modify this to change the globe color

const Globe = () => {
  const globeRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const createGlobe = () => {
      const canvas = canvasRef.current;

      const globeRadius = 100;
      const globeWidth = 4098 / 2;
      const globeHeight = 1968 / 2;

      const convertFlatCoordsToSphereCoords = (x, y) => {
        let latitude = ((x - globeWidth) / globeWidth) * -180;
        let longitude = ((y - globeHeight) / globeHeight) * -90;
        latitude = (latitude * Math.PI) / 180;
        longitude = (longitude * Math.PI) / 180;
        const radius = Math.cos(longitude) * globeRadius;

        return {
          x: Math.cos(latitude) * radius,
          y: Math.sin(longitude) * globeRadius,
          z: Math.sin(latitude) * radius,
        };
      };

      const makeMagic = (points, color) => {
        const mergedGeometry = new THREE.Geometry();
        const pointGeometry = new THREE.SphereGeometry(0.5, 1, 1);
        const pointMaterialGrey = new THREE.MeshBasicMaterial({
          color: color,
        });

        for (const point of points) {
          const { x, y, z } = convertFlatCoordsToSphereCoords(point.x, point.y);

          if (x && y && z) {
            pointGeometry.translate(x, y, z);
            mergedGeometry.merge(pointGeometry);
            pointGeometry.translate(-x, -y, -z);
          }
        }

        return new THREE.Mesh(mergedGeometry, pointMaterialGrey);
      };

      const createScene = (globeShape) => {
        const container = globeRef.current;
        if (!container) return;

        if (!canvas) {
          throw new Error('Canvas element not found.');
        }

        const { width, height } = container.getBoundingClientRect();

        console.log('container', width, height);
        console.log('canvas', canvas);
        const ratio = 1;
        const renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
        });
        renderer.setSize(width, height / ratio);
        // 1. Setup scene
        const scene = new THREE.Scene();
        // 2. Setup camera
        const camera = new THREE.PerspectiveCamera(
          45,
          (width / height) * ratio
        );

        // 3. Setup renderer
        globeShape.forEach((shape) => scene.add(shape));

        // Setup orbital controls
        const controls = new OrbitControls(camera, canvas);

        controls.enableKeys = false;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableDamping = false;
        controls.enableRotate = true;
        controls.autoRotate = true;
        camera.position.z = -265;
        camera.position.y = 120;

        const animate = () => {
          // orbitControls.autoRotate is enabled so orbitControls.update
          // must be called inside animation loop.
          controls.update();
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        animate();
      };

      if (!canvas) {
        throw new Error('Canvas element not found.');
      }

      canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      const defaultGlobe = makeMagic(pointsCoordonate, defaultGlobeColor);
      const obj2 = makeMagic(pointsCoordonateUK, 'green');
      const obj3 = makeMagic(pointsCoordonateNY, 'red');
      const obj4 = makeMagic(pointsCoordonateSH, 'red');

      createScene([defaultGlobe, obj2, obj3, obj4]);
    };

    createGlobe();
  }, []);

  return (
    <div ref={globeRef} className="w-100 h-5/6 flex flex-col justify-center">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Globe;
