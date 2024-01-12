import { useState } from "react"

const Button = () => {
    const[count, setcount] = useState(0) /* bisogna prima inizializzare il look. Par1, par2 ...  */

    /* per assegnare dei valori a degli attributi bisogna assegnare un oggetto */

    return (
        <button onClick={() => setcount((count) => count + 1)}>
          function count is {count}
        </button>
    )
}

export default Button