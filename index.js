
let myLeads=[]

const inputEl =document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 
console.log( leadsFromLocalStorage)

if(leadsFromLocalStorage){

     myLeads = leadsFromLocalStorage
     renderLeads()

}
deleteBtn.addEventListener("dblclick", function(){
     console.log("double clicked")
     localStorage.clear()
     myLeads = []
     renderLeads()
})

inputBtn.addEventListener("click",function(){

    myLeads.push(inputEl.value)
    inputEl.value = " "
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
    console.log( localStorage.getItem("myLeads") )
})

function renderLeads(){

            let listItems = " "

        for(let i = 0; i < myLeads.length; i++){
            
             listItems += `<li>
                <a href = "${myLeads[i]}" target = "_blank">
                     ${myLeads[i]}
                </a>
             </li>`

        }

        ulEl.innerHTML = listItems

}
