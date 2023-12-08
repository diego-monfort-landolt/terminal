import { useEffect, useRef, useState } from "react"

function App() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <div className="container-title">
        <h1>Terminal</h1>
        <p>pwd, ls and clear... more is comming...</p>
      </div>

      <div className="app" onClick={() => { inputRef.current.focus() }}>
        <input
          type="text"
          ref={inputRef}
          placeholder="ls"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              let newOutput = '';
              newOutput = output + '\n' + '$ ' + input + '\n '
              switch (input) {
                case "ls":
                  newOutput += "List of Projects";
                  break
                case "pwd":
                  newOutput += "Nice! Your Welcome here!";
                  break;
                case "clear":
                  location.reload();
                  break
                default:
                  newOutput += "Unknow command- use ls"
              }
              setOutput(newOutput)
              setInput('')
            }
          }}
        />
        <div className="terminal" >
          {output}
        </div>
      </div>

    </>
  )
}
export default App
