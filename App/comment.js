const subButton = document.querySelector("#submit");
const commentInput = document.querySelector("#text-content");
let arr = [];
ambil();

subButton.addEventListener("click", addTweet);

function ambil() {
  const tweets = document.querySelector("#tweets");
  var children = tweets.children;
  for (let i = 0; i < children.length; i++) {
    arr.push(children[i].innerText);
  }
}

function addTweet(e) {
  e.preventDefault();

  let wrapper = document.querySelector("#tweets");

  console.log(wrapper)

  document.querySelector("#tweet").remove();

  const newList = document.createElement("div");
  newList.setAttribute("id", "tweet");
  newList.classList.add("col");
  

  for (let i = 0; i < arr.length; i++) {
    const newTweet = document.createElement("div");
    newTweet.classList.add("col", "border", "border-dark", "m-2", "p-2");
    newTweet.innerText = arr[i];
    newList.append(newTweet);
  }

  const newTweet = document.createElement("div");
  newTweet.classList.add("col", "border", "border-dark", "m-2", "p-2");
  newTweet.innerText = commentInput.value;
  wrapper.append(newList);
  newList.append(newTweet);
  arr.push(commentInput.value);

  document.querySelector(".bottom-side").append(newList);
  commentInput.value = "";
}