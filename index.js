// onclick?
// keydown?
// change?
// focus?

function idCheckFunction(){
    //length
    if(inputID.value.length >4 && inputID.value.length <16){
        idLength.classList.add('passChecker')
        idLength.classList.remove('nopassChecker')
        idLength.firstElementChild.classList.remove('fa-times-circle')
        idLength.firstElementChild.classList.add('fa-check-circle')}
    else{
        idLength.classList.remove('passChecker')
        idLength.classList.add('nopassChecker')
        idLength.firstElementChild.classList.add('fa-times-circle')
        idLength.firstElementChild.classList.remove('fa-check-circle')
    }

    //number
    const numbers = /[0-9]/g;
    if(inputID.value.match(numbers)){
        idNumber.classList.add('passChecker')
        idNumber.classList.remove('nopassChecker')
        idNumber.firstElementChild.classList.remove('fa-times-circle')
        idNumber.firstElementChild.classList.add('fa-check-circle')}
    else{
        idNumber.classList.remove('passChecker')
        idNumber.classList.add('nopassChecker')
        idNumber.firstElementChild.classList.add('fa-times-circle')
        idNumber.firstElementChild.classList.remove('fa-check-circle')
    }
    // [!@#$%^&*./,<>-_+=]
  
    //special - failed
    const specials = /^[!@#$%^&*.,]$/g;
    if(!inputID.value.match(specials)){
        idSpecial.classList.add('passChecker')
        idSpecial.classList.remove('nopassChecker')
        idSpecial.firstElementChild.classList.remove('fa-times-circle')
        idSpecial.firstElementChild.classList.add('fa-check-circle')}
    else{
        idSpecial.classList.remove('passChecker')
        idSpecial.classList.add('nopassChecker')
        idSpecial.firstElementChild.classList.add('fa-times-circle')
        idSpecial.firstElementChild.classList.remove('fa-check-circle')
    }
}

function pwCheckFunction(){
    //length
    if(inputPW.value.length >8){
        pwLength.classList.add('passChecker')
        pwLength.classList.remove('nopassChecker')
        pwLength.firstElementChild.classList.remove('fa-times-circle')
        pwLength.firstElementChild.classList.add('fa-check-circle')}
    else{
        pwLength.classList.remove('passChecker')
        pwLength.classList.add('nopassChecker')
        pwLength.firstElementChild.classList.add('fa-times-circle')
        pwLength.firstElementChild.classList.remove('fa-check-circle')
    }

    //number
    const numbers = /[0-9]/g;
    if(inputPW.value.match(numbers)){
        pwNumber.classList.add('passChecker')
        pwNumber.classList.remove('nopassChecker')
        pwNumber.firstElementChild.classList.remove('fa-times-circle')
        pwNumber.firstElementChild.classList.add('fa-check-circle')}
    else{
        pwNumber.classList.remove('passChecker')
        pwNumber.classList.add('nopassChecker')
        pwNumber.firstElementChild.classList.add('fa-times-circle')
        pwNumber.firstElementChild.classList.remove('fa-check-circle')
    }

    //case
    const lowercases = /[a-z]/g;
    const uppercases = /[A-Z]/g;
    if(inputPW.value.match(uppercases)){
        pwCase.classList.add('passChecker')
        pwCase.classList.remove('nopassChecker')
        pwCase.firstElementChild.classList.remove('fa-times-circle')
        pwCase.firstElementChild.classList.add('fa-check-circle')}
    else{
        pwCase.classList.remove('passChecker')
        pwCase.classList.add('nopassChecker')
        pwCase.firstElementChild.classList.add('fa-times-circle')
        pwCase.firstElementChild.classList.remove('fa-check-circle')
    }
  
    //special - failed
    const specials = /^[!@#$%^&*.,]$/g;    // [!@#$%^&*./,<>-_+=]
    if(inputPW.value.match(specials)){
        pwSpecial.classList.add('passChecker')
        pwSpecial.classList.remove('nopassChecker')
        pwSpecial.firstElementChild.classList.remove('fa-times-circle')
        pwSpecial.firstElementChild.classList.add('fa-check-circle')}
    else{
        pwSpecial.classList.remove('passChecker')
        pwSpecial.classList.add('nopassChecker')
        pwSpecial.firstElementChild.classList.add('fa-times-circle')
        pwSpecial.firstElementChild.classList.remove('fa-check-circle')
    }

    //same as id
    if(inputPW.value !==inputID.value){
        pwSameasid.classList.add('passChecker')
        pwSameasid.classList.remove('nopassChecker')
        pwSameasid.firstElementChild.classList.remove('fa-times-circle')
        pwSameasid.firstElementChild.classList.add('fa-check-circle')}
    else{
        pwSameasid.classList.remove('passChecker')
        pwSameasid.classList.add('nopassChecker')
        pwSameasid.firstElementChild.classList.add('fa-times-circle')
        pwSameasid.firstElementChild.classList.remove('fa-check-circle')
    }
}


const inputID = document.querySelector('.input__id');
const idChecker = document.querySelector('.id-checker');
const inputPW = document.querySelector('.input__pw');
const pwChecker = document.querySelector('.pw-checker');

const idLength = document.querySelector(".id-length");
const idNumber = document.querySelector(".id-number");
const idSpecial = document.querySelector(".id-special");
// const idAlready = document.querySelector(".id-already");

const pwLength = document.querySelector(".pw-length");
const pwNumber = document.querySelector(".pw-number");
const pwCase = document.querySelector(".pw-case");
const pwSpecial = document.querySelector(".pw-special");
const pwSameasid = document.querySelector(".pw-sameasid");

//박스클릭시 class중에 noshow없는상태로 바꿈
inputID.addEventListener("focus", event => { idChecker.classList = ('id-checker')
})
//박스밖 클릭시 class에 noshow추가
inputID.addEventListener("blur", event => { idChecker.classList = ('id-checker noshow')
})


inputPW.addEventListener("focus", event => { pwChecker.classList = ('pw-checker')
})
inputPW.addEventListener("blur", event => { pwChecker.classList = ('pw-checker noshow')
})

inputID.addEventListener("keyup",idCheckFunction);

inputPW.addEventListener("keyup", pwCheckFunction);
