import '../component/BlockSix.css';
import boySmile from '../img/boy1.png';

const BlockSix = () => {
    return(
        <div className = "divsix">
              <div className = "img1">
                <img src={boySmile} alt="" />
            </div>
            <div className = " six1">
                <p className = "dava">YOU SHOULD ALSO KNOW</p>
                <p className = "dava1">MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a given year. We at <span>ThriveTalk</span> can help you.</p>
                <p className = "dava2">GET HELP NOW</p>

            </div>
          
        </div>
    )
}
export default BlockSix;
