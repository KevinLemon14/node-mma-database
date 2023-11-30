import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EditFighter() {
    const [fighter, setFighter] = useState({
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


let { id } = useParams();

useEffect(() => {
    axios.get('http://localhost:5000/api/fighters/' + id)
        .then(response => {
            setFighter({
                name: response.data.name,
                picture: response.data.picture,
                fightRecord: response.data.fightRecord,
                stats: response.data.stats
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [id]);

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name in fighter) {
            setFighter(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else if (name in fighter.stats) {
            setFighter(prevState => ({
                ...prevState,
                stats: {
                    ...prevState.stats,
                    [name]: value
                }
            }));
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
    
        console.log(fighter);
    
        axios.patch('http://localhost:5000/api/fighters/edit/' + id, fighter)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

        return (
            <div>
                <h1>Edit Fighter</h1>
                <form onSubmit={onSubmit} autoComplete='off'>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type='text' name='name' required className='form-control' value={fighter.name} onChange={onChange} autoComplete='off-xyz'/>
                    </div>
                    <div className="form-group">
                        <label>Picture: </label>
                        <input type='text' name='picture' required className='form-control' value={fighter.picture} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Fight Record: </label>
                        <input type='text' name='fightRecord' required className='form-control' value={fighter.fightRecord} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Power: </label>
                        <input type='text' name='power' required className='form-control' value={fighter.power} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Speed: </label>
                        <input type='text' name='speed' required className='form-control' value={fighter.speed} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Striking: </label>
                        <input type='text' name='striking' required className='form-control' value={fighter.striking} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Grappling: </label>
                        <input type='text' name='grappling' required className='form-control' value={fighter.grappling} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type='submit' name='submit' value='Edit Fighter' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        );
}