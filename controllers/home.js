//for testing purposes
let data = ["Host1", "Host2", "Host3"];
//Handle Buttons
const menuButton = document.querySelector(".sidebar-button");
const accInfoButton = document.querySelector(".login-button");

console.log(menuButton);
console.log(accInfoButton);
menuButton.addEventListener("click", () => {
    //opens or closes a menu
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
    
});

accInfoButton.addEventListener("click", () => {
    // alert("Account Info Button clicked!");
});
//Handle Dashboard

//fetches data from backend
//TODO:
// function getHostData(){

// }


//dynamically generate host list table
function renderTableCells() {
    //grab element that contains table
    //iterate over data and update table with <tr> entries
    let el = document.querySelector(".host-list tbody");
    for (const item of data) {
        let row = document.createElement("tr");
        row.textContent = item;
        el.append(row);
    }
}
//anything that needs to get loaded dynamically should happen here...
//can probly make this asynchronous too, or find another way to handle it...
function main(){
    renderTableCells();
}

// main();

