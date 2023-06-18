import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Name"
        />
      </label>
      <br />
      <label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          // regex is for UK phone numbers
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Contact Phone (###-###-####)"
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Contact Email"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
