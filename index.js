let fields = document.querySelectorAll("#form-user-create [name]");
fields.forEach((field, index) => {
  (field.name === "gender" && field.checked) ? console.log(field, "Esse é o gênero selecionado no input") : ""   
  }
);