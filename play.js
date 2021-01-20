
let sum=[];

    function display() {
    let str = `<tr>
                    <th>STT</th>
                    <th>Tên nhạc </th>
                    <th>Nhạc </th>
                    <th>Ca sĩ </th>
                    <th>Thể loại  </th>
                            </tr>`;
    for (let i = 0; i < sum.length; i++) {
        str += `<tr>
                    <td>${i + 1}</td>
                    <td>${sum[i][0]}</td>
                    <td>${sum[i][1]}</td>
                    <td>${sum[i][2]}</td>
                    <td>${sum[i][3]}</td>
                        </tr>`
    }
    document.getElementById("music").innerHTML = str;
}

display();

function addMusics() {
    let name = document.getElementById("name").value;
    let music = document.getElementById("music").value;
    let singer = document.getElementById("singer").value;
    let category = document.getElementById("category").value;
    if (name != "" && music != "" && singer != "" && category != "") {
        alert("Bạn đã thêm thành công ");
        let musics = [name, music, singer, category];
        sum.push(musics);
        console.log(musics);
        display();
    } else {
        alert("Please input name");
    }

}