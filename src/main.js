
//get element to displat card
const displayEl = document.querySelector("#js");
// displayEl.style.background="aliceblue"

//create card div
const cardEl = document.createElement("div");
cardEl.classList = "card bg-white/80 rounded-2xl text-black p-5 space-y-2 w-sm shadow-2xl shadow-white/50";
//create h1tag
const h1El = document.createElement("h1");

h1El.textContent = "Developer Profile";

//create cmt  function
function cmt(comment) {
    return document.createComment(comment);
}
//create basic info section
const basicInfoEl = document.createElement("section");

//h2 function
function h2(text) {
    const h2El = document.createElement("h2");
    
    h2El.textContent = text;

    return h2El;
}

basicInfoEl.appendChild(h2("Basic Info"));

//function to p>strong
function info(title, text) {
    const pEL = document.createElement("p");
    const strongEl = document.createElement("strong");

    const pTextEl = document.createTextNode(text);
    const strongTextEl = document.createTextNode(title);

    strongEl.appendChild(strongTextEl);
    pEL.appendChild(strongEl);
    pEL.appendChild(pTextEl);

    return pEL
}
basicInfoEl.appendChild(info("Name: ", "CyberDude"));
basicInfoEl.appendChild(info("Role: ", "Frontend Developer"))
// console.log(basicInfoEl);

//skills section
const skillSectionEl = document.createElement("section");
skillSectionEl.appendChild(h2("Skills"))

const ulEl = document.createElement("ul");


const skillList = ["HTML", "CSS", "JavaScript", "React"];

skillList.forEach((e) => {
    const liEl = document.createElement("li");
    liEl.textContent = e;
    ulEl.appendChild(liEl)
})
skillSectionEl.appendChild(ulEl)
// console.log(skillSectionEl);

//projects section
const projectSectionEl = document.createElement("section");
projectSectionEl.appendChild(h2("Projects"))

//function to projects details
function project(name, description, status) {
    const divEL = document.createElement("div");
    divEL.classList = "project";

    const nameEl = document.createElement("h3");

    nameEl.textContent = name;
    //description
    const descEl = document.createElement("p");
    descEl.textContent = description;
    //status
    const statusEl = document.createElement("span");
    switch (status) {
        case "Completed":
            statusEl.classList = "green";
            break;
        case "In Progress":
            statusEl.classList = "yellow";
            break;
        case "Pending":
            statusEl.classList = "red";
            break;
        default:
            statusEl.classList = "";
    }

    statusEl.textContent = `Status: ${status}`;

    divEL.appendChild(nameEl);
    divEL.appendChild(descEl);
    divEL.appendChild(statusEl);

    return divEL

}
// console.log(project("namas","slasnk","ljasnkxjn"));
projectSectionEl.appendChild(project("Portfolio Website", "Personal portfolio built using React.", "Completed"))
projectSectionEl.appendChild(project("Task Manager", "A simple task management app.", "In Progress"))
// console.log(projectSectionEl);




//appending all elements inside card
cardEl.appendChild(h1El)
cardEl.appendChild(cmt("Basic Info"))
cardEl.appendChild(basicInfoEl)
cardEl.appendChild(cmt("Skills"))
cardEl.appendChild(skillSectionEl);
cardEl.appendChild(cmt("Projects"))
cardEl.appendChild(projectSectionEl)
// console.log(h1El);
console.log(cardEl);

displayEl.appendChild(cardEl);



