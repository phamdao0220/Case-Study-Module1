let management = loadData();
let current = -1;
// let flag = false;
// let managements = ["Đường về nhà ", "Đen x JustaTee", "Nhạc trẻ ", "Trở về nhà bên mẹ cha có con sông chảy bên hiên nhà\n" +
// "Có cánh diều đàn em bé thơ thả bay la đà"];
//
// let search = ["Đường về nhà ", "Đen x JustaTee", "Nhạc trẻ ", "Trở về nhà bên mẹ cha có con sông chảy bên hiên nhà\n" +
// "Có cánh diều đàn em bé thơ thả bay la đà"];
// let result = "";

function display() {
    let str = ` <tr>
        <th>Stt</th>
        <th>Tên bài hát  </th>
        <th>Ca sĩ </th>
        <th>Thể loại </th>
        <th>Ảnh </th>
        <th colspan='2'>Chức năng </th>
    </tr>`;
    for (let i = 0; i < management.length; i++) {
        str += `<tr>
                            <td>${i + 1}</td>
                            <td>${management[i][0]}</td>
                            <td>${management[i][1]}</td>
                            <td>${management[i][2]}</td>
                            <td><img style="width: 100px;height: 100px" src="${management[i][3]}"></td>
                             <td><button onclick="editMusic(${i})">Sửa </button></td>
                            <td><button class="sum" onclick="deleteMusic(${i})">Xoá </button></td>
                        </tr>`;
    }
    document.getElementById("management").innerHTML = str;
    saveData();
}

display();


function addMusic() {
    let name = document.getElementById("music-name").value;
    let singer = document.getElementById("music-singer").value;
    let category = document.getElementById("music-category").value;
    let img = document.getElementById("music-img").value;
    if (name != "" && singer != "" && category != "" && img != "") {
        alert("Bạn đã thêm thành công ");
        let music = [name, singer, category, img];
        management.push(music);
        console.log(music);
        display();
        resetInput();
    } else {
        alert("Làm ơn nhập đầy đủ các ô ");
    }

}

function updateMusic() {
    let name = document.getElementById("music-name").value;
    let singer = document.getElementById("music-singer").value;
    let category = document.getElementById("music-category").value;
    let img = document.getElementById("music-img").value;
    let music = [name, singer, category, img];
    management[current] = music;
    display(music);
    resetInput();

}

function editMusic(index) {
    document.getElementById("music-name").value = management[index][0];
    document.getElementById("music-singer").value = management[index][1];
    document.getElementById("music-category").value = management[index][2];
    document.getElementById("music-img").value = management[index][3];
    current = index;


}

function deleteMusic(index) {
    let check = confirm("Are you sure you want to delete it or not");
    if (check) {
        management.splice(index, 1);
        display();
    }

}

function resetInput() {
    document.getElementById("music-name").value = "";
    document.getElementById("music-singer").value = "";
    document.getElementById("music-category").value = "";
    document.getElementById("music-img").value = "";

}

function saveData() {
    localStorage.setItem('music', JSON.stringify(management));
}

function loadData() {
    if (localStorage.hasOwnProperty('music')) {
        let data = JSON.parse(localStorage.getItem('music'));
        return data;
    } else {
        return [];
    }

}
function searchMusic() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("management");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}




