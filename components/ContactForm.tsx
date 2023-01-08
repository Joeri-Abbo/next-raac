import {useState} from "react";
import BoxTitle from "./BoxTitle";

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: 'RAAC - Contact formulier',
        honeypot: '', // if any value received in this field, form submission will be ignored.
        message: '',
        replyTo: '@', // this will set replyTo of email to email address entered in the form
        accessKey: '3de79eba-2cfb-49aa-a56f-ae095b69729f' // get your access key from https://www.staticforms.xyz
    });

    const [response, setResponse] = useState({
        type: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) =>
        setContact({...contact, [e.target.name]: e.target.value});
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const res = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: {'Content-Type': 'application/json'}
            });

            const json = await res.json();

            if (json.success) {
                setResponse({
                    type: 'success',
                    message: 'Thank you for reaching out to us.'
                });
            } else {
                setResponse({
                    type: 'error',
                    message: json.message
                });
            }
        } catch (e) {
            console.log('An error occurred', e);
            setResponse({
                type: 'error',
                message: 'An error occured while submitting the form'
            });
        }
    };
    return (
        <div>
            <div className='section'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column'/>
                        <div className='column is-two-thirds'>
                            <div
                                className={
                                    response.type === 'success'
                                        ? 'p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-gray-800 dark:text-green-400'
                                        : 'hidden'
                                }
                            >
                                <p>{response.message}</p>
                            </div>
                            <div
                                className={
                                    response.type === 'error'
                                        ? 'tile box notification is-danger'
                                        : 'hidden'
                                }
                            >
                                <p>{response.message}</p>
                            </div>
                            <div
                                className={response.message !== '' ? 'is-hidden' : 'columns'}
                            >
                                <div className='column content'>
                                    <BoxTitle>
                                        Contact formulier
                                    </BoxTitle>
                                    <form
                                        action='https://api.staticforms.xyz/submit'
                                        method='post'
                                        onSubmit={handleSubmit}
                                        className="space-y-8"
                                    >
                                        <div className='field'>
                                            <label
                                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Your
                                                Name</label>
                                            <input
                                                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                                type='text'
                                                placeholder='Name'
                                                name='name'
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className='field'>
                                            <label
                                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Your
                                                Email</label>
                                            <input
                                                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                                type='email'
                                                placeholder='Email'
                                                name='email'
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className='field' style={{display: 'none'}}>
                                            <label
                                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Title</label>
                                            <input
                                                type='text'
                                                name='honeypot'
                                                style={{display: 'none'}}
                                                onChange={handleChange}
                                            />
                                            <input
                                                type='hidden'
                                                name='subject'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='field'>
                                            <label
                                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>Message</label>
                                            <div className='control'>
                                                <textarea
                                                    rows={6}
                                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder='Your Message'
                                                    name='message'
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='field is-grouped'>
                                            <button
                                                className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                                type='submit'>
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='column'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;