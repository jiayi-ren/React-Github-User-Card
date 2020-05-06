import React from 'react';

const Card = props =>{

    const {login, name, html_url, location, followers, following} = props.data

    return(
        <div>
            <p>{name}</p>
            <p>{login}</p>
            <p>location: {location}</p>
            <p>profile: {html_url}</p>
            <p>followers: {followers}</p>
            <p>following: {following}</p>
        </div>
    )
}

export default Card