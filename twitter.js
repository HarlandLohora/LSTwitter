function cerrarSesion(){
  window.location.replace("index.html");
}
function tweet(){
  let newTweet = document.getElementById('modalTweet');
  let textArea = document.createElement('textarea');
  let divTweets= document.getElementById('textTweet');
  newTweet.classList.remove('noMostrar');
  textArea.setAttribute('id','message');
  divTweets.appendChild(textArea);
}

function closeModal(){
  let newTweet  = document.getElementById('modalTweet');
  let divTweets = document.getElementById('textTweet');
  newTweet.classList.add('noMostrar');
  while (divTweets.firstChild) {
    divTweets.removeChild(divTweets.firstChild);
  }
}

function newTweet(){
  let tweets      = document.getElementById('tweets');
  let message     = document.getElementById('message').value;
  let tweet       = document.createElement('li');
  let totalTweets = document.getElementById('numTweets');
  tweet.classList.add('Tweets');
  tweet.innerText = message;
  tweet.innerHTML += '<i class="fa fa-trash-alt delete" aria-hidden="true" onclick="deleteTweet(this)"></i>';
  let numTweets   = document.getElementsByClassName('Tweets');
  totalTweets.innerText = (numTweets.length)+1;
  tweets.appendChild(tweet);
  closeModal();
}


function deleteTweet(elem){
  let totalTweets = document.getElementById('numTweets');
  let numTweets   = document.getElementsByClassName('Tweets');
  totalTweets.innerText = (numTweets.length)-1;
  elem.parentElement.parentElement.removeChild(elem.parentElement);
}
