"use client";

import { useState } from "react";
import styles from "./contactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    projectDetails: "",
    howHeard: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        target.type === "file" && "files" in target
          ? target.files?.[0] ?? null
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      {/* First + Last Name */}
      <div className={styles.formGroup}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          required
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          required
          onChange={handleChange}
        />
      </div>

      {/* Email + Phone */}
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" name="phone" onChange={handleChange} />
      </div>

      {/* Project Details */}
      <div className={styles.formGroup}>
        <label htmlFor="projectDetails">Project Details</label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          rows={4}
          required
          onChange={handleChange}
        />
      </div>

      {/* How Heard */}
      <div className={styles.formGroup}>
        <label htmlFor="howHeard">How did you hear about us?</label>

        <select
          id="howHeard"
          name="howHeard"
          required
          aria-describedby="howHeardHelp"
          onChange={handleChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="google">Google</option>
          <option value="social">Social Media</option>
          <option value="referral">Referral</option>
          <option value="other">Other</option>
        </select>

        <span id="howHeardHelp" className={styles.srOnly}>
          Choose how you heard about Woodwright
        </span>
      </div>

      {/* Submit */}
      <div className={styles.formButton}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
