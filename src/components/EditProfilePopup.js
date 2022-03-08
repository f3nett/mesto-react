import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup ({isOpen, onClose, onUpdateUser}) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState(currentUser.name);
    const [description, setDescription] = React.useState(currentUser.about);

    const [nameValid, setNameValid] = React.useState(true);
    const [nameError, setNameError] = React.useState('');
    const [descriptionValid, setDescriptionValid] = React.useState(true);
    const [descriptionError, setDescriptionError] = React.useState('');

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);


    function handleChangeName(e) {
        setName(e.target.value);
        setNameValid(e.target.validity.valid);
        setNameError(e.target.validationMessage);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
        setDescriptionValid(e.target.validity.valid);
        setDescriptionError(e.target.validationMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();   
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm name="profile" title = "Редактировать профиль" submitText = "Сохранить" 
        formValid = {nameValid & descriptionValid}
        isOpen = {isOpen}
        onClose = {onClose}
        onSubmit = {handleSubmit}>
          <input
              id="input_name"
              className={`popup__input popup__input_type_profile-name ${nameValid ? '': 'popup__input-error'}`}
              type="text"
              name="name"
              required
              placeholder="Введите имя"
              minLength="3"
              maxLength="40"
              value = {name}
              onChange = {handleChangeName}
          />
          <span id="input_name-error" className={`popup__error ${nameValid ? '' : 'popup__error_active'}`}>{nameError}</span>
          <input
              id="input_descriprion"
              className = {`popup__input popup__input_type_profile-descriprion ${descriptionValid ? '': 'popup__input-error'}`}
              type="text"
              name="about"
              required
              placeholder="Введите описание"
              minLength="2"
              maxLength="200"
              value = {description}
              onChange = {handleChangeDescription}
          />
          <span id="input_descriprion-error" className={`popup__error ${descriptionValid ? '' : 'popup__error_active'}`}>{descriptionError}</span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;