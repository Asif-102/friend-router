import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    let {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    const {name, email,  phone, website} = friend;
    return (
        <div>
            <p>This is Friend Detail Componentz: {friendId}</p>
            <h3>{name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p>website: {website}</p>
        </div>
    );
};

export default FriendDetail;