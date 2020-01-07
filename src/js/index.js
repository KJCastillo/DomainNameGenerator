/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

var pronoun = ["The", "Our", "Your", "That"];
var adj = ["Great", "Big", "Small", "Tiny"];
var noun = ["Mandalorian", "Batman", "Kevin", "Yeezy"];
var ending = [".com", ".net", ".org", ".edu"];
let temp = "";
for (let a of pronoun) {
  for (let b of adj) {
    for (let c of noun) {
      for (let d of ending) {
        temp += "<li>" + a + b + c + d + "</li>";
      }
    }
  }
}
document.querySelector("ul").innerHTML = temp;
