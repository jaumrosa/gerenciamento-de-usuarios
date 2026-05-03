let fields = document.querySelectorAll("#form-user-create [name]");
let user = {};

document.getElementById("form-user-create").addEventListener("submit", (event) => {
  event.preventDefault();
  fields.forEach((field, index) => {
    (field.name === "gender" && field.checked) ? user[field.name] = field.value : user[field.name] = field.value;   
  });
  console.log(user);
});