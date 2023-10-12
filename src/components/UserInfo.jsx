import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faTag, faUserCheck, faUserPlus, faStar, faGlobe } from '@fortawesome/free-solid-svg-icons'

const spaceIcons = 'flex gap-2 items-center justify-start'

export default function UserInfo() {
    return (
        <section className='rounded-lg gap-4 grid bg-white p-3 '>
            <div className='relative'>
                <article className='grid gap-2'>
                    <div className='grid gap-4'>
                        <div className='rounded-lg bg-yellow-600 w-24 aspect-square '>
                                <img src={item.avatar_url}  alt={item.login} />
                        </div>
                        <p className='grid'>
                            <span className='font-bold'>{item.name}</span>
                            <span>{item.login}</span>
                        </p>
                        <p>
                            {item.bio}
                        </p>
                    </div>
                </article>
                <ul className='absolute top-0 right-0 grid gap-2'>
                    <li className={spaceIcons}><FontAwesomeIcon icon={faLocationDot} /><span>{item.location}</span></li>
                    <li className={spaceIcons}><FontAwesomeIcon icon={faTwitter} /><span>{item.twitter_username}</span></li>
                    <li className={spaceIcons}><FontAwesomeIcon icon={faUserCheck} /><span>item.following</span></li>
                    <li className={spaceIcons}><FontAwesomeIcon icon={faUserPlus} /><span>item.followers</span></li>
                </ul>
            </div>
            <ul className='grid gap-2'>
                <li className={spaceIcons}><FontAwesomeIcon icon={faStar} />{item.public_gists}</li>
                <li className={spaceIcons}><FontAwesomeIcon icon={faGlobe} />{item.site_admin}</li>
                <li className={spaceIcons}><FontAwesomeIcon icon={faGithub} />{item.url}</li>
                <li className={spaceIcons}><FontAwesomeIcon icon={faTag} />{item.type}</li>
            </ul>
        </section>
    )   
}
