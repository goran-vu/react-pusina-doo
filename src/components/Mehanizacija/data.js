export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1200, min: 700 },
    items: 2,
  },
  // tablet: {
  //   breakpoint: { max: 800, min: 634 },
  //   items: 2,
  // },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};

export const productData = [
  {
    id: 1,
    imageurl:require('../../images/galerija/rovokopac.jpeg'),
    name: "Rovokopači",
    price: "20",
  },
  {
    id: 2,
    imageurl:require('../../images/galerija/busilica.jpeg'),
    name: "Bušilice",
    price: "1",
  },
  {
    id: 3,
    imageurl:require('../../images/galerija/traktor.jpeg'),
    name: "Traktori",
    price: "2",
  },
  {
    id: 4,
    imageurl:require('../../images/galerija/kamion.jpeg'),
    name: "Kamioni",
    price: "10",
  },
  {
    id: 5,
    imageurl:require('../../images/galerija/utovarivac.jpeg'),
    name: "Utovarivači",
    price: "6",
  },
  {
    id: 6,
    imageurl:require('../../images/galerija/buldozer.jpeg'),
    name: "Buldožeri",
    price: "3",
  },
  {
    id: 7,
    imageurl:require('../../images/galerija/drobilica.jpeg'),
    name: "Drobilice",
    price: "7",
  },
  {
    id: 8,
    imageurl:require('../../images/galerija/dumper.jpeg'),
    name: "Dumperi",
    price: "8",
  },
  {
    id: 9,
    imageurl:require('../../images/galerija/valjak.jpeg'),
    name: "Valjci",
    price: "3",
  },
];
