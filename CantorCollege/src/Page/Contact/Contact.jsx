// import styles from './Contact.module.css';
// import { useState } from 'react';

// const Contact =() =>{
//     const [formData, setFormData] = useState({email: '', message: ''});

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const response = await fetch('http://localhost:5000/api/enquiry', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//             alert('Enquiry submitted successfully!');
//             setFormData({email: '', message: ''});
//         } else {
//             alert('Failed to submit enquiry. Please try again.');
//         }
//     }

//     return(
//         <>
//             <section>
//                 <h2>Got An Enquiry?</h2>
//                 <p>Please use the contact form below to send us a query, or reach out to us directly using the details provided. We look forward to hearing from you.</p>
//                 <form onSubmit={handleSubmit}>
//                     <span className={styles.emailContainer}>
//                         <label htmlFor="email" className="desktopOnly"><h3>Email:</h3></label>
//                         <input 
//                             type="text" 
//                             id="email" 
//                             name="email" 
//                             placeholder='Email...'
//                             value={formData.email}
//                             onChange={(e) => setFormData({...formData, email: e.target.value})}
//                         />
//                     </span>
//                     <span className={styles.messageContainer}>
//                         <label htmlFor="subject" className="desktopOnly"><h3>Message:</h3></label>
//                         <textarea 
//                             type="text" 
//                             id="subject" 
//                             name="message"
//                             placeholder="Type your message here..."
//                             value={formData.message}
//                             onChange={(e) => setFormData({...formData, message: e.target.value})}  
//                         />
//                     </span>
//                     <button type="submit">Submit</button>
//                 </form>
//             </section>
//         </>
//     )
// }

// export default Contact;

import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    // 1. Manage form state
    const [formData, setFormData] = useState({ email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Stop page reload

        try {
            // 2. Send data to your Flask API
            const response = await fetch('http://127.0.0.1:5001/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Enquiry stored in Database!");
                setFormData({ email: '', message: '' }); // Clear form
            }
        } catch (error) {
            alert("Could not connect to the server. Is your Flask app running?");
            console.error("Error submitting form:", error);
        }
    };

    return (
        <section>
            <h2>Got An Enquiry?</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.emailContainer}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                    />
                </div>
                <div className={styles.messageContainer}>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        id="message" 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required 
                    />
                </div>
                <button type="submit">Submit Enquiry</button>
            </form>
        </section>
    );
};

export default Contact;