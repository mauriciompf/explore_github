import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faTag, faUserCheck, faUserPlus, faStar, faGlobe } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Search from './Search';

const spaceIcons = 'flex gap-2 items-center justify-start w-fit';

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

  const renderIconItem = (icon, value, title) => (
    <li className={spaceIcons} title={title}>
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
        <section className='rounded-lg gap-4 grid bg-white px-3 py-4'>
          <div className='relative'>
            <article className='grid md:flex gap-4'>
              <div className='w-1/4 aspect-square'>
                <img className='rounded-lg h-full object-cover' src={data.avatar_url} alt={data.login} />
              </div>
              <div className='grid h-fit w-fit gap-4 py-2'>
                <div className='grid h-fit w-[96%]'>
                  <span className='font-bold'>{data.name}</span>
                  <span className='text-sm italic'>{data.login}</span>
                </div>
                <p className='text-sm w-[70%]'>{data.bio}</p>
              </div>
            </article>
            <ul className='absolute top-0 right-0 grid gap-2'>
                {renderIconItem(faLocationDot, data.location, "Location")}
                {data.twitter_username !== null && renderIconItem(faTwitter, data.twitter_username, "Twitter")}
                {renderIconItem(faUserCheck, data.following, "Folllowing")}
                {renderIconItem(faUserPlus, data.followers, "Followers")}
            </ul>
          </div>
          <ul className='grid gap-2'>
            {renderIconItem(faStar, data.public_gists, "Gists")}
            {renderIconItem(faGlobe, data.public_repos, "public_repos")}
            {renderIconItem(faGithub, <a href={data.html_url} className='hover:underline focus:underline'>{data.html_url}</a>, "GitHub")}
            {renderIconItem(faTag, data.type, "Type")}
          </ul>
          </section>
      )}
    </>
  );
}
