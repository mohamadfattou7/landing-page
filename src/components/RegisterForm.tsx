'use client';
import React, { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  position: string;
  availability: string;
  salary: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    position: '',
    availability: '',
    salary: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setModalMessage('🎉 Thank you! We will talk to you soon.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          experience: '',
          position: '',
          availability: '',
          salary: '',
        });
      } else {
        setModalMessage(`❌ Error: ${result.error || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error(error);
      setModalMessage('❌ Network error');
    }

    setIsModalOpen(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} />
        <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} />
        <input type="text" name="availability" placeholder="Availability" value={formData.availability} onChange={handleChange} />
        <input type="text" name="salary" placeholder="Expected Salary" value={formData.salary} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .form input {
          display: block;
          margin-bottom: 10px;
          padding: 10px;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .form button {
          padding: 10px 20px;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          background: white;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
        }

        .modal-content button {
          margin-top: 20px;
          padding: 8px 16px;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}


