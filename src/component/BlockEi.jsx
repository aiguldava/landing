import '../component/BlockEi.css';
import blackgirl from '../img/bgirl.png';

const BlockEi = () => {
    return(
        <div className = "eight">
            <div>
            <img src={blackgirl} alt="" />
            </div>

            <div className = "senior">
                <div className = "eig">
                    <p className = "par1">SOME INFO</p>
                    <p className = "par2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</p>
                </div>
                <div className = "eig1">
                    <p className = "par3">ENFOLD HEALTH</p>
                    <p className = "par4">Main Street 1, Olcott
                                          Buffalo, United States</p>
                    <p className = "par7">+555 283 784 333
                                          office@enfold-health.com</p>
                </div>
                <div className = "eig2">
                    <p className = "par5">OFFICE HOURS</p>
                    <p className = "par6">Mo-Fr: 8:00-19:00
                                          Sa: 8:00-14:00
                                          Su: closed</p>

                </div>
            </div>

        </div>
    )
}
export default BlockEi;

