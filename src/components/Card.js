import React from 'react';

//templating string, we can randomize the robots we get using this url `https://robohash.org/test?200x200` we use test bcs it give us radom robot but if we use robots.id it gives us a new robot all the time
//(props) = props.name , props,email but we destructred it before
const Card = ({name,email,id}) => {
    
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src= {`https://robohash.org/${id}?200x200`} />
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;