let closeBtn = document.querySelector('header i');
closeBtn && closeBtn.addEventListener("click",()=>{
    window.open("index.html","_self")
})

let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click',()=>{
    location.reload();
})

function infoFunc(infoBtn){
    if(infoBtn.style.display != "inline-block") {
        infoBtn.style.display = "inline-block"
        setTimeout(()=>{
            infoBtn.style.display = "none"
        },5000)
    } else {
        infoBtn.style.display = "none"
    }
}
let showFstName = document.querySelector('.showfname');
let myInfoIcon = document.querySelector('.info1')
myInfoIcon.addEventListener('click',()=>{
    infoFunc(showFstName)
})
let showLstName = document.querySelector('.showlname');
let myInfo2Icon = document.querySelector('.info2')
myInfo2Icon.addEventListener('click',()=>{
    infoFunc(showLstName)
})
let showEmAdrs = document.querySelector('.showeeadrs');
let myInfo3Icon = document.querySelector('.info3')
myInfo3Icon.addEventListener('click',()=>{
    infoFunc(showEmAdrs)
})
let showMoNmbr = document.querySelector('.showmnmbr');
let myInfo4Icon = document.querySelector('.info4')
myInfo4Icon.addEventListener('click',()=>{
    infoFunc(showMoNmbr)
})
let showNePass = document.querySelector('.shownpas');
let myInfo5Icon = document.querySelector('.info5')
myInfo5Icon.addEventListener('click',()=>{
    infoFunc(showNePass)
})
let showCoPass = document.querySelector('.showcpas');
let myInfo6Icon = document.querySelector('.info6')
myInfo6Icon.addEventListener('click',()=>{
    infoFunc(showCoPass)
})

