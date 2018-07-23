import React, {Component} from 'react';
// what does pure component mean it would only rerender when its properties change, not a huge fan of using Pure Component so be warned 
class CounterButton extends Component {
    //header gets rerendered onto the screen twice header, searchbox and cardlist
    //reactlifecyle hook if it true it will update component else it wont
    
    //state that has a count of zero
    constructor() {
        super();
        this.state = {
            count : 0
        }
    }
    //dont overuse it for every comparesion bcs it does shallow comparission and 
    shouldComponentUpdate(nextProps, nextState) {
       if(this.state.count !== nextState.count) {
           return true;
       }
       return false;
    }
    //method that is called when user clicks on button

    updateCount = () => {
        //instead of doing this is best practice to grab current state and return it like this
     //this.setState({count: this.state.count + 1});
     this.setState(state => {
        return {count: state.count + 1}
     });
    }
    render () {
        console.log('CounterButton');
       return  (
        <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
        </button>
       );
    }
}

 
export default CounterButton;
