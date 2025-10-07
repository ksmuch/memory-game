import { RANDOMIZED } from "./settings";

const cats = [{
  'id': 'YdAqiUkUoWA',
  'url': './assets/cats-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': './assets/cats-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': './assets/cats-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': './assets/cats-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': './assets/cats-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': './assets/cats-6.jpg',
  'description': '',
}];

const cars = [{
  'id': 'YdAqiUkUoWA',
  'url': './assets/cars-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': './assets/cars-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': './assets/cars-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': './assets/cars-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': './assets/cars-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': './assets/cars-6.jpg',
  'description': '',
}];

const flowers = [{
  'id': 'YdAqiUkUoWA',
  'url': './assets/flowers-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': './assets/flowers-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': './assets/flowers-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': './assets/flowers-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': './assets/flowers-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': './assets/flowers-6.jpg',
  'description': '',
}];

const imageCollection = {
  flowers, cats, cars,
};

export const results = [
  { name: 'Аня', stepsCount: 16 },
  { name: 'Вася', stepsCount: 12 },
  { name: 'Петя', stepsCount: 19 }
];

function duplicate(arr) {
  return arr.concat(
    arr.map(item => ({
      ...item, 
      id: item.id + '-1'
    }))
  );
}

export const getImages = (type) => RANDOMIZED ? 
  duplicate(imageCollection[type])
  .sort(() => 0.5 - Math.random()) : duplicate(imageCollection[type]);
