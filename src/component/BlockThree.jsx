import '../component/BlockThree.css';

const  Render = ({data})=>{
    return (
        <div className='card' style={{background:data.color}}>
            <ul>
                <li>{data.title}</li>
            </ul>
        </div>
    )
}
export const BlockThree = () => {
    const data = [
        {
            title: 'Weight Lifting',
            color: '#FFE2DE',
            id: 1
        },
        {
            title: 'Running  & Spinning',
            color: '#C4E769',
            id: 2
        },
        {
            title: 'Pumping Iron',
            color: '#62D0DF',
            id: 3
            
        },
        {
            title: 'Pumping Iron',
            color: '#0052C1',
            id: 4
            
        },
    ]

    return(
       <div className = "cont">
           <div style={styles}>
           {data.map((el, id) =>{
                   return <Render data ={el}key={id}/>
               })}
           </div>
       </div>
    )
}
const styles={
    display:'flex',
    marginBottom:'70px'
}
// export default BlockThree;