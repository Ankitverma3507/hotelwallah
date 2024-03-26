import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
export default function PlacesPage(){

    const {action}= useParams();
    const [title, setTitle] = useState('');
    const[address, setAddress] = useState('');
    const[addedPhotos, setAddedPhotos] = useState([]);
    const[photoLink, setPhotoLink] = useState('');
    const[description, setDescription] = useState('');
    const[perks, setPerks] = useState([]);
    const[extraInfo, setExtraInfo] = useState('');
    const[checkIn, setCheckIn] = useState('');
    const[checkOut, setCheckOut] = useState('');
    const[maxGuests, setMaxGuests] = useState(1);
    return (
        <div>
        {action !== 'new' &&(
            <div className="text-center">
                <Link className="bg-gray-400 text-white rounded-full py-2 px-4 inline-flex gap-1" to={'/account/places/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add New Places
                </Link>
            </div>
        )}

        {action === 'new' && (
            <div>
            <form>  
                <h2 className="text-2xl mt-4">Title</h2>
                <p className="text-gray-500 text-sm">Title for your place</p>
                <input className="border rounded-2xl p-1 w-full" type="text" placeholder="title, for example:My lovely apartment" />

                <h2 className="text-2xl mt-4">Address</h2>
                <p className="text-gray-500 text-sm">Address to this place</p>
                <input className="border rounded-2xl p-1 w-full" type="text" placeholder="address" />

                <h2 className="text-2xl mt-4">Photos</h2>
                <p className="text-gray-500 text-sm">more==better</p>
                <div className="flex gap-2">
                    <input className="border rounded-2xl p-1 w-full" type="text" placeholder="Add using a link....jpg" />
                    <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;Photo</button>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2">
                    <button className="border bg-transparent rounded-2xl p-8 text-lg text-gray-600 flex items-center justify-center gap-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                    Upload
                    </button>
                </div>
                <h2 className="text-2xl mt-4">Description</h2>
                <p className="text-gray-500 text-sm">Description of place</p>
                <textarea />
                
                <h2 className="text-2xl mt-4">Perks</h2>
                <p className="text-gray-500 text-sm"> Select all the Perks of your Place</p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2">
                    <label className="border p-4 flex gap-2 rounded-2xl cursor-pointer">
                        <input type="checkbox" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                            </svg>
                        <span>Wifi</span>
                    </label>
                    <label className="border p-4 flex gap-2 rounded-2xl cursor-pointer">
                        <input type="checkbox" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                        <span>Free Parking Spot</span>
                    </label>
                    <label className="border p-4 flex gap-2 rounded-2xl cursor-pointer">
                        <input type="checkbox" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                        <span>TV</span>
                    </label>
                    <label className="border p-4 flex gap-2 rounded-2xl cursor-pointer">
                        <input type="checkbox" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>
                        <span>Pets</span>
                    </label>
                    <label className="border p-4 flex gap-2 rounded-2xl cursor-pointer">
                        <input type="checkbox" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>
                        <span>Private Entrance</span>
                    </label>
                </div>

                <h2 className="text-2xl mt-4">ExtraInfo</h2>
                <p className="text-gray-500 text-sm">House rules</p>
                <textarea/>

                <h2 className="text-2xl mt-4">Check IN & OUT times</h2>
                <p className="text-gray-500 text-sm">Add check in and out times, remember to have some time window for cleaning the room between the guests</p>

                <div className="grid sm:grid-cols-3 gap-2">
                    <div>
                        <h3 className="mt-2 -mb-1">Check In Time</h3>
                        <input type="text" placeholder="14:00" />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Check Out Time</h3>
                        <input type="text" placeholder="Check Out Time" />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1"> Max number of guests</h3>
                        <input type="text" placeholder="Check In Time" />
                    </div>
                </div>
                    <button className="p-2 w-full rounded-2xl my-4">Save</button>
            </form>
            </div>
            
        )}
            
            
        </div>
    )
}