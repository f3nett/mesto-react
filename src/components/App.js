import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: null, link: null});
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({name: card.name, link: card.link});
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: null, link: null});
  }
  
  return (
  <div className="page">
    <div className="page__content">
      <Header />
      <Main 
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
      />
      <Footer />
    </div>
    <ImagePopup card = {selectedCard} onClose = {closeAllPopups}/>
    <PopupWithForm name="profile" title = "Редактировать профиль" submitText = "Сохранить" 
    isOpen = {isEditProfilePopupOpen}
    onClose = {closeAllPopups}
    children = {
      <>
        <input
            id="input_name"
            className="popup__input popup__input_type_profile-name"
            type="text"
            name="name"
            required
            placeholder="Введите имя"
            minLength="3"
            maxLength="40"
        />
        <span id="input_name-error" className="popup__error"></span>
        <input
            id="input_descriprion"
            className="popup__input popup__input_type_profile-descriprion"
            type="text"
            name="about"
            required
            placeholder="Введите описание"
            minLength="2"
            maxLength="200"
        />
        <span id="input_descriprion-error" className="popup__error"></span>
      </>
    }/>
    <PopupWithForm name="place" title = "Новое место" submitText = "Создать" 
    isOpen = {isAddPlacePopupOpen}
    onClose = {closeAllPopups}
    children = {
      <>
        <input
          id="input_place"
          className="popup__input popup__input_type_place-name"
          type="text"
          name="name"
          required
          placeholder="Название"
          minLength="2"
          maxLength="30"
        />
        <span id="input_place-error" className="popup__error"></span>
        <input
          id="input_url"
          className="popup__input popup__input_type_place-url"
          type="url"
          name="link"
          required
          placeholder="Ссылка на картинку"
        />
        <span id="input_url-error" className="popup__error"></span>
      </>
    }/>
    <PopupWithForm name="avatar" title = "Обновить аватар" submitText = "Сохранить" 
    isOpen = {isEditAvatarPopupOpen}
    onClose = {closeAllPopups}
    children = {
      <>
        <input
          id="input_avatar"
          className="popup__input popup__input_type_avatar-link"
          type="url"
          name="avatar"
          required
          placeholder="https://somewebsite.com/someimage.jpg"
        />
        <span id="input_avatar-error" className="popup__error"></span>
      </>
    }/>
    <PopupWithForm name="confirmation" title = "Вы уверены?" submitText = "Да"/>
  </div>
  );
}

export default App;
