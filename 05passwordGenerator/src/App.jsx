import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // ref for password input
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let charPos = Math.floor((Math.random() * str.length + 1))
      pass += str.charAt(charPos)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-2xl font-bold my-2 text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600"
            onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name="rangeSelector"
              id="rangeSelector"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={e => setLength(e.target.value)}
            />
            <label htmlFor="rangeSelector">Length: { length }</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="numberAllowed"
              id="numberAllowed"
              defaultChecked={numberAllowed}
              onChange={
                () => setNumberAllowed(prev => !prev)
              }
            />
            <label htmlFor="numberAllowed">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="charAllowed"
              id="charAllowed"
              defaultChecked={charAllowed}
              onChange={
                () => setCharAllowed(prev => !prev)
              }
            />
            <label htmlFor="charAllowed">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
