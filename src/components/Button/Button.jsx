import './Button.scss'
export default function Button(props) {
    return (
      <button className='custom-button' onClick={props.onClick}>{props.text}</button>
    )
  }