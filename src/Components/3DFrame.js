import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import td from './frameShelf.gltf'

export default function TFrame() {
  
    useEffect(()=>{const canvas = document.querySelector('.webgl')
    const scene = new THREE.Scene()

    const loader = new GLTFLoader()
    loader.load({td}, function
    (gltf){
        console.log(gltf)
    }, function(err){
        console.log(err)
    })

 

    const sizes ={
        width: '200px',
        height: '200px'
    }

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0, 1,2)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas:canvas   
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.outputEncoding = true
renderer.render(scene, camera)})
  
  return (
   <canvas className="webgl">

   </canvas>
  );
}
