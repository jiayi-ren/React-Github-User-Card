import React from 'react';
import Card from './Card';

const List = props =>{
    return (
        <div className="cards">
            {
                props.list.map( user =>{
                    // console.log(user)
                    return(
                        <Card key={user.id} data={user}/>
                    ) 
                })
            }
        </div>
    )
}

export default List;