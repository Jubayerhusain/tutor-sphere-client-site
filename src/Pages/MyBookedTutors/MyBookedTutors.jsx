import axios from 'axios';
import React, {useEffect, useState } from 'react';

function MyBookedTutors() {
    const [allBooked, setAllBooked] = useState([])
    const [booked, setBooked] = useState([]);
    useEffect(()=>{
        axios.get(`https://tutor-sphere-server-side.vercel.app/booked-tutors`)
        .then((response) => {
            setAllBooked(response.data);
        })
        .catch((error) => {
            console.error('Error All booked tutors faching:', error);
        });
    },[])
    useEffect(() => {
        if (allBooked?.userEmail) {
            axios
                .get(`https://tutor-sphere-server-side.vercel.app/booked-tutors/${allBooked.userEmail}`)
                .then((response) => {
                    setBooked(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching booked tutors:', error);
                });
        }
    }, [allBooked?.userEmail]);

    return (
        <div className="min-h-[450px] p-6">
            <h1 className="text-4xl font-bold mb-6">
                Booked Tutorials ({booked.length})
            </h1>
            {booked.length === 0 ? (
                <p className="text-xl text-gray-500">No tutorials booked yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {booked.map((tutor, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4">
                            <img
                                src={tutor.image}
                                alt={tutor.name}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-2xl font-semibold mb-2">{tutor.name}</h2>
                            <p className="text-lg text-gray-600 mb-2">
                                <strong>Language:</strong> {tutor.language}
                            </p>
                            <p className="text-lg text-gray-600 mb-2">
                                <strong>Price:</strong> ${tutor.price}
                            </p>
                            <button
                                onClick={() => handleReview(tutor)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                            >
                                Review
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const handleReview = (tutor) => {
    alert(`You can now review the tutorial: ${tutor.name}`);
};

export default MyBookedTutors;
