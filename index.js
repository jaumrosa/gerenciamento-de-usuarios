let fields = document.querySelectorAll("#form-user-create [name]");
let user = {};

function addLine(dataUser){
  let tr = document.createElement("tr");
  tr.innerHTML = `
      <tr>
        <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${dataUser.admin}</td>
        <td>${dataUser.birth}</td>
        <td>
          <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
        </td>
      </tr>
 `;
  document.querySelector("#table-users").appendChild(tr);
}

document.querySelector("#form-user-create").addEventListener("submit", (event) => {
  event.preventDefault();
  fields.forEach((field, index) => {
    (field.name === "gender" && field.checked) ? user[field.name] = field.value : user[field.name] = field.value;   
  });
  addLine(user);
});