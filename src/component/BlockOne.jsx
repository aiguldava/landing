import '../component/BlockOne.css';
import girls from '../img/girl.png'

const BlockOne = () => {
    return(
        <div  className = "box">
        <div className = "text1">
            <h2>Why Thrive?</h2>
            <p><bold> improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist?</bold>  <small>Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!</small></p>
        </div>
        <div> 
            <img src={girls} alt="" />
        </div>
        </div>
        
    )
}
export default BlockOne;