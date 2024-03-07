import React, { useState } from 'react'
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';




const App = () => {

  const [textToCopy, settextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {successDuration:1000});

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const stopListening = () => SpeechRecognition.stopListening();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Speech to <span className='special'>Text Converter</span></h2>
        <br />
        <p>This is a React Text to Sppech Converter.</p>

        <div className="main-content" onClick={() => settextToCopy(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? "Copied" : "Copy To Clipboard"}
          </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={stopListening}>Stop Listening</button>
        </div>
      </div>
      <footer>
        @ShreeGovindJee. CopyRIght&copy; All Rights Reserved
      </footer>
    </>
  )
}

export default App