function validation() {
    let myLabels = document.querySelectorAll('.formLabel');
    let myInputs = document.querySelectorAll('.formInput');
    let phoneCheck = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    let emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let myPwdinpt = document.querySelector('.oneInpt');
    let genderLabl = document.querySelector('.gender');
    let gMale = document.querySelector('#gmale');
    let gFemale = document.querySelector('#gfemale');
    let dayCheck = document.querySelector('#day');
    let monthCheck = document.querySelector('#month');
    let yearCheck = document.querySelector('#year');
    let selectLabl = document.querySelector('.selectLabl')
    let valid;
    myInputs.forEach((inpt)=>{
        myLabels.forEach((labl)=>{
            if(inpt.dataset.fname === labl.dataset.fname && inpt.dataset.fname === 'fname') {
                if (inpt.value == "") {
                    labl.innerHTML = "Please Inter Your First Name";
                    labl.style.color = "orange"
                    return (valid = false);
                } else if (!isNaN(inpt.value) === true || inpt.value.indexOf(' ') !== -1 || inpt.value.indexOf('1') !== -1 || inpt.value.indexOf('2') !== -1 || inpt.value.indexOf('3') !== -1 || inpt.value.indexOf('4') !== -1 || inpt.value.indexOf('5') !== -1 || inpt.value.indexOf('6') !== -1 || inpt.value.indexOf('7') !== -1 || inpt.value.indexOf('8') !== -1 || inpt.value.indexOf('9') !== -1 || inpt.value.indexOf('0') !== -1) {
                    labl.innerHTML = "Invalid First Name";
                    labl.style.color = "red"
                    return (valid = false);
                } else {
                    labl.innerHTML = "First Name";
                    labl.style.color = "#1877f2"
                    return true
                }
            } else if(inpt.dataset.lname === labl.dataset.lname && inpt.dataset.lname === 'lname') {
                if (inpt.value == "") {
                    labl.innerHTML = "Please Inter Your Last Name";
                    labl.style.color = "orange"
                    return (valid = false);
                } else if (!isNaN(inpt.value) === true || inpt.value.indexOf(' ') !== -1 || inpt.value.indexOf('1') !== -1 || inpt.value.indexOf('2') !== -1 || inpt.value.indexOf('3') !== -1 || inpt.value.indexOf('4') !== -1 || inpt.value.indexOf('5') !== -1 || inpt.value.indexOf('6') !== -1 || inpt.value.indexOf('7') !== -1 || inpt.value.indexOf('8') !== -1 || inpt.value.indexOf('9') !== -1 || inpt.value.indexOf('0') !== -1) {
                    labl.innerHTML = "Invalid Last Name";
                    labl.style.color = "red"
                    return (valid = false);
                } else {
                    labl.innerHTML = "Last Name";
                    labl.style.color = "#1877f2"
                    return true
                }
            } else if(inpt.dataset.eemail === labl.dataset.eemail && inpt.dataset.eemail === 'eemail') {
                if (inpt.value == "") {
                    labl.innerHTML = "Please Inter Your Email";
                    labl.style.color = "orange"
                    return (valid = false);
                } else if (!emailCheck.test(inpt.value) || inpt.value.indexOf(' ') !== -1) {
                    labl.innerHTML = "Invalid Email Address";
                    labl.style.color = "red"
                    return (valid = false);
                }  else {
                    labl.innerHTML = "Email";
                    labl.style.color = "#1877f2"
                    return true
                }
            } else if(inpt.dataset.mobilen === labl.dataset.mobilen && inpt.dataset.mobilen === 'mobileN') {
                if (inpt.value === "") {
                    labl.innerHTML = "Please Inter Your Phone Number";
                    labl.style.color = "orange"
                    return (valid = false);
                } else if (!phoneCheck.test(inpt.value) || inpt.value.indexOf(' ') !== -1) {
                    labl.innerHTML = "Invalid Phone Number";
                    labl.style.color = "red"
                    return (valid = false);
                }  else {
                    labl.innerHTML = "Phone Number";
                    labl.style.color = "#1877f2"
                    return true
                }
            } else if(inpt.dataset.npwd === labl.dataset.npwd && inpt.dataset.npwd === 'npwd') {
                if (inpt.value == "") {
                    labl.innerHTML = "Please Inter Your Password";
                    labl.style.color = "orange"
                    return (valid = false);
                } else if (inpt.value.length < 8 === true) {
                    labl.innerHTML = "Invalid Password";
                    labl.style.color = "red"
                    return (valid = false);
                } else {
                    labl.innerHTML = "Password";
                    labl.style.color = "#1877f2"
                    return true
                }
            }
            else if(inpt.dataset.confpwd === labl.dataset.confpwd && inpt.dataset.confpwd === 'confpwd') {
                if (inpt.value == "") {
                    labl.innerHTML = "Please Confirm Your Password";
                    labl.style.color = "orange"
                    return (valid = false);
                } else if (inpt.value.indexOf(' ') !== -1 || inpt.value !== myPwdinpt.value) {
                    labl.innerHTML = "This Password Does Not Match";
                    labl.style.color = "red"
                    return (valid = false);
                } else {
                    labl.innerHTML = "Password";
                    labl.style.color = "#1877f2"
                    return true
                }
            }
            if(gMale.checked === false && gFemale.checked === false) {
                genderLabl.innerHTML = "Please Choose Your Gender";
                genderLabl.style.color = "orange"
                return (valid = false);
            } else {
                genderLabl.innerHTML = "Gender";
                genderLabl.style.color = "#1877f2"
                return true
            }
        })
        if(dayCheck.value === "" || monthCheck.value === "" || yearCheck.value === "") {
            selectLabl.innerHTML = "Please Select Your Birth Day";
            selectLabl.style.color = "orange"
            return (valid = false);
        } else {
            selectLabl.innerHTML = "Date of Birth";
            selectLabl.style.color = "#1877f2"
            return true
        }
    })
    return valid;
}
let myLabels = document.querySelectorAll('.formLabel');
let myInputs = document.querySelectorAll('.formInput');
let phoneCheck = /^\+(?:[0-9] ?){6,14}[0-9]$/;
let emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let myPwdinpt = document.querySelector('.oneInpt');
let genderLabl = document.querySelector('.gender');
let gMale = document.querySelector('#gmale');
let gFemale = document.querySelector('#gfemale');
let fNameMark = document.querySelector('.fname-mark i.fname')
let lNameMark = document.querySelector('.lname-mark i.lname')
let eMailMark = document.querySelector('.email-mark i.email')
let phoneMark = document.querySelector('.phone-mark i.phone')
let nPwdMark = document.querySelector('.npwd-mark i.npwd')
let cPwdMark = document.querySelector('.confpwd-mark i.confpwd')
let genderMark = document.querySelector('.gender-mark i.gender')
let dobMark = document.querySelector('.dob-mark i.dob')
let dayCheck = document.querySelector('#day');
let monthCheck = document.querySelector('#month');
let yearCheck = document.querySelector('#year');
let selectLabl = document.querySelector('.selectLabl')
myInputs.forEach((inpt)=>{
    myLabels.forEach((labl)=>{
        inpt.addEventListener('keyup',()=>{
            if(inpt.dataset.fname === labl.dataset.fname && inpt.dataset.fname === 'fname'){
                if(inpt.value === "") {
                    labl.innerHTML = "Please Inter Your First Name";
                    labl.style.color = "orange"
                    fNameMark.style.display = "none"
                    return
                } else if (inpt.value !== "") {
                    if(inpt.value.indexOf(' ') !== -1 || inpt.value.indexOf('1') !== -1 || inpt.value.indexOf('2') !== -1 || inpt.value.indexOf('3') !== -1 || inpt.value.indexOf('4') !== -1 || inpt.value.indexOf('5') !== -1 || inpt.value.indexOf('6') !== -1 || inpt.value.indexOf('7') !== -1 || inpt.value.indexOf('8') !== -1 || inpt.value.indexOf('9') !== -1 || inpt.value.indexOf('0') !== -1) {
                        labl.innerHTML = "Wrong typing...";
                        labl.style.color = "red"
                        fNameMark.style.display = "none"
                        return
                    } else {
                        labl.innerHTML = "Right typing...";
                        labl.style.color = "green"
                        fNameMark.style.display = "none"
                        return
                    }
                }
            }
            if(inpt.dataset.lname === labl.dataset.lname && inpt.dataset.lname === 'lname'){
                if(inpt.value === "") {
                    labl.innerHTML = "Please Inter Your Last Name";
                    labl.style.color = "orange"
                    lNameMark.style.display = "none"
                    return
                } else if (inpt.value !== "") {
                    if(inpt.value.indexOf(' ') !== -1 || inpt.value.indexOf('1') !== -1 || inpt.value.indexOf('2') !== -1 || inpt.value.indexOf('3') !== -1 || inpt.value.indexOf('4') !== -1 || inpt.value.indexOf('5') !== -1 || inpt.value.indexOf('6') !== -1 || inpt.value.indexOf('7') !== -1 || inpt.value.indexOf('8') !== -1 || inpt.value.indexOf('9') !== -1 || inpt.value.indexOf('0') !== -1) {
                        labl.innerHTML = "Wrong typing...";
                        labl.style.color = "red"
                        lNameMark.style.display = "none"
                        return
                    } else {
                        labl.innerHTML = "Right typing...";
                        labl.style.color = "green"
                        lNameMark.style.display = "none"
                        return
                    }
                }
            }
            if(inpt.dataset.eemail === labl.dataset.eemail && inpt.dataset.eemail === 'eemail'){
                if(inpt.value === "") {
                    labl.innerHTML = "Please Inter Your Email";
                    labl.style.color = "orange"
                    eMailMark.style.display = "none"
                    return
                } else if (inpt.value !== "") {
                    if(inpt.value.indexOf(' ') !== -1) {
                        labl.innerHTML = "Wrong typing...";
                        labl.style.color = "red"
                        eMailMark.style.display = "none"
                        return
                    } else {
                        labl.innerHTML = "Right typing...";
                        labl.style.color = "green"
                        eMailMark.style.display = "none"
                        return
                    }
                }
            }
            if(inpt.dataset.mobilen === labl.dataset.mobilen && inpt.dataset.mobilen === 'mobileN'){
                if(inpt.value === "") {
                    labl.innerHTML = "Please Inter Your Phone Number";
                    labl.style.color = "orange"
                    phoneMark.style.display = "none"
                    return
                } else if (inpt.value !== "") {
                    if(inpt.value == "+") {
                        labl.innerHTML = "Right typing...";
                        labl.style.color = "green"
                        phoneMark.style.display = "none"
                        return
                    } else if(/^\+(?:[0-9] ?){0,14}[0-9]$/.test(inpt.value) === false || inpt.value.indexOf(' ') !== -1) {
                        labl.innerHTML = "Wrong Phone Number...";
                        labl.style.color = "red"
                        phoneMark.style.display = "none"
                        return
                    } else {
                        labl.innerHTML = "Right typing...";
                        labl.style.color = "green"
                        phoneMark.style.display = "none"
                        return
                    }
                }
            }
            if(inpt.dataset.npwd === labl.dataset.npwd && inpt.dataset.npwd === 'npwd'){
                if(inpt.value === "") {
                    labl.innerHTML = "Please Inter Your Password";
                    labl.style.color = "orange"
                    nPwdMark.style.display = "none"
                    return
                } else if (inpt.value !== "") {
                    if(inpt.value.indexOf(' ') !== -1) {
                        labl.innerHTML = "Wrong typing...";
                        labl.style.color = "red"
                        nPwdMark.style.display = "none"
                        return
                    } else {
                        labl.innerHTML = "Right typing...";
                        labl.style.color = "green"
                        nPwdMark.style.display = "none"
                        return
                    }
                }
            }
            if(inpt.dataset.confpwd === labl.dataset.confpwd && inpt.dataset.confpwd === 'confpwd'){
                if(inpt.value === "") {
                    labl.innerHTML = "Please confirm Your Password";
                    labl.style.color = "orange"
                    cPwdMark.style.display = "none"
                    return
                } else if (inpt.value !== "") {
                    if(inpt.value.indexOf(' ') !== -1) {
                        labl.innerHTML = "Wrong typing...";
                        labl.style.color = "red"
                        cPwdMark.style.display = "none"
                        return
                    } else {
                        labl.innerHTML = "Right typing...";
                        labl.style.color = "green"
                        cPwdMark.style.display = "none"
                        return
                    }
                }
            }
        })
        inpt.addEventListener('focusout',()=>{
            if(inpt.dataset.fname === labl.dataset.fname && inpt.dataset.fname === 'fname'){
                if (inpt.value == "") {
                    labl.innerHTML = "First Name:";
                    labl.style.color = "#1877f2"
                    fNameMark.style.display = "none"
                } else if (!isNaN(inpt.value) === true || inpt.value.indexOf(' ') !== -1 || inpt.value.indexOf('1') !== -1 || inpt.value.indexOf('2') !== -1 || inpt.value.indexOf('3') !== -1 || inpt.value.indexOf('4') !== -1 || inpt.value.indexOf('5') !== -1 || inpt.value.indexOf('6') !== -1 || inpt.value.indexOf('7') !== -1 || inpt.value.indexOf('8') !== -1 || inpt.value.indexOf('9') !== -1 || inpt.value.indexOf('0') !== -1) {
                    labl.innerHTML = "Invalid First Name";
                    labl.style.color = "red"
                    fNameMark.style.display = "none"
                } else {
                    labl.innerHTML = "First Name";
                    labl.style.color = "#1877f2"
                    fNameMark.style.display = "inline-block"
                }
            }
            if(inpt.dataset.lname === labl.dataset.lname && inpt.dataset.lname === 'lname'){
                if (inpt.value == "") {
                    labl.innerHTML = "Last Name:";
                    labl.style.color = "#1877f2"
                    lNameMark.style.display = "none"
                } else if (!isNaN(inpt.value) === true || inpt.value.indexOf(' ') !== -1 || inpt.value.indexOf('1') !== -1 || inpt.value.indexOf('2') !== -1 || inpt.value.indexOf('3') !== -1 || inpt.value.indexOf('4') !== -1 || inpt.value.indexOf('5') !== -1 || inpt.value.indexOf('6') !== -1 || inpt.value.indexOf('7') !== -1 || inpt.value.indexOf('8') !== -1 || inpt.value.indexOf('9') !== -1 || inpt.value.indexOf('0') !== -1) {
                    labl.innerHTML = "Invalid Last Name";
                    labl.style.color = "red"
                    lNameMark.style.display = "none"
                } else {
                    labl.innerHTML = "Last Name";
                    labl.style.color = "#1877f2"
                    lNameMark.style.display = "inline-block"
                }
            }
            if(inpt.dataset.eemail === labl.dataset.eemail && inpt.dataset.eemail === 'eemail'){
                if (inpt.value == "") {
                    labl.innerHTML = "Email:";
                    labl.style.color = "#1877f2"
                    eMailMark.style.display = "none"
                } else if (emailCheck.test(inpt.value) === false || inpt.value.indexOf(' ') !== -1) {
                    labl.innerHTML = "Invalid Email Address";
                    labl.style.color = "red"
                    eMailMark.style.display = "none"
                } else {
                    labl.innerHTML = "Email";
                    labl.style.color = "#1877f2"
                    eMailMark.style.display = "inline-block"
                }
            }
            if(inpt.dataset.mobilen === labl.dataset.mobilen && inpt.dataset.mobilen === 'mobileN'){
                if (inpt.value == "") {
                    labl.innerHTML = "Phone Number:";
                    labl.style.color = "#1877f2"
                    phoneMark.style.display = "none"
                } else if (phoneCheck.test(inpt.value) === false || inpt.value.indexOf(' ') !== -1) {
                    labl.innerHTML = "Invalid Phone Number";
                    labl.style.color = "red"
                    phoneMark.style.display = "none"
                } else {
                    labl.innerHTML = "Phone Number";
                    labl.style.color = "#1877f2"
                    phoneMark.style.display = "inline-block"
                }
            }
            if(inpt.dataset.npwd === labl.dataset.npwd && inpt.dataset.npwd === 'npwd'){
                if(inpt.value === "") {
                    labl.innerHTML = "New Password:";
                    labl.style.color = "#1877f2"
                    nPwdMark.style.display = "none"
                    return
                } else if (inpt.value !== "") {
                    if(inpt.value.indexOf(' ') !== -1 || inpt.value.length < 8 === true) {
                        labl.innerHTML = "Invalid Password";
                        labl.style.color = "red"
                        nPwdMark.style.display = "none"
                        return
                    } else {
                        labl.innerHTML = "New Password";
                        labl.style.color = "#1877f2"
                        nPwdMark.style.display = "inline-block"
                        return
                    }
                }
            }
            if(inpt.dataset.confpwd === labl.dataset.confpwd && inpt.dataset.confpwd === 'confpwd'){
                if(inpt.value === "") {
                    labl.innerHTML = "Confirm Password:";
                    labl.style.color = "#1877f2"
                    cPwdMark.style.display = "none"
                    return
                } else if (inpt.value !== "") {
                    if(inpt.value.indexOf(' ') !== -1 || inpt.value !== myPwdinpt.value) {
                        labl.innerHTML = "This Password Does Not Match";
                        labl.style.color = "red"
                        cPwdMark.style.display = "none"
                        return
                    } else {
                        labl.innerHTML = "Confirm Password";
                        labl.style.color = "#1877f2"
                        cPwdMark.style.display = "inline-block"
                        return
                    }
                }
            }
        })
    })
})

