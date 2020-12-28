import React, { Component } from 'react';
import './style/App.css';
import MidiParser from 'midi-parser-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { preprocessMidiFileData, preprocessMusicXmlData } from 'musicvis-lib';
import Annotator from './components/Annotator';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewSize: {
                outerWidth: 800,
                outerHeight: 600
            },
            noteTracks: [],
            notes: [],
            selectedTrack: 0,
            fileName: ''
        };
    }

    componentDidMount() {
        // Scale layout to current screen size
        window.addEventListener('resize', this.onResize, false);
        this.onResize();

        // select the INPUT element that will handle
        // the file selection.
        let source = document.getElementById('filereader');
        // provide the File source and a callback function
        const _this = this;
        MidiParser.parse(source, function (obj) {
            try {
                const parsed = preprocessMidiFileData(obj);
                const parts = parsed.parts.map(d => d.noteObjs);
                _this.setState({
                    noteTracks: parts,
                    selectedTrack: 0,
                    notes: parts[0],
                    fileName: source.files[0].name
                });
            } catch (e) {
                alert('Invalid MIDI file or wrong format!');
            }
        });
    }

    loadMusicXml = (e) => {
        const fr = new FileReader();
        fr.onload = () => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(fr.result, 'text/xml');
            const parsed = preprocessMusicXmlData(xmlDoc);
            const parts = parsed.parts.map(d => d.noteObjs);
            this.setState({
                noteTracks: parts,
                selectedTrack: 0,
                notes: parts[0],
                fileName: e.target.files[0].name
            });
        }

        fr.readAsText(e.target.files[0]);
    }

    handleSelectTrack = (e) => {
        const index = +e.target.value;
        this.setState({
            selectedTrack: index,
            notes: this.state.noteTracks[index]
        })
    }

    /**
     * Updates the size state when the window size changes
     * so views can react and redraw
     */
    onResize = () => {
        this.setState({
            viewSize: {
                outerWidth: Math.floor(window.innerWidth - 20),
                outerHeight: Math.floor(window.innerHeight - 200)
            }
        });
    }

    render() {
        const s = this.state;
        return (
            <div className={`App dark`} >
                <div className='fileSelection'>
                    <label>
                        Select MIDI file
                        <input
                            className='fileInput'
                            type='file'
                            id='filereader'
                            accept='.mid,.midi'
                        />
                    </label>
                    <label>
                        Select MusicXML file
                        <input
                            className='fileInput'
                            type='file'
                            accept='.xml,.musicxml'
                            onChange={this.loadMusicXml}
                        />
                    </label>
                    <label>
                        Select a track
                        <select
                            onChange={this.handleSelectTrack}
                            defaultValue={s.selectedTrack}
                        >
                            {s.noteTracks.map((d, i) => (
                                <option key={i} value={i}>
                                    Track {i} ({d.length} notes)
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div>
                    <Annotator
                        notes={s.notes}
                        fileName={s.fileName}
                    />
                </div>
                <div className='githubLink'>
                    <a href='https://github.com/fheyen/note-fingering-annotator'>
                        <FontAwesomeIcon icon={faGithub} />&nbsp;
                        https://github.com/fheyen/note-fingering-annotator
                    </a>
                </div>
            </div>
        );
    }
}
