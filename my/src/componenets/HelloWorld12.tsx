import React, {useState} from 'react';
type Props = {
    name?: string;
    other?: string;
}
//type definition of states

const HelloWorld12: React.FC<Props> = (props)  => {
    const QRCode = require('qrcode.react');
    const [name, setName] = useState(props.name);
    const [url,setUrl] = useState(props.other)
   
   // const [number,setNumber]=useState(props.other);
   

    const changeNameToGreet = (event: any) => {
        setName(event.target.value);
    }
    //function for changing state of name 
    const changeUrl = (event: any) => {
        setUrl(event.target.value);
    }    
    //function for changing state of Url

    return(
            
            <div>
                
               <QRCode value={     `${url}`} size={256} />

              <p>Hello {name}. Please input your detail before your Qr generation.</p>
        
              <p><input type="text" placeholder="Please input Name" 
                    name="Name" onInput={changeNameToGreet}/></p>

              <p><input type="text" placeholder="Please input Url.." 
                    name="Subject" onInput={changeUrl}/></p>
                <p></p>
                
                
            </div>

 
        )
}    
export default HelloWorld12;   