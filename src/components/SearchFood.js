import axios from 'axios';
import React, { useState } from 'react';

function SearchFood() {
    const [fid, setFid] = useState('');
    const [food, setFood] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent the form from reloading the page
        axios.get(`http://localhost:1002/food/fetch/${fid}`)
            .then((response) => {
                if (response.data.fid) {
                    setFood(response.data);
                    setError('');
                } else {
                    setFood(null);
                    setError('No food item found with that ID.');
                }
            })
            .catch((error) => {
                console.error('There was an error fetching the data!', error);
                setError('An error occurred while fetching the data.');
            });
    };

    return (
        <div style={{width: "60%", margin: "50px auto"}}>
            <h2>SEARCH FOOD</h2>
            <form onSubmit={handleSearch}>
                <input className='form-control mb-4' type="text" value={fid} onChange={(e) => setFid(e.target.value)} placeholder="Enter Food ID"/>&nbsp;&nbsp;
                <button className='btn btn-success' type="submit">Search</button>
            </form>
            {error && <p>{error}</p>}
            {food && (
                <table className='table mt-4'>
                    <thead className='table-light'>
                        <tr>
                            <th>Food ID</th>
                            <th>Food Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{food.fid}</td>
                            <td>{food.fname}</td>
                            <td>{food.price}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default SearchFood
