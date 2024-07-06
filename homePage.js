let data = ["Host1", "Host2", "Host3"];

//fetches data from db
function getHostData(){

}

//dynamically generate host list table
function renderTableCells() {
    //grab element that contains table
    //iterate over data and update table with <tr> entries
    let el = document.querySelector(".host-list tbody");
    for(const item of data){
        let row = document.createElement("tr");
        row.textContent = item;
        el.append(row);
    }
}