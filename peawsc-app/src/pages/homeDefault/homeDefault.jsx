import '../../assets/styles/mainStyle.css';

import Logo from './assets/img/logo-purple.png';

const Homepage = () => {
    <div className='content-wrapper'>
        <header className='wrapper bg-soft-primary'>
            <nav className='navbar navbar-expand-lg classic transparent position-absolute navbar-dark'>
                <div className='container flex-lg-row flex-nowrap align-items-center'>
                    <div className='navbar-brand w-100'>
                        <img className='logo-dark' src={Logo} />
                    </div>
                </div>
            </nav>
        </header>
    </div >
};

export default Homepage;