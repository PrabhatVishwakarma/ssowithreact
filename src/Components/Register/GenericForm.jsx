import React, { useState } from "react";

const GenericForm = ({ fields, apiEndpoint, onSuccess, onError }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Validate required fields
    for (const field of fields) {
      if (!formData[field.name]) {
        setErrors((prev) => ({ ...prev, [field.name]: "This field is required." }));
        return;
      }
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        onSuccess(data);
        setFormData({});
      } else {
        onError(data.message);
      }
    } catch (error) {
      onError("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            required={field.required}
          />
          {errors[field.name] && <p className="error">{errors[field.name]}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default GenericForm;
