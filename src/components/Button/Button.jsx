import './Button.scss'
export default function Button(props) {
    return (
      <button className='custom-button'>{props.text}</button>
    )
  }