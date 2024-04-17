const notes = ["M2", "M3", "M4", "M5", "M6", "M7"];

const notes2 = ["m2", "m3", "m4", "m5", "m6", "m7"];

const notes3 = ["Octave", "Unison"];

export default function IntervalOptions({ handleOptionClick }) {
  return (
    <div>
      <div className="small-btn-wrapper" style={{ marginTop: 20 }}>
        {notes.map((note, index) => (
          <button
            className="option-btn small-btn"
            onClick={() => handleOptionClick(note)}
            key={index}
          >
            {note}
          </button>
        ))}
      </div>

      <div className="small-btn-wrapper">
        {notes2.map((note, index) => (
          <button
            className="option-btn small-btn"
            onClick={() => handleOptionClick(note)}
            key={index}
          >
            {note}
          </button>
        ))}
      </div>

      <div className="small-btn-wrapper">
        {notes3.map((note, index) => (
          <button
            className="option-btn small-btn"
            onClick={() => handleOptionClick(note)}
            key={index}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            {note}
          </button>
        ))}
      </div>
    </div>
  );
}
