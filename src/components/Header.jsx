import LogoImg from '../assets/logo.jpg'

export default function Header() {
    return (
        <header id='main-header'>
            <div id='title'>
                <img src={LogoImg} alt="" />
                <h1>Amiro Food-App</h1>
            </div>
            <nav>
                <button> Card (0)</button>
            </nav>
        </header>
    )
}