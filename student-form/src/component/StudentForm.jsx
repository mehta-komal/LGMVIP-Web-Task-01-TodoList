import React, { useState, useEffect } from 'react';

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    website: '',
    gender: '',
    skills: {
      react: false,
      nodejs: false,
      html: false,
    },
    image: null,
  });
  useEffect(() => {
    // Load data from local storage when the component mounts
    const storedData = JSON.parse(localStorage.getItem('studentFormData'));
    if (storedData) {
      setStudentData(storedData);
    }
  }, []);
  // const [data, setData] = useState([])
  const [submitted, setSubmitted] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    // setData(studentData);
    console.log(studentData);
    setSubmitted(true);
    // handelClear();
    localStorage.setItem('studentFormData', JSON.stringify(studentData));
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setStudentData({
      ...studentData,
      skills: {
        ...studentData.skills,
        [name]: checked,
      },
    });
  };
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];

    if (imageFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setStudentData({
          ...studentData,
          image: event.target.result,
        });
      };

      reader.readAsDataURL(imageFile);
    }
  };
  const handelStudent = (e) => {
    e.preventDefault();
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRadioChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };
  const handelClear = () => {
    setStudentData({
      name: '',
      email: '',
      website: '',
      gender: '',
      skills: {
        react: false,
        nodejs: false,
        html: false,
      },
      image: null,
      
    });
  };

  return (
    <div>
      <h1 className='heading-line'>Student Form</h1>
      <div className='form-container'>
        <form onSubmit={handelSubmit} className='form2-container'>
          <label className='label'>
            Name:
            <input
              className='input-field'
              type='text'
              name='name'
              value={studentData.name}
              onChange={handelStudent}
              placeholder='Enter your full name'
              required
            />
          </label>
          <label className='label'>
            Email:
            <input
              className='input-field'
              type='email'
              name='email'
              value={studentData.email}
              placeholder='Enter your email'
              onChange={handelStudent}
              required
            />
          </label>
          <label className='label'>
            Website Link:
            <input
              className='input-field'
              type='link'
              placeholder='Your Link'
              name='website'
              value={studentData.website}
              onChange={handelStudent}
            />
          </label>
          <label className='file-input'>
            Image:
            <input type='file' accept='image/*' onChange={handleImageChange} />
          </label>
          <h4 className='label'>Gender: </h4>
          <input
            type='radio'
            name='gender'
            value='male'
            checked={studentData.gender === 'male'}
            onChange={handleRadioChange}
          />
          <label htmlFor='male'>Male</label>
          <br />
          <input
            type='radio'
            name='gender'
            value='female'
            checked={studentData.gender === 'female'}
            onChange={handleRadioChange}
          />
          <label htmlFor='female'>Female</label>
          <br />
          <div className='checkbox-container '>
            <h4 className='label'>Skills: </h4>
            <input
              type='checkbox'
              name='react'
              checked={studentData.skills.react}
              onChange={handleCheckboxChange}
            />
            <label htmlFor='react' className='checkbox-label'>
              Reactjs
            </label>
            <br />
            <input
              type='checkbox'
              name='nodejs'
              checked={studentData.skills.nodejs}
              onChange={handleCheckboxChange}
            />
            <label htmlFor='nodejs' className='checkbox-label'>
              Nodejs
            </label>
            <br />
            <input
              type='checkbox'
              name='html'
              checked={studentData.skills.html}
              onChange={handleCheckboxChange}
            />
            <label htmlFor='html' className='checkbox-label'>
              Html
            </label>
          </div>
          <div className='button-container'>
            <input className='btn' type='submit' />
            <button className='btn' onClick={handelClear}>
              clear
            </button>
          </div>
        </form>

        {submitted && (
          <div className='data-container'>
            <div className='data-img'>
              <img src={studentData.image} />
            </div>
            <div>
              <h2>{studentData.name} </h2>
              <span>{studentData.email}</span>
              <br />
              <span>{studentData.website}</span>
              <br />
              <span>{studentData.gender}</span>
              <br />
              <h4>Skills:</h4>
              <ul>
                {Object.entries(studentData.skills).map(
                  ([skill, value]) => value && <li key={skill}>{skill}</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentForm;
