(function() {

    // your code here
    let table = document.createElement("table");

    for (let r=0; r<10;r++){
        let row = table.insertRow(r);
        for (let c=0; c<10; c++){
            let cell = row.insertCell(c);
            cell.innerHTML = Number(r+1) * Number(c+1);
        }

    }

    let target = document.getElementById("target");
    target.appendChild(table);

})();