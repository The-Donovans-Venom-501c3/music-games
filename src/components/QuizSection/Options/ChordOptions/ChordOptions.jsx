import sharp from "../../../../assets/svg/SharpSymbol.svg";
import bimol from "../../../../assets/svg/BimolSymbol.svg";

const notes = [
  "C Major",
  "D Major",
  "E Major",
  "F Major",
  "G Major",
  "A Major",
  "B Major",
];

const symbols = [
  {
    name: "",
  },
  {
    name: "#",
    img: sharp,
  },
  {
    name: "♭",
    img: bimol,
  },
];

export default function ChordOptions({ handleOptionClick, level }) {
  return (
    <div className="small-btn-wrapper" style={{ gridColumnGap: "4px" }}>
      {symbols.map((symbol, index) =>
        notes.map((note, idx) =>
          (level == "easy" && index > 0) || (level == "medium" && index > 1) ? (
            <div key={note} className="option-blank"></div>
          ) : (
            <button
              key={idx}
              onClick={() => handleOptionClick(note + symbol.name)}
              className="option-btn small-btn"
            >
              <span>{note}</span>
              {index != 0 ? <img src={symbol.img} /> : null}
            </button>
          )
        )
      )}
    </div>
  );
}
