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
            <li>Studying for <strong>CompTIA CySA+</strong></li>
            <li>Cloud Security (AWS, Azure) – Identity, Logging, Encryption</li>
            <li>Advanced Incident Response & Forensics</li>
            <li>PowerShell & Python scripting for SOC automation</li>
            <li>Threat Hunting with YARA and Sigma rules</li>
          </ul>
        </div>

        {/* Certifications & Training */}
        <div>
          <h3><strong>Certifications & Training:</strong></h3>
          <ul>
            <li>CompTIA CySA+ (planned)</li>
            <li>AWS Academy Cloud Foundations – Completed</li>
            <li>Udemy: Mastering Cybersecurity Vulnerability Management 101</li>
            <li>Udemy: GIAC Security Essentials</li>
            <li>Udemy: Cybersecurity Threat Hunting for SOC Analysts</li>
            <li>Udemy: SOC Analysis with Network Fundamentals</li>
            <li>Future: CISSP or CCSP for senior roles</li>
            <li>Future: GIAC Certified Intrusion Analyst (GCIA) – network forensics & deep packet inspection</li>
            <li>Future: Microsoft SC-200 Security Operations Analyst</li>
          </ul>
        </div>

        {/* Future Goals */}
        <div>
          <h3><strong>Future Goals:</strong></h3>
          <ul>
            <li>Become SOC Tier 2 Analyst / Threat Hunter</li>
            <li>Develop skills as Detection Engineer and Cloud Security Specialist</li>
            <li>Grow into senior roles: SOC Manager, Cybersecurity Architect</li>
            <li>Deepen expertise in Cloud SOC: AWS Security Hub, GuardDuty, Azure Sentinel, IAM hardening</li>
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
