import { useState } from 'react';
import { app } from './utils/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function App() {
    let auth = getAuth();
    const [userCred, setUserCred] = useState({ name: '', password: '' });
    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, userCred.name, userCred.password)
            .then((res) => console.log(res.user))
            .catch((error) => alert(err.message));
    };
    return (
        <>
            <div>
                <div></div>
                <div className="font-semibold text-3xl">Hello</div>
                <div></div>
            </div>
        </>
    );
}

export default App;
