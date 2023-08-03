export default function PopupImage({card, isOpen, onClose}) {
    return (
        <section className={`popup popup_photo ${isOpen && 'popup_opened'}`}>
        <div className="popup__wrapper">
          <img 
            className="popup__big-photo"
            src={card.link}
            alt={`фото ${card.name}`}/>
          <p className="popup__subtitle">{card.name}</p>
          <button
            className="popup__close-btn popup__close-btn_photo"
            type="button"
            onClick={onClose}
          />
        </div>
      </section>
    )
}