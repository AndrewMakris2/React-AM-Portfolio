import React from 'react'

const Learning = () => {
  return (
    <div className='Learn'>
      <h2>My Learning and Goals</h2>
      <hr />
      <div className='LearnFlex'>
        <div>
          <h3><strong>Currently Learning:</strong></h3>
          <ul>
            <li>Studying for <strong>CompTIA CySA+</strong></li>
            <li>Cloud Security (AWS, Azure) – Identity, Logging, Encryption</li>
            <li>Advanced Incident Response & Forensics</li>
          </ul>
        </div>
        <div>
          <h3><strong>Certifications & Training:</strong></h3>
          <ul>
            <li>CompTIA Security+ (in progress)</li>
            <li>CySA+ (planned)</li>
            <li>AWS Academy Cloud Foundations – Completed</li>
            <li>Udemy: Mastering Cybersecurity Vulnerability Management</li>
            <li>Udemy: Cybersecurity Threat Hunting for SOC Analysts</li>
          </ul>
        </div>
        <div>
          <h3><strong>Future Goals:</strong></h3>
          <ul>
            <li>Obtain AWS Security Specialty</li>
            <li>Grow into a Cyber Architect role</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Learning
