function num(v){
return parseInt(v.replace(/\./g,'')) || 0
}

function calculate(){

let eTotal=0
let nTotal=0
let sTotal=0

document.querySelectorAll(".essential").forEach(i=>{
eTotal+=num(i.value)
})

document.querySelectorAll(".non").forEach(i=>{
nTotal+=num(i.value)
})

document.querySelectorAll(".save").forEach(i=>{
sTotal+=num(i.value)
})

document.getElementById("essentialTotal").innerText=eTotal
document.getElementById("nonTotal").innerText=nTotal
document.getElementById("saveTotal").innerText=sTotal

checkBudget(eTotal,nTotal,sTotal)

saveData()

}

function status(spend,budget){

if(budget==0) return "-"

let p=spend/budget

if(p>1) return "Over Budget"
if(p>0.9) return "Tight Budget"
return "Under Budget"

}

function checkBudget(e,n,s){

let eBudget=num(document.getElementById("essentialBudget").value)
let nBudget=num(document.getElementById("nonBudget").value)
let sBudget=num(document.getElementById("saveBudget").value)

let eStatus=status(e,eBudget)
let nStatus=status(n,nBudget)
let sStatus=status(s,sBudget)

document.getElementById("essentialStatus").innerText=eStatus
document.getElementById("nonStatus").innerText=nStatus
document.getElementById("saveStatus").innerText=sStatus

generateAdvice(eStatus,nStatus,sStatus)

}

function generateAdvice(e,n,s){

let box=document.getElementById("advice")

box.innerHTML=`

<b>Essential Expenses</b><br>
Status: ${e}<br>
Solutions / Recommendations:<br>
• Review housing, food, and transport costs.<br>
• Look for cheaper alternatives.<br>
• Reduce unnecessary essential spending.<br><br>

<b>Non Essential Expenses</b><br>
Status: ${n}<br>
Solutions / Recommendations:<br>
• Reduce entertainment spending.<br>
• Cancel unused subscriptions.<br>
• Avoid impulse purchases.<br><br>

<b>Savings</b><br>
Status: ${s}<br>
Recommendations:<br>
• Try saving at least 20% of income.<br>
• Build an emergency fund.<br>
• Set long-term financial goals.

`

}

document.querySelectorAll("input").forEach(i=>{
i.addEventListener("input",calculate)
})

function newMonth(){

let m=prompt("Enter month name")

if(!m) return

let select=document.getElementById("monthSelect")

let option=document.createElement("option")
option.value=m
option.text=m

select.appendChild(option)

localStorage.setItem("month",m)

}

function saveData(){
localStorage.setItem("budgetData",document.body.innerHTML)
