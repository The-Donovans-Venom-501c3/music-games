import { useAtomValue } from "jotai";
import { loadingStateAtom, quizStateAtom } from "../../store/atoms";

import Loading from "./Loading/Loading";
import Affirmation from './Affirmation/Affirmation'
import Overlay from './Overlay/Overlay'
import Popup from './Popup/Popup'
import QuizScreen from "./QuizScreen/QuizScreen";
import QuizContext from "./QuizContext";
import { useEffect,useState } from "react";

export default function Quiz() {
  const loadingState = useAtomValue(loadingStateAtom);
  const quizState = useAtomValue(quizStateAtom);
  const [affirmationOpen, setAffirmationOpen] = useState(false);


  if (loadingState === 'loading') {
    return <Loading />
  }

  useEffect(() => {
    if (quizState === 'affirmation') {
      setAffirmationOpen(true)
    } else {
      setAffirmationOpen(false)
    }
  }, [quizState])

  return (
    <QuizContext.Provider value={{ affirmationOpen, setAffirmationOpen }}>
      {quizState === 'affirmation' && <Affirmation />}
      {quizState === 'overlay' && <Overlay />}
      {quizState === 'popup' && <Popup />}
      <QuizScreen />
    </QuizContext.Provider>
  );
}
