import { Octokit } from '@octokit/core';
import { useState, useEffect } from 'react';

function Github() {

  const [repos, setRepos] = useState({});
  
  useEffect(() => {
    async function getGithubAPI() {
      const octokit = new Octokit({auth: `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`})
      const response = await octokit.request('GET /users/{username}/repos', {
        username: 'rodrcastro'
      });

      //console.log(response.data[0].name);

      //const result = await response.json();

      setRepos(response);
    }
    
    getGithubAPI();

  }, []);

  console.log(repos.data[0].name);
  return (
    <>
    <h1>Hello </h1>
    </>
  )
}

export default Github;