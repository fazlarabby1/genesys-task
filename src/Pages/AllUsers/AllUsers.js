import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/allUsers', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div>
                <h1 className='text-4xl font-bold text-center mb-10'>User Profile</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full md:w-[500px] lg:w-[870px]">

                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={user._id} className="hover">
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                </tr>)
                            }
                            <tr><td className='font-bold'>{users.length} Users</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;