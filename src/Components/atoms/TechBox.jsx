
function TechBox(props) {
  return (
    <div className="techbox"> 
        <img src={props.image} alt={props.imageAlt} />
        <p>{props.title}</p>
    </div>
  )
}

export default TechBox;