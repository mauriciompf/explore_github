import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faTag, faUserCheck, faUserPlus, faStar, faGlobe } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Search from './Search';

const spaceIcons = 'flex gap-2 items-center justify-start';

export default function UserInfo() {
  const [username, setUsername] = useState("mauriciompf") 
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const handleSearch = async (seachUsername) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${seachUsername}`);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
      }

      const userData = await response.json();
      setData(userData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(username);
  }, [username]);

  const renderIconItem = (icon, value) => (
    <li className={spaceIcons}>
        <FontAwesomeIcon icon={icon} />
        <span>{value}</span>
    </li>
  )

  return (
    <>
      <Search onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className='rounded-lg gap-4 grid bg-white p-3 '>
          <div className='relative'>
            <article className='grid gap-2'>
              <div className='grid gap-4'>
                <div className='w-24 aspect-square'>
                  <img className='rounded-lg' src={data.avatar_url} alt={data.login} />
                </div>
                <p className='grid'>
                  <span className='font-bold'>{data.name}</span>
                  <span>{data.login}</span>
                </p>
                <p>{data.bio}</p>
              </div>
            </article>
            <ul className='absolute top-0 right-0 grid gap-2'>
                {renderIconItem(faLocationDot, data.location)}
                {data.twitter_username !== null && renderIconItem(faTwitter, data.twitter_username)}
                {renderIconItem(faUserCheck, data.following)}
                {renderIconItem(faUserPlus, data.followers)}
            </ul>
          </div>
          <ul className='grid gap-2'>
            {renderIconItem(faStar, data.public_gists)}
            {renderIconItem(faGlobe, data.site_admin ? 'Admin' : 'User')}
            {renderIconItem(faGithub, data.html_url)}
            {renderIconItem(faTag, data.type)}
          </ul>
          </section>
      )}
    </>
  );
}
