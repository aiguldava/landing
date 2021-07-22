import '../component/Header.css';
import friend from '../img/boys.png'

const Header = () => {
    return(
        <div className = "container">
            <div className = "navbar">
                <h3>Thrivetalk</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
                <input className = "input" type="button" value="CONTACT US" />
            </div>
            <div className = "parent">
            <div className = "text">
                <p className = "parag1">Thrivetalk</p>
                <p className = "parag2">HELPING YOU THRIVE IN ALL AREAS OF LIFE</p>
                <p className = "parag3">Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
                <div className = "buttons">
                    <input className = "inp1" type="button" value="WHO AM I" />
                    <input className = "inp2" type="button" value="WHAT DO I DO" />

                </div>
            </div>
            <div>
                <img src={friend} alt="" />
            </div>
            </div>

        </div>
    )
}
export default Header;