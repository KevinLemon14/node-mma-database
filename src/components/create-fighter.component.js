import React, { Component } from 'react';
import axios from 'axios';

export default class CreateFighter extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);
        this.onChangeFightRecord = this.onChangeFightRecord.bind(this);
        this.onChangePower = this.onChangePower.bind(this);
        this.onChangeSpeed = this.onChangeSpeed.bind(this);
        this.onChangeStriking = this.onChangeStriking.bind(this);
        this.onChangeGrappling = this.onChangeGrappling.bind(this);

        this.state = { 
            name: '',
            picture: '',
            fightRecord: '',
            stats: {
                power: '',
                speed: '',
                striking: '',
                grappling: ''
            },
        }
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onChangePicture = (e) => {
        this.setState({
            picture: e.target.value
        });
    }

    onChangeFightRecord = (e) => {
        this.setState({
            fightRecord: e.target.value
        });
    }

    onChangePower = (e) => {
        this.setState(prevState => ({
            stats: {
                ...prevState.stats,
                power: e.target.value
            }
        }));
    }

    onChangeSpeed = (e) => {
        this.setState(prevState => ({
            stats: {
                ...prevState.stats,
                speed: e.target.value
            }
        }));
    }
    onChangeStriking = (e) => {
        this.setState(prevState => ({
            stats: {
                ...prevState.stats,
                striking: e.target.value
            }
        }));
    }

    onChangeGrappling = (e) => {
        this.setState(prevState => ({
            stats: {
                ...prevState.stats,
                grappling: e.target.value
            }
        }));
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        const fighter = {
            name: this.state.name,
            picture: this.state.picture,
            fightRecord: this.state.fightRecord,
            stats: {
                power: this.state.stats.power,
                speed: this.state.stats.speed,
                striking: this.state.stats.striking,
                grappling: this.state.stats.grappling
            }
        }

        console.log(fighter);

        axios.post('http://localhost:5000/api/fighters/create', fighter)
        .then(res => {
            console.log(res.data);
            this.setState({
                name: '',
                picture: '',
                fightRecord: '',
                stats: {
                    power: '',
                    speed: '',
                    striking: '',
                    grappling: ''
                }
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Welcome to the Create Fighter Page!</h1>
                <form onSubmit={this.onSubmit} autoComplete='off'>
                    <div classsName='form-group'>
                        <label>Name: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.name}
                            onChange={this.onChangeName}
                            autoComplete='off-xyz'
                        />
                        </div>
                        <div className='form-group'>
                        <label>Picture: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.picture}
                            onChange={this.onChangePicture}
                        />
                        </div>
                        <div className='form-group'>
                        <label>Fight Record: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.fightRecord}
                            onChange={this.onChangeFightRecord}
                        />
                        </div>
                        <div className='form-group'>
                        <label>Power: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.stats.power}
                            onChange={this.onChangePower}
                        />
                        </div>
                        <div className='form-group'>
                        <label>Speed: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.stats.speed}
                            onChange={this.onChangeSpeed}
                        />
                        </div>
                        <div className='form-group'>
                        <label>Striking: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.stats.striking}
                            onChange={this.onChangeStriking}
                        />
                        </div>
                        <div className='form-group'>
                        <label>Grappling: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.stats.grappling}
                            onChange={this.onChangeGrappling}
                        />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create Fighter" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            );
        };
    };