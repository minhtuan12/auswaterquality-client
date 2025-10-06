const Pg = [
  // {
  //   id: "1",
  //   country_name: "Australia",
  //   title: "New South Wales",
  //   year: "2025",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium tellus duis convallis tempus leo eu aenean. Iaculis massa nisl malesuada lacinia integer nunc posuere. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Blandit quis suspendisse aliquet nisi sodales consequat magna. Ligula congue sollicitudin erat viverra ac tincidunt nam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Dui felis venenatis ultrices proin libero feugiat tristique. Cubilia curae hac habitasse platea dictumst lorem ipsum.",
  //   lat: "-33.8600",
  //   lon: "151.2111",
  //   country_iso3: "AUS",
  //   link: "/gis-map-viewer",
  //   image:
  //     "https://www.fao.org/images/homepagelibraries/giahs-map/giahs-map-image-1.jpg",
  // },
  // {
  //   id: "2",
  //   country_name: "Australia",
  //   title: "Victoria",
  //   year: "2025",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium tellus duis convallis tempus leo eu aenean. Iaculis massa nisl malesuada lacinia integer nunc posuere. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Blandit quis suspendisse aliquet nisi sodales consequat magna. Ligula congue sollicitudin erat viverra ac tincidunt nam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Dui felis venenatis ultrices proin libero feugiat tristique. Cubilia curae hac habitasse platea dictumst lorem ipsum.",
  //   lat: "-37.8136",
  //   lon: "144.9631",
  //   country_iso3: "AUS",
  //   link: "/gis-map-viewer",
  //   image:
  //     "https://www.fao.org/images/homepagelibraries/giahs-map/giahs-map-image-2.jpg",
  // },
  // {
  //   id: "3",
  //   country_name: "Australia",
  //   title: "Queensland",
  //   year: "2025",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium tellus duis convallis tempus leo eu aenean. Iaculis massa nisl malesuada lacinia integer nunc posuere. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Blandit quis suspendisse aliquet nisi sodales consequat magna. Ligula congue sollicitudin erat viverra ac tincidunt nam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Dui felis venenatis ultrices proin libero feugiat tristique. Cubilia curae hac habitasse platea dictumst lorem ipsum.",
  //   lat: "-27.4698",
  //   lon: "153.0251",
  //   country_iso3: "AUS",
  //   link: "/gis-map-viewer",
  //   image:
  //     "https://www.fao.org/images/homepagelibraries/giahs-map/giahs-map-image-3.jpg",
  // },
  // {
  //   id: "4",
  //   country_name: "Australia",
  //   title: "Western Australia",
  //   year: "2025",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium tellus duis convallis tempus leo eu aenean. Iaculis massa nisl malesuada lacinia integer nunc posuere. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Blandit quis suspendisse aliquet nisi sodales consequat magna. Ligula congue sollicitudin erat viverra ac tincidunt nam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Dui felis venenatis ultrices proin libero feugiat tristique. Cubilia curae hac habitasse platea dictumst lorem ipsum.",
  //   lat: "-31.9403",
  //   lon: "115.8572",
  //   country_iso3: "AUS",
  //   link: "/gis-map-viewer",
  //   image:
  //     "https://www.fao.org/images/homepagelibraries/giahs-map/giahs-map-image-4.jpg",
  // },
  // {
  //   id: "5",
  //   country_name: "Australia",
  //   title: "South Australia",
  //   year: "2025",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium tellus duis convallis tempus leo eu aenean. Iaculis massa nisl malesuada lacinia integer nunc posuere. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Blandit quis suspendisse aliquet nisi sodales consequat magna. Ligula congue sollicitudin erat viverra ac tincidunt nam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Dui felis venenatis ultrices proin libero feugiat tristique. Cubilia curae hac habitasse platea dictumst lorem ipsum.",
  //   lat: "-34.9285",
  //   lon: "138.6007",
  //   country_iso3: "AUS",
  //   link: "/gis-map-viewer",
  //   image:
  //     "https://www.fao.org/images/homepagelibraries/giahs-map/giahs-map-image-5.jpg",
  // },
  // {
  //   id: "6",
  //   country_name: "Australia",
  //   title: "Tasmania",
  //   year: "2025",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium tellus duis convallis tempus leo eu aenean. Iaculis massa nisl malesuada lacinia integer nunc posuere. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Blandit quis suspendisse aliquet nisi sodales consequat magna. Ligula congue sollicitudin erat viverra ac tincidunt nam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Dui felis venenatis ultrices proin libero feugiat tristique. Cubilia curae hac habitasse platea dictumst lorem ipsum.",
  //   lat: "-42.8821",
  //   lon: "147.3272",
  //   country_iso3: "AUS",
  //   link: "/gis-map-viewer",
  //   image:
  //     "https://www.fao.org/images/homepagelibraries/giahs-map/giahs-map-image-6.jpg",
  // },
  // {
  //   id: "7",
  //   country_name: "Australia",
  //   title: "Australian Capital Territory (ACT)",
  //   year: "2025",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium tellus duis convallis tempus leo eu aenean. Iaculis massa nisl malesuada lacinia integer nunc posuere. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Blandit quis suspendisse aliquet nisi sodales consequat magna. Ligula congue sollicitudin erat viverra ac tincidunt nam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Dui felis venenatis ultrices proin libero feugiat tristique. Cubilia curae hac habitasse platea dictumst lorem ipsum.",
  //   lat: "-35.2809",
  //   lon: "149.1300",
  //   country_iso3: "AUS",
  //   link: "/gis-map-viewer",
  //   image:
  //     "https://www.fao.org/images/homepagelibraries/giahs-map/giahs-map-image-7.jpg",
  // },
  // {
  //   id: "8",
  //   country_name: "Australia",
  //   title: "Northern Territory",
  //   year: "2025",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium tellus duis convallis tempus leo eu aenean. Iaculis massa nisl malesuada lacinia integer nunc posuere. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Blandit quis suspendisse aliquet nisi sodales consequat magna. Ligula congue sollicitudin erat viverra ac tincidunt nam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Dui felis venenatis ultrices proin libero feugiat tristique. Cubilia curae hac habitasse platea dictumst lorem ipsum.",
  //   lat: "-12.4634",
  //   lon: "130.8456",
  //   country_iso3: "AUS",
  //   link: "/gis-map-viewer",
  //   image:
  //     "https://www.fao.org/images/homepagelibraries/giahs-map/giahs-map-image-8.jpg",
  // },
];
