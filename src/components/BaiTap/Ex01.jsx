// rfce

import React from 'react'
import "./Ex01.css";

function Ex01() {
  const courseList = ["HTML", "JavaScript", "Python", "C#"];
  return (
    <div className='list-course' style={{border: '1px black solid', margin: '10px', padding:'20px'}}>
      <h1>Danh sach khoa hoc</h1>
      {/* <div className="list-course">
        <ul>
          {courseList.map((element, index) => (
            <li>{element}</li>
          ))}
        </ul>
      </div> */}
      <div>
        <ul>
        {courseList.map((element, index) => (
          <li>{element}</li>
        ) )}
        </ul>
      </div>
    </div>
  )
}

export default Ex01