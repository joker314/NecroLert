// ==UserScript==
// @name NecroLert
// @namespace http://joker314.github.io
// @version 1.1
// @description  Shows a visual warning if you are maing a necropost on Scratch
// @match *://scratch.mit.edu/discuss/topic/*
// ==/UserScript==
function getDate(el){
  console.log(el);
  var d = el.innerHTML;
  var d = d.replace("Today", new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate());
  var d = d.replace("Yesterday", new Date(Date.now() - 86400000).getFullYear() +
    "-" + new Date(Date.now() - 86400000).getMonth() + 
    "-" + new Date(Date.now() - 86400000).getDate());
  return new Date(d);
}
var postheaders = document.querySelectorAll(".blockpost .box-head");

for (var i = 1; i < postheaders.length; i++){
 if (getDate(postheaders[i].children[1]).valueOf() - getDate(postheaders[i - 1].children[1]).valueOf() > 1814400000){
   postheaders[i].style.backgroundColor = "red";
 }
}

if(new Date().valueOf() - getDate(postheaders[postheaders.length - 1].children[1]).valueOf()   > 1814400000){
  document.getElementsByName("AddPostForm")[0].className = "button";
  document.getElementsByName("AddPostForm")[0].style.color = "red";
  document.getElementsByName("AddPostForm")[0].children[0].innerHTML = "Necropost this";
}
