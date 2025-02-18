import type { ProjectItemProps } from "../types/cv";

export const projects: ProjectItemProps[] = [
  {
    title: "AWS Platform Team",
    startMonth: "Aug 2024",
    techStack: ["Amazon Web Services", "IaC", "CDK", "TypeScript"],
    description: "As part of the AWS Platform Team at Fremtind AS, I manage and develop AWS services to support the organization's cloud infrastructure. My work involves leveraging Infrastructure as Code (IaC) with AWS CDK and TypeScript to streamline deployments and ensure scalable, efficient solutions across the organization.",
    organization: "Fremtind AS"
  },
  {
    title: "Transport Documentation (TDoc)",
    startMonth: "Jan 2024",
    endMonth: "Mar 2024",
    techStack: ["JavaScript", "React", "TailwindCSS", "C#", ".NET", "Azure DevOps"],
    description: "Tasked with salvaging and launching TDoc, a timekeeping system for commercial truck drivers compliant with Norwegian Road Administration requirements. The project had faced significant challenges, including being outsourced to an Indian consultancy that went bankrupt in late 2023. As a frontend developer, I improved and corrected two React codebases, ensuring usability and functionality. Additionally, I collaborated on backend development in C#, refining its RESTful JSON-based client-server communication.",
    organization: "Cargotron AS"
  },
  {
    title: "Internal KPI-Dashboards",
    startMonth: "May 2023",
    endMonth: "Aug 2023",
    techStack: ["TypeScript", "React", "Next.js", "TailwindCSS", "Node", "AWS Lambda", "AWS CloudFormation", "AWS SNS/SQS", "AWS DynamoDB"],
    description: "I developed the project end-to-end, leveraging Architect with AWS Lambda, SNS, SQS, and DynamoDB as the cloud solution to align with Fleks' existing stack. With design input from a designer, I handled all aspects of the cloud, backend, and frontend implementation. Key tasks included setting up cloud infrastructure, developing backend services, and creating frontend solutions in React.",
    organization: "Fleks AS"
  },
  {
    title: "Charging Chip Integration",
    startMonth: "Jan 2023",
    endMonth: "May 2023",
    techStack: ["JavaScript", "TypeScript", "Node.js", "Ember.js"],
    description: "Developed functionality to manage charger chip integration in the car delivery flow for Fleks. This involved enhancing the operational app used by staff to deliver and receive cars by adding a new step to the existing workflow. I created a script to generate and print QR codes, which were attached to the chips.",
    organization: "Fleks AS"
  },
  {
    title: "New Store Page",
    startMonth: "Oct 2022",
    endMonth: "Dec 2022",
    techStack: ["TypeScript", "React", "Next.js", "TailwindCSS", "Design Systems", "Figma", "GitHub Actions"],
    description: "Created a new online store under the Fleks domain to sell chargers and car accessories. I was responsible for designing and implementing a user-friendly shop with a responsive grid view and detailed product pages. Using Next.js, TypeScript, and Tailwind CSS, I built a modern interface that made navigating the product range intuitive and seamless.",
    organization: "Fleks AS"
  },
  {
    title: "Logged-in Pages Enhancement",
    startMonth: "Jan 2022",
    endMonth: "Jul 2022",
    techStack: ["TypeScript", "React", "Design Systems", "Kotlin", "Terraform", "Argo CD", "Kubernetes", "Splunk Cloud"],
    description: "Enhanced logged-in pages to improve user experience and empower customers to self-serve, reducing the need for customer support. As a Fullstack consultant with Capra Consulting, I collaborated with the service team at Gjensidige to deliver these improvements.",
    organization: "Gjensidige ASA"
  },
  {
    title: "Factory Tooling Modernization",
    startMonth: "May 2021",
    endMonth: "Jan 2022",
    techStack: ["TypeScript", "React", "TailwindCSS", "Bit.Dev", "AWS"],
    description: "Modernized the tech stack through a lift-and-shift approach to enable future upgrades. We developed a comprehensive portal and around 15 apps to support real-time production and post-analysis of fertilizer manufacturing.",
    organization: "Yara ASA"
  },
  {
    title: "EV Charging Solution",
    startMonth: "Aug 2020",
    endMonth: "Nov 2020",
    techStack: ["TypeScript", "Express", "REST", "PostgreSQL", "Sequelize", "Jenkins"],
    description: "Implemented an EV charging solution for APCOA Norway, integrating charging controls into the APCOA Flow app. Using TypeScript, Express, REST, PostgreSQL, Sequelize, and Jenkins, I streamlined parking and charging processes to deliver a seamless and unified user experience.",
    organization: "APCOA Norway AS"
  },
  {
    title: "Homepage and CV Portal",
    startMonth: "Apr 2018",
    endMonth: "Dec 2019",
    techStack: ["React", "TypeScript", "Firebase"],
    description: "Responsible for developing and implementing the website, including creating Minimum Viable Products (MVPs) and contributing to various frontend components. Additionally, I played a key role in building a CV portal.",
    organization: "Skillsets AS"
  }
];
