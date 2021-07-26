"use strict"; 

// Requesting the Data fetch method w/ For loop:

fetch("https://www.reddit.com/r/aww/.json")
.then(response => response.json())
.then(data => {

  // For loop
  for (let i = 0; i <= 27; i++ ) {
  // Creating Elements  
  let title = document.createElement("h1"); 
  let image = document.createElement("img"); 
  let link = document.createElement("a"); 
  // Displaying the data in html
  title.innerText = data.data.children[i].data.title;
  image.src = data.data.children[i].data.thumbnail; 
  link.href = data.data.children[i].data.url; 
  link.innerText = link.href; 
  // Append the data
  document.body.append(title); 
  document.body.append(image); 
  document.body.append(link); 
  console.log(); 

  }
  
})

// Changing Background Color of body with button
var button = document.querySelector("button")
button.addEventListener("click", function(){
       const curColour = document.body.style.backgroundColor; 

       if (curColour == "bisque") {
         document.body.style.backgroundColor = "gray"
       }
       else {
         document.body.style.backgroundColor = "bisque"
       }
}); 


// Notes:


//Requesting the Data: 

// fetch("https://www.reddit.com/r/aww/.json")
// .then(response => response.json())
// .then(data => {
//   // Displaying the Data:  
//   let parent = data.data.children; 
//   console.log(parent); 
//     const title = document.createElement("ul"); 
//     //document.body.append(li);  
//     for (let data of parent) { 
//             let listItem = document.createElement("li"); 
//             let title = data.data.children[data].data.title
//             listItem.innerText = title; 
//             list.append(listItem)
//     } 
// })


// fetch("https://www.reddit.com/r/aww/.json")
// .then(response => response.json())
// .then(data => { 
// let something = data.data.children 
// for (let i=0)

// })

// async function getPosts(){
// let ourFetch = await fetch("https://www.reddit.com/r/aww/.json")
// let posts = await ourFetch.json(); 
//   let title = document.createElement
//   let image = document.createElement
//   let link = document.createElement
//   title.innerText = data.data.children[0].data.title; 
//   image.src = data.data.children[0].data.image
//   link.href = data.data.children[0].data.url
//   link.innerText = "https://dsicord.gg/UXfd5Pn"
//   document.body.append(title)
//   document.body.append(image)
//   document.body.append(link)
// }

// async way:
// async function getData(){
//   let ourFetch = await fetch("https://www.reddit.com/r/aww/.json")
//   let data = await ourFetch.json(); 


// for (let i = 0; i <= 27; i++ ) {
//       console.log(i);
//       let title = document.createElement("h1");
//       let image = document.createElement("img");
//       let link = document.createElement("a");
//       title.innerText = data.data.children[i].data.title; 
//       image.src = data.data.children[i].data.thumbnail;
//       link.href = data.data.children[i].data.url;
//       link.innerText = "https://dsicord.gg/UXfd5Pn" // link.href; 
//       document.body.append(title);
//       document.body.append(image);
//       document.body.append(link);
//       console.log();
//     }

// }  

//   getData();    







