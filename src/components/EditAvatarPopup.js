import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const avatarRef = React.useRef();
    const [avatarValid, setAvatarValid] = React.useState(false);
    const [avatarError, setAvatarError] = React.useState('');

    function handleChangeAvatar(e) {
        setAvatarValid(e.target.validity.valid);
        setAvatarError(e.target.validationMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
        avatar: avatarRef.current.value
        });
    }

    return (
        <PopupWithForm name = "avatar" title = "Обновить аватар" submitText = "Сохранить" 
        formValid = {avatarValid}
        isOpen = {isOpen}
        onClose = {onClose}
        onSubmit = {handleSubmit}>
            <input
            id = "input_avatar"
            className = {`popup__input popup__input_type_avatar-link ${avatarError == '' ? '': 'popup__input-error'}`}
            type = "url"
            name = "avatar"
            required
            placeholder = "https://somewebsite.com/someimage.jpg"
            ref = {avatarRef}
            onChange = {handleChangeAvatar}
            />
            <span id = "input_avatar-error" className = {`popup__error ${avatarError == '' ? '' : 'popup__error_active'}`}>{avatarError}</span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;