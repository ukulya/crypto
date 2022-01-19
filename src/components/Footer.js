import arrow from '../assets/img/right-arrow.svg'
import tw from '../assets/img/tw.svg'
import fb from '../assets/img/fb.svg'
import yu from '../assets/img/yu.svg'
import pn from '../assets/img/pn.svg'
import sk from '../assets/img/sk.svg'

const Footer = () => {
    return(
        <footer className='section-bg'>
            <div className="container">
               <div className="row justify-content-center text-center">
                    <div className="col-xl-5 col-lg-6">
                        <h2>I’d Like to Learn More
                            About Lymcoin</h2>
                        <div className="pink-line mb-45"/>
                        <form>
                            <div className="d-flex mb-20">
                                <label htmlFor="mail"/>
                                <input type="email" className='form-control' placeholder='Enter your Email' id='email'/>
                                <button className='custom-btn btn-amber'>Sign in</button>
                            </div>
                            <label htmlFor="check" className='check_label'>
                                <input type="checkbox" className='mr-25'/>
                                I have read and agree to the terms & conditions
                            </label>
                        </form>
                        <ul className='d-flex list-unstyled justify-content-between'>
                            <li><a href=""><img src={tw} alt="tw"/></a></li>
                            <li><a href=""><img src={fb} alt="fb"/></a></li>
                            <li><a href=""><img src={yu} alt="yu"/></a></li>
                            <li><a href=""><img src={sk} alt="sk"/></a></li>
                            <li><a href=""><img src={pn} alt="pn"/></a></li>
                        </ul>
                        <p>AncoraThemes © 2019. All Rights Reserved.</p>
                    </div>
               </div>
            </div>
            <a role='button' className='pink-btn'><img src={arrow} alt="arrow"/></a>
        </footer>
    )
}
export default Footer