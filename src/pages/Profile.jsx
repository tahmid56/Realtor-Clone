import { getAuth, updateCurrentUser, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {toast} from "react-toastify"
import { db } from '../utils/firebaseConfig';

export default function Profile() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [changeDetail, setChangeDetail] = useState(false);
    const [formData, setFormData] = useState({ name: auth.currentUser.displayName, email: auth.currentUser.email });
    const handleSignOut = () => {
        auth.signOut();
        navigate('/');
    };
    const onSubmit=async()=>{
        try{
            if(auth.currentUser.displayName !== formData.name){
                await updateProfile(auth.currentUser, {displayName:formData.name,});
            }
            const docRef = doc(db, "users", auth.currentUser.uid);
            await updateDoc(docRef, {name: formData.name});
            toast.success("Profile Update Successful!")
        }catch(error){
            toast.error("couldn't update the profile details")
        }
    }
    const handleEditClick = () => {};
    return (
        <>
            <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
                <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
                <div className="w-full md:w-[50%] mt-6 px-3">
                    <form>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            disabled={!changeDetail}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200"}`}
                        />

                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            disabled
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
                        />
                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
                            <p className="flex items-center ">
                                Do you want to change your name?
                                <span
                                    onClick={() => {
                                        changeDetail && onSubmit();
                                        setChangeDetail((state) => !state);
                                    }}
                                    className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                                >
                                    {changeDetail ? 'Apply Changes' : 'Edit'}
                                </span>
                            </p>
                            <p
                                onClick={handleSignOut}
                                className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer"
                            >
                                Sign out
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
