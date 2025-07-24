import * as THREE from 'three'

// 创建3D场景对象Scene
const scene = new THREE.Scene()

// 辅助观察的坐标系
// const axesHelper = new THREE.AxesHelper(150)

// 将坐标系添加到场景中
// scene.add(axesHelper)

// 设置场景的背景色，默认黑色
scene.background = new THREE.Color(0xFFFFCC)

// 创建一个长方形的几何对象Geometer
const geometer = new THREE.BoxGeometry(100, 100, 100)

// 创建一个材料对象Material
const material = new THREE.MeshLambertMaterial({
  color: 0xFF00CC, // 颜色
  // transparent: true, // 开启透明度
  // opacity: 0.5 // 透明度
})

const mesh = new THREE.Mesh(geometer, material)

mesh.position.set(50, 50, 50)

scene.add(mesh)

// 光源
const pointLight = new THREE.PointLight(0xFFFFFF, 1.0)

pointLight.decay = 0.0

pointLight.intensity = 1.0
pointLight.position.set(400, 400, 150)

scene.add(pointLight)

// 定义相机输出画布的尺寸
const width = window.innerWidth
const height = window.innerHeight

const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000)

camera.position.set(280, 300, 300)

camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer({
  // alpha: true, // 是否有透明度
  antialias: true, // 抗锯齿
  // precision: 'high'
})

// render.setClearAlpha(0) // 设置透明度

renderer.setSize(width, height)
renderer.render(scene, camera)

document.getElementById('app')?.appendChild(renderer.domElement)

function render() {
  renderer.render(scene, camera)
  mesh.rotateX(0.01)
  mesh.rotateY(0.02)
  mesh.rotateZ(0.01)
  requestAnimationFrame(render)
}

render()
