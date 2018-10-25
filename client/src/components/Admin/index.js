import React from 'react';

const User = (props) => {
    let user = props.user.login;
    return (
        <div className="user_container">
            <div className="avatar">
                <img alt="avatar" src="/images/avatar.png"/>
            </div>
            <div className="nfo">
                <div><span>Name:</span> {user.name}</div>
                <div><span>Lastname:</span> {user.lastname}</div>
                <div><span>Email:</span> {user.email}</div>
                <div className="rl_container article">
                <div className="form_element">
                    <input 
                        className="form_element"
                        type='text' 
                        placeholder='Enter Qr-code'
                    />
                </div>
                </div>
            </div>
        </div>
    );
};

export default User;