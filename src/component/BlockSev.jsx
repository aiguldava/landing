import '../component/BlockSev.css';
import blackboy from '../img/black.png';


const BlockSev = () => {
    return(
        <div className = "seven">
            <div className = "seven1">
                <p className = "sev">CONTACT US</p>
                <p className = "sev1">Ready. Set. Smile</p>
                <p className = "sev2">Take the free online assessment to see if you are a candidate and get started on your journey.</p>
                <p className = "sev3">GET HELP NOW</p>
            </div>
            <div>
                <img src={blackboy} alt="" />
            </div>
        </div>
    )
}
export default BlockSev;