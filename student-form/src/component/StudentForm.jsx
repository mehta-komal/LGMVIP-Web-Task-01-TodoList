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

  const [submitted, setSubmitted] = useState(false);
  const [allStudentData, setAllStudentData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('allStudentData'));
    if (storedData) {
      setAllStudentData(storedData);
    }
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    
    const updatedAllStudentData = [...allStudentData, studentData];
    setAllStudentData(updatedAllStudentData);

   
    localStorage.setItem(
      'allStudentData',
      JSON.stringify(updatedAllStudentData)
    );

    
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
              required
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
        {/* <hr /> */}
   
        {allStudentData.length > 0 && (
          <div className='all-data-container'>
            {allStudentData.map((student, index) => (
              <div key={index} className='data-container'>
                <div className='data-img'>
                  <img src={student.image} alt='student' />
                </div>
                <div className='data-details'>
                  <h2>
                    Name: <i>{student.name}</i>{' '}
                  </h2>
                  <span>
                    <b>Email:</b> {student.email}
                  </span>
                  <br />
                  <span>
                    <b>Webiste:</b> {student.website}
                  </span>
                  <br />
                  <span>
                    <b>Gender:</b> {student.gender}
                  </span>
                  <br />
                  <div className='list-container'>
                    <span>
                      <b>Skills:</b>
                    </span>
                    <ul>
                      {Object.entries(student.skills).map(
                        ([skill, value]) =>
                          value && <li key={skill}>{skill}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentForm;
