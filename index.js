
let myLeads=["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

let inputEl =document.querySelector("#input-el")
let inputBtn = document.querySelector("#input-btn")


inputBtn.addEventListener("click",function(){

    myLeads.push(inputEl.value)
    console.log(myLeads)

})

for(let i = 0; i < myLeads.length; i++){
    console.log(myLeads[i])
}