import React, { useState } from 'react'

function Create() {
const[input, setInput] = useState({
  name:"",
  life_span:"",
  temperament:"" 
})

const[error, setError] = useState({
  name:"",
  life_span:"",
  temperament:"" 
})

const validate =(input)=>{

}
function handleChange(e) {
  setInput({
    ...input,
    [e.target.name] :e.target.value
  })
}

  return (
    <div>
      <form onSubmit={""}>
        <div>
          <label>Nombre</label>
          <input name='name' value={input.value} onChange={handleChange}/>
        </div>
        <div>
          <label>Años de Vida</label>
          <input name='life_span' value={input.value} onChange={handleChange}/>
        </div>
        <div>
          <label>Temperamentos</label>
          <input name='temperament' value={input.value} onChange={handleChange}/>
        </div>
        <button type="submit">Create Dog</button>
      </form>
    </div>
  )
}

export default Create