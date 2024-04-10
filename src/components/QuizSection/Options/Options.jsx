import "./Options.scss";
import { useAtomValue } from "jotai";
import MajorMinorOptions from "./MajorMinorOptions/MajorMinorOptions";
import KeyOptions from "./KeyOptions/KeyOptions";
import NoteOptions from "./NoteOptions/NoteOptions";
import ScaleOptions from "./ScaleOptions/ScaleOptions";
import { gameStateAtom, levelStateAtom } from "../../../store/atoms";
import IntervalOptions from "./IntervalOptions/IntervalOptions";
import ChordOptions from "./ChordOptions/ChordOptions";

export default function Options({ handleOptionClick }) {
  const game = useAtomValue(gameStateAtom);
  const level = useAtomValue(levelStateAtom);

  return (
    <>
      {game == "major-minor" ? (
        <MajorMinorOptions handleOptionClick={handleOptionClick} />
      ) : game == "key" ? (
        <KeyOptions handleOptionClick={handleOptionClick} />
      ) : game == "note" ? (
        <NoteOptions handleOptionClick={handleOptionClick} level={level} />
      ) : game == "scale" ? (
        <ScaleOptions handleOptionClick={handleOptionClick} level={level} />
      ) : game == "chord" ? (
        <ChordOptions handleOptionClick={handleOptionClick} level={level} />
      ) : (
        <IntervalOptions handleOptionClick={handleOptionClick} level={level} />
      )}
    </>
  );
}
