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

let component = {title: "My Component"};

function processTitle ({ title, width = 100,height = 50}) {}
processTitle(component);
processTitle({title: "Second Component", height: 450, width: 460});

console.log(component)

//

let options = { width: 200, height: 100, title: 'My Component' }
let { title, ...rest } = options
console.log(title) // My Component
console.log(rest) // { width: 200, height: 100 }