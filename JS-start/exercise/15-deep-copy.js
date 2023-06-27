const obj = {
  name: "otter",
  gender: "male",
  favoriteFood: {
    first: "sushi",
    second: "hamburger",
  },
};

const copy = JSON.stringify(obj);

console.log(copy);
// {"name":"otter","gender":"male","favoriteFood":{"first":"sushi","second":"hamburger"}}
