import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Fighter = props => (
    <tr>
        <td>{props.fighter.name}</td>
        <td>
            <img 
            src={props.fighter.picture} 
            alt={props.fighter.name} 
            style={{ width: '150px' }}
            />
        </td>
        <td>{props.fighter.fightRecord}</td>
        <td>{JSON.stringify(props.fighter.stats)}</td>
        <td>
            <Link to={"/fighters/update/" + props.fighter._id}>Update</Link> | <a href="#" onClick={() => { props.deleteFighter(props.fighter._id) }}>Remove</a>
        </td>
    </tr>
)

export default class FightersList extends Component {
    constructor(props) {
        super(props);

        this.deleteFighter = this.deleteFighter.bind(this)

        this.state = { fighters: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/fighters/')
            .then(response => {
                this.setState({ fighters: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteFighter(id) {
        axios.delete('http://localhost:5000/api/fighters/' + id)
            .then(res => console.log(res.data));

        this.setState({
            fighters: this.state.fighters.filter(el => el._id !== id)
        })
    }

    fightersList() {
        return this.state.fighters.map(currentfighter => {
            return <Fighter fighter={currentfighter} deleteFighter={this.deleteFighter} key={currentfighter._id} />;
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to the Fighters List!</h1>
                <table className='table' >
                    <thead className='thead-light'>
                        <tr>
                            <th>Name</th>
                            <th>Picture</th>
                            <th>Fight Record</th>
                            <th>Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.fightersList() }
                    </tbody>
                </table>
            </div>
        );
    }
}