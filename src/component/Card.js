import React from 'react';

const Card = ({name, email, id})=>{
    return(
        <div className = "bg-light-green dib br3 pd3 ma2 bw2 shadow-5 grow tc">
            <img alt="Avathar" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;