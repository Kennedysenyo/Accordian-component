
const AccordianComponent = ( props ) => {
  return (
    <div onClick={() => props.toggleVisibility(props.id)} className="container">
      <div role="button" aria-expanded={props.isVisible}>
        <h2>{props.question}</h2>
        <span>{props.isVisible ? "--" : "+"}</span>
      </div>
      {props.isVisible && <p>{props.answer}</p>}
    </div>
  )
}

export default AccordianComponent;