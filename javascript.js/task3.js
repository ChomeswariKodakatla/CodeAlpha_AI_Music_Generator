let generatedNotes = [];

const classicalNotes = [
"C4","E4","G4","C5",
"G4","E4","D4","F4"
];

const jazzNotes = [
"C4","D#4","G4","A#4",
"F4","G#4","D4","C4"
];

function generateMusic(){

const genre =
document.getElementById("genre").value;

generatedNotes = [];

const source =
genre === "classical"
? classicalNotes
: jazzNotes;

for(let i=0;i<12;i++){

const randomIndex =
Math.floor(Math.random()*source.length);

generatedNotes.push(
source[randomIndex]
);

}

document.getElementById("output")
.innerHTML =
"<b>Generated Sequence:</b><br>" +
generatedNotes.join(" - ");

}

function noteFrequency(note){

const frequencies = {

"C4":261.63,
"D4":293.66,
"D#4":311.13,
"E4":329.63,
"F4":349.23,
"G4":392.00,
"G#4":415.30,
"A#4":466.16,
"C5":523.25

};

return frequencies[note];
}

function playMusic(){

if(generatedNotes.length===0){

alert("Generate music first");
return;

}

const audioContext =
new (window.AudioContext ||
window.webkitAudioContext)();

let time =
audioContext.currentTime;

generatedNotes.forEach(note=>{

const osc =
audioContext.createOscillator();

osc.type = "sine";

osc.frequency.value =
noteFrequency(note);

osc.connect(
audioContext.destination
);

osc.start(time);
osc.stop(time+0.4);

time += 0.45;

});

}