/**
 * 
 * now let' see how to pass a parameter when calling the parent the parent method from the ChildComponent
 * 
 * To do this arrow function is really helpfull
 */

export default function ChildComponent(props) {
  return (
    <div>
        {/* the way to pass a method from the parent to the child */}
        {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
        {/* the way to pass a parameter to the method of the parent */}
        <button onClick={() => props.greetHandler('child name')}>Greet Parent</button>

    </div>
  )
}
