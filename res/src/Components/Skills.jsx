import React from 'react';

const Skills = () => {
  return (
    <div className="Skills">
      <h2>🛠️ Technical & Soft Skills</h2>
      <div className="skill-section">
        <h3>Cybersecurity Tools & Platforms</h3>
        <ul>
          <li>SIEM: Exabeam, SentinelOne</li>
          <li>EDR: CrowdStrike Falcon, CylanceProtect</li>
          <li>Email Security: Inky, Mimecast, Proofpoint</li>
          <li>Cloud: AWS (IAM, S3, Config), Azure Security Center</li>
          <li>Vulnerability Management: Qualys, Clearwater</li>
          <li>IAM: OKTA, RBAC, MFA policies</li>
        </ul>
      </div>

      <div className="skill-section">
        <h3>Programming & Automation</h3>
        <ul>
          <li>React, JavaScript, Python, PowerShell</li>
          <li>Bash scripting, YAML/JSON</li>
          <li>PowerShell automation for user/device audits</li>
        </ul>
      </div>

      <div className="skill-section">
        <h3>Processes & Methodologies</h3>
        <ul>
          <li>Threat detection & analysis</li>
          <li>Risk assessments and compliance (HITRUST)</li>
          <li>Incident response and audit logging</li>
          <li>Agile, Scrum, and Kanban project workflows</li>
        </ul>
      </div>

      <div className="skill-section">
        <h3>Soft Skills</h3>
        <ul>
          <li>Clear communication across technical/non-technical teams</li>
          <li>Security documentation and reporting</li>
          <li>Team collaboration in remote and hybrid environments</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
