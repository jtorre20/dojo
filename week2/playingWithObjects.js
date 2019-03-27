var users = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "David", age: 27 }
];

function iterateObjects(users) {
  for (let i = 0; i < users.length; i++) {
    console.log("name: ", users[i].name, "age: ", users[i].age);
  }
}
