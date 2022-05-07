import { useState } from  'react';
// import StyleBox from './StyleBox.css';
    
    
const BoxForm = () => {
    // These are state variables, they always go to the top of the component
    const [boxGenerator, setBoxGenerator] = useState([]);
    const [boxColor, setboxColor] = useState("")
    const [boxSize, setboxSize] = useState ("")

    
    const createBox = (e) => {
        // add, prevent default behavior first thing.
        e.preventDefault();
        // write logic below
        const newBoxGenerator= [...boxGenerator]
        // console.log(newBoxGenerator)
        newBoxGenerator.push(boxColor)
        setBoxGenerator(newBoxGenerator)
        setboxColor("")

    };
    
    return(

        <div>
            <form onSubmit={ createBox }>
                <div className="input-box">
                    {/* <p>{JSON.stringify(boxGenerator)}</p>
                    <p>{JSON.stringify(boxColor)}</p> */}
                    <label>Color:</label> 
                    <input type="color" className="input-bg" onChange={(e) => setboxColor(e.target.value)} value={boxColor} />
                    <input className="add-button" type="submit" value="Add" />
                </div>
            </form>

                { boxGenerator.map( (item, index) => {
                    return (
                        <div key={index} className="show-box" style={{backgroundColor: item, width:200, height:200, margin:10, display:'inline-flex'}}>
                        </div>
                    );
                })}

        </div>

    );
};


export default BoxForm;

