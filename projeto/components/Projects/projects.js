import { useEffect, useState } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/rodrcastro/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      });
  }, []);

  return (
    <div className='bg-primary'>
      <h1 className='text-5xl font-bold text-center text-base-100'>
        My projects on Github
      </h1>
      <p className='py-6 text-center text-neutral'>What I've been working on</p>
      <div className='flex flex-row justify-center'>
        {repos.map((data) => (
          <div
            className='card bg-secondary shadow-xl mx-3 w-64'
            key={data.name}
          >
            <div className='card-body'>
              <a href={data.html_url}>
                <h2 className='card-title text-base-100'>{data.name}</h2>
              </a>
              <p className='text-neutral'>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
