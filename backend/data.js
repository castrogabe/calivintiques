// all lowercase for product schema
// http://localhost:8000/api/seed

import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Gabriel Castro',
      email: 'gabewebdevelopment@gmail.com',
      password: bcrypt.hashSync('admin1234'),
      isAdmin: true,
    },
    {
      name: 'Jack',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Wooden Snuff Box',
      slug: 'Snuff box',
      category: 'Wood',
      image: '/images/1a.jpg',
      price: 60,
      countInStock: 1,
      from: 'China',
      finish: 'Wood',
      rating: 5,
      numReviews: 1,
      description: 'Wooden snuffbox with tools.',
    },
    {
      // _id: '2',
      name: 'Civil War Era Trunk',
      slug: 'Trunk',
      category: 'Wood',
      image: '/images/2a.jpg',
      price: 200,
      countInStock: 1,
      from: 'American',
      finish: 'Wood',
      rating: 4.0,
      numReviews: 1,
      description:
        'Wooden Civil Era round top trunk, good condition and no key.',
    },
    {
      // _id: '3',
      name: 'Pewter Hand Mirror',
      slug: 'Mirror',
      category: 'Metal',
      image: '/images/3b.jpg',
      price: 80,
      countInStock: 1,
      from: 'England',
      finish: 'Pewter',
      rating: 4.5,
      numReviews: 1,
      description:
        'Handheld Antique Pewter Mirror, glass shows some wear as expected.',
    },
    {
      // _id: '4',
      name: 'Asian Snuff Bottle',
      slug: 'Snuff Bottle',
      category: 'Asian',
      image: '/images/4a.jpg',
      price: 50,
      countInStock: 1,
      from: 'China',
      finish: 'Bone & Metal',
      rating: 5,
      numReviews: 1,
      description:
        'Handmade with metal, camel bone, and wood.  Asian snuff bottle, has makers mark on bottom.',
    },
    {
      // _id: '5',
      name: 'Wood and Metal Icon',
      slug: 'Religious Icon',
      category: 'Religious',
      image: '/images/5a.jpg',
      price: 100,
      countInStock: 1,
      from: 'Italy',
      finish: 'Metal and wood',
      rating: 5,
      numReviews: 1,
      description: 'Religious Icon from Italy, early 1920.',
    },
    {
      // _id: '6',
      name: 'Rug',
      slug: 'Rug',
      category: 'Textile',
      image: '/images/6a.jpg',
      price: 60,
      countInStock: 1,
      from: 'Turkey',
      finish: 'Woven',
      rating: 5,
      numReviews: 1,
      description: 'Machine made lightweight rug.',
    },

    {
      // _id: '7',
      name: 'Wood Clock',
      slug: 'WOOD Clock',
      category: 'Clock',
      image: '/images/7a.jpg',
      price: 200,
      countInStock: 1,
      from: 'England',
      finish: 'Wood, Enamel',
      rating: 5,
      numReviews: 1,
      description:
        'English Mantle Clock, Turn of the century antique, work great.',
    },
    {
      // _id: '8',
      name: 'Asian Clock',
      slug: 'Asian Clock',
      category: 'Clock',
      image: '/images/8a.jpg',
      price: 50,
      countInStock: 1,
      from: 'American',
      finish: 'Wood and Stencil',
      rating: 5,
      numReviews: 1,
      description:
        'Made in America, Asian inspired Quartz AA battery table top clock',
    },
    {
      // _id: '9',
      name: 'Rose Medallion Plate',
      slug: 'Plate',
      category: 'Asian',
      image: '/images/9a.jpg',
      price: 100,
      countInStock: 1,
      from: 'China',
      finish: 'Ceramic',
      rating: 5,
      numReviews: 1,
      description:
        'Hand painted Chinese Rose Medallion Decorative plate, makers mark on bottom.',
    },
    {
      // _id: '10',
      name: 'Rose Medallion Vase',
      slug: 'Vase',
      category: 'Asian',
      image: '/images/10a.jpg',
      price: 250,
      countInStock: 1,
      from: 'China',
      finish: 'Ceramic',
      rating: 5,
      numReviews: 1,
      description:
        'Hand painted Chinese Rose Medallion Decorative vase, makers mark on bottom.',
    },
    {
      // _id: '11',
      name: 'Metal Asian Horse',
      slug: 'Horse',
      category: 'Asian',
      image: '/images/11a.jpg',
      price: 25,
      countInStock: 1,
      from: 'China',
      finish: 'Ceramic',
      rating: 5,
      numReviews: 1,
      description:
        'Hand painted Chinese Rose Medallion Decorative plate, makers mark on bottom.',
    },
    {
      // _id: '12',
      name: 'Wood Bowl Branch',
      slug: 'Bowl',
      category: 'Wood',
      image: '/images/12b.jpg',
      price: 25,
      countInStock: 1,
      from: 'American',
      finish: 'Wood',
      rating: 5,
      numReviews: 1,
      description:
        'Hand Made decorative art piece, Mesquite wood hand turned by Mark Jackofsky.',
    },
    {
      // _id: '13',
      name: 'Asian Rice Container',
      slug: 'Container',
      category: 'Asian',
      image: '/images/13a.jpg',
      price: 300,
      countInStock: 1,
      from: 'China',
      finish: 'Painted Wood',
      rating: 5,
      numReviews: 1,
      description:
        'Large Chinese hand painted wooden rice container, 1930 era.',
    },
    {
      // _id: '14',
      name: 'Pablo Picasso Print',
      slug: 'Art Print',
      category: 'Art',
      image: '/images/14a.jpg',
      price: 500,
      countInStock: 1,
      from: 'Spain',
      finish: 'Paper',
      rating: 5,
      numReviews: 1,
      description: 'Print by Pablo Picasso.',
    },
    {
      // _id: '15',
      name: 'Alice Sweede Painting',
      slug: 'Art Painting',
      category: 'Art',
      image: '/images/15a.jpg',
      price: 300,
      countInStock: 1,
      from: 'American',
      finish: 'Oil Paint',
      rating: 5,
      numReviews: 1,
      description: 'Roses painting done by Alice Sweede.',
    },
    {
      // _id: '16',
      name: 'Granite Foot Stool',
      slug: 'Foot Stool',
      category: 'Asian',
      image: '/images/16a.jpg',
      price: 300,
      countInStock: 1,
      from: 'China',
      finish: 'Granite',
      rating: 5,
      numReviews: 1,
      description: 'Hand carved Chinese foot stool.',
    },
    {
      // _id: '17',
      name: 'Spiral Staircase',
      slug: 'Staircase',
      category: 'American',
      image: '/images/17a.jpg',
      price: 500,
      countInStock: 1,
      from: 'American',
      finish: 'Wood',
      rating: 5,
      numReviews: 1,
      description:
        'Hand made spiral staircase inspired by Sam Maloof staircase, Curly Maple base, Apitong wood stairs, spire, and 4 layer lamination handrail, made by Gabe Castro.',
    },
  ],
};
export default data;
