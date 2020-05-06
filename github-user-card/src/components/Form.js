import React from 'react';

const Form = props =>{

    return(
        <div className="form">
            <form onSubmit={props.onSubmit}>
                <input name="username" type="text" value={props.user} onChange={props.onChange} placeholder="Enter github username" className="input"></input>
                <button onClick={props.onSubmit} className="btn">Search</button>
            </form>
        </div>
    )
}

export default Form