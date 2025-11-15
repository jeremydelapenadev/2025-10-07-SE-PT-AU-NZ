const [jcFirst, jcLast, ...jcTitles] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the",
  "Roman",
  "Republic",
];
console.log(jcTitles); // [ 'Consul', 'of the', 'Roman', 'Republic' ]
console.log(jcTitles.length); // 4

let { width, height, title} = {title: "My Component"};
console.log(width, height, title); // undefined, undefined, My Component

let { width1 = 200, height1 = 200, title1} = {title1: "My Component"};
console.log(width1, height1, title1);