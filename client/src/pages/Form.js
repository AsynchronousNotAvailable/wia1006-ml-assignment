import React, { useState } from "react";
import axios from 'axios';
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    work: "",
    residence: "",
    marriage: "",
    bmi: "",
    smoking: "",
    avg_glucose_level: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.name, e.target.value)
    console.log(formData.gender)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valueMappings = {
      gender: {
        'male': 1,
        'female': 0
      },
      work: {
        'never-worked': 0,
        'private': 1,
        'self-employed': 2,
        'govt-job': 3,
        'children': 4
      },
      residence: {
        'rural': 0,
        'urban': 1
      },

      marriage: {
        'single': 0,
        'married': 1,
        'divorced': 0
      },

      smoking: {
        'never-smoked': 0,
        'smokes': 1,
        'formerly-smoked': 2
      }
    }


    const mappedData = {
      ...formData,
      gender: valueMappings.gender[formData.gender],
      work: valueMappings.work[formData.work],
      residence: valueMappings.residence[formData.residence],
      marriage: valueMappings.marriage[formData.marriage],
      smoking: valueMappings.smoking[formData.smoking],
      age: parseInt(formData.age),
      avg_glucose_level: parseFloat(formData.avg_glucose_level),
      bmi: parseFloat(formData.bmi),
    
    };
    
    console.log(mappedData);
    axios.post('http://localhost:3001/predict', { mappedData })
      .then(response => console.log(response))
    .catch(err => console.error(err))
  
    
  };

  
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mt-5 mb-5">Stroke Risk Prediction</h1>
      <form className="w-full max-w-xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-10 items-center justify-center">
            <div className="flex flex-col">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Gender
                </label>

                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  name="gender"
                >
                  <option value="">Select Your Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="age"
                >
                  Age
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter Your Age"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Work Type
                </label>

                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="work"
                  value={formData.work}
                  onChange={handleChange}
                  name="work"
                >
                  <option>Select Your Work Type</option>
                  <option value="private">Private</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="government">Government Job</option>
                  <option value="children">Children / Unemployed</option>
                  <option value="never-worked">Never Worked</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Residence Type
                </label>

                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="residence"
                  value={formData.residence}
                  onChange={handleChange}
                  name="residence"
                >
                  <option value="">Select Your Residence Type</option>
                  <option value="urban">Urban</option>
                  <option value="rural">Rural</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="marriage"
                >
                  Marriage Status
                </label>

                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="marriage"
                  value={formData.marriage}
                  onChange={handleChange}
                  name="marriage"
                >
                  <option value={null}>Select Your Marriage Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Smoking Status
                </label>

                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="smoking"
                  value={formData.smoking}
                  onChange={handleChange}
                  name="smoking"
                >
                  <option value="">Select Your Smoking Status</option>
                  <option value="smokes">Smokes</option>
                  <option value="never-smoked">Never-Smoked</option>
                  <option value="formerly-smoked">Formerly Smoked</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Average Glucose Level (mmol/L)
                </label>
                <input
                  id="avg_glucose_level"
                  name="avg_glucose_level"
                  placeholder="Enter Average Glucose Level"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.avg_glucose_level}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  BMI
                </label>

                <input
                  id="bmi"
                  name="bmi"
                  placeholder="Enter BMI"
                  type="text"
                  pattern="^\d*\.?\d*$"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.bmi}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
