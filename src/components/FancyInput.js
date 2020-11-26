import React, { useState, useRef } from 'react'

const FancyInput = React.forwardRef((props, ref) => {   //Attention il faut mettre props (meme si il sert à rien)

    const inputRef = useRef()
    
    const [count, setCount] = useState(0)

    React.useImperativeHandle(ref, () => (
        {
            focus: (val) => {
                if (count === 4) {
                    const colors = ['red', 'blue', 'orange', 'green', 'pink', 'purple', 'yellow']
                    const style = `4px solid ${colors[val]}`
                        console.log(val)
                    inputRef.current.style.border = style
                }
            },
            countMax: () => {
                if (count < 5) {
                    setCount(count+1)
                }
            }
        }
    ))

    return (
        <div>
            <h1>{count}</h1>
            <input ref={inputRef} type="text"/>
        </div>
    )
})

export default FancyInput
