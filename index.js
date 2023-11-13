const matrix = [];
function initMatrix(n,m){
    for(let i =1 ; i <= n; i++){
        const row = [];
        for(let j = 1 ; j <= m; j++){
            row.push("#ffffff");
        }
        matrix.push(row);
    }
}


//elements
const divWidth = document.querySelector("#width");
const divHeight = document.querySelector("#height");
const form = document.querySelector("form");
const divEditor = document.querySelector("#editor");

form.addEventListener("submit", onGenerate);
function onGenerate(e){
    e.preventDefault();

    //input:
    const w = parseInt(divWidth.value);
    const h = parseInt(divHeight.value);

    //
    initMatrix(h,w);

    //
    renderTable();

    divEditor.addEventListener("click", onGenerate);
    function onGenerate(e){
        if(e.target.matches("td")){
            const j = e.target.cellIndex;
            const tr = e.target.parentNode;
            const i = tr.rowIndex;

            matrix[i][j] = "#ff0000";
            renderTable();
        }
    }



}

function renderTable(){
    divEditor.innerHTML = `<table class="edit" >${matrix.map(row=>`<tr>${row.map(color=>`<td style="background-color: ${color}"></td>`).join("")}</tr>`).join("")}</table>`
}