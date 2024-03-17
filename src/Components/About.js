
import React from 'react'

// let Style = {
//     color : 'White',
//     backgroundColor: "black",
// }

export default function About(props) {

    // const [Style , setStyle] = useState({
    //     color : 'black',
    //     backgroundColor: "white",
    // })


    const Style = {
        color : props.mode === 'dark' ? 'White'  : '#2c3053',
        backgroundColor: props.mode === 'dark' ? '#2c3053' : 'white',
    }


    const hweadingStyle ={
        color : props.mode === 'dark'  ? "White" : "black"
    }

  

    // const [button, setbutton] = useState("use Dark Mode")

    // const toggle = () =>{
    //     if(Style.color === 'black'){
    //         setStyle({
    //             color: 'white',
    //             backgroundColor : "black"
    //         })

    //         setbutton("use Dark Mode");
           
    //     }else{
    //         setStyle({
    //             color: 'black',
    //             backgroundColor : 'white'
    //         })
    //         setbutton("use Light Mode")
    //     }
    // }

    return (
        <div className="container my-5 " style ={{Style}}>
            <h1 className='my-3' style={{hweadingStyle}}>About us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" >
                <div className="accordion-item"  style ={Style} >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"  style ={Style}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item"  style ={Style}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"  style ={Style}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"  style ={Style}>
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item"  style ={Style}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"  style ={Style}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
            <button className='btn btn-primary my-5' onClick={toggle}>{button}</button>
            </div> */}
        </div>
    )
}
