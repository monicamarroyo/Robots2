import React, {Component} from 'react';
//this is good for throwing errors in production but for our case it shows us the errors. 
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    //new lifecycle method its kind of like the try catch component
    //if component does have an error ser the state to true;
    componentDidCatch(error,info) {
        this.setState({hasError:true})
    }
    
    render () {
        //if component has error then return this opps this is not good
        //else it going to return the cardList bcs its the child component since were wrapping this function over that component in app
        if(this.state.hasError) {
            return < h1>Oooops. This is not good</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;