import * as THREE from 'three'

// 创建3D场景对象Scene
const scene = new THREE.Scene()

// 辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(150)

// 将坐标系添加到场景中
scene.add(axesHelper)

// 设置场景的背景色，默认黑色
scene.background = new THREE.Color(0xFFFFCC)

// 创建一个长方形的几何对象Geometer
const geometer = new THREE.BoxGeometry(100, 100, 100)

// 创建一个材料对象Material
const material = new THREE.MeshBasicMaterial({
  color: 0xFF00CC, // 颜色
  transparent: true, // 开启透明度
  opacity: 0.5 // 透明度
})

const mesh = new THREE.Mesh(geometer, material)

mesh.position.set(50, 50, 50)

scene.add(mesh)

// 定义相机输出画布的尺寸
const width = 800
const height = 500

const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000)

camera.position.set(280, 300, 300)

camera.lookAt(0, 0, 0)

const render = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
  precision: 'high'
})

// render.setClearAlpha(0)

render.setSize(width, height)
render.render(scene, camera)

document.getElementById('app')?.appendChild(render.domElement)
