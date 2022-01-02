// React Hooks
import React, { useState } from "react";
import "./Home.css"

// Extensão JSX (com o import React) permite códigos HTML
// que serão convertidos em javascript:
export default (props) => {
    let [legenda, setLegenda] = useState('Estou no React')

    function resetLegenda() {
        setLegenda('Estou no React')
    }

    return (
        <div className="home">
            <h1>{ props.msg }</h1>
            <h2>{ legenda }</h2>
            <input type="text" value={legenda} onChange={ e => setLegenda(e.target.value) }/>
                {/* function(e) {
                    setLegenda(e.target.value)
                } */}
            <button onClick={resetLegenda}>Reset Legenda</button>
        </div>
    )
}
    