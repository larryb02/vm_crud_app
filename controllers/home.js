//for testing purposes
let data = [["Host1", "0.0.0.0", "Charles Barkley"], ["Host2", "0.0.0.0", "Steve Nash"], ["Host3", "0.0.0.0", "Bob Bobalot"]];
//Handle Buttons
const menuButton = document.querySelector(".sidebar-button");
const accInfoButton = document.querySelector(".login-button");

menuButton.addEventListener("click", () => {
    //opens or closes a menu
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");

});

accInfoButton.addEventListener("click", () => {
    // alert("Account Info Button clicked!");
    let accInfo = document.querySelector(".accInfo");
    accInfo.classList.toggle("active");
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
        el.append(row);
        for (const i of item) {
            let data = document.createElement("td");
            data.textContent = i;
            row.append(data);
        }
    }
}
//anything that needs to get loaded dynamically should happen here...
//can probly make this asynchronous too, or find another way to handle it...
function main() {
    renderTableCells();
}

main();

