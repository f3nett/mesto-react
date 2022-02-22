import React from 'react';

function PopupWithForm(props) {
    return (
    <div className={`popup popup_type_${props.name} popup_opacity_strong ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className={`popup__container popup__container_type_${props.name}`}>
            <button
                className = "popup__close-button button button_opacity_medium"
                type = "button"
                aria-label = "Закрыть"
                onClick = {props.onClose}
            ></button>
            <form className="popup__form" name={`${props.name}Form`} noValidate>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button
                    className = "popup__submit-button button button_opacity_lite"
                    type = "submit"
                >
                    {props.submitText}
                </button>
            </form>
        </div>
    </div>
    )
}

export default PopupWithForm;