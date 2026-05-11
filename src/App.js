import { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    iqama: "",
    cardNo: "",
    expiry: "",
    issued: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/certificates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Form submitted successfully!");

        setFormData({
          name: "",
          iqama: "",
          cardNo: "",
          expiry: "",
          issued: "",
          course: "",
        });
      } else {
        alert(data.message);
      }

    } catch (err) {
      console.log(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="form-card">

        <div className="top-strip"></div>

        <div className="header">
          <div>
            <h2>Kingdom of Saudi Arabia</h2>
            <p className="sub-title">Training Authorization Form</p>
          </div>

          <div className="badge">SA</div>
        </div>

        <form className="form-body" onSubmit={handleSubmit}>

          <div className="input-group full">
            <label>Full Name</label>
            <input name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Iqama</label>
            <input name="iqama" value={formData.iqama} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Card No</label>
            <input name="cardNo" value={formData.cardNo} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Issued</label>
            <input type="date" name="issued" value={formData.issued} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Expiry</label>
            <input type="date" name="expiry" value={formData.expiry} onChange={handleChange} />
          </div>

          <div className="input-group full">
            <label>Course</label>
            <input name="course" value={formData.course} onChange={handleChange} />
          </div>

          <div className="note-box full">
            This form certifies that the above candidate is registered for training.
          </div>

          <div className="button-wrap full">
            <button disabled={loading}>
              {loading ? "Submitting..." : "Submit Form"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}