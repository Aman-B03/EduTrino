import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const NetworkSecurity = () => {

    const questionArray = [
        {
            "question": "Which of the following is the primary function of a firewall in network security?",
            "options": [
              "Encrypting email communications",
              "Scanning for malware and viruses",
              "Filtering and controlling incoming and outgoing network traffic",
              "Creating secure virtual private networks"
            ],
            "correct": "Filtering and controlling incoming and outgoing network traffic",
            "explain": "A firewall's primary function is to filter and control incoming and outgoing network traffic based on predetermined security rules to protect the network from unauthorized access and threats."
          },
          {
            "question": "Which network security measure is specifically designed to protect email communications from being intercepted or tampered with?",
            "options": [
              "Anti-virus software",
              "Firewall",
              "Virtual Private Network (VPN)",
              "Email encryption"
            ],
            "correct": "Email encryption",
            "explain": "Email encryption is used to protect email communications from being intercepted or tampered with, ensuring that only the intended recipients can read the contents of the email."
          },
          {
            "question": "Which of the following is NOT a typical component of Network Access Control (NAC)?",
            "options": [
              "Authentication",
              "Authorization",
              "Accountability",
              "Encryption"
            ],
            "correct": "Encryption",
            "explain": "Network Access Control (NAC) typically involves authentication, authorization, and accountability to manage network access, but encryption is not a core component of NAC itself."
          },
          {
            "question": "Which security threat is characterized by an attacker gaining unauthorized access to a system by masquerading as a legitimate user through deceptive emails or websites?",
            "options": [
              "Virus",
              "Trojan horse",
              "Phishing",
              "Computer worm"
            ],
            "correct": "Phishing",
            "explain": "Phishing involves attackers deceiving users through fraudulent emails or websites to obtain sensitive information by masquerading as a legitimate entity."
          },
          {
            "question": "What is the main difference between a Trojan horse and a computer worm?",
            "options": [
              "A Trojan horse spreads itself across a network, while a worm does not",
              "A Trojan horse disguises itself as a legitimate program, while a worm does not",
              "A worm requires user interaction to execute, while a Trojan horse does not",
              "A worm is typically a form of spyware, while a Trojan horse is a type of virus"
            ],
            "correct": "A Trojan horse disguises itself as a legitimate program, while a worm does not",
            "explain": "A Trojan horse is a malicious program that disguises itself as a legitimate software, while a computer worm is a standalone malware that spreads itself across a network without disguising as another program."
          },
          {
            "question": "In the context of network security, what does the term 'accountability' refer to?",
            "options": [
              "Ensuring that only authorized users can access the network",
              "Tracking and logging user actions to detect and investigate suspicious activity",
              "Providing secure authentication mechanisms for users",
              "Verifying that data is encrypted before transmission"
            ],
            "correct": "Tracking and logging user actions to detect and investigate suspicious activity",
            "explain": "Accountability in network security involves tracking and logging user actions to detect, investigate, and respond to any suspicious or unauthorized activities within the network."
          },
          {
            "question": "What is a major disadvantage of using a Virtual Private Network (VPN) for network security?",
            "options": [
              "It decreases the overall network speed",
              "It is prone to physical security breaches",
              "It cannot handle encryption of data",
              "It requires additional hardware for implementation"
            ],
            "correct": "It decreases the overall network speed",
            "explain": "One major disadvantage of using a VPN is that it can decrease the overall network speed due to the overhead of encrypting and routing traffic through the VPN server."
          },
          {
            "question": "Which type of malware is known for replicating itself and spreading to other systems without user intervention?",
            "options": [
              "Virus",
              "Trojan horse",
              "Computer worm",
              "Spyware"
            ],
            "correct": "Computer worm",
            "explain": "A computer worm is a type of malware that replicates itself and spreads to other systems across a network without requiring user intervention."
          },
          {
            "question": "Which of the following strategies is most effective in preventing phishing attacks?",
            "options": [
              "Regularly updating antivirus software",
              "Implementing multi-factor authentication",
              "Using strong encryption for email communication",
              "Educating users to recognize phishing attempts"
            ],
            "correct": "Educating users to recognize phishing attempts",
            "explain": "Educating users about how to recognize phishing attempts and avoid clicking on suspicious links is one of the most effective strategies for preventing phishing attacks."
          }
    ];
    const subjective = [
        {
            "no": "1",
            "question": "What are the key components of network access control and how do they contribute to network security?",
            "answer": "<b>1. Authentication:</b><br>Verifies the identity of users or devices attempting to access the network. Ensures only legitimate users gain access.<br><b>2. Authorization:</b><br>Determines the permissions and access levels granted to authenticated users or devices. Controls what resources a user can access and what actions they can perform.<br><b>3. Accountability:</b><br>Tracks and logs user activities to ensure they follow security policies. Helps in auditing and identifying any security breaches or unauthorized actions.<br><b>4. Auditing:</b><br>Regularly reviews and checks the network activity logs to detect and respond to unusual or unauthorized activities.<br><b>5. Access Control Lists (ACLs):</b><br>Lists of rules that specify which users or systems can access certain network resources and under what conditions."
          },
          {
            "no": "2",
            "question": "Explain how a Virtual Private Network (VPN) enhances network security.",
            "answer": "<b>A Virtual Private Network (VPN) enhances network security by:</b><br><br><b>1. Encryption:</b><br>Encrypts data transmitted over the network, making it unreadable to unauthorized parties.<br><b>2. Secure Connections:</b><br>Establishes a secure, encrypted tunnel between the user’s device and the destination server, protecting data from interception.<br><b>3. Anonymity:</b><br>Masks the user’s IP address, making their online activities harder to trace and enhancing privacy.<br><b>4. Remote Access:</b><br>Allows users to securely access network resources from remote locations as if they were on the local network.<br><b>5. Bypassing Geo-Restrictions:</b><br>Enables users to access resources and services that might be restricted in their location."
          },
          {
            "no": "3",
            "question": "Compare and contrast firewall protection with anti-virus and anti-malware software.",
            "answer": "<br><table border='1'><tr><th style='padding: 2px;'>Aspect</th><th style='padding: 2px;'>Firewall Protection</th><th style='padding: 2px;'>Anti-Virus and Anti-Malware Software</th></tr><tr><td style='padding: 2px;'>Function</td><td style='padding: 2px;'>Monitors and controls incoming and outgoing network traffic based on security rules.</td><td style='padding: 2px;'>Detects, prevents, and removes malicious software such as viruses, trojans, and worms.</td></tr><tr><td style='padding: 2px;'>Scope</td><td style='padding: 2px;'>Primarily prevents unauthorized access to or from a network.</td><td style='padding: 2px;'>Focuses on scanning and cleaning individual devices rather than network traffic.</td></tr><tr><td style='padding: 2px;'>Placement</td><td style='padding: 2px;'>Usually placed at the network perimeter or between networks.</td><td style='padding: 2px;'>Installed on individual devices within the network.</td></tr><tr><td style='padding: 2px;'>Types</td><td style='padding: 2px;'>Includes hardware firewalls and software firewalls.</td><td style='padding: 2px;'>Includes signature-based, heuristic, and behavioral detection methods.</td></tr><tr><td style='padding: 2px;'>Configuration</td><td style='padding: 2px;'>Requires setting up rules and policies to control traffic.</td><td style='padding: 2px;'>Regular updates are needed to recognize new threats.</td></tr></table>"
        },
          {
            "no": "4",
            "question": "Describe common network security threats and provide an example of each.",
            "answer": "<b>1. Virus:</b><br>Malicious software that attaches itself to legitimate programs and spreads to other systems.<br>Example: A computer virus that corrupts files on a user's hard drive.<br><b>2. Trojan Horse:</b><br>Malware disguised as legitimate software that can gain unauthorized access to a system.<br>Example: A seemingly harmless email attachment that installs malware when opened.<br><b>3. Computer Worm:</b><br>Self-replicating malware that spreads across networks without user interaction.<br>Example: A worm that exploits a vulnerability to spread and infect other computers.<br><b>4. Phishing Attacks:</b><br>Attempts to deceive users into providing sensitive information by pretending to be a trustworthy entity.<br>Example: An email that appears to be from a bank asking for login credentials.<br><b>5. Ransomware:</b><br>Malware that encrypts the victim's files and demands a ransom for decryption.<br>Example: A ransomware attack that locks important files and demands payment to unlock them."
          },
          {
            "no": "5",
            "question": "What are the advantages and disadvantages of using firewall protection in network security?",
            "answer": "<b>Advantages:</b><br><br><b>1. Protection:</b><br>Provides a barrier between the network and potential threats from the internet.<br><b>2. Control:</b><br>Allows administrators to set rules for network traffic, blocking unauthorized access.<br><b>3. Monitoring:</b><br>Tracks and logs network activity, helping to detect and respond to suspicious behavior.<br><b>4. Customization:</b><br>Can be customized to fit specific security needs and policies.<br><b>5. Defense in Depth:</b><br>Provides an additional layer of security as part of a multi-layered security strategy.<br><br><b>Disadvantages:</b><br><br><b>1. Complexity:</b><br>Configuring and managing firewalls can be complex and require expertise.<br><b>2. Limited Protection:</b><br>May not protect against all types of attacks, especially those originating from within the network.<br><b>3. Performance Impact:</b><br>Can affect network performance due to the processing required to inspect and filter traffic.<br><b>4. False Positives:</b><br>May block legitimate traffic due to overly strict rules or misconfigurations.<br><b>5. Maintenance:</b><br>Requires regular updates and maintenance to stay effective against evolving threats."
          }
    ];

  return (
    <div>
      <QuestDisplay title = "CN - Network Security" question = {questionArray} subjective = {subjective} sub = "CN" /> 
    </div>
  )
}

export default NetworkSecurity
