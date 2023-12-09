import './Rules.scss';
import RulesModal from './RulesModal/RulesModal';
import { useAtomValue } from 'jotai';
import { quizStateAtom } from '../../../store/atoms';

const Rules = () => {
    const gameState = useAtomValue(quizStateAtom);
    console.log('quiz State: ', gameState);

    return <div>{gameState === 'rules' && <RulesModal />}</div>;
};

export default Rules;
