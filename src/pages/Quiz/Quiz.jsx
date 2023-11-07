import { useAtomValue } from "jotai";
import { loadingStateAtom, quizStateAtom } from "../../store/atoms";

import Loading from "./Loading/Loading";
import Affirmation from './Affirmation/Affirmation'
import Overlay from './Overlay/Overlay'
import Popup from './Popup/Popup'

export default function Quiz() {
  const loadingState = useAtomValue(loadingStateAtom);
  const quizState = useAtomValue(quizStateAtom);

  if (loadingState === 'loading'){
    return <Loading />
  }
  console.log("1223")
  return (
    <>
      {quizState === 'affirmation' && <Affirmation/>}
      {quizState === 'overlay' && <Overlay/>}
      {quizState === 'popup' && <Popup/>} 
      {/* Put Quiz screen code here */}
    </>
  );
}
