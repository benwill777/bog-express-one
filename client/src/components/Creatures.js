import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewCreature from './NewCreature'

class Creatures extends Component {
    state = {
        creatures: {
            name: 'Luke',
            description: 'Jedi'
        }
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Creatures;