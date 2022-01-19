const Card = ({number,icon,icon_title,title,text,button,day,date}) => {
    return(
        <div className='custom-card text-center'>
            {number && <p className='text-left text-dark-grey text-regular'>0{number}.</p>}
            {icon && <img src={icon} alt={icon_title}/>}
            {day && <h2 className='text-pink'>{day}</h2>}
            {date && <h3 className='text-pink'>{date}</h3>}
            <h3>{title}</h3>
            <p className='card-text'>{text}</p>
            {button && <a href="" className='custom-btn btn-amber'>{button}</a>}
        </div>
    )
}
export default Card