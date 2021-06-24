//const editElement = document.querySelector(".Editing"), function (el) {
//    el.style.visibility = 'hidden';
//};

const userdataElement = document.querySelectorAll(".editable-span");
const editButton = document.querySelector(".edit-button");

editButton.addEventListener("click", changeContent);
let isEditable = false;

function changeContent (){

    if (isEditable === false) {
        editButton.innerHTML = "Opslaan";
        for (var i = 0; i < userdataElement.length; i++){
            userdataElement[i].contentEditable = true;
        }
        isEditable = true;
    }else{
        editButton.innerHTML = "Edit";
        for (var i = 0; i < userdataElement.length; i++){
            userdataElement[i].contentEditable = false;
        }
        isEditable = false;
    }

}