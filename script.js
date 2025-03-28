let titulo = document.getElementById("titulo");
console.log(titulo);

// CLASS NAME

let desc1 = document.getElementsByClassName("desc1");
console.log(desc1[0]);

let desc2 = document.getElementsByClassName("desc2");
console.log(desc2[1]);

let desc3 = document.getElementsByClassName("desc3");
console.log(desc3[2]);

let desc4 = document.getElementsByClassName("desc4");
console.log(desc4[3]);

// TAG NAME

let liesp1 = document.getElementsByTagName ("li");
console.log(liesp1[0]);

let liesp2 = document.getElementsByTagName ("li");
console.log(liesp2[1]);

let liesp3 = document.getElementsByTagName ("li");
console.log(liesp3[2]);

let liesp4 = document.getElementsByTagName ("li");
console.log(liesp4[3]);

// TituloQS

let tituloQS = document.querySelector("#titulo");
console.log("Exibindo com Query Selector" + tituloQS.textContent)

// DescQS

let liesp1QS = document.querySelector(".li");
console.log("Exibindo com o QS o paragrafo" + liesp1QS [0].textContent)

let liesp2QS = document.querySelector(".li");
console.log("Exibindo com o QS o paragrafo" + liesp2QS [1].textContent)

let liesp3QS = document.querySelector(".li");
console.log("Exibindo com o QS o paragrafo" + liesp3QS [2].textContent)

let liesp4QS = document.querySelector(".li");
console.log("Exibindo com o QS o paragrafo" + liesp4QS [3].textContent)