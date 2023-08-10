export default function PopupWithForm({name, title, titleButton, children, isOpen, onClose}) {
    return (
        <section className={`popup popup_${name} ${isOpen && 'popup_opened'}`} onClick={onClose}>
        <div className="popup__container">
          <h2 className="popup__title">{title}</h2>
          <form className="popup__input-form" name={name} noValidate="">
            {children} 
            <button className="popup__submit-btn" type="submit">
              {titleButton || 'Сохранить'}
            </button>
          </form> 
          <button
            className="popup__close-btn popup__close-btn_edit-form"
            type="button"
            onClick={onClose}
          />
        </div>
      </section>
    )
}