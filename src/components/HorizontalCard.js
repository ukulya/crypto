const HorizontalCard = ({icon,icon_title,title,text,qrcode}) => {
    return(
        <div className='custom-card'>
            <div className="row">
                <div className='col-lg-3'>
                    <img src={icon} alt={icon_title}/>
                </div>
                <div className='col-lg-7'>
                    <h4>{title}</h4>
                    <p className='card-text text-dark-grey text-semibold text-sm'>{text}</p>
                </div>
                <div className="col-lg-2">
                    {qrcode && <img src={qrcode} alt="qrcode"/>}
                </div>
            </div>



        </div>
    )
}
export default HorizontalCard