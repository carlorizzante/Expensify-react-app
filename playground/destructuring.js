const person1 = {
  name: "Jon Snow",
  age: 27,
  location: {
    city: "The Great Wall",
    temp: -64
  }
};

const person2 = {
  age: 29,
  location: {
    city: "Winterfell",
    temp: 14
  }
};

var { name: fullname = "Anomymous", age } = person1;
console.log(`${fullname} is ${age} year(s) old.`);

var { name: fullname = "Anomymous", age } = person2;
console.log(`${fullname} is ${age} year(s) old.`);

// ...

const book = {
  title: "Ego is the enemoy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
}
const { name: publisherName = "Self-published" } = book.publisher;
console.log(publisherName);

// ...

const address = ["Arkonagade", 3, "3.", 1726, "Copenhagen V", "Denmark"];

const [ street, n, floor, zip, city, country] = address;
console.log(`I live in ${street} ${n} ${floor} - ${zip} ${city}, ${country}.`);

// ...

const items = ["Coffee", 2, 2.55, 2,75];

const [ coffee, , price] = items;
console.log(`A medium ${coffee} costs $${price}.`);
