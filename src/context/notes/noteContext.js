//this is how we are using context api...We need to write this so that react can provide us functionalities to use context api,
//then inside noteState.js, react wants us to make a function, and in the function whatever things you want to provide, write it inside
//value=
//then write comething context.provider, what will happen with this ? jab bhi iss context k andar kisi cheez ko wrap kroge uske beech mein automatically
//saare children aajayenge
import { createContext } from "react";

//Syntaxt To Create a Context..
const noteContext=createContext("bj");
//What is context ? Context will basically hold the states related to the notes
//We will keep states related to notes here so that our components which are drilled down to any level, we can make them access all these states.

export default noteContext;
