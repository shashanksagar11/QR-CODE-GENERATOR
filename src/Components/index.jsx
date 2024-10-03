import { useState } from "react";
import QRCode from "react-qr-code";


export default function QrCodeGenerator() {
  
    const[qrcode, setQrCode] =useState('')
    const[input, setInput] = useState('')

    function handleGenerateQrCode(){
        setQrCode(input)
    }

    return(
        <div>
        <h1>Qr Code Generator</h1>
        <div>
        <input 
        onChange={(e) => setInput(e.target.value)}
        type="text" name="qr-code" placeholder="Enter Your Value Here"/>
        <button disabled={input && input.trim() !== ''? false: true}
        onClick={handleGenerateQrCode}
        >Generate</button>
        </div>
        <div>
        <QRCode id="qr-code-value" value={qrcode} size={400} bgColor="#fff"/>
        </div>
        </div>
    );
   
};