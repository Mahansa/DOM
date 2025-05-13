
function Tambah() {
    let i = document.getElementById("inputText").value;

    if (i.trim() === "") {
        alert("Masukkan teks terlebih dahulu!");
        return;
    }

    let listItem = document.createElement('li');
    listItem.innerText = i;

  
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Hapus";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function () {
        listItem.remove();
        updateLocalStorage();
    };

    listItem.appendChild(deleteBtn);

    let list = document.getElementById("list");
    list.appendChild(listItem);

    document.getElementById("inputText").value = "";
    updateLocalStorage();
}

function Hapus() {
    document.getElementById("list").innerHTML = "";
    localStorage.removeItem("todolist");
}

function updateLocalStorage() {
    let list = document.getElementById("list");
    let currentList = Array.from(list.children).map(li => li.childNodes[0].textContent.trim());
    localStorage.setItem("todolist", JSON.stringify(currentList));
}

window.onload = function() {
    let savedList = JSON.parse(localStorage.getItem("todolist"));
    if (savedList) {
        let list = document.getElementById("list");
        savedList.forEach(item => {
            let listItem = document.createElement('li');
            listItem.innerText = item;

            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = "Hapus";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.onclick = function () {
                listItem.remove();
                updateLocalStorage();
            };

            listItem.appendChild(deleteBtn);
            list.appendChild(listItem);
        });
    }
}

