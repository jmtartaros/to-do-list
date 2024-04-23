class ListDate{
    constructor(name){
        this.name = name;
    }
    addList(list){
        const addlist = document.getElementById("list")
        const element = document.createElement("div");
        element.innerHTML = `
        <div class=" w-100 h-auto d-flex justify-content-between  align-items-center mt-1 px-2" id="div-2">
            <p class="w-100 h-auto  mb-0">${list.name}</p>
            <a>
            <img class="imagen" src="img/trash-fill.svg" name="delete">
            </a>
        </div>
        `;
        addlist.appendChild(element)
    }
    resetList(){
        document.getElementById("form").reset();
    }
}
class UI{
    showMessage(message, className){
        const div = document.createElement("div");
        div.className = `alert alert-${className} mt-2`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const app = document.querySelector("#app");
        container.insertBefore(div,app);
        setTimeout(function(){
            document.querySelector(".alert").remove();
        },3000);
    }
    deleteElement(element){
        if(element.name === "delete"){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage("Element Deleted Successfully","danger");
        }
    }

}
document.getElementById("form")
    .addEventListener("submit", function(e){
    
    const data = document.getElementById("date").value;
    const list = new ListDate(data);
    const ui = new UI();
    
    if(data === ""){
        return ui.showMessage("Complete Fields Please.", "warning");
    };
    list.addList(list);
    list.resetList();
    ui.showMessage("Added Successfully", "success");
    e.preventDefault();

})
document.getElementById("list").addEventListener("click",function(e){
    const ui = new UI();
    ui.deleteElement(e.target);
})


