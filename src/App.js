import '../src/App.css';
import { BlockFive } from './component/BlockFive';
import { BlockFour } from './component/BlockFour';
import BlockOne from './component/BlockOne';
import BlockSev from './component/BlockSev';
import BlockSix from './component/BlockSix';
import { BlockThree } from './component/BlockThree';
import BlockTwo from './component/BlockTwo';
import Header from './component/Header';
import BlockEi from './component/BlockEi';
import BlockN from './component/BlockN';


const  App = () => { 
  return(
    <div className="wrapper">
      <Header/>
      <BlockOne/>
      <BlockTwo/>
      <BlockThree />
      <BlockFour/>
      <BlockFive/>
      <BlockSix/>
      <BlockSev/>
      <BlockEi/>
      <BlockN/>
      

    </div>
  )
}
export default App; 