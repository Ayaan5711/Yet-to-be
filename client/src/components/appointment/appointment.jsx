"use client";

import { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "male",
    phone: "",
    bookingDate: "",
    schedule: "evening",
    department: "",
    doctor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="appointment-one">
      <div className="container">
        <div className="inner-container wow fadeInUp" data-wow-duration="1s">
          <h3 className="appointment-one__title">Get an Appointment</h3>
          <form
            onSubmit={handleSubmit}
            className="appointment-one__form contact-form-validated"
          >
            <div className="row align-items-end">
              <div className="col-xl-5 col-lg-6">
                <label className="appointment-one__label">Full Name</label>
                <div className="appointment-one__form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="appointment-one__field"
                    placeholder="Full name"
                    required
                  />
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <label className="appointment-one__label">Age</label>
                <div className="appointment-one__form-group">
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="appointment-one__field"
                    placeholder="Enter your age"
                  />
                </div>
              </div>

              <div className="col-xl-3 col-lg-6">
                <label className="appointment-one__label">Gender</label>
                <div className="appointment-one__form-group">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="appointment-one__field"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="col-xl-5 col-lg-6">
                <label className="appointment-one__label">Phone Number</label>
                <div className="appointment-one__form-group">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="appointment-one__field"
                    placeholder="Enter number"
                  />
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <label className="appointment-one__label">
                  Appointment Date
                </label>
                <div className="appointment-one__form-group">
                  <input
                    type="date"
                    name="bookingDate"
                    value={formData.bookingDate}
                    onChange={handleChange}
                    className="appointment-one__field"
                  />
                </div>
              </div>

              <div className="col-xl-3 col-lg-6">
                <label className="appointment-one__label">
                  Consultant Hour
                </label>
                <div className="appointment-one__form-group">
                  <select
                    name="schedule"
                    value={formData.schedule}
                    onChange={handleChange}
                    className="appointment-one__field"
                  >
                    <option value="morning">Morning</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>
              </div>

              <div className="col-xl-5 col-lg-6">
                <label className="appointment-one__label">Department</label>
                <div className="appointment-one__form-group">
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="appointment-one__field"
                  >
                    <option value="">Select Department</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Pediatrics">Pediatrics</option>
                  </select>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <label className="appointment-one__label">Doctor</label>
                <div className="appointment-one__form-group">
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="appointment-one__field"
                  >
                    <option value="">Select Doctor</option>
                    <option value="Dr. Smith">Dr. Smith</option>
                    <option value="Dr. Jane">Dr. Jane</option>
                  </select>
                </div>
              </div>

              <div className="col-xl-3 col-lg-12">
                <button type="submit" className="appointment-one__btn thm-btn">
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
