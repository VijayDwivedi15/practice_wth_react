import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

state= 
{
  persons : [
    {name: "Vijay", age:"25"},
    {name: "Amit", age:"27"},
    {name: "lalit", age:"25"}
  ]
}


  swicthandler = () =>
  {
    // console.log("hey I'm button");
    // This will Not work so dont do this     this.state.persons[0].name="Vijay Dwivedi"; 
  }


  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button onClick={th