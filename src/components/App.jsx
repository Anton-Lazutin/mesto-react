import Header from "./Header/Header.jsx";
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import PopupWithForm from "./PopupWithForm/PopupWithForm.jsx";
import PopupImage from "./PopupImage/PopupImage.jsx";
import { useState } from "react";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopup, setImagePopup] = useState(false)

  function closeAllpopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setImagePopup(false)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    setImagePopup(true)
  }

  return (
    <div className="page__content">
    <div className="page">

    <Header/>

    <Main
      onEditProfile = {handleEditProfileClick}
      onEditAvatar = {handleEditAvatarClick}
      onAddPlace = {handleAddPlaceClick}
      onCardClick = {handleCardClick}
    />

    <Footer/>

    <PopupWithForm 
      name = 'edit-form'
      title = 'Редактировать профиль'
      isOpen = {isEditProfilePopupOpen}
      onClose = {closeAllpopups}
    >
      <input
          type="text"
          required=""
          minLength={2}
          maxLength={40}
          className="popup__input popup__input_type_name"
          name="username"
          placeholder="Введите имя"
          id="name"
      />
      <span id="error-name" className="popup__error-message" />
      <input
          type="text"
          required=""
          minLength={2}
          maxLength={200}
          className="popup__input popup__input_type_hobby"
          name="hobby"
          placeholder="О себе"
          id="hobby"
      />
      <span id="error-hobby" className="popup__error-message" />
    </PopupWithForm>

    <PopupWithForm 
      name = 'add-form'
      title = 'Новое место'
      titleButton = 'Создать'
      isOpen = {isAddPlacePopupOpen}
      onClose = {closeAllpopups}
    >
      <input
          type="text"
          required=""
          minLength={2}
          maxLength={30}
          className="popup__input popup__input_type_place"
          name="place"
          placeholder="Введите название"
          id="place"
      />
      <span id="error-place" className="popup__error-message" />
      <input
          type="url"
          required=""
          className="popup__input popup__input_type_link"
          name="link"
          placeholder="Введите ссылку на картинку"
          id="link"
      />
      <span id="error-link" className="popup__error-message" />
    </PopupWithForm>

    <PopupWithForm 
      name = 'edit-avatar'
      title = 'Обновоить аватар'
      isOpen = {isEditAvatarPopupOpen}
      onClose = {closeAllpopups}
    >
      <input
          type="url"
          required=""
          className="popup__input popup__input_type_avatar"
          name="avatar"
          placeholder="Введите ссылку"
          id="avatar"
      />
      <span id="error-avatar" className="popup__error-message" />
    </PopupWithForm>

    <PopupWithForm 
      name = 'delete'
      title = 'Вы уверены?'
      titleButton = 'Да'
    />

    <PopupImage 
    card = {selectedCard}
    isOpen = {isImagePopup}
    onClose = {closeAllpopups}
    />

  </div>
</div>

  );
}

export default App;
