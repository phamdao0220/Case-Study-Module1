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
        <th>Tên nhạc </th>
        <th>Ca sĩ </th>
        <th>Thể loại </th>
        <th>Lời bài hát </th>
        <th colspan='2'>Hành động </th>
    </tr>`;
    for (let i = 0; i < management.length; i++) {
        str += `<tr>
                            <td>${i + 1}</td>
                            <td>${management[i][0]}</td>
                            <td>${management[i][1]}</td>
                            <td>${management[i][2]}</td>
                            <td>${management[i][3]}</td>
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
    let lyrics = document.getElementById("music-lyrics").value;
    if (name != "" && singer != "" && category != "" && lyrics != "") {
        alert("Successfully Added Music !!!");
        let music = [name, singer, category, lyrics];
        management.push(music);
        console.log(music);
        display();
        resetInput();
    } else {
        alert("Please input name");
    }

}

function updateMusic() {
    let name = document.getElementById("music-name").value;
    let singer = document.getElementById("music-singer").value;
    let category = document.getElementById("music-category").value;
    let lyrics = document.getElementById("music-lyrics").value;
    let music = [name, singer, category, lyrics];
    management[current] = music;
    display(music);
    resetInput();

}

function editMusic(index) {
    document.getElementById("music-name").value = management[index][0];
    document.getElementById("music-singer").value = management[index][1];
    document.getElementById("music-category").value = management[index][2];
    document.getElementById("music-lyrics").value = management[index][3];
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
    document.getElementById("music-lyrics").value = "";

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

// function searchMusic() {
//     let music = prompt("nhap ten bai hat");
//     for (let i = 0; i < managements.length; i++) {
//         if (music == managements[i]) {
//             result = search[i];
//             flag = true;
//         }
//
//
//     }
//     if (flag == true) {
//         alert(result);
//     } else {
//         alert("khong tim thay tu ");
//         searchMusic();
//     }
// }
//
// searchMusic();




