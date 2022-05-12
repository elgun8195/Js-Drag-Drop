const form = document.querySelector("form");
const todoListBox = document.querySelector(".todo-list-box");
const input = document.querySelector(".form-control");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim().length === 0) {
    alert("error!");
  } else {
    const todoListItems = Array.from(
      document.querySelectorAll(".todo-list-item span")
    );
    if (!todoListItems.find((x) => x.textContent === input.value)) {
      todoListBox.innerHTML += `
                <div class="todo-list-item" draggable="true" id="dragId">
                    <span id="dallas">${input.value}</span>
                    <button class="btn remove-btn">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
              `;
    } else {
      alert("error!!");
    }

    const removeBtn = document.querySelectorAll(".remove-btn");

    removeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
      });
    });
  }
});


let area=document.querySelector(".area");
let dallas=document.getElementById("dallas");
area.ondragover=function(e){
  e.preventDefault();
}

area.ondrop=function(){
  area.appendChild(dallas);
}