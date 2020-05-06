import React from 'react';

const Form = props =>{

    return(
        <div>
            <form onSubmit={props.onSubmit}>
                <input name="username" type="text" value={props.user} onChange={props.onChange} placeholder="Enter github username"></input>
                <button onClick={props.onSubmit}>Search</button>
            </form>
        </div>
    )
}

export default Form