const imgBox = document.querySelector(".con_img");
const btn_left = document.querySelector(".btn_left");
const btn_right = document.querySelector(".btn_right");

function right(){
    imgBox.classList.add("next_img");
    btn_right.classList.add("d-none");
    btn_left.classList.remove("d-none");
}
function left(){
    imgBox.classList.remove("next_img");
    btn_left.classList.add("d-none");
    btn_right.classList.remove("d-none");
}

