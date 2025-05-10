import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw' }}>
            <h1 style={{ textAlign: 'center' }}>React useState Example</h1>
            <h2 style={
                { textAlign: 'center', fontSize: '32px' }
            }>You clicked {count} times</h2>
            <button style={{
                fontSize: '32px',
            }}
                onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}

export default Counter
