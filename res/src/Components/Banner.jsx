import React from 'react'

const Banner = () => {
  return (
    <div className="Banner">
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
            <img src="https://media.licdn.com/dms/image/v2/D5603AQG-U5I8j14S2Q/profile-displayphoto-shrink_800_800/B56ZPbOZeEG4Ac-/0/1734549805455?e=1756339200&v=beta&t=n4KYbijvoZJdEsjAWPgQ1on_EWDv6-hhV5gVxDaDghU" alt="" />
        </div>
        
    </div>
  )
}

export default Banner