function Tambah() {
    let i = document.getElementById("inputText").value;

    if (i.trim() === "") {
        alert("Masukkan teks terlebih dahulu!");
        return;
    }

    let listItem = document.createElement('li');
    listItem.innerText = i;

    let list = document.getElementById("list");
    list.appendChild(listItem);

    document.getElementById("inputText").value = "";
    
    let currentList = Array.from(list.children).map(li => li.textContent);
    localStorage.setItem("todolist", JSON.stringify(currentList));
    
}

function Hapus() {
    let list = document.getElementById("list");
    list.innerHTML = "";
    localStorage.removeItem(list)
}


window.onload = function() {
    let savedList = JSON.parse(localStorage.getItem("todolist"));
    if (savedList) {
        let list = document.getElementById("list");
        savedList.forEach(item => {
            let listItem = document.createElement('li');
            listItem.innerText = item;
            list.appendChild(listItem);
        });
    }
}

