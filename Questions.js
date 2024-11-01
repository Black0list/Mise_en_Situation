

let Questions = [
    {
        "question" : "q1",
        "reponse" : "r1",
    },
    {
        "question" : "q2",
        "reponse" : "r2",
    },
    {
        "question" : "q3",
        "reponse" : "r3",
    }
]

var NbrQ = 3;
let Index = 0;


const nbrq = document.getElementById("score");
const addBtn = document.getElementById("add");
const Modal  = document.getElementById("Modal");
const InputQ = document.getElementById("exampleFormControlInput1");
const InputR = document.getElementById("exampleFormControlTextarea1");
const popo = document.getElementById("addQ");


function addQuestion(){

    Questions.push({"question": `${InputQ.value}`, "reponse": `${InputR.value}`});
    Modal.innerHTML = '';

    NbrQ++;

    Questions.forEach((e, i) => {

    const accordion_item = document.createElement("div");
    accordion_item.classList.add("accordion-item");
    Modal.appendChild(accordion_item);
    const accordion_h2 = document.createElement("h2");
    accordion_h2.classList.add("accordion-header");
    accordion_item.appendChild(accordion_h2);

    const accordion_btn = document.createElement("button");
    accordion_btn.classList.add("accordion-button");
    accordion_btn.type = "button";
    accordion_btn.setAttribute("data-bs-toggle", "collapse");
    accordion_btn.setAttribute("data-bs-target", `#collapse${i}`);
    accordion_btn.setAttribute("aria-expanded", "false");
    accordion_btn.setAttribute("aria-controls", `collapse${i}`);
    accordion_btn.innerText = e.question;
    accordion_h2.appendChild(accordion_btn);

    const accordion_collapse = document.createElement("div");
    accordion_collapse.classList.add("accordion-collapse", "collapse", "show");
    accordion_collapse.setAttribute("id", `collapse${i}`);
    accordion_collapse.setAttribute("data-bs-parent", "#accordionExample");
    accordion_item.appendChild(accordion_collapse);

    const accordion_body = document.createElement("div");
    accordion_body.classList.add("accordion-body");
    accordion_collapse.appendChild(accordion_body);
    accordion_body.innerText = e.reponse;

    })

    nbrq.innerText = `Nombre de questions : `+ NbrQ;

}


addBtn.addEventListener('shown.bs.modal', () => {
  popo.focus()
})


function disable(){
    addBtn.disabled = true
}
function enable(){
    addBtn.disabled = false
}