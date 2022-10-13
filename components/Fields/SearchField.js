import { useState } from "react"

const SearchField = () => {
    const [state, setState] = useState({termo: " "})

    const submit = () => {
        console.log(state.termo)
    }

    return (
        <div>
            <input
                name="pesquisa"
                value={state.termo}
                onChange={e => setState({termo: e.target.value})} 
            />
            <button onClick={submit} className="button-pesquisa">
                pesquisar
            </button>
        </div>
    )
    
}

export default SearchField;