import axios from 'axios'
import React, { useState, useEffect } from 'react'

function ViewFood() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1002/food/fetch')
            .then((response) => {
                setFoods(response.data);
            })
            .catch((error) => {
                console.error('THERE WAS AN ERROR FETCHING THE DATA!', error);
            });
    }, []);
    return (
        <div style={{width: "80%", margin: "50px auto"}}>
            <h2>VIEW FOOD</h2>
            <table className='table'>
                <thead className='table-light'>
                    <tr>
                        <th>Food ID</th>
                        <th>Food Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((food) => (
                        <tr key={food.fid}>
                            <td>{food.fid}</td>
                            <td>{food.fname}</td>
                            <td>{food.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewFood
