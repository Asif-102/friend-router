import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    const history = useHistory();
    function handleClick(friendId) {
        history.push(`/friend/${friendId}`);
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>email: {email}</p>
            <p>
                <Link to={`/friend/${id}`}>
                    <h3>show detail of {id}</h3>
                </Link>
            </p>
            <button type="button" onClick={()=>handleClick(id)}>
                show detail of {id}
            </button>
        </div>
    );
};

export default Friend;