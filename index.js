const quoteArray = ["When you have a dream, you've got to grab it and never let it go - Carol Burnett", 
    "Life has got all those twists and turns. You've got to hold on tight and off you go. - Nicole Kidman", 
    "Keep your face always toward the sunshine, and shadows will fall behind you. - Walt Whitman", 
    "I’d rather regret the things I’ve done than regret the things I haven’t done.” —Lucille Ball",
    "It’s not whether you get knocked down. It’s whether you get up. —Vince Lombardi",

];


let messageHolder = [
    {message: "When you have a dream, you've got to grab it and never let it go", author: " - Carol Burnett" },
    {message: "Life has got all those twists and turns. You've got to hold on tight and off you go.", author: " - Nicole Kidman"},
    {message: "Keep your face always toward the sunshine, and shadows will fall behind you.", author: " - Walt Whitman"},
    {message:"I’d rather regret the things I’ve done than regret the things I haven’t done.", author: " - Lucille Ball" }

];





let btn = document.getElementById("button");
let paragraph = document.getElementById("paragraph");
let quoteBy = document.getElementById("quoteBy");



btn.addEventListener("click", function(){
    random = Math.floor(Math.random() * quoteArray.length);
    let object = messageHolder[random];
    let message = object.message;
    let author = object.author;
    
    paragraph.innerHTML = message;
    quoteBy.innerHTML = author;
});