import React from 'react'
import gcu from '../Images/gcu.jpg'
import gcu2 from '../Images/GRAD.jpeg'
import gcu3 from '../Images/D.jpeg'
import gcu4 from '../Images/Z.jpeg'

const Banner = () => {
  return (
    <div className="Banner">
         <div className='pic'>
            <img src={gcu2} alt="" />
            <img src={gcu} alt="" />
        </div>
        <div className='Resume'>
            <h2>About Me</h2>
            <hr />
            <p>
                I'm a cybersecurity analyst with a strong background in IT support, cloud security, and vulnerability management. I currently work at Virtix Health, where I help protect systems, data, and users across multiple environments. My focus is on proactive threat detection, compliance, and automation — using tools like SentinelOne, CrowdStrike, and AWS to reduce risk and improve response times.
            </p>
            <br />
            <p>
                I’ve also completed full-stack development training at West-MEC, which taught me to approach problems with a developer’s mindset and a strong understanding of how applications and infrastructure work together. I enjoy working across security operations, incident response, and cloud platforms like AWS and Azure.
            </p>
            <br />
            <h3>What I Work With</h3>
            <hr className='In' />
            <ul>
                <li>Threat Detection & Response (SIEM, EDR, Exabeam)</li>
                <li>Cloud Security (AWS IAM, Azure, MFA, RBAC)</li>
                <li>Vulnerability Management (Qualys, Nessus)</li>
                <li>Endpoint Security (SentinelOne, CrowdStrike, CylanceProtect)</li>
                <li>Identity & Access Management (OKTA, conditional access, audit logs)</li>
                <li>Email Security (Mimecast, Proofpoint, Inky)</li>
            </ul>
            <br />
            <h3>How I Think</h3>
            <hr className='In' />
            <p>
                I'm always looking to improve cybersecurity posture through collaboration, automation, and smart prioritization. I believe in least privilege, proactive monitoring, and the value of solid documentation and repeatable processes.
            </p>
            <br />
            <h3>Currently</h3>
            <hr className='In'/>
            <ul>
                <li>Helping support HITRUST compliance and monthly audits at Virtix Health</li>
                <li>Improving our security tooling and visibility in Exabeam and AWS</li>
                <li>Working toward Security+ certification and planning to earn more</li>
                <li>Building personal projects with Python, React, and security-focused tools</li>
            </ul>
            <br />
            <p>
                Based in Arizona, I'm passionate about building secure systems and learning how to stay ahead of evolving threats. Whether it’s scripting out a detection rule, solving a support ticket, or planning future improvements — I’m all in.
            </p>
        </div>
         <div className='pic'>
            <img src={gcu3} alt="" />
            <img src={gcu4} alt="" />
        </div>
    </div>
  )
}

export default Banner