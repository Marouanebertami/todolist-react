import React from 'react'
import ReactDOM from 'react-dom'
import './Home.css'

import Tasks from './Tasks'

function Home() {
    return (
        <div>
	        <h1>TO DO List</h1>
            <Tasks />
        </div>
    )
}

export default Home;

if (document.getElementById('root')) {
    ReactDOM.render(<Home />, document.getElementById('root'));
}

