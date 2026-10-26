import { Education } from "../types/portfolio";

export const educationList: Education[] = [
  {
    id: "nirma-btech",
    institution: "Institute of Technology, Nirma University",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering (Minor in Cybersecurity)",
    location: "Ahmedabad, Gujarat, India",
    startDate: "Aug 2023",
    endDate: "May 2027",
    grade: "7.94 / 10.0 CGPA",
    details: [
      "Core Coursework: Distributed Systems, Operating Systems, Computer Networks, Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming (Java/C++), Cryptography & Network Security, Cloud Computing.",
      "Recipient: Ministry of External Affairs SPDC Full Scholarship (2023 - 2027).",
      "Competitive Programming: Codeforces Specialist (Rating 1400+), solve algorithmic graph and dynamic programming problems daily."
    ],
    includeInVariants: ["one-page", "full", "academic"]
  },
  {
    id: "svgms-12",
    institution: "Swami Vivekanand Govt. Model School",
    degree: "Senior Secondary Certificate (Class XII)",
    field: "Science Stream (PCM)",
    location: "Dungarpur, Rajasthan, India",
    startDate: "Jul 2022",
    endDate: "May 2023",
    grade: "95.8%",
    details: [
      "Awarded Rajasthan State Scholar Student Laptop Award for academic excellence in district rankings."
    ],
    includeInVariants: ["full", "academic"]
  },
  {
    id: "svgms-10",
    institution: "Swami Vivekanand Govt. Model School",
    degree: "Secondary School Certificate (Class X)",
    field: "General Curriculum",
    location: "Dungarpur, Rajasthan, India",
    startDate: "Jul 2020",
    endDate: "May 2021",
    grade: "96.2%",
    details: [
      "Top rank in secondary district board examinations."
    ],
    includeInVariants: ["full"]
  }
];
