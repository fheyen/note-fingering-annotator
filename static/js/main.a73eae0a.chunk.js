(this["webpackJsonpnote-fingering-annotator"]=this["webpackJsonpnote-fingering-annotator"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(2),s=n.n(r),a=n(11),c=n.n(a),l=n(5),o=n(6),d=n(8),f=n(7),u=(n(22),n(12)),h=n.n(u),g=n(13),j=n(14),p=n(3),b=n(15),m=(n(28),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).download=function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),n.setAttribute("download",t),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},i.updateFinger=function(e,t){var n=i.state.fingers,r=Object(b.a)(n);r[e]=t,i.setState({fingers:r})},i.downloadFingering=function(){var e=i.props.fileName,t=i.state.fingers,n=JSON.stringify(t);i.download(n,"".concat(e,".json"))},i.state={fingers:[]},i.fingers=["right thumb","right index","right middle","right ring","right little","left thumb","left index","left middle","left ring","left little"],i}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.notes!==this.props.notes&&this.setState({fingers:new Array(this.props.notes.length).fill(null)}),e.fingers!==this.props.fingers&&this.setState({fingers:this.props.fingers})}},{key:"render",value:function(){var e=this,t=this.props.notes,n=this.state.fingers;return Object(i.jsxs)("div",{className:"Annotator",children:[Object(i.jsx)("button",{onClick:this.downloadFingering,children:"Download"}),Object(i.jsx)("div",{className:"notes",children:t.map((function(t,r){return Object(i.jsxs)("div",{title:t.toString(),className:"note",children:[Object(i.jsxs)("div",{children:[p.Midi.getMidiNoteByNr(t.pitch).label," ",t.pitch]}),void 0!==t.string&&void 0!==t.fret&&Object(i.jsxs)("div",{children:["String: ",t.string," Fret: ",t.fret]}),Object(i.jsxs)("div",{children:["Time: ",t.start.toFixed(1)," - ",t.end.toFixed(1)]}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"text",placeholder:"Insert finger number...",defaultValue:isNaN(+n[r])?null:n[r],onChange:function(t){return e.updateFinger(r,+t.target.value)}})}),Object(i.jsx)("div",{children:isNaN(+n[r])?Object(i.jsx)("span",{className:"missing",children:"missing"}):Object(i.jsx)("span",{className:"finger",children:e.fingers[n[r]]})})]},t.toString())}))})]})}}]),n}(r.PureComponent)),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).loadMusicXml=function(e){var t=new FileReader;t.onload=function(){var n=(new DOMParser).parseFromString(t.result,"text/xml"),r=Object(p.preprocessMusicXmlData)(n).parts.map((function(e){return e.noteObjs}));i.setState({noteTracks:r,selectedTrack:0,notes:r[0],fileName:e.target.files[0].name,fingers:null})},t.readAsText(e.target.files[0])},i.loadFingering=function(e){var t=new FileReader;t.onload=function(){var e=JSON.parse(t.result);i.setState({fingers:e})},t.readAsText(e.target.files[0])},i.handleSelectTrack=function(e){var t=+e.target.value;i.setState({selectedTrack:t,notes:i.state.noteTracks[t]})},i.onResize=function(){i.setState({viewSize:{outerWidth:Math.floor(window.innerWidth-20),outerHeight:Math.floor(window.innerHeight-200)}})},i.state={noteTracks:[],notes:[],selectedTrack:0,fileName:"",fingers:null},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize,!1),this.onResize();var e=document.getElementById("filereader"),t=this;h.a.parse(e,(function(n){try{var i=Object(p.preprocessMidiFileData)(n).parts.map((function(e){return e.noteObjs}));t.setState({noteTracks:i,selectedTrack:0,notes:i[0],fileName:e.files[0].name,fingers:null})}catch(r){alert("Invalid MIDI file or wrong format!")}}))}},{key:"render",value:function(){var e=this.state;return Object(i.jsxs)("div",{className:"App dark",children:[Object(i.jsxs)("div",{className:"fileSelection",children:[Object(i.jsxs)("label",{children:["Select MIDI file",Object(i.jsx)("input",{type:"file",id:"filereader",accept:".mid,.midi"})]}),Object(i.jsxs)("label",{children:["Select MusicXML file",Object(i.jsx)("input",{type:"file",accept:".xml,.musicxml",onChange:this.loadMusicXml})]}),Object(i.jsxs)("label",{children:["Select a fingering file",Object(i.jsx)("input",{type:"file",accept:".json",onChange:this.loadFingering})]}),e.noteTracks.length>1&&Object(i.jsxs)("label",{children:["Select a track",Object(i.jsx)("select",{onChange:this.handleSelectTrack,defaultValue:e.selectedTrack,children:e.noteTracks.map((function(e,t){return Object(i.jsxs)("option",{value:t,children:["Track ",t," (",e.length," notes)"]},t)}))})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)(m,{notes:e.notes,fileName:e.fileName,fingers:e.fingers})}),Object(i.jsx)("div",{className:"githubLink",children:Object(i.jsxs)("a",{href:"https://github.com/fheyen/note-fingering-annotator",children:[Object(i.jsx)(g.a,{icon:j.a}),"\xa0 https://github.com/fheyen/note-fingering-annotator"]})})]})}}]),n}(r.Component);c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a73eae0a.chunk.js.map