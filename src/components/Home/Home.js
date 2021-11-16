import React, { useEffect, useState } from 'react';

const Home = () => {
    let textInput = React.createRef();
    const [user, setUser] = useState('');
    const [username, setName] = useState('fahimahammed');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: `)
      }

    useEffect(() =>{
        const url = `https://api.github.com/users/${username}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[handleSubmit]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                <input 
                    type="text" 
                    onChange={(e) => setName(e.target.value)}
                />
      </label>
      <input type="submit" />
    </form>
    {user.login}
        </div>
    );
};

export default Home;