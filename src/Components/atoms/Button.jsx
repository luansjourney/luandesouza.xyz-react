
function Button(props) {

  return (
    <button className={`${props.className ? props.className : ''}`} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button;