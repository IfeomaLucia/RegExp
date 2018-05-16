/*By Nwosu Ifeoma Lucia
*at Genesys Tech hub, Enugu
*May 16th, 2018*/

/*The code below declares a string and a function which accepts a string as an argument
*It uses a regular expression to display the names from the string inside an array*/
let text = `During today's presentation "Valentine Oragbakosi" presented first followed by "Nwosu Ifeoma Lucia" and then "Ibe Agwu" after which "Chinonso Williams Junior", "Ndife Uchenna", "Ehiogu Chika Josephine" and finally "Chidera Jennifer". "Ebuka " will be presenting tomorrow.`
function displayNames(text){
    var names = text.match(/["]\w*\s?\w*\s?\w*["]/g).toString();//checks for the match in the text
    console.log([names]);//displays the result as an array
}
displayNames(text);

//The code below is used to  validate HTML colour codes
var htmlColours = "These are hex color codes #AACCFF #ff5733 #E9967A except #BB769 #0000 #@DFGG ";
function displayHexColours(input){
    var colours = input.match(/[#]([a-zA-Z]|[0-9]){6}/gi);//matches the equivalent expressions
    console.log(colours);//displays the matched expressions
}
displayHexColours(htmlColours);

//This next code displays any url in the sentence with a link
var sentence = "Visit http://genesystechhub.com for more information about Genesys";
function convertUrl(sentence){
    var url = new RegExp('((https?|ftps?)://(www)?([a-zA-Z0-9-_]+\.[a-zA-Z]{2,6}))', 'gi')//checks for the string using the regex
    var link = sentence.replace(url, "<a href = '$1'>$4</a>");//replaces the url with the appropriate link
    console.log(link);
}
convertUrl(sentence);
