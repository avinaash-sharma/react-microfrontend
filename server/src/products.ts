export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    description: 'This is a short description of Product 1.',
    image: 'http://localhost:8001/images/one.jpg',
    longDescription: 'This is a longer description of Product 1.',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
    description: 'This is a short description of Product 2.',
    image: 'http://localhost:8001/images/two.jpg',
    longDescription: 'This is a longer description of Product 2.',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 5.99,
    description: 'This is a short description of Product 3.',
    image: 'http://localhost:8001/images/three.jpg',
    longDescription: 'This is a longer description of Product 3.',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 8.99,
    description: 'This is a short description of Product 4.',
    image: 'http://localhost:8001/images/four.jpg',
    longDescription: 'This is a longer description of Product 4.',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 12.99,
    description: 'This is a short description of Product 5.',
    image: 'http://localhost:8001/images/five.jpg',
    longDescription: 'This is a longer description of Product 5.',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 15.99,
    description: 'This is a short description of Product 6.',
    image: 'http://localhost:8001/images/six.jpg',
    longDescription: 'This is a longer description of Product 6.',
  },
  {
    id: 7,
    name: 'Product 7',
    price: 7.99,
    description: 'This is a short description of Product 7.',
    image: 'http://localhost:8001/images/seven.jpg',
    longDescription: 'This is a longer description of Product 7.',
  },
  {
    id: 8,
    name: 'Product 8',
    price: 22.99,
    description: 'This is a short description of Product 8.',
    image: 'http://localhost:8001/images/eight.jpg',
    longDescription: 'This is a longer description of Product 8.',
  },
  {
    id: 9,
    name: 'Product 9',
    price: 16.99,
    description: 'This is a short description of Product 9.',
    image: 'http://localhost:8001/images/nine.jpg',
    longDescription: 'This is a longer description of Product 9.',
  },
];

export default products;
