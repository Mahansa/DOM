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
    localStorage.setItem(i,list)
    
    let local = localStorage.getItem(i,list)
    
}

function Hapus() {
    let list = document.getElementById("list");
    list.innerHTML = "";
}


   
