// query selector variables go here 👇
var posterImage = document.querySelector(".poster-img")
var posterTitle = document.querySelector(".poster-title")
var posterQuote = document.querySelector(".poster-quote")
var showRandomButton = document.querySelector(".show-random")
var makeOwnPosterButton = document.querySelector(".show-form")
var posterForm = document.querySelector(".poster-form")
var mainPage = document.querySelector(".main-poster")
var showSavedButton = document.querySelector(".show-saved")
var showSavedPosters = document.querySelector(".saved-posters")
var nevermindButton = document.querySelector(".show-main")
var backToMainButton = document.querySelector(".back-to-main")
var showMyPosterButton = document.querySelector(".make-poster")
var savePosterButton = document.querySelector(".save-poster")
var savedPostersGrid = document.querySelector(".saved-posters-grid")
var miniPosters = document.querySelectorAll(".mini-poster")
var userGeneratedURL = document.getElementById('poster-image-url')
var userGeneratedTitle = document.getElementById('poster-title')
var userGeneratedQuote = document.getElementById('poster-quote')

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
]
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
]
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
]
var savedPosters = []
var currentPoster

// event listeners go here 👇
showRandomButton.addEventListener("click", displayRandomPoster)
window.addEventListener("load", displayRandomPoster)
makeOwnPosterButton.addEventListener("click", showForm)
showSavedButton.addEventListener("click", showSavedArray)
nevermindButton.addEventListener("click", goBack)
backToMainButton.addEventListener("click", goBack)
showMyPosterButton.addEventListener("click", showMyPoster)
savePosterButton.addEventListener("click", savePoster)
showSavedButton.addEventListener("click", displaySavedPosters)
savedPostersGrid.addEventListener("dblclick", function(e) { deletePoster(e)
})

// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function displayPoster(newPoster) {
  posterImage.src = newPoster.imageURL;
  posterTitle.innerText = newPoster.title;
  posterQuote.innerText = newPoster.quote;
}

function displayRandomPoster() {
  currentPoster = new Poster(images[getRandomIndex(images)], titles[getRandomIndex(titles)], quotes[getRandomIndex(quotes)])
  posterImage.src = currentPoster.imageURL
  posterTitle.innerText = currentPoster.title
  posterQuote.innerText = currentPoster.quote
  return currentPoster
}

function showForm() {
  mainPage.classList.add("hidden")
  posterForm.classList.remove("hidden")
}

function showSavedArray() {
  mainPage.classList.add("hidden")
  showSavedPosters.classList.remove("hidden")
}

function goBack() {
  if(showSavedPosters.classList.contains("hidden")) {
    posterForm.classList.add("hidden")
    mainPage.classList.remove("hidden")
  }
  if(posterForm.classList.contains("hidden")) {
    showSavedPosters.classList.add("hidden")
    mainPage.classList.remove("hidden")
  }
}

function showMyPoster() {
  event.preventDefault();
  var usersPoster = new Poster (userGeneratedURL.value, userGeneratedTitle.value, userGeneratedQuote.value)
  displayPoster(usersPoster)
  posterForm.classList.add("hidden")
  mainPage.classList.remove("hidden")
  images.push(userGeneratedURL)
  titles.push(userGeneratedTitle)
  quotes.push(userGeneratedQuote)
}

function savePoster() {
  if(!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster)
  }
}

function displaySavedPosters() {
  var posterHTML = ""
  for (var i = 0; i < savedPosters.length; i++) {
    posterHTML +=
    `<article class = "mini-poster">
    <img class="poster-img" id=${savedPosters[i].id} src= ${savedPosters[i].imageURL} />
    <h2 class="poster-title">${savedPosters[i].title}</h2>
    <h4 class="poster-quote">${savedPosters[i].quote}</h4>
    </article>`
  }
  savedPostersGrid.innerHTML = posterHTML
}

function deletePoster(e) {
  var unwantedPoster = e.target.closest('article')
  e.target.closest('article').remove()
  for (var eaPoster = 0; eaPoster < savedPosters.length; eaPoster ++){
    if (savedPosters[eaPoster].id === unwantedPoster.children[eaPoster].id) {
      savedPosters.splice[eaPoster, 1]
    }
  }
}
