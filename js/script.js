// Alert Name
document.getElementById('alertNameBtn').addEventListener('click', function () {
    alert("My Name is 'Raheel'");
});

// Alert Number
document.getElementById('alertNumberBtn').addEventListener('click', function () {
    var number = 42;
    alert("The number is: " + number);
});

// Show Variable Number


// Show camelCase Examples
document.getElementById('showCamelCaseExample').addEventListener('click', function () {
    var inputText = document.getElementById('clearStatementInput').value;
    var camelCaseText = toCamelCase(inputText);

    document.getElementById('clearStatementInput').value = camelCaseText;
});

function toCamelCase(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
}


// Sum 2 Number


// Subsctract 2 Number


// Multiply 2 Number


// Divide 2 Number


// Calculate Some Numbers


// Clear Statement
document.getElementById('clearStatementBtn').addEventListener('click', function () {
    document.getElementById('clearStatementInput').value = '';
});

// Clear Output

