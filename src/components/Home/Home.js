import Card from "../Card";
import pie_chart from '../../assets/img/pie-chart.svg'
import suitcase from '../../assets/img/suitcase.svg'
import objective from '../../assets/img/objective.svg'
import clock from '../../assets/img/clock.svg'
import welcome_1 from '../../assets/img/welcome-1.jpg'
import welcome_2 from '../../assets/img/welcome-2.jpg'
import partner_1 from '../../assets/img/partner-1.jpg'
import partner_2 from '../../assets/img/partner-2.jpg'
import partner_3 from '../../assets/img/partner-3.jpg'
import partner_4 from '../../assets/img/partner-4.jpg'
import partner_5 from '../../assets/img/partner-5.jpg'
import partner_6 from '../../assets/img/partner-6.jpg'
import planet from '../../assets/img/planet.png'
import bittrex from '../../assets/img/bittrex.png'
import bitfinex from '../../assets/img/bitfinex.png'
import poloniex from '../../assets/img/poloniex.png'
import desktop from '../../assets/img/desktop.jpg'
import android from '../../assets/img/android.svg'
import windows from '../../assets/img/windows-8.svg'
import apple from '../../assets/img/apple.svg'
import linux from '../../assets/img/linux.svg'
import HorizontalCard from "../HorizontalCard";
import {Nav, Tab} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import team_1 from '../../assets/img/team-1.jpg'
import team_2 from '../../assets/img/team-2.jpg'
import team_3 from '../../assets/img/team-3.jpg'
import computer from '../../assets/img/computer.png'
import etherium from '../../assets/img/ethereum.svg'
import bitcoin from '../../assets/img/bitcoin.svg'
import qrcode from '../../assets/img/qrcode.jpg'
import ChartComponent from "../ChartComponent";
const Home = () => {

    return(
        <main>
            <section className='section-hero section-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='position-relative'>Secure and Anonymous Cryptocurrency </h1>
                            <p className='text-regular mb-20'>Lymcoin is a decentralized, hybrid blockhain
                                that is fully open-source. </p>
                            <div>
                                <a href="" className='custom-btn btn-amber mr-20'>contact us</a>
                                <a href="" className='custom-btn btn-outline'>contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-welcome section-welcome-1'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <img src={welcome_1} alt="lady looking at screen"/>
                        </div>
                        <div className="col-xl-5 pt-15">
                            <p className='pink-line text-regular text-uppercase mb-20'>01. WELCOME</p>
                            <h2 className='mb-20'>Lymcoin is Digital Cash
                                You Can Spend
                                Anywhere</h2>
                            <p>Use Lymcoin to make instant, private payments online or in-store using our secure open-source platform hosted by thousands of users around the world.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-benefits'>
                <div className="container">
                    <p className='pink-line text-regular text-uppercase'>02. BENEFITS</p>
                    <h2>Lymcoin Benefits</h2>
                    <div className="row">
                        <div className="col-xl-3">
                            <Card number='1' icon={pie_chart} icon_title='pie_chart' title='Lymcoin Benefits' text='Use Lymcoin to make instant' button={false}/>
                        </div>
                        <div className="col-xl-3">
                            <Card number='2' icon={suitcase} icon_title='suitcase' title='Lymcoin Benefits' text='Use Lymcoin to make instant' button={false}/>
                        </div>
                        <div className="col-xl-3">
                            <Card number='3' icon={objective} icon_title='objective' title='Lymcoin Benefits' text='Use Lymcoin to make instant' button={false}/>
                        </div>
                        <div className="col-xl-3">
                            <Card number='4' icon={clock} icon_title='clock' title='Lymcoin Benefits' text='Use Lymcoin to make instant' button={false}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-welcome section-welcome-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <img src={welcome_2} alt="cellphone"/>
                        </div>
                        <div className="col-xl-5 pt-60">
                            <p className='pink-line text-regular text-uppercase'>01. WELCOME</p>
                            <h2 className='my-20'>Lymcoin is Digital Cash
                                You Can Spend
                                Anywhere</h2>
                            <p className='mb-20'>Use Lymcoin to make instant, private payments online or in-store using our secure open-source platform hosted by thousands of users around the world.</p>
                            <a href="" className='custom-btn btn-amber'>Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-roadmap'>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <p className='pink-line text-regular text-uppercase'>04. ROADMAP</p>
                            <h2 className='my-20'>Implementation Sheet</h2>
                            <p className='mx-auto'>At Lymcoin we have one focus - creating a viable data marketplace to start returning value
                                to token holders in the shortest time possible.</p>
                        </div>
                    </div>
                    <div className="row row-1">
                        <div className="col-xl-4">
                            <h4 className='roadmap-title'/>
                            <p className='roadmap-text'>November 2017</p>
                        </div>
                        <div className="col-xl-4">
                            <h4 className='roadmap-title'>Tracking services for different smart contract types</h4>
                            <p className='roadmap-text'>March 2018</p>
                        </div>
                        <div className="col-xl-4">
                            <h4 className='roadmap-title'>Release of a decentralized app for affiliate networks</h4>
                            <p className='roadmap-text'>May 2020</p>
                        </div>
                    </div>
                    <div className="hr position-relative"/>
                    <div className="row">
                        <div className="col-2 position-relative">
                            <div className="circle-item"/>
                        </div>
                        <div className="col-2 position-relative">
                            <div className="circle-item"/>
                        </div>
                        <div className="col-2 position-relative">
                            <div className="circle-item"/>
                        </div>
                        <div className="col-2 position-relative">
                            <div className="circle-item"/>
                        </div>
                        <div className="col-2 position-relative">
                            <div className="circle-item blue-item"/>
                        </div>
                        <div className="col-2 position-relative">
                            <div className="circle-item blue-item"/>
                        </div>
                    </div>
                    <div className="row row-2">
                        <div className="col-xl-4">
                            <div>
                                <h4 className='roadmap-title'>Development of different types of smart contracts (CPA, CPL, CPC, CPS, CPI)</h4>
                                <p className='roadmap-text'>January 2018</p>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div>
                                <h4 className='roadmap-title'>Release of a decentralized app for merchants / affiliates</h4>
                                <p className='roadmap-text'>March 2019</p>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div>
                                <h4 className='roadmap-title'>Launch of the world's first decentralized affiliate network based on the HOQU platform</h4>
                                <p className='roadmap-text'>September 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-partners'>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="custom-col col">
                            <img src={partner_1} alt=""/>
                        </div>
                        <div className="custom-col col">
                            <img src={partner_2} alt=""/>
                        </div>
                        <div className="custom-col col">
                            <img src={partner_3} alt=""/>
                        </div>
                        <div className="custom-col col">
                            <img src={partner_4} alt=""/>
                        </div>
                        <div className="custom-col col">
                            <img src={partner_5} alt=""/>
                        </div>
                        <div className="custom-col col">
                            <img src={partner_6} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-network section-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <p className='pink-line text-regular text-uppercase mb-20'>05. NETWORK</p>
                            <h2>Growing Global <br/>
                                Network</h2>
                            <p className='opacity-7 pl-15'>Lymcoin is rapidly gaining popularity among crypto community. Lots of real companies and exchanges have adopted our coin already. There is much more to come. Stay tuned.</p>
                            <div className="row">
                                <div className="col-lg-4">
                                    <h2 className='mb-25'>50<span className='text-pink'>+</span></h2>
                                    <p className='opacity-7'>Exchanges</p>
                                </div>
                                <div className="col-lg-4">
                                    <h2 className='mb-25'>180<span className='text-pink'>+</span></h2>
                                    <p className='opacity-7'>Companies</p>
                                </div>
                            </div>
                            <div className="row pl-55 pt-25 justify-content-between">
                                <div className="custom-col col-xl-4">
                                    <img src={bittrex} alt="bittrex logo"/>
                                </div>
                                <div className="custom-col col-xl-4">
                                    <img src={bitfinex} alt="bitfinex logo"/>
                                </div>
                                <div className="custom-col col-xl-4">
                                    <img src={poloniex} alt="poloniex logo"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 pt-140">
                            <img src={planet} alt="planet"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-wallet'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <img src={desktop} alt="desktop"/>
                        </div>
                        <div className="col-xl-7">
                            <p className='pink-line text-regular text-uppercase mb-20'>06. WALLETS</p>
                            <h2 className='mb-55'>Lymcoin Wallets</h2>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant="pills" className='mb-50'>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">contact us</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">contact us</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">contact us</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">contact us</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={android} title='Android Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={apple} title='Apple Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={windows} title='Windows Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={linux} title='Linux Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={android} title='Android Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={apple} title='Apple Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={windows} title='Windows Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={linux} title='Linux Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={android} title='Android Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={apple} title='Apple Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={windows} title='Windows Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={linux} title='Linux Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={android} title='Android Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={apple} title='Apple Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={windows} title='Windows Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                            <div className="col-xl-6">
                                                <HorizontalCard icon={linux} title='Linux Lymcoin Wallet' text='Download' qrcode={false}/>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-team text-center'>
                <div className="container">
                     <div className="row">
                        <div className="col">
                            <p className='pink-line text-regular text-uppercase mb-20'>07. TEAM</p>
                            <h2 className='mb-20'>Team & Advisors</h2>
                            <p className='mx-auto'>With a team of top technology and finance professionals, the nonprofit Lymcoin expands access to low-cost financial services to fight poverty and maximize individual potential.</p>
                        </div>
                    </div>
                    <OwlCarousel className='owl-theme' loop margin={10} nav items={3}>
                        <div className='item'>
                            <img src={team_1} alt="John Nelson"/>
                            <h5>John Nelson</h5>
                            <p>Account Manager</p>
                        </div>
                        <div className='item'>
                            <img src={team_2} alt="John Nelson"/>
                            <h5>John Nelson</h5>
                            <p>Account Manager</p>
                        </div>
                        <div className='item'>
                            <img src={team_3} alt="John Nelson"/>
                            <h5>John Nelson</h5>
                            <p>Account Manager</p>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            <section className='section-chart'>
                <div className="container">
                    <p className='pink-line text-regular text-uppercase mb-20'>08. CHARTS</p>
                    <h2 className='mb-50'>Lymcoin Charts</h2>
                    <div className="row">
                        <div className="col-xl-6">
                            <ChartComponent text='Current Price' title='$541.27'/>
                        </div>
                        <div className="col-xl-6">
                            <ChartComponent text='Market Cap' title='$147 547 106'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-software section-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <p className='pink-line text-regular text-uppercase mb-20'>09. MINER</p>
                            <h2 className='mb-20'>Compatible GPU Miner <br/>
                                Software</h2>
                            <p className='opacity-7 mb-45'>Download one of these miners for your GPU</p>
                            <div className='mb-25'>
                                <a href="" className='download-btn mr-45'>
                                    <div className='mr-25'>
                                        <img src={windows} alt="windows"/>
                                    </div>
                                    <div>
                                        <h4>Windows Lymcoin Miner</h4>
                                        <p className='opacity-7 mb-0 text-sm'>Download</p>
                                    </div>
                                </a>
                                <a href="" className='download-btn'>
                                    <div className='mr-25'>
                                        <img src={linux} alt="linux"/>
                                    </div>
                                    <div>
                                        <h4>Linux Lymcoin Miner</h4>
                                        <p className='opacity-7 mb-0 text-sm'>Download</p>
                                    </div>
                                </a>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <h2 className='mb-25'>87 278</h2>
                                    <p className='opacity-7'>Total miners</p>
                                </div>
                                <div className="col-lg-5">
                                    <h2 className='mb-25'>2.82 Tsol/s</h2>
                                    <p className='opacity-7'>Total hashrate</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <img src={computer} alt="computer"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-events text-center'>
                <div className="container">
                    <p className='pink-line text-regular text-uppercase mb-20'>10. EVENTS</p>
                    <h2 className='mb-50'>Upcoming Events</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <Card day='16' date='April 2019' title='Ethyl Voting' text='“The Ethyl Community Fund Proposal has started their voting.”' button='read more'/>
                        </div>
                        <div className="col-lg-4">
                            <Card day='30' date='May 2019' title='Chainges Conference' text='Join the first world-class quality blockchain and cryptocurrency conference' button='read more'/>
                        </div>
                        <div className="col-lg-4">
                            <Card day='10' date='June 2019' title='Ethyl Voting' text='Catapult Lymcoin (version 2.0) will come sometime this year' button='read more'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-donate'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8 text-center">
                            <p className='pink-line text-regular text-uppercase mb-20'>11. DONATE</p>
                            <h2 className='mb-20'>Donate to Support Development</h2>
                            <p className='mb-30'>Lymcoin is not a pre-mined coin, so all of its development is funded
                                by kind people like you.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <HorizontalCard icon={etherium} title='177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1' text='Lymcoin Wallet Address' qrcode={qrcode}/>
                        </div>
                        <div className="col-lg-6">
                            <HorizontalCard icon={bitcoin} title='177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1' text='Lymcoin Wallet Address' qrcode={qrcode}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Home