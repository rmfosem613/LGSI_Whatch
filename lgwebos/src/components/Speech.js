import {Component} from 'react';
import Item from '@enact/moonstone/Item';
import {VoiceControlDecorator} from '@enact/webos/speech';
import speech from '@enact/webos/speech';
import { readAlert } from '@enact/webos/speech';

const VoiceDiv = VoiceControlDecorator('div');
const VoiceItem = VoiceControlDecorator(Item);
function readhandler(e){
    readAlert("Hello", true );

  }
class Sample extends Component {
  handlePlayListControl = (e) => {
    const {intent, control} = e.detail;
    // Change the app status refer to the `control` value.
  }

  handlePlayContent = (e) => {
    const {intent, value} = e.detail;
    // Play content
  }

  

  render () {

    return(
      <div>
          <p>Speech Test</p>
          <button onClick={readhandler}>ReadAlert</button>
        <VoiceDiv
          data-webos-voice-intent='PlayListControl'
          onVoice={this.handlePlayListControl}
        />
        <VoiceItem
          data-webos-voice-intent='Select PlayContent'
          onVoice={this.handlePlayContent}
        >
          The Dark Knight
        </VoiceItem>
      </div>
    );
  }
}

export default Sample;