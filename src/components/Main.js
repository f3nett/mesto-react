import React from 'react';
import Card from './Card';
import logo from '../images/logo/edit_icon.svg';
import add_button from '../images/logo/add_button.svg';
import api from '../utils/api';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        Promise.all([api.getUser(), api.getCards()])
        .then(([userData, cardsData]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setCards(cardsData);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <main className="content">
            <section className="profile">
            <div className="profile__block">
                <div className="profile__avatar-area">
                <img
                    className="profile__avatar"
                    src={userAvatar}
                    alt="Аватар"
                    onClick = {props.onEditAvatar}
                />
                </div>
                <div className="profile__info">
                <div className="profile__name-section">
                    <h1 className="profile__name">{userName}</h1>
                    <button
                    className="profile__edit-button button button_opacity_medium"
                    type="button"
                    onClick = {props.onEditProfile}
                    >
                    <img
                        className="profile__edit-icon"
                        src={logo}
                        alt="Редактировать"
                    />
                    </button>
                </div>
                <p className="profile__description">{userDescription}</p>
                </div>
            </div>
            <button
                className="profile__add-button button button_opacity_medium"
                type="button"
                onClick = {props.onAddPlace}
            >
                <img
                className="profile__add-icon"
                src={add_button}
                alt="Добавить"
                />
            </button>
            </section>
            <section className="places">
                {cards.map((card) => <Card key = {card._id} card={card} onCardClick = {props.onCardClick}/>)}
            </section>
      </main>
    )
}

export default Main;