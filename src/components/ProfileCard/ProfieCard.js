import './ProfileCard.css';

const ProfileCard = ({ userName, userLogin, userAvatar, repos, profileURL }) => {

    return <div className="profile-card__container">
        <img className="profile-card__avatar" src={userAvatar} alt='user-avatar'></img>
        <div className='profile-card__details-container'>
            <p className='profile-card__details'><span>User name:</span> {userName}</p>
            <p className='profile-card__details'><span>Login:</span> {userLogin}</p>
            <p className='profile-card__details'><span>Repositories:</span> {repos}</p>
            <a className="profile-card__link" href={profileURL}>{profileURL}</a>
        </div>
    </div>
}

export default ProfileCard;