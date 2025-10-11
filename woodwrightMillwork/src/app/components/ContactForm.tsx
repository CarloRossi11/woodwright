'use client';

import { useState } from 'react';
import styles from './contactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    projectDetails: '',
    howHeard: '',
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name, value } = target;

    setFormData(prev => ({
      ...prev,
      [name]: target.type === 'file' && 'files' in target ? (target.files?.[0] ?? null) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with your form handler
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      {/* First + Last Name */}
      <div className={styles.formGroup}>
        <label>First Name</label>
        <input type="text" name="firstName" required onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label>Last Name</label>
        <input type="text" name="lastName" required onChange={handleChange} />
      </div>

      {/* Email + Phone */}
      <div className={styles.formGroup}>
        <label>Email</label>
        <input type="email" name="email" required onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label>Phone</label>
        <input type="tel" name="phone" onChange={handleChange} />
      </div>

      {/* Company + Website */}
      <div className={styles.formGroup}>
        <label>Company</label>
        <input type="text" name="company" onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label>Website URL</label>
        <input type="url" name="website" onChange={handleChange} />
      </div>

      {/* Project Details (full width) */}
      <div className={styles.formGroup}>
        <label>Project Details</label>
        <textarea name="projectDetails" rows={4} required onChange={handleChange} />
      </div>

      {/* How Heard (full width) */}
      <div className={styles.formGroup}>
        <label>How did you hear about us?</label>
        <select name="howHeard" required onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="google">Google</option>
          <option value="social">Social Media</option>
          <option value="referral">Referral</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button (full width) */}
      <div className={styles.formButton}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
