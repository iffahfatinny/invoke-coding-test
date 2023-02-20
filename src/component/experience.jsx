import React, { Component } from 'react'

export default class Experience extends Component {

render() {
  return (
    <div className="experience">
      <h2>EXPERIENCE</h2>
      <div>
        <h3>IT Trainee Analyst, Comclick Technologies Sdn Bhd (Cyberjaya)</h3>
        <p>July 2022 - November 2022</p>
      </div>
      <div>
        <h3>TM ELIT, Telekom Research & Development Sdn Bhd (Cyberjaya)</h3>
        <p>July 2021 - February 2022</p>
        <ul>
          <li>
            <strong>Developed, debugged and maintained User Interface (UI)</strong> 
            for Mobile Intelligent Network Diagnostics System (MINDS) based on the 
            mockup given by the UI/UX designer using <strong>Angular framework</strong>.
          </li>
          <li><strong>Used JIRA</strong> during this project to update the task given.</li>
        </ul>
      </div>
      <div>
        <h3>Software Trainer, Mantap Sinergi Sdn Bhd (Kajang)</h3>
        <p>March 2021 - April 2021</p>
        <ul>
          <li>
            <strong>Trained</strong> existing DBKL employees on how to use Document 
            Digital Management System (DDMS).
          </li>
        </ul>
      </div>
      <div>
        <h3>Software Developer Intern, Mantap Sinergi Sdn Bhd (Kajang)</h3>
        <p>September 2020 - January 2021</p>
        <ul>
          <li>
            <strong>Tested and created User Acceptance Testing (UAT)</strong> for digital 
            Document Management System (DDMS).
          </li>
          <li><strong>Assisted</strong> staff in maintaining the system using <strong>Laravel 
          Framework</strong>.</li>
        </ul>
      </div>
    </div>
  )
 }
}