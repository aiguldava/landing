import '../component/BlockFour.css';
import picture from '../img/klubn.png'

const Render = ({data}) => {
  // return(
  //   <div className ='card' style = {{background:data.color}}>
  //     <ul>
  //       <li>{data.title}</li>
  //     </ul>
  //   </div>
  // )

// if(data.color) {
//   return (
//     <div className='card1' style={{background: data.color}}> 
//       <h3>{data.title}</h3>
//     </div>
//   )
// } else {
//   <div className='card1' style={{backgroundImage: `url(${data.img})`}}> 
//       <h3>{data.title}</h3>
//     </div>
// }

// }
switch (data.color) {
  case null:
      return(
          <div className='card1' style={{backgroundImage: `url(${data.img})`}}>
              <h3>{data.title}</h3>
          </div>
      )
  default:
      return (
          <div className='card1' style={{background: data.color}}>
              <h3>{data.title}</h3>
          </div>
      )
   }
}
 export const BlockFour = () => {
    const data = [
        {
          title: 'Physical Health',
          color: '#22356F',
          id: 1
        },
        {
          title: 'Mental Health',
          color: '#0052C1',
          id: 2
        },
        {
          title: 'Nutrition',
          color: null,
          img: picture,
          id: 3
        },
        {
          title: 'Gymnastics',
          color: '#62D0DF',
          id: 4
        },
        {
          title: 'Crossfit',
          color: '#DEE1FF',
          id: 5
        },
        {
          title: 'Aerobics',
          color: '#8F00FF',
          id: 6
        },
      ]
      
    return(
        <div className = "cont1">
          <div style={styles}>
            {data.map((el, id) =>{
              return <Render data = {el}key = {id}/>
            })}
          </div>
        </div>
    )
}
const styles = {
  display:'flex',
  flexWrap: 'wrap',
  margin:'0 auto'

}
// export default BlockFour;
