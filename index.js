// a reference to the enclosing scene element.
// We will append newly made spheres directly to this.
const SCENE = document.querySelector('a-scene')

// a few random starting positions we can use to make spheres.
const startPositions = [
  [-3, -2, -4],
  [-1, 5, 2],
  [4, -5, -1],
  [2, 3, 5]
]

const colors = [
  "red",
  "blue",
  "yellow",
  "pink"
]

// removes and returns a random element from an array
function sample(arr) {
  const randIdx = Math.floor(Math.random() * arr.length)
  const value = arr[randIdx]
  arr.splice(randIdx, 1)
  return value
}

function addEntityToScene(entity) {
  SCENE.appendChild(entity)
}

function createSphere() {
  const newSphere = document.createElement('a-sphere')
  const color = sample(colors)
  const coords = sample(startPositions).join(' ')
  newSphere.setAttribute("radius", Math.ceil(Math.random() * 3))
  newSphere.setAttribute("color", color)
  newSphere.setAttribute("position", coords)
  return newSphere
}

function createSpheres() {
  const newSphere1 = document.createElement('a-spheres')
  const newSphere2 = document.createElement('a-spheres')

  addEntityToScene(entity)
  
  newSphere1.setAttribute("radius", Math.random() * 3))
  newSphere1.setAttribute("color", color)
  newSphere1.setAttribute("position", startPositions[Math.random()])
  
  newSphere2.setAttribute("radius", Math.ceil(Math.random() * 3))
  newSphere2.setAttribute("color", color[Math.random()])
  newSphere2.setAttribute("position", Math.random())
  
  return newSphere1
  return newSphere2
}

function addBobAnimationToElement() {
  animation = document.createElement('a-animation')
  
  animation.setAttribute('attribute', 'rotation')
  animation.setAttribute('dur', '1000')
  animation.setAttribute('fill', 'none')
  animation.setAttribute('from', '0 0 0')
  animation.setAttribute('to', '0 360 0')
  animation.setAttribute('easing', 'linear')
  animation.setAttribute('repeat', 'indefinite')
}
