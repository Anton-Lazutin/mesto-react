import buttonEdit from '../../images/button__edit.svg'
import buttonAdd from '../../images/button__add.svg'
import api from '../../utils/api'
import Card from '../Card/Card.jsx'
import { useEffect, useState } from 'react'

export default function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([dataUser, dataCard]) => {
        setUserName(dataUser.name)
        setUserDescription(dataUser.about)
        setUserAvatar(dataUser.avatar)
        dataCard.forEach(data => dataUser.myid = dataUser._id)
        setCards(dataCard)
})
  },[])

    return (
        <main className="main">
        <section className="profile">
          <div className="profile__container">
            <button type="button" className="profile__avatar-overlay" onClick={onEditAvatar}>
              <img src={userAvatar} alt="Фото пользователя" className="profile__photo" />
            </button>
            <div className="profile__info">
              <div className="profile__title">
                <h1 className="profile__name" >{userName}</h1>
                <button className="profile__edit-btn" type="button" onClick={onEditProfile}>
                  <img
                    className="profile__edit-btn-pic"
                    src={buttonEdit}
                    alt="кнопка редактирования"
                  />
                </button>
              </div>
              <p className="profile__hobby" >{userDescription}</p>
            </div>
          </div>
          <button className="profile__add-btn" type="button" onClick={onAddPlace}>
            <img
              className="profile__add-btn-pic"
              src={buttonAdd}
              alt="кнопка добавить"
            />
          </button>
        </section>
        <section className="photo-cards" >
          {cards.map(data => {
            return (
              <article className="card" key = {data._id}>
                <Card card={data} onCardClick = {onCardClick}/>
              </article>
            )
          })}
        </section>
      </main>
    )
}