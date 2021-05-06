import React, {useState} from 'react';
type Props = {
    name?: string;
    other?: string;
}

const HelloWorld11: React.FC<Props> = (props)  => {
    const QRCode = require('qrcode.react');
    const [name, setName] = useState(props.name);
    const [email,setEmail] = useState(props.other)
    const [text, setText] = useState(props.other);
    const [subject, setSubject] = useState(props.other)
   // const [number,setNumber]=useState(props.other);
   

    const changeNameToGreet = (event: any) => {
        setName(event.target.value);
    }
      //function for changing state of name 
    const changeText = (event: any) => {
        setText(event.target.value);
    }    
  //function for changing state of Text or  Body 
    const changeSubject = (event: any) => {
        setSubject(event.target.value);
    }    
    const changeEmail = (event: any) => {
        setEmail(event.target.value);
    }    

    return(
            
            <div>
                
               <QRCode value={     `Sender :${email} : ${name}
                   Subject: ${subject}   
                   ${text}`} size={256} />

              <p>Hello {name}. Please input your detail before your Qr generation.</p>

              <p><input type="text" placeholder="Please input Name" 
                    name="Name" onInput={changeNameToGreet}/></p>
              <p> <input type="text" placeholder="Write email here..." name="name_to_greet" onInput={changeEmail}/></p>

              <p><input type="text" placeholder="Please input Subject" 
                    name="Subject" onInput={changeSubject}/></p>

        
                <p><input type="text" placeholder="Please input Message" 
                    name="Age" onInput={changeText}/></p>

                <p></p>
                
                
            </div>

 
        )
}    
export default HelloWorld11;   
