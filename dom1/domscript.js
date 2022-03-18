var CellElement = document.getElementById('cell');
var CellElements = document.getElementsByName('cell');

document.write("<br> Er zijn " +CellElements.length+" cellen geslecteerd.");

for(var CellCounter in CellElements){
    CellElements[CellCounter].innerHTML = "cel nummer: "+CellCounter;

    if(CellCounter & 1){
        CellElements[CellCounter].classList.add("red");
    }else{
        CellElements[CellCounter].classList.add("blue");
    }
    
}

// CellElement.innerHTML = "Selected by ID";