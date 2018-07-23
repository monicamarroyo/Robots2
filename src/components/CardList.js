import React from 'react';
import Card from './Card';
const CardList = ({robots}) => {
   
   //this throws an error for our error boundary 
   //if(true) {
     //  throw new Error('Nooooo');
   //}
   console.log('CardList');
    return (
    <div>
     {
         robots.map((user,i) => {
            return <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
            />
         })
     }
    </div>
    );
}

export default CardList;
   

//react-redux, allows us to connect redux to our react component bcs theorectially you can use redux with another platform
   
//webpack is to optimize our css and javascript files
//redux is for statemanagement
 //state as memory- redux solves statemanagement, what if we remove all the state from the components and we just have props that is being passed down and we keep it in a store in one massive object that describes how our app and any component that needs state we can pass those properties
    //it goes through every users and returns a card component with name email and id
    //key prop is need incase something gets deleted
    //when we have a loop you have to give it a unique key
   //this is a pure components- they dont need to know about anything we always know what it would look like
   //why redux
   //good for managing large state, useful for sharing data between containers, predictiable state management using the 3 principals 
   //3 principals 
   // single source of truth , state is read only, changes using pure functions

   //we create an action that goes to reducer which goes to the store and make changes to the view layer
   //with all the actions go through a reducer and thruough that function and updates the store and then make a change
   //flux pattern, action -> dispatcher-> store-> view
   //its a one way data flow, before we had model view controller
   //we have an action and its read by a controller, and based on that action we update the model and update the view, problem is that model can change this view and it continue to change the view and makes it much more complex
   //redux is == this.state and remove all this everything from react 
   //you can keep some react state in one component it doesn't complete replaces, and when to use this 