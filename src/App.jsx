function App() {
  const handleClick =()=> {
    alert("Button Clicked!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <br></br>
      <button onClick={() => { console.log("Button clicked")}}>Click</button>
    </div>
  )
}

export default App;