var allText = [];
var allTextLines = [];
var Lines = [];

var csvFile = new XMLHttpRequest();
csvFile.open("GET", "./tes.csv", true);
console.log(csvFile)
csvFile.onreadystatechange = function () {
    allText = csvFile.responseText;
    console.log(allText)
};