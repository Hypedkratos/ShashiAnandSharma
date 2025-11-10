'use client'
import Navbar from "@/components/navbar/navbar"
import emailjs from 'emailjs-com';
import { useState } from "react";

const contact = () => {
    const [formData,setFormData] =  useState({
        name: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send('service_7m6yd68', 'template_6olmuzs', formData, 'kdoUx74k8TiS9ucA4')
            .then((result) => {
                console.log(result.text);
                setFormData({
                    name:"",
                    email:"",
                    message:""
                })
                alert('Message sent!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });
    };

    return (
        <div className="bg-gradient-to-b from-pink-300 to-blue-300 min-h-screen">
            <div><Navbar /></div>
            <div className="mt-10 mx-auto max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" value={formData.name} onChange={handleChange} id="name" name="name" placeholder="Your Name" required className="w-full px-3 py-2 border rounded" />
                    <input type="email" value={formData.email} onChange={handleChange} id="mailID" name="email" placeholder="Your Email Id" required className="w-full px-3 py-2 border rounded" />
                    <textarea placeholder="Your Message" value={formData.message} onChange={handleChange} name="message" id="message" required className="w-full px-3 py-2 border rounded" rows="4"></textarea>
                    <button type="submit"  className="w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">Send Mail</button>
                </form>
            </div>

            <div className="mt-10 mx-auto max-w-lg bg-white p-8 rounded-lg shadow-lg flex justify-around">
                <a href="https://www.instagram.com/hypedkratos?igsh=bGxybnB5dDQ5MW80" target="_blank" rel="noopener noreferrer">
                    <img src="/Icons/instagram.png" alt="Instagram" className="w-10 h-10" />
                </a>
                <a href="https://www.facebook.com/shashi.anand.39566905?sfnsn=wiwspwa&mibextid=RUbZ1f" target="_blank" rel="noopener noreferrer">
                    <img src="/Icons/facebook.png" alt="Facebook" className="w-10 h-10" />
                </a>
                <a href="https://www.linkedin.com/in/inshashi5173/" target="_blank" rel="noopener noreferrer">
                    <img src="/Icons/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
                </a>
                <a href="https://github.com/Hypedkratos" target="_blank" rel="noopener noreferrer">
                    <img src="/Icons/github.png" alt="Github" className="w-10 h-10" />
                </a>
            </div>
        </div>
    )
}

export default contact
