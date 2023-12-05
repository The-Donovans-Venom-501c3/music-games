import './Rules.scss';
import RulesModal from './RulesModal/RulesModal';
import { useAtomValue } from 'jotai';
import { modalAtom } from '../../store/atoms';

const Rules = () => {
    const isModalOpen = useAtomValue(modalAtom);
    console.log('isModalOpen: ', isModalOpen);

    return <div>{isModalOpen && <RulesModal />}</div>;
};

export default Rules;
