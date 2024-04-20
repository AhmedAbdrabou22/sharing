// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form';

// const ProfileData = () => {
//     const [imageSrc, setImageSrc] = useState(null);

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 setImageSrc(event.target.result);
//             };
//             reader.readAsDataURL(file);
//         } else {
//             setImageSrc(null);
//         }
//     };
//     return (
//         <div className='font mt-5 p-3' style={{ background: "white", borderRadius: "10px" }}>
//             <div>
//                 <div>
//                     <p className='fs-3'>Profile Details</p>
//                     <span>Add Your Details to Create a Personal touch Profile </span>
//                 </div>
//             </div>


//             <div className='selectPics mt-5' style={{ background: "#fbfbfa", borderRadius: "10px", padding: "8px" }}>
//                 <p>Profile Picture</p>
//                 <div>
//                     <label className="picture" htmlFor="picture__input" tabIndex="0">
//                         <span className="picture__image">
//                             {imageSrc ? (
//                                 <img src={imageSrc} alt="Uploaded" className="picture__img" />
//                             ) : (
//                                 'Choose an image'
//                             )}
//                         </span>
//                     </label>
//                     <input
//                         type="file"
//                         name="picture__input"
//                         id="picture__input"
//                         onChange={handleImageChange}
//                     />
//                 </div>
//             </div>


//             <div className='mt-5' style={{ background: "#fbfbfa", textAlign:"left",  borderRadius: "10px", padding: "8px" }}>
//                 <div className='mt-3 d-flex justify-content-between align-items-center'>
//                     <label>First Name*</label>
//                     <Form.Control aria-label="First name" type="text" style={{width:"80%"}} />
//                 </div>
//                 <div className='mt-3 d-flex justify-content-between align-items-center'>
//                     <label>Last Name*</label>
//                     <Form.Control aria-label="First name" type="text" style={{width:"80%"}} />
//                 </div>
//                 <div className='mt-3 d-flex justify-content-between align-items-center'>
//                     <label>Email*</label>
//                     <Form.Control aria-label="First name" type="email" style={{width:"80%"}} />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProfileData




import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const ProfileData = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [saveMessage, setSaveMessage] = useState('');

    useEffect(() => {
        const savedFirstName = localStorage.getItem('firstName');
        const savedLastName = localStorage.getItem('lastName');
        const savedImageSrc = localStorage.getItem('imageSrc');
        const savedEmail = localStorage.getItem('email');

        if (savedFirstName) {
            setFirstName(savedFirstName);
        }
        if (savedLastName) {
            setLastName(savedLastName);
        }
        if (savedImageSrc) {
            setImageSrc(savedImageSrc);
        }
        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImageSrc(event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImageSrc(null);
        }
    };

    const handleFirstNameChange = (e) => {
        const value = e.target.value;
        setFirstName(value);
    };

    const handleLastNameChange = (e) => {
        const value = e.target.value;
        setLastName(value);
    };
    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    const handleSave = () => {
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('imageSrc', imageSrc);
        localStorage.setItem('email', email);
        setSaveMessage('Profile saved successfully.');
    };

    return (
        <div className='font mt-5 p-3' style={{ background: "white", borderRadius: "10px" }}>
            <div>
                <div>
                    <p className='fs-3'>Profile Details</p>
                    <span>Add Your Details to Create a Personal touch Profile </span>
                </div>
            </div>

            <div className='selectPics mt-5' style={{ background: "#fbfbfa", borderRadius: "10px", padding: "8px" }}>
                <p>Profile Picture</p>
                <div>
                    <label className="picture" htmlFor="picture__input" tabIndex="0">
                        <span className="picture__image">
                            {imageSrc ? (
                                <img src={imageSrc} alt="Uploaded" className="picture__img" />
                            ) : (
                                'Choose an image'
                            )}
                        </span>
                    </label>
                    <input
                        type="file"
                        name="picture__input"
                        id="picture__input"
                        onChange={handleImageChange}
                    />
                </div>
            </div>

            <div className='mt-5' style={{ background: "#fbfbfa", textAlign:"left",  borderRadius: "10px", padding: "8px" }}>
                <div className='mt-3 d-flex justify-content-between align-items-center'>
                    <label>First Name*</label>
                    <Form.Control aria-label="First name" type="text" style={{width:"80%"}} value={firstName} onChange={handleFirstNameChange} />
                </div>
                <div className='mt-3 d-flex justify-content-between align-items-center'>
                    <label>Last Name*</label>
                    <Form.Control aria-label="First name" type="text" style={{width:"80%"}} value={lastName} onChange={handleLastNameChange} />
                </div>
                <div className='mt-3 d-flex justify-content-between align-items-center'>
                    <label>Email*</label>
                    <Form.Control aria-label="First name" type="email" style={{width:"80%"}} value={email} onChange={handleEmail}/>
                </div>
            </div>
            <button className='btn  saveLinks' onClick={handleSave}>Save</button>
            {saveMessage && <p>{saveMessage}</p>}
        </div>
    )
}

export default ProfileData;

