import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Button from '@enact/ui/Button';
import React from 'react';


function Voice() {

  const {transcript, resetTranscript} = useSpeechRecognition()
  //similar to useState, create a transcript and resetTranscript func
  // from the useSpeechRecognition() function
  
  if(!SpeechRecognition.browserSupportsSpeechRecognition()){
    return null
  }
  //If your browser does not support speech recognition, return null
// otherwise, return the following
  return (
      <div>
      <Button><button onMouseDown={SpeechRecognition.startListening} onMouseUp={SpeechRecognition.stopListening}>voice🎤</button></Button>
      <p>hi</p>
      </div>
      ,
      transcript
  );
}

export default Voice;