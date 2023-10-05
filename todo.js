let ptage= document.getElementById("demo")
let input= document.getElementById("ent")
let arr = []

function  Add() {
	arr.push(input.value)
 document.getElementById("demo").innerText += arr;
 input.value = " " 
 .append(input.value)
}
//this a comment