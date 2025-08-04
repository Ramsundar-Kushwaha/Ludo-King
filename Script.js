'use strict'
let node_lists1 = document.querySelectorAll(".house1");
let node_lists2 = document.querySelectorAll(".house2");
let node_lists3 = document.querySelectorAll(".house3");
let node_lists4 = document.querySelectorAll(".house4");

let starts;
function emojiAction(lists){
  let x = lists;
  if(lists.length){
    lists.forEach(function (element) {
      element.addEventListener("click", function (){
        let text = this.textContent;
        this.textContent = " "
        if(x == node_lists1){
          // document.getElementById("s2").textContent += text;
          let container = document.getElementById("s2"); // or "s15", etc.
          let emojiDiv = document.createElement("div");
          emojiDiv.textContent = text;

          let offset = container.children.length * 8; // adjust offset as needed
          emojiDiv.style.setProperty('--offset-x', `${offset}px`);
          emojiDiv.style.setProperty('--offset-y', `${offset}px`);
          emojiDiv.style.setProperty('--z', container.children.length);

          container.appendChild(emojiDiv);

        }
        else if(x == node_lists2){
          // document.getElementById("s15").textContent += text;
          let container = document.getElementById("s15"); // or "s15", etc.
          let emojiDiv = document.createElement("div");
          emojiDiv.textContent = text;

          let offset = container.children.length * 8; // adjust offset as needed
          emojiDiv.style.setProperty('--offset-x', `${offset}px`);
          emojiDiv.style.setProperty('--offset-y', `${offset}px`);
          emojiDiv.style.setProperty('--z', container.children.length);

          container.appendChild(emojiDiv);

        }
        else if(x == node_lists3){
          // document.getElementById("s41").textContent += text;
          let container = document.getElementById("s41"); // or "s15", etc.
          let emojiDiv = document.createElement("div");
          emojiDiv.textContent = text;

          let offset = container.children.length * 8; // adjust offset as needed
          emojiDiv.style.setProperty('--offset-x', `${offset}px`);
          emojiDiv.style.setProperty('--offset-y', `${offset}px`);
          emojiDiv.style.setProperty('--z', container.children.length);

          container.appendChild(emojiDiv);

        }
        else if(x == node_lists4){
          // document.getElementById("s28").textContent += text;
          let container = document.getElementById("s28"); // or "s15", etc.
          let emojiDiv = document.createElement("div");
          emojiDiv.textContent = text;

          let offset = container.children.length * 8; // adjust offset as needed
          emojiDiv.style.setProperty('--offset-x', `${offset}px`);
          emojiDiv.style.setProperty('--offset-y', `${offset}px`);
          emojiDiv.style.setProperty('--z', container.children.length);

          container.appendChild(emojiDiv);
        }
      });
    });
  }
  else{
    return;
  }
}

emojiAction(node_lists1);
emojiAction(node_lists2);
emojiAction(node_lists3);
emojiAction(node_lists4);