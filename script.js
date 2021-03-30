const quoteContainer = document.getElementById('quote-container')
const prevQuote = document.getElementById('quote-text')
const prevAuthor = document.getElementById('author')
const postOnTwitter = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-qoute')
// Getting Quote from API

async function getQuote(){
    const apiURL = 'http://api.quotable.io/random';
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        if(data.length > 50){      
            prevQuote.classList.add('long-quote')      
            prevQuote.innerHTML = data.content;
        }
        else{            
            prevQuote.classList.remove('long-quote')      
            prevQuote.innerHTML = data.content;
        }
        if(data.author ===''){
            prevAuthor.innerHTML = "Unkown"
        }
        else{
            prevAuthor.innerHTML = data.author;
        }             
     }
    catch(error){
         getQuote(); 
    }
}
// function tweetQuote(){
//     const qte = prevQuote.innerText;
//     const auth = prevAuthor.innerText;
//     // const twitterURL = `https://twitter.com/intent/tweet?text=${qte}-${auth}`;
//     window.open(twitterURL,'_blank');
// }

// postOnTwitter.addEventListener('click', tweetQuote);
// newQuoteBtn.addEventListener('click' , getQuote);
 
getQuote();



