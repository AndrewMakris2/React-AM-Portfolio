import React from 'react';
import { FaLock, FaCode, FaProjectDiagram, FaComments } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="Skills">
      <h2>🛠️ Technical & Soft Skills</h2>
      <div className="skill-cards-container">
        <div className="skill-card">
          <div className="icon"><FaLock /></div>
          <div>
            <h3>Cybersecurity Tools & Platforms</h3>
            <ul>
              <li>SIEM: Exabeam, SentinelOne, Taegis</li>
              <li>EDR: CrowdStrike Falcon, CylanceProtect, Sophos, SentinalOne</li>
              <li>Email Security: Inky, Mimecast, Proofpoint</li>
              <li>Cloud: AWS (IAM, S3, Config), Azure Security Center</li>
              <li>Vulnerability Management: Qualys, Clearwater, Crowdstrike</li>
              <li>IAM: OKTA, RBAC, MFA policies</li>
            </ul>
          </div>
        </div>

        <div className="skill-card">
          <div className="icon"><FaCode /></div>
          <div>
            <h3>Programming & Automation</h3>
            <ul>
              <li>React, JavaScript, Python, PowerShell</li>
              <li>Bash scripting, JSON</li>
              <li>PowerShell automation for user/device audits</li>
            </ul>
          </div>
        </div>

        <div className="skill-card">
          <div className="icon"><FaProjectDiagram /></div>
          <div>
            <h3>Processes & Methodologies</h3>
            <ul>
              <li>Threat detection & analysis</li>
              <li>Risk assessments and compliance (HITRUST)</li>
              <li>Incident response and audit logging</li>
              <li>Agile, Scrum, and Kanban project workflows</li>
            </ul>
          </div>
        </div>

        <div className="skill-card">
          <div className="icon"><FaComments /></div>
          <div>
            <h3>Soft Skills</h3>
            <ul>
              <li>Clear communication across technical/non-technical teams</li>
              <li>Security documentation and reporting</li>
              <li>Team collaboration in remote and hybrid environments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;