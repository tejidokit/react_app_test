import React from 'react'
import ReactDOM from 'react-dom'

function ExampleComponent() {
    return (
        <div>
            <h1>This is a test!!!!</h1>
            <p>The sky is red</p>
        </div>
    )
}

ReactDOM.render(<ExampleComponent/>, document.querySelector("#app"));

// react refresh
if (module.hot) {
    module.hot.accept()
}