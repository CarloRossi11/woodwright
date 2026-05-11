"use client";

import { useState } from "react";
import styles from "./contactForm.module.css";
import { motion } from "motion/react";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const encode = (data: Record<string, any>) =>
    Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key] ?? ""),
      )
      .join("&");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode(Object.fromEntries(formData)),
      });

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      {/* Hidden static form for Netlify build detection */}
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input name="firstName" />
        <input name="lastName" />
        <input name="email" />
        <input name="phone" />
        <textarea name="projectDetails" />
        <select name="howHeard" />
      </form>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className={styles.contactForm}
      >
        {/* Required hidden fields */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        {/* First + Last Name */}
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" required />
        </div>

        {/* Email + Phone */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" name="phone" />
        </div>

        {/* Project Details */}
        <div className={styles.formGroup}>
          <label htmlFor="projectDetails">Project Details</label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows={4}
            required
          />
        </div>

        {/* How Heard */}
        <div className={styles.formGroup}>
          <label htmlFor="howHeard">How did you hear about us?</label>
          <select id="howHeard" name="howHeard" required>
            <option value="" disabled>
              Select an option
            </option>
            <option value="google">Google</option>
            <option value="social">Social Media</option>
            <option value="referral">Referral</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit */}
        <div className={styles.formButton}>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            Submit
          </motion.button>
        </div>

        {success && (
          <p className={styles.successMessage}>
            Thanks! We’ll be in touch shortly.
          </p>
        )}
      </form>
    </>
  );
}
