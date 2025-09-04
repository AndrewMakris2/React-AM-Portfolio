import React from 'react'

const Learning = () => {
  return (
    <div className='Learn'>
      <h2>My Learning and Goals</h2>
      <hr />
      <div className='LearnFlex'>

        {/* Currently Learning */}
        <div>
          <h3><strong>Currently Learning:</strong></h3>
          <ul>
            <li>Strategic Security Architecture & Design: Gaining knowledge and hands-on experience in designing enterprise-wide security solutions, including Zero Trust frameworks and cloud-native security principles.</li>
            <li>Advanced Threat & Risk Management: Building upon incident response and threat hunting skills to inform strategic security policy and risk analysis across a multi-cloud environment.</li>
            <li>Automation & Orchestration: Developing advanced PowerShell & Python scripting for automating security operations (SecOps) and creating repeatable, scalable security deployments.</li>
            <li>Core Architectural Certifications: Studying for the CompTIA CySA+ as a key step towards achieving the CISSP certification, the industry gold standard for security architects.</li>
          </ul>
        </div>

        {/* Certifications & Training */}
        <div>
          <h3><strong>Certifications:</strong></h3>
          <ul>
            <li>AWS Security Essentials</li>
            <li>Microsoft Azure Fundamentals (AZ-900)</li>
            <li>MTA: Web Development Fundamentals</li>
            <li>AWS Academy Cloud Foundations</li>
          </ul>

          <h3><strong>Prep Courses & Training:</strong></h3>
          <ul>
            <li>CompTIA Security+ Prep (Udemy)</li>
            <li>Cybersecurity Threat Hunting (Udemy)</li>
            <li>Vulnerability Management (Udemy)</li>
            <li>SIEM Engineer Career Path (Let’s Defend Course)</li>
          </ul>

          <h3><strong>Future Certifications:</strong></h3>
          <ul>
            <li>CompTIA CySA+</li>
            <li>Certified Ethical Hacker (CEH)</li>
          </ul>
        </div>


        {/* Future Goals */}
        <div>
          <h3><strong>Future Goals:</strong></h3>
          <ul>
            <li>Advance into a Tier 2/Senior Security Analyst</li>
            <li>Develop skills as Detection Engineer, Cloud Security Specialist, and in Incident Response</li>
            <li>My main goal is to one day become a Security Architect</li>
            <li>To be a cyber architect, I want to develop skills in strategic planning, advanced system design, and risk management frameworks.</li>
            <li>Future Certifications to help with the goal of being an Architect include CISSP, CISM, CISA, and CompTIA CySA++</li>
          </ul>
        </div>
        {/* Portfolio Projects */}
        <div>
          <h3><strong>Future Portfolio Projects:</strong></h3>
          <ul>
            <li>Incident Simulation & Response – Phishing detection using Splunk queries</li>
            <li>Threat Hunt Lab – Log ingestion with Splunk/ELK & custom correlation rules</li>
            <li>Malware Analysis Report – Static & dynamic analysis with IOC extraction</li>
            <li>Cloud Security Audit – AWS IAM policy auditing with Python scripts</li>
          </ul>
        </div>

        {/* Networking & Experience */}
        <div>
          <h3><strong>Networking & Experience:</strong></h3>
          <ul>
            <li>Target large banking & healthcare companies with multi-tier SOCs</li>
            <li>Engage with threat intel communities like MISP and Open Threat Exchange</li>
            <li>Share findings & projects regularly on LinkedIn and GitHub</li>
            <li>Document learning to show continuous growth and domain expertise</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Learning
