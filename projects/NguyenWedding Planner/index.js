

function distributeGueststoTables(totalGuests, numberOfTables) {
    let GuestsPerTable = Math.floor(totalGuests / numberOfTables);
    let leftoverGuests = numberOfTables % totalGuests;

    if (leftoverGuests > 0) {
        GuestsPerTable += 1;
    }

    let TablesPerGuest = leftoverGuests > 0 ? Math.ceil(totalGuests / GuestsPerTable) - 1 : Math.ceil(totalGuests / GuestsPerTable);
    
    return {
        totalGuests: totalGuests,
        numberOfTables: numberOfTables,
        GuestsPerTable: GuestsPerTable,
        TablesPerGuest: TablesPerGuest,
        leftoverGuests: leftoverGuests
    };
}

let totalGuestsInput = prompt("How many guests do you have?");
let numberOfTablesInput = prompt("How many tables do you want?");

let totalGuests = parseInt(totalGuestsInput);
let numberOfTables = parseInt(numberOfTablesInput);

if (isNaN(totalGuests) || isNaN(numberOfTables) || totalGuests < 0 || numberOfTables <= 0) {
    alert("Invalid input. Please enter valid positive numbers.");
} else {
    let result = distributeGueststoTables(totalGuests, numberOfTables);
    alert(`Your ${result.totalGuests} guests will be seated as follows: ${result.TablesPerGuest} tables of ${result.GuestsPerTable} and 1 table of ${result.leftoverGuests}.`);

}


function refreshPage() {

let totalGuestsInput = prompt("How many guests do you have?");
let numberOfTablesInput = prompt("How many tables do you want?");

let totalGuests = parseInt(totalGuestsInput);
let numberOfTables = parseInt(numberOfTablesInput);

if (isNaN(totalGuests) || isNaN(numberOfTables) || totalGuests < 0 || numberOfTables <= 0) {
    alert("Invalid input. Please enter valid positive numbers.");
} else {
    let result = distributeGueststoTables(totalGuests, numberOfTables);
    alert(`Your ${result.totalGuests} guests will be seated as follows: ${result.TablesPerGuest} tables of ${result.GuestsPerTable} and 1 table of ${result.leftoverGuests}.`);

}

}