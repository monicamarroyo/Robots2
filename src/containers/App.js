import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from  '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField,requestRobots} from '../actions';
import {connect} from 'react-redux';
import Header from '../components/Header';
//state the description of our app, object that describes our application
//state is able to change therefore this SearchBox can change

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
//sends actions
const mapDispatchToProps = (dispatch) => {
    //on this function on SearchField event dispatch this searchField
    return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    //this is something that can change, usually lives in the parent component 
   // constructor() {
        //this calls the constructor
     //   super();
       // this.state = {
         //   robots: [],
            //this can be removed because we are know using redux store
      // searchfield: ''
        //}
        //console.log('1');
   // }
    //if component did mount after it renders
    componentDidMount() {
        
        //we created an action for this
        this.props.onRequestRobots();
        //ApI, fetch is a window method and makes a request to a server which comes in all browsers
        //fetching data from this url
        //console.log(this.props.store.getState());
       // fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
         //   return response.json();
        //})
        //updating and setting users to equal robots on our state
       // .then(users => {
         //   this.setState({robots: users});
       // })
        
        //console.log('2');
    }
    //anytime we use a method/function for state we have to use arrow function 
    //this is removed because we declared it on our mapdispatch function is where we call this event
    //onSearchChange =(event) =>{
       // console.log(event.target.value);
       //this fillters the robots and returns an array of robots
       //you have to change the search field as it gets updated
      // this.setState({searchfield: event.target.value});
        
        //console.log(filteredRobots);
    //}
    
    render() {
        
        const {searchField, onSearchChange,robots,isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        //console.log('3');
        //this prints out 1,3,2,3 
        //what runs first is the constructor then renender then component did mount then render again
        return isPending  ?//robots.length === 0 ) {
              <h1> loading </h1> :

        
        
     (
        <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobots} />
            </ErrorBoundary>
        </Scroll>
        </div>
    );
}    
}




export default connect(mapStateToProps,mapDispatchToProps)(App);
//its going to return another function
//mapStateToProps what state should I listen too 
//mapDispatchToProps what action should I listen too
//export default connect(mapStateToProps,mapDispatchToProps)(App)