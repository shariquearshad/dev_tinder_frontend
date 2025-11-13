import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';
import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { addUser } from '../utils/userSlice';

function EditProfile({ user }) {

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [about, setAbout] = useState(user.about);
    const [error,setError]=useState("");
    const dispatch=useDispatch();


    const saveProfile=async()=>{

        try{
            setError("");
            const res=await axios.patch(baseUrl+"/profile/edit",{
                firstName,
                lastName,
                photoUrl,
                age,
                gender,
                about
            },{withCredentials:true})
            console.log(res.data);

             dispatch(addUser(res.data))


        }catch(err){
            console.log(err);
            setError(err.response.data)
        }
    }




    return (
        <div className='flex justify-evenly'>
        <div className='flex justify-center my-10'>
            <div className="card card-border bg-base-300 w-96 ">
                <div className="card-body">
                    <h2 className="card-title">Edit Profile</h2>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">First Name</legend>
                            <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Type here" />

                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Last Name</legend>
                            <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Type here" />

                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Age</legend>
                            <input type="text" className="input" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Type here" />

                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Gender</legend>
                            <input type="text" className="input" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Type here" />

                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">About</legend>
                            <input type="text" className="input" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Type here" />

                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Photo Url</legend>
                            <input type="text" className="input" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} placeholder="Type here" />

                        </fieldset>

                    </div>
                    <p className=' text-red-500'>{error}</p>

                    <div className="card-actions justify-center">
                        <button onClick={saveProfile} className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="my-10">
            <UserCard user={{firstName,lastName,age,photoUrl,about,gender}}/>
        </div>
        </div>
    )

}

export default EditProfile