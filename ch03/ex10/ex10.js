const data = {
  id: 1,
  name: "name",
  email: "abc@example.com",
};

for (const property in data) {
  console.log(property);
}

for (const property in data) {
  console.log(data[property]);
}
