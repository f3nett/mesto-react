import React from 'react';

function ImagePopup(props) {
    return (
        <div className={`popup popup_type_image popup_opacity_lite ${(props.card.name !== null) ? 'popup_opened' : ''}`}>
            <div className="popup__container popup__container_type_image">
                <button
                    className="popup__close-button button button_opacity_medium"
                    type="button"
                    aria-label="Закрыть"
                    onClick={props.onClose}
                ></button>
                <img className="popup__image" src={props.card.link} alt={props.card.name} />
                <h2 className="popup__image-title">{props.card.name}</h2>
            </div>
        </div>
    )
}

export default ImagePopup;