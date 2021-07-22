import '../component/BlockFive.css';

const  Render = ({data}) => {
    if(data.title){
        return(
            <div className = " divfive">
                <h3>{data.title}</h3>
                <div>{data.text}</div>
            </div>
        )
        }else {
            return;
        }
    }


export const BlockFive = () => {
    const data = [
        {
            title: 'Nutritional Plans',
            text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
            id: 1
        },
        {
            title: 'Weight Loss',
            text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
            id: 2
        },
        {
            title: 'Mental Peace',
            text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
            id: 3
        },
        {
            title: 'Home Training',
            text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
            id: 4
        },
        {
            title: 'Work/Life Balance',
            text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
            id: 5
        },
        {
            title: 'Cardio',
            text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
            id: 6
        },
    ]
    return(
        <div className = "five1" style={styles}>
            {/* <div style = {styles}> */}
                {data.map((el, id) => {
                    return <Render data = {el} key = {id}/>
                })}
            </div>
        // </div>
    )
}
const styles = {
    display:'flex',
    flexWrap:'wrap',
    margin:'0 auto'
}
// export default BlockFive;