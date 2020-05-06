import React from 'react';

const Card = props =>{

    const {login, name, avatar_url, html_url, location, followers, following} = props.data

    return(
        <div className="card">
            <img src={avatar_url} alt={`${name}'s avatar`} className="avatar"></img>
            <div className="card-info">
                <h3 className="name">{name}</h3>
                <p className="username">{login}</p>
                <p>Location: {location}</p>
                <p>Profile: {html_url}</p>
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
            </div>
            <div>
                <img src={`https://ghchart.rshah.org/${login}`} alt={`${name}'s github contribution`} className="contribution"></img>
            </div>
        </div>
    )
}

export default Card