yearCheck.addEventListener('click',()=>{
    if(dayCheck.value === "" || monthCheck.value === "" || yearCheck.value === "") {
        selectLabl.innerHTML = "Please Select Your Birth Day";
        selectLabl.style.color = "orange"
        dobMark.style.display = "none"
        return (valid = false);
    } else if(dayCheck.value !== "" && monthCheck.value !== "" && yearCheck.value !== "") {
        selectLabl.innerHTML = "Date of Birth";
        selectLabl.style.color = "#1877f2"
        dobMark.style.display = "inline-block"
        return true
    }
})
dayCheck.addEventListener('click',()=>{
    if(dayCheck.value === "" || monthCheck.value === "" || yearCheck.value === "") {
        selectLabl.innerHTML = "Please Select Your Birth Day";
        selectLabl.style.color = "orange"
        return (valid = false);
    } else if(dayCheck.value !== "" && monthCheck.value !== "" && yearCheck.value !== "") {
        selectLabl.innerHTML = "Date of Birth";
        selectLabl.style.color = "#1877f2"
        dobMark.style.display = "inline-block"
        return true
    }
})
monthCheck.addEventListener('click',()=>{
    if(dayCheck.value === "" || monthCheck.value === "" || yearCheck.value === "") {
        selectLabl.innerHTML = "Please Select Your Birth Day";
        selectLabl.style.color = "orange"
        return (valid = false);
    } else if(dayCheck.value !== "" && monthCheck.value !== "" && yearCheck.value !== "") {
        selectLabl.innerHTML = "Date of Birth";
        selectLabl.style.color = "#1877f2"
        dobMark.style.display = "inline-block"
        return true
    }
})


gMale.addEventListener('click',()=>{
    genderLabl.innerHTML = "Gender";
    genderLabl.style.color = "#1877f2"
    genderMark.style.display = "inline-block"
})
gFemale.addEventListener('click',()=>{
    genderLabl.innerHTML = "Gender";
    genderLabl.style.color = "#1877f2"
    genderMark.style.display = "inline-block"
})