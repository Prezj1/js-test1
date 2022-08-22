// Generate 50 objects
// Each object needs three properties:
// - name
// - group
// - id

// The properties have the following rules:

// - name must be a string
// - id must be a number. Specifically, an integer and must be unique amongst the objects (no two objects can have the same id)
// - group must be one of the following strings: "x", "y" or "z". Each of these strings needs representing in the set of generated objects (at least one object set to "x", one to "y" and one to "z")

let group = [];
let id = 0;

for (let i = 0; i < 50; i++) {
  let groupObject = {
    name: "Test",
    group: "x",
    id: id,
  };
  group.push(groupObject);
  id++;
}

console.log(group);
