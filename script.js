const apiurl="https://api.quotable.io/random";

let quote=document.querySelector("#quotespace");
let btn=document.querySelector('#btn');
let author=document.querySelector('#author');

async function getquote(url){
    const response=await fetch(url);
    let data=await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}
getquote(apiurl);