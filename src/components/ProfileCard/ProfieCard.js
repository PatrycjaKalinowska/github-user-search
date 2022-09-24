import './ProfileCard.css';

const ProfileCard = ({ userName, userLogin, userAvatar, repos }) => {

    return <div className="profile-card__container">
        <img className="profile-card__avatar" src={userAvatar} alt='user-avatar'></img>
        <div className='profile-card__details-container'>
            <p className='profile-card__details'>User name: {userName}</p>
            <p className='profile-card__details'>Login: {userLogin}</p>
            <p className='profile-card__details'>Repositories: {repos}</p>
        </div>
    </div>
}

export default ProfileCard;