import React, {useState} from 'react'



export default function TextForm
(props) {
    const [text, setText] = useState('');
    

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        props.showAlert("Submitted", "success");
        setText(newText);
    }

    const handleOnChange = (event) => {
        
        setText(event.target.value);
        
        
    }

  return (
    <>
        <div className={`mb-3 container mt-5  text-${props.mode==='light'? 'secondary': 'light'}`}>
            <label htmlFor="myBox" className="form-label" ><b>{props.title}</b></label>
            <textarea className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3" value={text} 
                onChange={handleOnChange}
                placeholder="Enter something"
                style={{backgroundColor: props.mode==="light"?"white":"darkgray"}}
                >
            </textarea>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" className="btn btn-dark my-4" onClickCapture={handleUpClick}>Submit</button>
            </div>
        </div>
        
        <div className={`container text-${props.mode==='light'? 'secondary': 'light'}`}>
            <h4><strong>Your text summary</strong></h4>
            <hr />
            <p>Number of characters <b>{text.length}</b>, number of words <b>{text.length===0?0:text.replaceAll(/\s{2,}/g, ' ').trim().split(" ").length}</b></p>
            <br />
            <h4><strong>Preview</strong></h4>
            <hr />
            <p>{text}</p>
            <br />
        </div>
    </>
  )
}
