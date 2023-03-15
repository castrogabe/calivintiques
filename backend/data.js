const data = {
  products: [
    {
      name: 'Wooden Snuff Box',
      slug: 'Snuff box',
      category: 'Wood',
      image: '/images/1a.jpg',
      price: 60,
      countInStock: 1,
      MadeIn: 'China',
      Finish: 'Wood',
      rating: 5,
      numReviews: 1,
      description: 'Wooden snuffbox with tools.',
    },
    {
      name: 'Civil War Era Trunk',
      slug: 'Trunk',
      category: 'Wood',
      image: '/images/2a.jpg',
      price: 200,
      countInStock: 1,
      MadeIn: 'American',
      Finish: 'Wood',
      rating: 4.0,
      numReviews: 1,
      description:
        'Wooden Civil Era round top trunk, good condition and no key.',
    },
    {
      name: 'Pewter Hand Mirror',
      slug: 'Mirror',
      category: 'Metal',
      image: '/images/3b.jpg',
      price: 80,
      countInStock: 1,
      MadeIn: 'England',
      Finish: 'Pewter',
      rating: 4.5,
      numReviews: 1,
      description:
        'Handheld Antique Pewter Mirror, glass shows some wear as expected.',
    },
    {
      name: 'Asian Snuff Bottle',
      slug: 'Snuff Bottle',
      category: 'Asian',
      image: '/images/4a.jpg',
      price: 50,
      countInStock: 1,
      MadeIn: 'China',
      Finish: 'Black Chrome',
      rating: 5,
      numReviews: 1,
      description:
        'Handmade with metal, camel bone, and wood.  Asian snuff bottle, has makers mark on bottom.',
    },
    {
      name: 'Wood and Metal Icon',
      slug: 'Religious Icon',
      category: 'Religious',
      image: '/images/5a.jpg',
      price: 100,
      countInStock: 1,
      MadeIn: 'Italy',
      Finish: 'Metal and wood',
      rating: 5,
      numReviews: 1,
      description: 'Religious Icon from Italy, early 1920.',
    },
    {
      name: 'Rug',
      slug: 'Rug',
      category: 'Textile',
      image: '/images/6a.jpg',
      price: 60,
      countInStock: 1,
      MadeIn: 'Turkey',
      Finish: 'Woven',
      rating: 5,
      numReviews: 1,
      description: 'Machine made lightweight rug.',
    },

    {
      name: 'Wood Clock',
      slug: 'WOOD Clock',
      category: 'Clock',
      image: '/images/7a.jpg',
      price: 200,
      countInStock: 1,
      MadeIn: 'England',
      Finish: 'Wood, Enamel',
      rating: 5,
      numReviews: 1,
      description:
        'English Mantle Clock, Turn of the century antique, work great.',
    },
    {
      name: 'Asian Clock',
      slug: 'Asian Clock',
      category: 'Clock',
      image: '/images/8a.jpg',
      price: 50,
      countInStock: 1,
      MadeIn: 'American',
      Finish: 'Wood and Stencil',
      rating: 5,
      numReviews: 1,
      description:
        'Made in America, Asian inspired Quartz AA battery table top clock',
    },
    {
      name: 'Rose Medallion Plate',
      slug: 'Plate',
      category: 'Asian',
      image: '/images/9a.jpg',
      price: 100,
      countInStock: 1,
      MadeIn: 'China',
      Finish: 'Ceramic',
      rating: 5,
      numReviews: 1,
      description:
        'Hand painted Chinese Rose Medallion Decorative plate, makers mark on bottom.',
    },
    {
      name: 'Rose Medallion Vase',
      slug: 'Vase',
      category: 'Asian',
      image: '/images/10a.jpg',
      price: 250,
      countInStock: 1,
      MadeIn: 'China',
      Finish: 'Ceramic',
      rating: 5,
      numReviews: 1,
      description:
        'Hand painted Chinese Rose Medallion Decorative vase, makers mark on bottom.',
    },
    {
      name: 'Metal Asian Horse',
      slug: 'Horse',
      category: 'Asian',
      image: '/images/11a.jpg',
      price: 25,
      countInStock: 1,
      MadeIn: 'China',
      Finish: 'Ceramic',
      rating: 5,
      numReviews: 1,
      description:
        'Hand painted Chinese Rose Medallion Decorative plate, makers mark on bottom.',
    },
    {
      name: 'Wood Bowl Branch',
      slug: 'Bowl',
      category: 'Wood',
      image: '/images/12b.jpg',
      price: 25,
      countInStock: 1,
      MadeIn: 'American',
      Finish: 'Wood',
      rating: 5,
      numReviews: 1,
      description:
        'Hand Made decorative art piece, Mesquite wood hand turned by Mark Jackofsky.',
    },
    {
      name: 'Asian Rice Container',
      slug: 'Container',
      category: 'Asian',
      image: '/images/13a.jpg',
      price: 300,
      countInStock: 1,
      MadeIn: 'China',
      Finish: 'Painted Wood',
      rating: 5,
      numReviews: 1,
      description:
        'Large Chinese hand painted wooden rice container, 1930 era.',
    },
    {
      name: 'Pablo Picasso Print',
      slug: 'Art Print',
      category: 'Art',
      image: '/images/14a.jpg',
      price: 500,
      countInStock: 1,
      MadeIn: 'Spain',
      Finish: 'Paper',
      rating: 5,
      numReviews: 1,
      description: 'Print by Pablo Picasso.',
    },
    {
      name: 'Alice Sweede Painting',
      slug: 'Art Painting',
      category: 'Art',
      image: '/images/15a.jpg',
      price: 300,
      countInStock: 1,
      MadeIn: 'American',
      Finish: 'Oil Paint',
      rating: 5,
      numReviews: 1,
      description: 'Roses painting done by Alice Sweede.',
    },
    {
      name: 'Granite Foot Stool',
      slug: 'Foot Stool',
      category: 'Asian',
      image: '/images/16a.jpg',
      price: 300,
      countInStock: 1,
      MadeIn: 'China',
      Finish: 'Granite',
      rating: 5,
      numReviews: 1,
      description: 'Hand carved Chinese foot stool.',
    },
    {
      name: 'Spiral Staircase',
      slug: 'Staircase',
      category: 'American',
      image: '/images/17a.jpg',
      price: 500,
      countInStock: 1,
      MadeIn: 'American',
      Finish: 'Wood',
      rating: 5,
      numReviews: 1,
      description:
        'Hand made spiral staircase inspired by Sam Maloof staircase, Curly Maple base, Apitong wood stairs. ',
    },
  ],
};
export default data;
