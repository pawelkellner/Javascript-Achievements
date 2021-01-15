// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(0, 1.54, -5);
minecraftModel.setScale(0.1, 0.1, 0.1);
minecraftModel.setRotation(0, -36.95, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0, -5);

// create some text
const testText = new Text('MONKE ALL AROUND');
testText.setPosition(1.5, 0, -5);
testText.setFontsize(10);

// create an image
const image = new XRImage('assets/images/monke.jpg');
image.setPosition(4.401, 2.458, -5);

const image2 = new XRImage('assets/images/monke2.jpg');
image2.setPosition(6.42837, 2.39465, -5);

const image3 = new XRImage('assets/images/monke3.jpg');
image3.setPosition(7.83833, 2.1927, -5);

// create a 360 image
const image360 = new Sky('assets/360_world.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));