import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup({isOpen, onClose, onSubmit, confirmObject}) {

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(confirmObject);
    }

    return (
        <PopupWithForm name="confirmation" title = "Вы уверены?" submitText = "Да"
        formValid = {true}
        isOpen = {isOpen}
        onClose = {onClose}
        onSubmit = {handleSubmit}
        />
    )
}

export default ConfirmPopup;