export default function Card({card, onCardClick, onDelete}) {
    return (
        <article className="card">
            <img 
                src={card.link} 
                alt={`фото ${card.name}`} 
                className="card__pic" 
                onClick = {() => onCardClick({link: card.link, name: card.name})}
                />
            {/* {card.myid === card.owner._id && <button className="card__dlt-btn" type="button" onClick={onDelete}/>} */}
            <button className="card__dlt-btn" type="button" onClick={onDelete}/>
            <div className="card__info">
                <h2 className="card__title" >{card.name}</h2>
                <div className="card__likes">
                    <button className="card__like-btn" type="button" />
                    <span className="card__like-nmbr">{card.likes.length}</span>
                </div>
            </div>
        </article>
    )
}