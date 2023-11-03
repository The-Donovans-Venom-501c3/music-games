import './QuizSection.scss'
import questionmark from '../../../assets/svg/QuestionMark.svg'
import noteQuestionGraph from '../../../assets/svg/NoteQuestionGraph.svg'
import sharp from '../../../assets/svg/SharpSymbol.svg'
import bimol from '../../../assets/svg/BimolSymbol.svg'
const QuizSection = () =>{
    const symbols = ['',
    {
        name:'sharp',
        img: sharp,
    },
    {
        name:'bimol',
        img: bimol,
    }
    ];
    const notes = ['C','D','E','F','G','A','B'];
    return(
        <div className='quizSection'>
            <div className='quizNumber'>
                <img src={questionmark}/>
                <span>1</span>
                <span>of</span>
                <span>2</span>
            </div>
            <div className='noteQuestionnGraph'>
                <img src={noteQuestionGraph}/>
            </div>
            <div className='questionText'>
                <p>What note is shown?</p>
            </div>
            <div className='answerBtnFram'>
                {
                    symbols.map((symbol, index)=>(
                        notes.map((note)=>{
                            if(index == 0){
                                return (
                                <div>
                                    <span>{note}</span>
                                    {/* <img/> */}
                                </div>
                                );
                            }else{
                                return(
                                <div>
                                    <span>{note}</span>
                                    <img src={symbol.img}/>
                                </div>
                                );
                            }
                        })
                    ))
                }
            </div>
        </div>
    );
}
export default QuizSection