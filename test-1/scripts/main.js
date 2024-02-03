let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/test.jpg"){
        myImage.setAttribute("src","images/test1.jpg");
    }
    else{
        myImage.setAttribute("src", "images/test.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("请输入你的名字。");
    if(!myName){
        setUserName();
    }else
    {
    localStorage.setItem("name", myName);
    myHeading.textContent = "cat 卡哇伊  " + myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent= "cat 卡哇伊  " + storedName;
}

myButton.onclick = function(){
    setUserName();
};