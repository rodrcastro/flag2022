import { useState, useEffect } from 'react';

function Github() {
  const [repos, setRepos] = useState([]);
 
  useEffect(() => {
    fetch('https://api.github.com/users/rodrcastro/repos')
    .then(response => response.json())
    .then(data => {setRepos(data)})
    
  }, []);

  return (
    <>
      <ul>
        {repos.map((data) => (
          <li>
            <h2>{data.name}</h2>
            <h3>{data.description}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Github;