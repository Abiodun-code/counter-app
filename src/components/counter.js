import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';


function onClick(params) {
    console.log('click')
}

function Counter({tittle}) {
    return (
        <header className='header'>
            <h1>{tittle}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>

    );
}

Counter.defaultProps = {
    tittle: 'Task Tracker'
}

Counter.propTypes = {
    tittle: PropTypes.string.isRequired,
}

export default Counter;