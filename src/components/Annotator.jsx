import React, { PureComponent } from 'react';
import '../style/Annotator.css';
import { Midi } from 'musicvis-lib';

/**
 * TODO: show chords
 */
export default class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            fingers: []
        };
        this.fingers = [
            'right thumb',
            'right index',
            'right middle',
            'right ring',
            'right little',
            'left thumb',
            'left index',
            'left middle',
            'left ring',
            'left little'
        ];
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.notes !== this.props.notes) {
            this.setState({
                fingers: new Array(this.props.notes.length).fill(null)
            });
        }
        if (prevProps.fingers !== this.props.fingers) {
            this.setState({
                fingers: this.props.fingers
            });
        }
    }

    download = (text, fileName) => {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', fileName);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    updateFinger = (noteIndex, finger) => {
        const { fingers } = this.state;
        const newFingers = [...fingers];
        newFingers[noteIndex] = finger;
        this.setState({
            fingers: newFingers
        });
    }

    downloadFingering = () => {
        const { fileName } = this.props;
        const { fingers } = this.state;
        const text = JSON.stringify(fingers);
        this.download(text, `${fileName}.json`);
    }

    render() {
        const { notes } = this.props;
        const { fingers } = this.state;
        return (
            <div className='Annotator'>
                <button
                    onClick={this.downloadFingering}
                >
                    Download
                </button>
                <div className='notes'>
                    {notes.map((d, i) => (
                        <div
                            key={d.toString()}
                            title={d.toString()}
                            className='note'
                        >
                            <div>{Midi.getMidiNoteByNr(d.pitch).label} {d.pitch}</div>
                            {d.string !== undefined && d.fret !== undefined &&
                                <div>String: {d.string} Fret: {d.fret}</div>
                            }
                            <div>Time: {d.start.toFixed(1)} - {d.end.toFixed(1)}</div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Insert finger number...'
                                    defaultValue={isNaN(+fingers[i]) ? null : fingers[i]}
                                    onChange={e => this.updateFinger(i, +e.target.value)}
                                />
                            </div>
                            <div>
                                {
                                    isNaN(+fingers[i]) ?
                                        <span className='missing'>missing</span>
                                        : <span className='finger'>{this.fingers[fingers[i]]}</span>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
