import React, { useState } from 'react'

const LeadForm = ({ onAddLead }) => {

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        status: "new"
    });

    const handleChange = (e) => {
        let { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.name) {
            newErrors.name = "Name is required";
        }

        if (!formData.status) {
            newErrors.status = "Status is required";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setSubmitting(true);
        try {
            onAddLead((prev) => [...prev, { id: Date.now(), name: formData.name, status: formData.status }])
            setFormData({ name: "", status: "new" })
            setErrors({});
            alert("Lead created successfully!");

        } catch (error) {
            setErrors({ submit: error.message });
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <section className="FormSection">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"   
                            placeholder="Enter your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p>{errors.name}</p>}
                    </div>
                    <div className="select">
                        <select name="status" id="status" value={formData.status}
                            onChange={handleChange}>
                            <option value="new">New</option>
                            <option value="done">Done</option>
                        </select>
                        {errors.status && <p>{errors.status}</p>}
                    </div>

                    <button type="submit" disabled={submitting}>
                        {submitting ? "Creating..." : "Create Lead"}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default LeadForm