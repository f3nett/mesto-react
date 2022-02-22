function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
      }

    return (
        <article className="place-card">
            <img className="place-card__image" src = {props.card.link}
            onClick = {handleClick}/>
            <button
            className="place-card__trash-button place-card__trash-button_active button button_opacity_strong"
            type="button"
            aria-label="Удалить"
            ></button>
            <div className="place-card__place-info">
            <h2 className="place-card__title">{props.card.name}</h2>
            <div className="place-card__like-info">
                <button
                className="place-card__like-button button button_opacity_strong"
                type="button"
                aria-label="Лайк"
                ></button>
                <p className="place-card__like-counter">{props.card.likes.length}</p>
            </div>
            </div>
        </article>
    )
}

export default Card;