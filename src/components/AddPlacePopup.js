import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onUpdatePlace}) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');
    const [nameValid, setNameValid] = React.useState(false);
    const [nameError, setNameError] = React.useState('');
    const [linkValid, setLinkValid] = React.useState(false);
    const [linkError, setLinkError] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
        setNameValid(e.target.validity.valid);
        setNameError(e.target.validationMessage);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
        setLinkValid(e.target.validity.valid);
        setLinkError(e.target.validationMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();      
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdatePlace({
          name,
          link,
        });
    }

    return (
        <PopupWithForm name="place" title = "Новое место" submitText = "Создать" 
        formValid = {nameValid & linkValid}
        isOpen = {isOpen}
        onClose = {onClose}
        onSubmit = {handleSubmit}>
          <input
            id="input_place"
            className={`popup__input popup__input_type_place-name ${nameError == '' ? '': 'popup__input-error'}`}
            type="text"
            name="name"
            required
            placeholder="Название"
            minLength="2"
            maxLength="30"
            value = {name}
            onChange = {handleChangeName}
          />
          <span id="input_place-error" className={`popup__error ${nameError == '' ? '' : 'popup__error_active'}`}>{nameError}</span>
          <input
            id="input_url"
            className={`popup__input popup__input_type_place-url ${linkError == ''  ? '': 'popup__input-error'}`}
            type="url"
            name="link"
            required
            placeholder="Ссылка на картинку"
            value = {link}
            onChange = {handleChangeLink}
          />
          <span id="input_url-error" className={`popup__error ${linkError == '' ? '' : 'popup__error_active'}`}>{linkError}</span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;