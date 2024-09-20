// utils/questions.ts
import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'DB:B.Q01',
    text: 'Are important systems and data backed up daily to an offsite location with the ability to restore multiple versions back at least 30 days?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST SP 800-53 Rev. 5: CP-1, CP-2, CP-9, CP-10',
      'NIST SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems',
      'CIS Control 11 - Data Recovery',
      'Protecting Data from Ransomware and Other Data Loss Events: National Cybersecurity Center of Excellence (NCCoE), 2020',
      'CRR Supplemental Resource Guide Volume 1, Asset Management Version 1.1',
    ],
  },
  {
    id: 'DB:B.Q02',
    text: 'Are data backups tested annually?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST SP 800-53 Rev. 5: CP-1, CP-2, CP-9, CP-10',
      'NIST SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems',
      'CIS Control 11 - Data Recovery',
      'Protecting Data from Ransomware and Other Data Loss Events: National Cybersecurity Center of Excellence (NCCoE), 2020',
      'CRR Supplemental Resource Guide Volume 1, Asset Management Version 1.1',
    ],
  },
  {
    id: 'BM:B.Q01',
    text: 'Is malicious web content being blocked using DNS filtering via methods like DNS resolvers and DNS firewalls?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST SP 800-81-2, Secure Domain Name System (DNS) Deployment Guide',
      'CIS Control 9 - Email and Web Browser Protections',
      'Selecting a Protective DNS Service: National Security Agency, 2021',
      'DNS protection – GCA Quad 9',
      'NIST SP 800-53 Rev. 5: SC-7, SC-20, SC-21, SC-22, AC-4',
    ],
  },
  {
    id: 'BM:B.Q02',
    text: 'Are web browser security settings managed?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'Steps to Secure Web Browsing, National Security Agency 2018',
      'CIS Control 9 - Email and Web Browser Protections',
      'NIST SP 800-53 Rev. 5: SC-7, SC-20, SC-21, SC-22, AC-4',
      'Securing Your Web Browser, CISA: updated 2015',
    ],
  },
  {
    id: 'PP:B.Q01',
    text: 'Are annual tabletop exercises that include phishing response scenarios conducted?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST SP 800-53 Rev. 5: AT-2, AT-3, CP-4, IR-3',
      'NIST SP 800-84, Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities',
      'NIST SP 800-171 Rev. 2, Protecting Controlled Unclassified Information in Nonfederal Systems and Organizations',
    ],
  },
  {
    id: 'PP:B.Q02',
    text: 'Are users trained to recognize cyber threats like phishing?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST SP 800-177 Revision 1, Trustworthy Email',
      'CISA and MS-ISAC Ransomware Guide',
      'Cyber Readiness Institute’s Ransomware Playbook',
      'NIST SP 800-53 Rev. 5: AT-2, AT-3',
    ],
  },
  {
    id: 'PP:B.Q03',
    text: 'Is email filtered to protect against malicious content?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST SP 800-177 Revision 1, Trustworthy Email',
      'CISA and MS-ISAC Ransomware Guide',
      'Cyber Readiness Institute’s Ransomware Playbook',
    ],
  },
  {
    id: 'NM:B.Q01',
    text: 'Is perimeter network traffic monitored?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST SP 800-137, Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations',
      'CIS Control 13: Network Monitoring and Defense',
      'CIS Control 12, Network Infrastructure Management',
      'NIST SP 800-53 Rev. 5: SI-4',
      'CRR Supplemental Resource Guide Volume 2, Controls Management Version 1.1',
    ],
  },
  {
    id: 'NM:I.Q02',
    text: 'Is internal network traffic monitored?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST SP 800-137, Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations',
      'CIS Control 13: Network Monitoring and Defense',
      'CIS Control 12, Network Infrastructure Management',
      'NIST SP 800-53 Rev. 5: SI-4',
      'CRR Supplemental Resource Guide Volume 2, Controls Management Version 1.1',
    ],
  },
  {
    id: 'NM:I.Q03',
    text: 'Are networks segmented to protect mission-critical assets?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST Special Publication 800-125B, Secure Virtual Network Configuration for Virtual Machine (VM) Protection',
      'CIS Control 13: Network Monitoring and Defense',
      'CIS Control 12, Network Infrastructure Management',
      'NIST SP 800-53 Rev. 5: SI-4',
      'CRR Supplemental Resource Guide Volume 2, Controls Management Version 1.1',
    ],
  },
  {
    id: 'NM:A.Q04',
    text: 'Has the organization established a baseline of network traffic and is it used to identify anomalous activity?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'CIS Control 13: Network Monitoring and Defense',
      'CIS Control 12, Network Infrastructure Management',
      'NIST SP 800-53 Rev. 5: SI-4',
      'CRR Supplemental Resource Guide Volume 2, Controls Management Version 1.1',
      'CRR Supplemental Resource Guide Volume 4, Vulnerability Management Version 1.1',
    ],
  },
  {
    id: 'AM:B.Q01',
    text: 'Have the organization’s hardware and software assets been inventoried and is the inventory managed?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST SP 800-53 Rev. 5: CM-8',
      'NIST SP 800-137, Information Security Continuous Monitoring (ISCM)',
      'CRR Supplemental Resource Guide Volume 1, Asset Management Version 1.1',
      'CIS Control 1: Inventory and Control of Enterprise Assets',
    ],
  },
  {
    id: 'AM:B.Q02',
    text: 'Has the organization removed all unsupported hardware and software from its operating environment?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'CIS Version 7, Implementation Guide for Industrial Control Systems',
      'CIS Control 1: Inventory and Control of Enterprise Assets',
      'CIS Control 2: Inventory and Control of Software Assets',
      'NIST SP 800-53 Rev. 5: SA-22, PL-2, SA-3',
    ],
  },
  {
    id: 'AM:I.Q03',
    text: 'Does the organization detect rogue hardware and alert key stakeholders?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'NIST SP 800-53 Rev. 5: IR-6',
      'NIST SP 800-137, Information Security Continuous Monitoring (ISCM)',
      'CRR Supplemental Resource Guide Volume 1, Asset Management Version 1.1',
      'CIS Control 1: Inventory and Control of Enterprise Assets',
    ],
  },
  {
    id: 'AM:A.Q04',
    text: 'Does the organization quarantine and/or remove all rogue hardware?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'advanced',
    references: [
      'NIST SP 800-53 Rev. 5: CM-8',
      'NIST SP 800-137, Information Security Continuous Monitoring (ISCM)',
      'CRR Supplemental Resource Guide Volume 1, Asset Management Version 1.1',
      'CIS Control 1: Inventory and Control of Enterprise Assets',
    ],
  },
  {
    id: 'AM:B.Q05',
    text: 'Are documented and approved secure configurations used to manage the organization’s hardware and software assets?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST SP 800-70 Rev. 4, National Checklist Program for IT Products',
      'NIST SP 800-53 Rev. 5: CM-2, CM-3, CM-6, CM-8 (2), CM-9',
      'NIST SP 800-128, Guide for Security-Focused Configuration Management',
      'CRR Supplemental Resource Guide Volume 3, Configuration and Change Management Version 1.1',
      'CIS Control 4: Secure Configuration of Enterprise Assets and Software',
    ],
  },
  {
    id: 'AM:I.Q06',
    text: 'Are standard baseline images used to control hardware and software configurations?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'NIST SP 800-70 Rev. 4, National Checklist Program for IT Products',
      'NIST SP 800-53 Rev. 5: CM-2, CM-3, CM-6, CM-8 (2), CM-9',
      'NIST SP 800-128, Guide for Security-Focused Configuration Management',
      'CRR Supplemental Resource Guide Volume 3, Configuration and Change Management Version 1.1',
      'CIS Control 4: Secure Configuration of Enterprise Assets and Software',
    ],
  },
  {
    id: 'AM:A.Q07',
    text: 'Does the organization manage system configurations using security hardening guides?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'advanced',
    references: [
      'NIST SP 800-70 Rev. 4, National Checklist Program for IT Products',
      'NIST SP 800-53 Rev. 5: CM-6',
      'NIST SP 800-128, Guide for Security-Focused Configuration Management',
      'CRR Supplemental Resource Guide Volume 3, Configuration and Change Management Version 1.1',
      'CIS Control 4: Secure Configuration of Enterprise Assets and Software',
    ],
  },
   {
    id: 'PM:B.Q01',
    text: 'Is all public-facing software patched for vulnerabilities within 15 days for vulnerabilities rated as “Critical” and 30 days for vulnerabilities rated as “High”?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'CIS Control 7, Continuous Vulnerability Management',
      'CISA Binding Operational Directive 19-02',
      'CISA Security Tip (ST04-006) Understanding Patches and Software Updates',
      'NIST National Vulnerability Database',
      'NIST SP 800-40 Rev. 3, Guide to Enterprise Patch Management Technologies',
    ],
  },
  {
    id: 'PM:B.Q02',
    text: 'Are all internal-facing software and firewalls patched for vulnerabilities within 30 days for both vulnerabilities rated as “Critical” and for vulnerabilities rated as “High”?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'CIS Control 7, Continuous Vulnerability Management',
      'CISA Binding Operational Directive 19-02',
      'CISA Security Tip (ST04-006) Understanding Patches and Software Updates',
      'NIST National Vulnerability Database',
      'NIST SP 800-40 Rev. 3, Guide to Enterprise Patch Management Technologies',
    ],
  },
  {
    id: 'PM:I.Q03',
    text: 'Are all software and firewalls patched for vulnerabilities within 15 days for vulnerabilities rated as “Critical” and 30 days for vulnerabilities rated as “High”?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'CIS Control 7, Continuous Vulnerability Management',
      'CISA Binding Operational Directive 19-02',
      'CISA Security Tip (ST04-006) Understanding Patches and Software Updates',
      'NIST National Vulnerability Database',
      'NIST SP 800-40 Rev. 3, Guide to Enterprise Patch Management Technologies',
    ],
  },
  {
    id: 'PM:A.Q04',
    text: 'Are all software and firewalls patched for vulnerabilities within 3 days for vulnerabilities rated as “Critical” and 7 days for vulnerabilities rated as “High”?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'advanced',
    references: [
      'CIS Control 7, Continuous Vulnerability Management',
      'CISA Binding Operational Directive 19-02',
      'CISA Security Tip (ST04-006) Understanding Patches and Software Updates',
      'NIST National Vulnerability Database',
      'NIST SP 800-40 Rev. 3, Guide to Enterprise Patch Management Technologies',
    ],
  },
  {
    id: 'UM:B.Q01',
    text: 'Are strong and unique passwords implemented throughout the entire organization?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST Applied Cybersecurity Division, Back to basics: Multi-factor authentication (MFA), 2021',
      'CISA Creating and Managing Strong Passwords',
      'Cyber Readiness Institute’s Cyber Readiness Program',
      'CRR Supplemental Resource Guide Volume 1, Asset Management Version 1.1',
      'Global Cyber Alliance Small Business Toolkit',
    ],
  },
  {
    id: 'UM:I.Q02',
    text: 'Is two-factor authentication implemented for all privileged (e.g. system administrators) and remote users?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'NIST Applied Cybersecurity Division, Back to basics: Multi-factor authentication (MFA), 2021',
      'NIST SP 1800-17, Cybersecurity Practice Guide: Multifactor Authentication for E-Commerce',
      'NSA Transition to Multi Factor Authentication',
      'CRR Supplemental Resource Guide Volume 1, Asset Management Version 1.1',
      'Global Cyber Alliance Small Business Toolkit',
    ],
  },
  {
    id: 'UM:A.Q03',
    text: 'Is two-factor authentication implemented for all users?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'advanced',
    references: [
      'NIST Applied Cybersecurity Division, Back to basics: Multi-factor authentication (MFA), 2021',
      'NIST SP 1800-17, Cybersecurity Practice Guide: Multifactor Authentication for E-Commerce',
      'NSA Transition to Multi Factor Authentication',
      'CRR Supplemental Resource Guide Volume 1, Asset Management Version 1.1',
      'Cyber Readiness Institute’s Ransomware Playbook',
    ],
  },
  {
    id: 'UM:B.Q04',
    text: 'Is the principle of least privilege enforced through policies and procedures?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'CRR Supplemental Resource Guide Volume 1, Asset Management Version 1.1',
      'National Security Administration, Least Privilege, IA Guidance Security Tips, 2017',
      'National Security Administration, Top Ten Cybersecurity Mitigation Strategies, 2018',
      'NIST SP 800-53 Rev. 5: CM-5',
    ],
  },
  {
    id: 'UM:I.Q05',
    text: 'Is least privilege enforced through technical (technology-based) restrictions?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'CRR Supplemental Resource Guide Volume 1, Asset Management Version 1.1',
      'National Security Administration, Least Privilege, IA Guidance Security Tips, 2017',
      'National Security Administration, Top Ten Cybersecurity Mitigation Strategies, 2018',
      'NIST SP 800-53 Rev. 5: CM-5',
    ],
  },
  {
    id: 'UM:I.Q06',
    text: 'Are audit logs maintained for all privileged (e.g. system administrator) accounts?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'NIST SP 800-92, Guide to Computer Security Log Management',
      'NIST SP 800-61 Rev. 2, Computer Security Incident Handling Guide',
      'CIS Controls Version 8',
      'NIST SP 800-115, Technical Guide to Information Security Testing and Assessment',
      'NIST SP 800-53 Rev. 5: AU-2, AU-3, AC-2 (7), AC-6 (9)',
    ],
  },
  {
    id: 'AI:B.Q01',
    text: 'Is there a list of known bad software (a “Blocklist”), and is the software on that list being blocked?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'NIST SP 800-167: Allowlisting',
      'NIST SP 800-53 Rev. 5: CM-7(5)',
      'CIS Controls Version 8',
    ],
  },
  {
    id: 'AI:I.Q02',
    text: 'Has the organization documented a list of known approved software (an “Allowlist”)?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'NIST SP 800-167: Allowlisting',
      'NIST SP 800-53 Rev. 5: CM-7(5)',
      'CIS Controls Version 8',
    ],
  },
  {
    id: 'AI:I.Q03',
    text: 'Is the Allowlist organized by software publisher, and is that list used to allow only approved software to run on organizational systems?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'NIST SP 800-167: Allowlisting',
      'NIST SP 800-53 Rev. 5: CM-7(5)',
      'CIS Controls Version 8',
    ],
  },
  {
    id: 'IR:B.Q01',
    text: 'Has the organization developed an incident response plan?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'CISA and MS-ISAC Ransomware Guide',
      'CRR Supplemental Resource Guide Volume 5, Incident Management Version 1.1',
      'NIST SP 800-61 Rev. 2, Computer Security Incident Handling Guide',
      'NIST SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems',
      'NIST SP 800-53 Rev. 5: IR-8',
    ],
  },
  {
    id: 'IR:I.Q02',
    text: 'Are cybersecurity incidents reported and escalated to the appropriate stakeholders?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'CISA and MS-ISAC Ransomware Guide',
      'CRR Supplemental Resource Guide Volume 5, Incident Management Version 1.1',
      'NIST SP 800-61 Rev. 2, Computer Security Incident Handling Guide',
      'NIST SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems',
      'NIST SP 800-53 Rev. 5: IR-6',
    ],
  },
  {
    id: 'RM:I.Q01',
    text: 'Does the organization perform business impact assessments?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'CRR Supplemental Resource Guide Volume 6, Service Continuity Management Version 1.1',
      'CRR Supplemental Resource Guide Volume 7, Risk Management Version 1.1',
      'NIST SP 800-184, Guide for Cybersecurity Event Recovery',
      'NIST SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems',
      'NIST SP 800-53 Rev. 5: CP-2',
    ],
  },
  {
    id: 'RM:A.Q02',
    text: 'Has the organization defined organizational risk criteria and tolerances?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'advanced',
    references: [
      'NIST SP 800-53 Rev. 5: PM-9, RA-3',
      'NIST SP 800-39 Managing Information Security Risk',
      'CRR Supplemental Resource Guide Volume 7, Risk Management Version 1.1',
      'CRR Supplemental Resource Guide Volume 6, Service Continuity Management Version 1.1',
    ],
  },
  {
    id: 'UM:A.Q07',
    text: 'Is role-based security training conducted?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'advanced',
    references: [
      'NIST SP 800-61 Rev. 2, Computer Security Incident Handling Guide',
      'CIS Controls Version 8',
      'NIST SP 800-115, Technical Guide to Information Security Testing and Assessment',
      'NIST SP 800-53 Rev. 5: AT-3, PM-13',
    ],
  },
  {
    id: 'UM:I.Q08',
    text: 'Is rogue hardware being detected?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'CIS Controls Version 8',
      'NIST SP 800-115, Technical Guide to Information Security Testing and Assessment',
      'NIST SP 800-53 Rev. 5: CM-8',
      'NIST SP 800-61 Rev. 2, Computer Security Incident Handling Guide',
    ],
  },
  {
    id: 'UM:A.Q09',
    text: 'Are users who attempt to install rogue hardware counseled against installing rogue hardware?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'advanced',
    references: [
      'CIS Controls Version 8',
      'NIST SP 800-53 Rev. 5: AT-3',
      'NIST SP 800-61 Rev. 2, Computer Security Incident Handling Guide',
    ],
  },
  {
    id: 'AI:A.Q04',
    text: 'Has the organization documented a list of known approved software (an Allowlist) organized by software publisher and version number, and is that list used to allow only approved software to run on organizational systems?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'advanced',
    references: [
      'NIST SP 800-167: Allowlisting',
      'NIST SP 800-53 Rev. 5: CM-7(5)',
      'CIS Controls Version 8',
    ],
  },
  {
    id: 'IR:I.Q03',
    text: 'Have disaster recovery procedures been developed?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'CISA and MS-ISAC Ransomware Guide',
      'CRR Supplemental Resource Guide Volume 5, Incident Management Version 1.1',
      'NIST SP 800-61 Rev. 2, Computer Security Incident Handling Guide',
      'NIST SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems',
      'NIST SP 800-53 Rev. 5: IR-1, CP-1, CP-2',
    ],
  },
  {
    id: 'IR:B.Q04',
    text: 'Does the organization conduct annual incident response tabletop exercises that include ransomware response scenarios?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
    references: [
      'CRR Supplemental Resource Guide Volume 5, Incident Management Version 1.1',
      'NIST SP 800-53 Rev. 5: CP-4, IR-3',
    ],
  },
  {
    id: 'IR:I.Q05',
    text: 'Are incident response tabletop exercises performed at least twice a year?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'CRR Supplemental Resource Guide Volume 5, Incident Management Version 1.1',
      'NIST SP 800-53 Rev. 5: CP-4, IR-3',
    ],
  },
  {
    id: 'IR:I.Q06',
    text: 'Is a physical incident response exercise performed at least once a year?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'CRR Supplemental Resource Guide Volume 5, Incident Management Version 1.1',
      'NIST SP 800-53 Rev. 5: CP-4, IR-3, IR-4',
    ],
  },
  {
    id: 'IR:A.Q07',
    text: 'Are physical incident response exercises performed at least twice a year?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'advanced',
    references: [
      'CRR Supplemental Resource Guide Volume 5, Incident Management Version 1.1',
      'NIST SP 800-53 Rev. 5: CP-4, IR-3, IR-4',
    ],
  },
  {
    id: 'IR:I.Q08',
    text: 'Has the organization implemented redundant systems where appropriate for the purpose of resiliency?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'intermediate',
    references: [
      'NIST SP 800-160, Volume 2, Developing Cyber Resilient Systems',
      'NIST SP 800-53 Rev. 5: CP-2, CP-7, CP-6, CP-8, CP-9, CP-10, MA-6',
    ],
  },
  {
    id: 'IR:A.Q09',
    text: 'Have redundant and resilient systems and data been implemented throughout the organization?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'advanced',
    references: [
      'NIST SP 800-160, Volume 2, Developing Cyber Resilient Systems',
      'NIST SP 800-53 Rev. 5: CP-7, CP-8, CP-11, CP-13, PL-8, SA-14, SC-6, SI-17',
    ],
  },
  {
    id: 'RM:A.Q03',
    text: 'Does the organization consider risk inheritance and exposure between its various interconnected systems?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'advanced',
    references: [
      'NIST SP 800-37 Rev. 2, Risk Management Framework for Information Systems and Organizations',
      'CRR Supplemental Resource Guide Volume 7, Risk Management Version 1.1',
      'CISA Security Tip (ST18-007): Questions Every CEO Should Ask About Cyber Risks',
      'NIST SP 800-53 Rev. 5: PM-9, CA-3',
    ],
  },
  {
    id: 'RM:A.Q04',
    text: 'Does the organization apply quantitative risk analysis to remediation activities?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'advanced',
    references: [
      'CRR Supplemental Resource Guide Volume 7, Risk Management Version 1.1',
      'CISA Security Tip (ST18-007): Questions Every CEO Should Ask About Cyber Risks',
      'NIST SP 800-53 Rev. 5: PM-9',
    ],
  },
];

export const categories = [
  { id: 'DB', name: 'Robust Data Backup' },
  { id: 'BM', name: 'Web Browser Management and DNS Filtering' },
  { id: 'PP', name: 'Phishing Prevention and Awareness' },
  { id: 'NM', name: 'Network Perimeter Monitoring' },
  { id: 'AM', name: 'Asset Management' },
  { id: 'PM', name: 'Patch and Update Management' },
  { id: 'UM', name: 'User and Access Management' },
  { id: 'AI', name: 'Application Integrity and Allowlist' },
  { id: 'IR', name: 'Incident Response' },
  { id: 'RM', name: 'Risk Management' },
];
