import { useEffect, useState } from 'react';
import './RepoCard.css';

const RepoCard = ({ item }) => {
    const [displayDetails, setDisplayDetails] = useState(false);

    const handleClick = (e) => {
        setDisplayDetails(!displayDetails);   
    }

    return <div className="repo-card__container">
        <li>
            <div className='repo-card__basic-info-container'>
                <div className='repo-card__basic-info-text'>
                    <p>Repo name: {item.name}</p>
                    <p>Description: {item.description}</p>
                </div>
                <button className='btn repo-card__btn' onClick={handleClick}>Details</button>
            </div>
            {displayDetails ? <div className='repo-card__details'>
                <a href={item.html_url}>Go to repo</a>
                <p>Stars: {item.stargazers_count}</p>
                <p>Watchers: {item.watchers_count}</p>
                <p>Forks: {item.forks}</p>
            </div> : ""}
        </li>
    </div>
}

export default RepoCard;