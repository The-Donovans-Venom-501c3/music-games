import { useAtomValue } from "jotai";
import { affirmationAtom } from "../../../store/atoms";
import "./Affirmation.scss";

export default function Affirmation() {
  const affirmation = useAtomValue(affirmationAtom);

  let sentence = "";

  if (affirmation === "success") {
    sentence = "Correct. Good job!";
  } else if (affirmation === "tryAgain") {
    sentence =
      "Oops, that's not the right answer. Sorry, we need to take one of your lives.";
  } else if (affirmation === "fail") {
    sentence = "The correct answer is";
  } else {
    console.log(error);
  }

  return (<></>);
}
