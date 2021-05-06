import React, {useState} from 'react';

type Props = {
    name?: string;
    other?: string;
}

const HelloWorld10: React.FC<Props> = (props)  => {
    const QRCode = require('qrcode.react');
    const [name, setName] = useState(props.name);
    const [text, setText] = useState(props.other);
    const [number,setNumber]=useState(props.other);
   

    const changeNameToGreet = (event: any) => {
        setName(event.target.value);
    }
      //function for changing state of name 
    const changeText = (event: any) => {
        setText(event.target.value);
    }    
  //function for changing state of text 
    const changeNumber = (event: any) => {
        setNumber(event.target.value);
    }    
      //function for changing state of number


    return(
      
            <div>
                <QRCode value={`SMS:${number}:${text}`} size={256}/>

              <p>Hello {name}. Greetings from React  (HelloWorld4).</p>
              <p> <input type="text" placeholder="Write a name here..." name="name_to_greet" onInput={changeNameToGreet}/></p>
                <p>
                    <input type="text" placeholder="Write a SMS Number here..." 
                    name="number" onInput={changeNumber}/>
                </p>
                
                <p><input type="text" placeholder="Please input Message" 
                    name="Age" onInput={changeText}/></p>

                <p></p>
                
                
            </div>
        )
}    
export default HelloWorld10;   
