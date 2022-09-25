import { useEffect, useState } from 'react';
import './RepoCard.css';

const RepoCard = ({ item }) => {
    const [displayDetails, setDisplayDetails] = useState(false);

    useEffect(() => {
        setDisplayDetails(false);
    }, [ , item]);

    const handleClick = (e) => {
        setDisplayDetails(!displayDetails);   
    }

    return <div className="repo-card__container">
        <li>
            <div className='repo-card__basic-info-container'>
                <div className='repo-card__basic-info-text'>
                    <p><span>Repo name:</span> {item.name}</p>
                    <p><span>Description:</span> {item.description}</p>
                </div>
                <button className='btn repo-card__btn' onClick={handleClick}>Details</button>
            </div>
            {displayDetails ? <div className='repo-card__details'>
                <a href={item.html_url}>{item.html_url}</a>
                <p><span>Stars:</span> {item.stargazers_count}</p>
                <p><span>Watchers:</span> {item.watchers_count}</p>
                <p><span>Forks:</span> {item.forks}</p>
            </div> : ""}
        </li>
    </div>
}

export default RepoCard;