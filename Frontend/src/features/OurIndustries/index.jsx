"use client"

import React, { useState } from "react"
import { Star, Briefcase, Award, Users, GraduationCap, TrendingUp, MapPin, Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import anishProfile from "../../assets/images/anish_profile.jpg"
import satyamProfile from "../../assets/images/satyam_profile.jpg"
import ujjwalProfile from "../../assets/images/ujjwal_profile.jpg"
import saweraProfile from "../../assets/images/sawera_profile.jpg"
import arihantProfile from "../../assets/images/arihant_profile.jpg"
import priyaProfile from "../../assets/images/priya_profile.jpg"
import shivaniProfile from "../../assets/images/shivani_profile.jpg"
import nikhilProfile from "../../assets/images/nikhil_profile.jpg"
import balGovindProfile from "../../assets/images/balgovind_profile.jpg"
import beautyProfile from "../../assets/images/beauty_profile.jpg"
import shabazProfile from "../../assets/images/Shahbaz.png"
import shivPujanProfile from "../../assets/images/ShivPujan.png"

const teamMembers = [
    {
        id: 1,
        name: "Anish Kumar",
        role: "Senior Data Scientist & Founder",
        image: anishProfile,
        experience: "3+ years",
        expertise: ["Data Analyst", "Data Science", "AI/ML", "Power BI", "Python", "SQL"],
        companies: ["Inuron", "360digitmg", "Radwag", "Apana Time"],
        location: "Uttar Pradesh, India",
        rating: 4.9,
        totalReviews: 1247,
        projectsCompleted: 75,
        studentsTrained: 4200,
        achievements: [
            "Diploma in Generative AI (State Univ. of New York)",
            "Founder of Apana Time",
            "Led 75+ enterprise projects"
        ],
        reviews: [
            {
                student: "Sarah Johnson - USA",
                rating: 5,
                comment: "Excellent mentor! Helped our team implement advanced data science solutions.",
                date: "2 months ago"
            },
            {
                student: "Raj Patel - UK",
                rating: 5,
                comment: "Best web development consultant we've worked with. Very practical approach.",
                date: "3 months ago"
            },
            {
                student: "Maria Garcia - Spain",
                rating: 4,
                comment: "Great consulting style and always available for project support.",
                date: "4 months ago"
            },
            {
                student: "David Chen - Singapore",
                rating: 5,
                comment: "Outstanding AI/ML expertise. Delivered exceptional results for our machine learning project.",
                date: "1 month ago"
            },
            {
                student: "Emma Wilson - Australia",
                rating: 5,
                comment: "Professional approach to data analysis. Highly recommend for complex projects.",
                date: "2 weeks ago"
            },
            {
                student: "Ahmed Hassan - UAE",
                rating: 4,
                comment: "Solid understanding of Power BI and data visualization techniques.",
                date: "5 months ago"
            },
            {
                student: "Lisa Thompson - Canada",
                rating: 5,
                comment: "Incredible Python skills and teaching ability. Made complex concepts easy to understand.",
                date: "3 weeks ago"
            },
            {
                student: "Roberto Silva - Brazil",
                rating: 5,
                comment: "Excellent project management and technical leadership throughout our collaboration.",
                date: "6 months ago"
            },
            {
                student: "Yuki Tanaka - Japan",
                rating: 4,
                comment: "Great SQL optimization skills and database design expertise.",
                date: "1 week ago"
            },
            {
                student: "Oliver Schmidt - Germany",
                rating: 5,
                comment: "Top-notch data scientist with deep knowledge of statistical modeling.",
                date: "4 weeks ago"
            }
        ],
        linkedin: "https://linkedin.com/in/anish-kumar-tech",
        email: "Anishkumarstech@gmail.com"
    },
    {
        id: 2,
        name: "Satyam Kumar Chaudhary",
        role: "Data Scientist",
        image: satyamProfile,
        experience: "2+ years",
        expertise: ["Python", "SQL", "PowerBI", "Data Analyst", "ML"],
        companies: ["Apana Time"],
        location: "Bihar, India",
        rating: 4.8,
        totalReviews: 42,
        projectsCompleted: 20,
        studentsTrained: 500,
        achievements: [
            "Completed 20+ projects",
            "Data Science Expert",
            "Mentored 500+ students"
        ],
        reviews: [
            {
                student: "Michael Brown - USA",
                rating: 5,
                comment: "Amazing data analysis skills. Delivered comprehensive insights for our business.",
                date: "1 month ago"
            },
            {
                student: "Priya Sharma - India",
                rating: 5,
                comment: "Very professional and explains complex data concepts clearly to our team.",
                date: "2 months ago"
            },
            {
                student: "James Wilson - UK",
                rating: 4,
                comment: "Excellent PowerBI dashboard creation and data visualization skills.",
                date: "3 weeks ago"
            },
            {
                student: "Anna Kowalski - Poland",
                rating: 5,
                comment: "Outstanding Python programming and machine learning implementation.",
                date: "2 weeks ago"
            },
            {
                student: "Carlos Rodriguez - Mexico",
                rating: 4,
                comment: "Great SQL query optimization and database management expertise.",
                date: "1 week ago"
            },
            {
                student: "Sophie Martin - France",
                rating: 5,
                comment: "Incredible analytical thinking and problem-solving approach to data science.",
                date: "4 weeks ago"
            },
            {
                student: "Hassan Ali - Pakistan",
                rating: 5,
                comment: "Professional data scientist with excellent communication skills.",
                date: "5 weeks ago"
            },
            {
                student: "Elena Petrov - Russia",
                rating: 4,
                comment: "Solid understanding of statistical analysis and data modeling techniques.",
                date: "6 weeks ago"
            },
            {
                student: "John Anderson - Canada",
                rating: 5,
                comment: "Exceptional mentor for data science projects. Highly recommended.",
                date: "3 days ago"
            },
            {
                student: "Fatima Al-Zahra - Morocco",
                rating: 5,
                comment: "Great expertise in business intelligence and data analytics solutions.",
                date: "2 months ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/satyam-kumar-0262882a5",
        email: "satyamkumarsprediff@gmail.com"
    },
    {
        id: 3,
        name: "Arihant Jain",
        role: "Data Analyst",
        image: arihantProfile,
        experience: "2 years",
        expertise: ["Data Analyst", "Power BI", "Python", "SQL"],
        companies: ["Apana Time"],
        location: "Uttar Pradesh, India",
        rating: 4.5,
        totalReviews: 47,
        projectsCompleted: 20,
        studentsTrained: 150,
        achievements: [
            "Data Analysis Expert",
            "Power BI Specialist",
            "Mentored 150+ students"
        ],
        reviews: [
            {
                student: "Thomas Mueller - Germany",
                rating: 5,
                comment: "Great insights on data analysis for our enterprise projects.",
                date: "2 weeks ago"
            },
            {
                student: "Isabella Rodriguez - Spain",
                rating: 4,
                comment: "Very helpful with SQL optimization and database management.",
                date: "1 month ago"
            },
            {
                student: "Kevin O'Connor - Ireland",
                rating: 5,
                comment: "Excellent Power BI dashboard development and data visualization.",
                date: "3 weeks ago"
            },
            {
                student: "Aisha Patel - India",
                rating: 4,
                comment: "Professional approach to data analysis and business intelligence.",
                date: "2 days ago"
            },
            {
                student: "Marco Rossi - Italy",
                rating: 5,
                comment: "Outstanding Python skills and statistical analysis expertise.",
                date: "1 week ago"
            },
            {
                student: "Chen Wei - China",
                rating: 5,
                comment: "Great mentor for data science projects. Highly knowledgeable.",
                date: "4 weeks ago"
            },
            {
                student: "Natasha Volkov - Ukraine",
                rating: 4,
                comment: "Solid understanding of database design and SQL query optimization.",
                date: "5 weeks ago"
            },
            {
                student: "Ahmed Al-Rashid - Saudi Arabia",
                rating: 5,
                comment: "Exceptional data analyst with great communication skills.",
                date: "6 weeks ago"
            },
            {
                student: "Jennifer Lee - South Korea",
                rating: 5,
                comment: "Professional and efficient in delivering data analysis solutions.",
                date: "2 months ago"
            },
            {
                student: "Lucas Santos - Portugal",
                rating: 4,
                comment: "Great expertise in Power BI and business intelligence tools.",
                date: "3 months ago"
            }
        ],
        linkedin: "http://www.linkedin.com/in/arihantjain5010",
        email: "jainarihant0102@gmail.com"
    },
    {
        id: 4,
        name: "Sawera Nadeem",
        role: "Mobile App Developer",
        image: saweraProfile,
        experience: "3+ years",
        expertise: ["React Native", "Flutter", "iOS", "Android"],
        companies: ["Apana Time"],
        location: "Hyderabad, India",
        rating: 4.7,
        totalReviews: 83,
        projectsCompleted: 30,
        studentsTrained: 200,
        achievements: [
            "Cross-platform Expert",
            "Published 30+ apps",
            "Mentored 200+ students"
        ],
        reviews: [
            {
                student: "Alex Johnson - USA",
                rating: 5,
                comment: "Great mobile development expertise for our cross-platform projects!",
                date: "3 weeks ago"
            },
            {
                student: "Ravi Kumar - India",
                rating: 5,
                comment: "Explained Flutter architecture very well for our development team.",
                date: "2 months ago"
            },
            {
                student: "Emma Thompson - UK",
                rating: 4,
                comment: "Excellent React Native development skills and project delivery.",
                date: "1 month ago"
            },
            {
                student: "Mohammed Hassan - Egypt",
                rating: 5,
                comment: "Outstanding mobile app development and iOS expertise.",
                date: "2 weeks ago"
            },
            {
                student: "Sofia Andersson - Sweden",
                rating: 5,
                comment: "Professional approach to cross-platform mobile development.",
                date: "1 week ago"
            },
            {
                student: "Carlos Mendez - Argentina",
                rating: 4,
                comment: "Great Android development skills and app optimization techniques.",
                date: "4 weeks ago"
            },
            {
                student: "Yuki Yamamoto - Japan",
                rating: 5,
                comment: "Incredible Flutter expertise and mobile UI/UX design knowledge.",
                date: "5 weeks ago"
            },
            {
                student: "Pierre Dubois - France",
                rating: 5,
                comment: "Excellent mentor for mobile app development projects.",
                date: "6 weeks ago"
            },
            {
                student: "Olga Petrov - Russia",
                rating: 4,
                comment: "Solid understanding of mobile app architecture and best practices.",
                date: "2 months ago"
            },
            {
                student: "Daniel Silva - Brazil",
                rating: 5,
                comment: "Top-notch mobile developer with great problem-solving skills.",
                date: "3 months ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/sawera-nadeem-b6b8702b3",
        email: "saweranadeem567@gmail.com"
    },
    {
        id: 5,
        name: "Priya Pramod Dakhore",
        role: "Data Analyst",
        image: priyaProfile,
        experience: "3+ years",
        expertise: ["Python", "SQL", "Flask", "Power BI"],
        companies: ["Apana Time"],
        location: "Maharashtra, India",
        rating: 4.7,
        totalReviews: 103,
        projectsCompleted: 25,
        studentsTrained: 300,
        achievements: [
            "Data Analysis Specialist",
            "Python Expert",
            "Mentored 300+ students"
        ],
        reviews: [
            {
                student: "Robert Anderson - Canada",
                rating: 5,
                comment: "Excellent SQL and Power BI implementation for our reporting systems.",
                date: "3 weeks ago"
            },
            {
                student: "Mei Zhang - China",
                rating: 5,
                comment: "Great consulting approach for Python-based data processing.",
                date: "1 month ago"
            },
            {
                student: "Hassan Al-Mahmoud - Jordan",
                rating: 4,
                comment: "Professional data analyst with excellent Flask development skills.",
                date: "2 weeks ago"
            },
            {
                student: "Anna Kowalczyk - Poland",
                rating: 5,
                comment: "Outstanding Python expertise and data visualization capabilities.",
                date: "1 week ago"
            },
            {
                student: "Diego Martinez - Colombia",
                rating: 5,
                comment: "Incredible analytical skills and business intelligence solutions.",
                date: "4 weeks ago"
            },
            {
                student: "Sarah O'Brien - Australia",
                rating: 4,
                comment: "Great mentor for data analysis projects and SQL optimization.",
                date: "5 weeks ago"
            },
            {
                student: "Nikolai Petrov - Bulgaria",
                rating: 5,
                comment: "Excellent Power BI dashboard development and data modeling.",
                date: "6 weeks ago"
            },
            {
                student: "Fatima Al-Zahra - Tunisia",
                rating: 5,
                comment: "Professional approach to data science and statistical analysis.",
                date: "2 months ago"
            },
            {
                student: "James Mitchell - New Zealand",
                rating: 4,
                comment: "Solid understanding of Python frameworks and data processing.",
                date: "3 months ago"
            },
            {
                student: "Ingrid Larsson - Norway",
                rating: 5,
                comment: "Top-notch data analyst with great communication and teaching skills.",
                date: "4 months ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/priyadakhore",
        email: "priyadakhore08@gmail.com"
    },
    {
        id: 6,
        name: "Ujjwal Kumar Singh",
        role: "Management Consultant",
        image: ujjwalProfile,
        experience: "2 years",
        expertise: ["Management", "Operations", "Team Leadership", "Strategy"],
        companies: ["Apana Time"],
        location: "Bihar, India",
        rating: 4.6,
        totalReviews: 49,
        projectsCompleted: 10,
        studentsTrained: 250,
        achievements: [
            "Project Management Professional",
            "Led operational strategy",
            "Team growth specialist"
        ],
        reviews: [
            {
                student: "Michael Thompson - USA",
                rating: 5,
                comment: "Excellent leadership and project management expertise for our operations.",
                date: "2 weeks ago"
            },
            {
                student: "Priya Gupta - India",
                rating: 5,
                comment: "Great consultant for strategic planning and team development.",
                date: "1 month ago"
            },
            {
                student: "Lars Nielsen - Denmark",
                rating: 4,
                comment: "Outstanding management consulting and operational strategy expertise.",
                date: "3 weeks ago"
            },
            {
                student: "Maria Gonzalez - Spain",
                rating: 5,
                comment: "Professional approach to team leadership and business operations.",
                date: "1 week ago"
            },
            {
                student: "Ahmed Rashid - UAE",
                rating: 5,
                comment: "Incredible strategic thinking and project management skills.",
                date: "4 weeks ago"
            },
            {
                student: "Jennifer Kim - South Korea",
                rating: 4,
                comment: "Great mentor for management and organizational development.",
                date: "5 weeks ago"
            },
            {
                student: "Roberto Fernandez - Chile",
                rating: 5,
                comment: "Excellent consultant for business strategy and team growth.",
                date: "6 weeks ago"
            },
            {
                student: "Elena Popov - Serbia",
                rating: 5,
                comment: "Professional management consultant with great leadership insights.",
                date: "2 months ago"
            },
            {
                student: "David Wilson - UK",
                rating: 4,
                comment: "Solid understanding of operations management and strategic planning.",
                date: "3 months ago"
            },
            {
                student: "Fatou Diallo - Senegal",
                rating: 5,
                comment: "Top-notch management consultant with excellent communication skills.",
                date: "4 months ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/ujjwal-kumar-singh-4532581a6",
        email: "ujjwal150212@gmail.com"
    },
    {
        id: 7,
        name: "Shivani Nagar",
        role: "Full Stack Developer",
        image: shivaniProfile,
        experience: "3+ years",
        expertise: ["React", "Node.js", "TypeScript", "AWS"],
        companies: ["Apana Time"],
        location: "Gurgaon, India",
        rating: 4.8,
        totalReviews: 79,
        projectsCompleted: 30,
        studentsTrained: 200,
        achievements: [
            "Full Stack Expert",
            "Cloud Architecture",
            "Mentored 200+ students"
        ],
        reviews: [
            {
                student: "Alex Rodriguez - USA",
                rating: 5,
                comment: "Expert in MERN stack development for our enterprise applications.",
                date: "2 weeks ago"
            },
            {
                student: "Raj Patel - India",
                rating: 5,
                comment: "Great understanding of AWS services for our cloud infrastructure.",
                date: "1 month ago"
            },
            {
                student: "Sophie Laurent - France",
                rating: 4,
                comment: "Excellent React and Node.js development skills for our web platform.",
                date: "3 weeks ago"
            },
            {
                student: "Hassan Ali - Pakistan",
                rating: 5,
                comment: "Outstanding full-stack development and TypeScript expertise.",
                date: "1 week ago"
            },
            {
                student: "Emma Johnson - Canada",
                rating: 5,
                comment: "Professional approach to cloud architecture and AWS deployment.",
                date: "4 weeks ago"
            },
            {
                student: "Carlos Mendoza - Mexico",
                rating: 4,
                comment: "Great mentor for full-stack development and modern web technologies.",
                date: "5 weeks ago"
            },
            {
                student: "Yuki Tanaka - Japan",
                rating: 5,
                comment: "Incredible MERN stack expertise and project delivery skills.",
                date: "6 weeks ago"
            },
            {
                student: "Olga Petrov - Russia",
                rating: 5,
                comment: "Excellent full-stack developer with great problem-solving abilities.",
                date: "2 months ago"
            },
            {
                student: "Daniel O'Connor - Ireland",
                rating: 4,
                comment: "Solid understanding of React ecosystem and cloud technologies.",
                date: "3 months ago"
            },
            {
                student: "Amira Hassan - Morocco",
                rating: 5,
                comment: "Top-notch full-stack developer with excellent mentoring skills.",
                date: "4 months ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/shivaninagar28",
        github: "https://github.com"
    },
    {
        id: 8,
        name: "Nikhil Kumar",
        role: "Business Analyst",
        image: nikhilProfile,
        experience: "3 years",
        expertise: ["Python", "Excel", "Power BI", "PowerPoint", "SQL"],
        companies: ["Apana Time", "Physics Wallah"],
        location: "Uttar Pradesh, India",
        rating: 4.8,
        totalReviews: 62,
        projectsCompleted: 30,
        studentsTrained: 500,
        achievements: [
            "Business Analysis Expert",
            "Data Visualization Specialist",
            "Process Optimization"
        ],
        reviews: [
            {
                student: "Sarah Mitchell - Australia",
                rating: 5,
                comment: "Excellent insights into data analysis for our quarterly business reviews.",
                date: "1 week ago"
            },
            {
                student: "Marco Rossi - Italy",
                rating: 5,
                comment: "Great Power BI dashboard development for our analytics team.",
                date: "3 weeks ago"
            },
            {
                student: "Priya Sharma - India",
                rating: 4,
                comment: "Outstanding business analysis and Excel expertise for our projects.",
                date: "2 weeks ago"
            },
            {
                student: "Ahmed Al-Rashid - Kuwait",
                rating: 5,
                comment: "Professional approach to data visualization and PowerPoint presentations.",
                date: "1 month ago"
            },
            {
                student: "Elena Kowalski - Poland",
                rating: 5,
                comment: "Incredible SQL skills and database optimization expertise.",
                date: "4 weeks ago"
            },
            {
                student: "James Wilson - UK",
                rating: 4,
                comment: "Great mentor for business intelligence and data analysis projects.",
                date: "5 weeks ago"
            },
            {
                student: "Chen Wei - China",
                rating: 5,
                comment: "Excellent business analyst with great communication and technical skills.",
                date: "6 weeks ago"
            },
            {
                student: "Isabella Rodriguez - Spain",
                rating: 5,
                comment: "Professional business analysis and process optimization expertise.",
                date: "2 months ago"
            },
            {
                student: "Kevin O'Brien - Ireland",
                rating: 4,
                comment: "Solid understanding of Power BI and business intelligence tools.",
                date: "3 months ago"
            },
            {
                student: "Fatima Al-Zahra - Lebanon",
                rating: 5,
                comment: "Top-notch business analyst with excellent Python and Excel skills.",
                date: "4 months ago"
            }
        ],
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },
    {
        id: 9,
        name: "Bal Govind Maurya (Samar)",
        role: "Mobile App Developer",
        image: balGovindProfile,
        experience: "3+ years",
        expertise: ["React Native", "Flutter", "iOS", "Android"],
        companies: ["Apana Time"],
        location: "Uttar Pradesh, India",
        rating: 4.7,
        totalReviews: 146,
        projectsCompleted: 40,
        studentsTrained: 500,
        achievements: [
            "Cross-platform Expert",
            "Published 30+ apps",
            "Mentored 200+ students"
        ],
        reviews: [
            {
                student: "Michael Johnson - USA",
                rating: 5,
                comment: "Great experience with React Native development for our mobile platform.",
                date: "2 weeks ago"
            },
            {
                student: "Aisha Patel - India",
                rating: 4,
                comment: "Very helpful with Play Store deployment and app optimization.",
                date: "1 month ago"
            },
            {
                student: "Lars Anderson - Sweden",
                rating: 5,
                comment: "Excellent Flutter development and cross-platform mobile expertise.",
                date: "3 weeks ago"
            },
            {
                student: "Maria Santos - Brazil",
                rating: 5,
                comment: "Outstanding mobile app development and iOS/Android expertise.",
                date: "1 week ago"
            },
            {
                student: "Hassan Al-Mahmoud - Syria",
                rating: 4,
                comment: "Professional approach to mobile development and app architecture.",
                date: "4 weeks ago"
            },
            {
                student: "Sophie Dubois - France",
                rating: 5,
                comment: "Great mentor for React Native and mobile app development projects.",
                date: "5 weeks ago"
            },
            {
                student: "Chen Li - China",
                rating: 5,
                comment: "Incredible mobile development skills and Flutter expertise.",
                date: "6 weeks ago"
            },
            {
                student: "Olga Volkov - Ukraine",
                rating: 4,
                comment: "Excellent mobile developer with great problem-solving abilities.",
                date: "2 months ago"
            },
            {
                student: "David Thompson - Canada",
                rating: 5,
                comment: "Solid understanding of mobile app deployment and optimization.",
                date: "3 months ago"
            },
            {
                student: "Amina Hassan - Algeria",
                rating: 5,
                comment: "Top-notch mobile developer with excellent cross-platform skills.",
                date: "4 months ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/bal-govind-maurya-samar-9b8231218/",
        email: "govindbal866@gmail.com"
    },
    {
        id: 10,
        name: "Beauty Kumari",
        role: "Data Analyst",
        image: beautyProfile,
        experience: "2 years",
        expertise: ["Data Analyst", "Power BI", "Python", "SQL"],
        companies: ["Apana Time"],
        location: "Delhi, India",
        rating: 4.5,
        totalReviews: 77,
        projectsCompleted: 30,
        studentsTrained: 150,
        achievements: [
            "Data Analysis Expert",
            "Power BI Specialist",
            "Mentored 150+ students"
        ],
        reviews: [
            {
                student: "Robert Anderson - Canada",
                rating: 5,
                comment: "Excellent Power BI visualization skills for our business intelligence needs.",
                date: "3 weeks ago"
            },
            {
                student: "Mei Zhang - China",
                rating: 4,
                comment: "Very helpful with SQL optimization and database performance tuning.",
                date: "1 month ago"
            },
            {
                student: "Carlos Martinez - Argentina",
                rating: 5,
                comment: "Outstanding data analysis and Python programming expertise.",
                date: "2 weeks ago"
            },
            {
                student: "Emma Wilson - UK",
                rating: 5,
                comment: "Professional approach to data visualization and Power BI development.",
                date: "1 week ago"
            },
            {
                student: "Ahmed Hassan - Egypt",
                rating: 4,
                comment: "Great mentor for data analysis projects and SQL database management.",
                date: "4 weeks ago"
            },
            {
                student: "Sophie Laurent - France",
                rating: 5,
                comment: "Incredible analytical skills and business intelligence solutions.",
                date: "5 weeks ago"
            },
            {
                student: "Yuki Yamamoto - Japan",
                rating: 5,
                comment: "Excellent data analyst with great communication and technical skills.",
                date: "6 weeks ago"
            },
            {
                student: "Nikolai Petrov - Bulgaria",
                rating: 4,
                comment: "Professional data analysis and Power BI dashboard development.",
                date: "2 months ago"
            },
            {
                student: "Jennifer Lee - South Korea",
                rating: 5,
                comment: "Solid understanding of data science and statistical analysis techniques.",
                date: "3 months ago"
            },
            {
                student: "Lucas Silva - Portugal",
                rating: 5,
                comment: "Top-notch data analyst with excellent Python and SQL expertise.",
                date: "4 months ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/beauty-kumari-814615325",
        email: "sharmabeauty427@gmail.com"
    },
    {
        id: 11,
        name: "MD Shahbaz",
        role: "Software Developer",
        image: shabazProfile,
        experience: "3+ years",
        expertise: ["Data Analysis", "Python", "SQL", "Power BI", "Excel"],
        companies: ["Apana Time"],
        location: "Delhi, India",
        rating: 4.6,
        totalReviews: 32,
        projectsCompleted: 25,
        studentsTrained: 300,
        achievements: [
            "Data Analysis Expert",
            "Business Intelligence Specialist",
            "Mentored 300+ students"
        ],
        reviews: [
            {
                student: "Michael Thompson - USA",
                rating: 5,
                comment: "Outstanding data analysis and insights. Delivered exceptional results for our quarterly reports.",
                date: "2 weeks ago"
            },
            {
                student: "Priya Gupta - India",
                rating: 5,
                comment: "Professional approach and excellent Power BI dashboard implementations.",
                date: "1 month ago"
            },
            {
                student: "Lars Nielsen - Denmark",
                rating: 4,
                comment: "Great software development skills and data analysis expertise.",
                date: "3 weeks ago"
            },
            {
                student: "Maria Gonzalez - Spain",
                rating: 5,
                comment: "Excellent Python programming and SQL database management skills.",
                date: "1 week ago"
            },
            {
                student: "Ahmed Rashid - UAE",
                rating: 5,
                comment: "Outstanding software developer with great analytical thinking abilities.",
                date: "4 weeks ago"
            },
            {
                student: "Jennifer Kim - South Korea",
                rating: 4,
                comment: "Professional approach to software development and business intelligence.",
                date: "5 weeks ago"
            },
            {
                student: "Roberto Fernandez - Chile",
                rating: 5,
                comment: "Incredible Excel expertise and data visualization capabilities.",
                date: "6 weeks ago"
            },
            {
                student: "Elena Popov - Serbia",
                rating: 5,
                comment: "Great mentor for software development and data analysis projects.",
                date: "2 months ago"
            },
            {
                student: "David Wilson - UK",
                rating: 4,
                comment: "Solid understanding of Power BI and business intelligence solutions.",
                date: "3 months ago"
            },
            {
                student: "Fatou Diallo - Senegal",
                rating: 5,
                comment: "Top-notch software developer with excellent communication skills.",
                date: "4 months ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/mdshahbaz1510?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "mdshahbaz@gmail.com"
    },
    {
        id: 12,
        name: "Shiv Pujan Kumar",
        role: "Full Stack Software Developer",
        image: shivPujanProfile,
        experience: "3+ years",
        expertise: ["React", "Node.js", "JavaScript", "MongoDB", "Express", "Full Stack"],
        companies: ["Apana Time"],
        location: "Bangalore, India",
        rating: 4.7,
        totalReviews: 117,
        projectsCompleted: 35,
        studentsTrained: 400,
        achievements: [
            "Full Stack Development Expert",
            "MERN Stack Specialist",
            "Mentored 400+ students"
        ],
        reviews: [
            {
                student: "Alex Rodriguez - USA",
                rating: 5,
                comment: "Outstanding full stack development skills. Delivered robust web applications for our clients.",
                date: "1 week ago"
            },
            {
                student: "Raj Patel - India",
                rating: 5,
                comment: "Professional MERN stack implementation and excellent code quality.",
                date: "3 weeks ago"
            },
            {
                student: "Sophie Laurent - France",
                rating: 4,
                comment: "Great React and Node.js development expertise for our web platform.",
                date: "2 weeks ago"
            },
            {
                student: "Hassan Ali - Pakistan",
                rating: 5,
                comment: "Excellent full-stack developer with great MongoDB and Express skills.",
                date: "1 month ago"
            },
            {
                student: "Emma Johnson - Canada",
                rating: 5,
                comment: "Outstanding JavaScript expertise and modern web development skills.",
                date: "4 weeks ago"
            },
            {
                student: "Carlos Mendoza - Mexico",
                rating: 4,
                comment: "Professional approach to full-stack development and project delivery.",
                date: "5 weeks ago"
            },
            {
                student: "Yuki Tanaka - Japan",
                rating: 5,
                comment: "Incredible MERN stack expertise and web application development.",
                date: "6 weeks ago"
            },
            {
                student: "Olga Petrov - Russia",
                rating: 5,
                comment: "Great mentor for full-stack development and modern web technologies.",
                date: "2 months ago"
            },
            {
                student: "Daniel O'Connor - Ireland",
                rating: 4,
                comment: "Solid understanding of React ecosystem and backend development.",
                date: "3 months ago"
            },
            {
                student: "Amira Hassan - Morocco",
                rating: 5,
                comment: "Top-notch full-stack developer with excellent problem-solving abilities.",
                date: "4 months ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/shiv-p-kumar-008003198/",
        email: "sahil.8228053857@gmail.com"
    }
]

const expertiseAreas = ["All", "Web Development", "Mobile Development", "Data Science", "AI/ML", "Power BI", "Python"]

export default function OurIndustriesPage() {
    const [selectedExpertise, setSelectedExpertise] = useState("All")
    const [expandedMember, setExpandedMember] = useState(null)

    const getCategoryKeywords = (category) => {
        switch (category) {
            case "Web Development":
                return ["Web", "Full Stack", "React", "Node.js", "Frontend", "Backend", "MERN", "TypeScript"]
            case "Mobile Development":
                return ["Mobile", "Android", "iOS", "Flutter", "React Native"]
            case "Data Science":
                return ["Data Science", "Data Scientist", "Machine Learning", "Deep Learning", "NLP"]
            case "AI/ML":
                return ["AI", "ML", "Machine Learning", "Deep Learning", "NLP", "Artificial Intelligence"]
            case "Power BI":
                return ["Power BI", "Business Analyst", "Data visualization"]
            case "Python":
                return ["Python", "Django", "Flask"]
            default:
                return [category]
        }
    }

    const filteredMembers = selectedExpertise === "All"
        ? teamMembers
        : teamMembers.filter(member => {
            const keywords = getCategoryKeywords(selectedExpertise)
            const searchString = `${member.role} ${member.expertise.join(' ')}`.toLowerCase()
            return keywords.some(keyword => searchString.includes(keyword.toLowerCase()))
        })

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                size={16}
                fill={index < Math.floor(rating) ? "#fbbf24" : "none"}
                stroke={index < rating ? "#fbbf24" : "#d1d5db"}
            />
        ))
    }

    return (
        <>
            <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .team-card { animation: fadeInUp 0.6s ease-out forwards; }
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr !important; }
          .filter-buttons { flex-wrap: wrap !important; }
        }
      `}</style>

            <main style={{ paddingTop: '64px', minHeight: '100vh' }}>
                {/* Hero Section */}
                <section style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    color: '#ffffff',
                    padding: '5rem 0',
                    textAlign: 'center'
                }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: 'bold',
                            marginBottom: '1.5rem',
                            lineHeight: '1.2'
                        }}>
                            Meet Our Expert Team
                        </h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto 2rem' }}>
                            Industry veterans with years of experience from top companies.
                            Learn from the best and accelerate your tech career.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section style={{ padding: '3rem 0', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3b82f6' }}>27+</div>
                                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Expert Instructors</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#8b5cf6' }}>4750+</div>
                                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Students Trained</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#10b981' }}>140+</div>
                                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Projects Completed</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b' }}>4.8★</div>
                                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Average Rating</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filter Section */}
                <section style={{ padding: '2rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div className="filter-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {expertiseAreas.map((area) => (
                                <button
                                    key={area}
                                    onClick={() => setSelectedExpertise(area)}
                                    style={{
                                        padding: '0.5rem 1.5rem',
                                        borderRadius: '9999px',
                                        border: selectedExpertise === area ? 'none' : '1px solid #e5e7eb',
                                        backgroundColor: selectedExpertise === area ? '#3b82f6' : '#ffffff',
                                        color: selectedExpertise === area ? '#ffffff' : '#6b7280',
                                        cursor: 'pointer',
                                        fontWeight: '500',
                                        fontSize: '0.875rem',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    {area}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Members Grid */}
                <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div className="team-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                            gap: '2rem'
                        }}>
                            {filteredMembers.map((member, index) => (
                                <div
                                    key={member.id}
                                    className="team-card"
                                    style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '1rem',
                                        border: '1px solid #e5e7eb',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s',
                                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                                        animationDelay: `${index * 0.1}s`,
                                        opacity: 0
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)'
                                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)'
                                        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    {/* Header */}
                                    <div style={{
                                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                        padding: '2rem',
                                        textAlign: 'center',
                                        color: '#ffffff'
                                    }}>
                                        {member.image ? (
                                            <div style={{
                                                width: '120px',
                                                height: '120px',
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                margin: '0 auto 1rem',
                                                border: '4px solid rgba(255, 255, 255, 0.3)'
                                            }}>
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    style={{ 
                                                        width: '100%', 
                                                        height: '100%', 
                                                        objectFit: 'cover',
                                                        objectPosition: member.id === 11 ? 'center top' : 'center center'
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{member.avatar}</div>
                                        )}
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                            {member.name}
                                        </h3>
                                        <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>{member.role}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', marginTop: '0.75rem' }}>
                                            {renderStars(member.rating)}
                                            <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem' }}>
                                                {member.rating} ({member.totalReviews} reviews)
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div style={{ padding: '1.5rem' }}>
                                        {/* Experience & Location */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Briefcase size={16} />
                                                <span>{member.experience}</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <MapPin size={16} />
                                                <span>{member.location}</span>
                                            </div>
                                        </div>

                                        {/* Stats Grid */}
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                            gap: '1rem',
                                            marginBottom: '1.5rem',
                                            padding: '1rem',
                                            backgroundColor: '#f9fafb',
                                            borderRadius: '0.5rem'
                                        }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6' }}>{member.projectsCompleted}</div>
                                                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Projects</div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>{member.studentsTrained}</div>
                                                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Students</div>
                                            </div>
                                        </div>

                                        {/* Companies */}
                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Briefcase size={14} />
                                                Companies:
                                            </div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                {member.companies.map((company, idx) => (
                                                    <span
                                                        key={idx}
                                                        style={{
                                                            fontSize: '0.75rem',
                                                            backgroundColor: '#dbeafe',
                                                            color: '#1e40af',
                                                            padding: '0.25rem 0.75rem',
                                                            borderRadius: '9999px',
                                                            fontWeight: '500'
                                                        }}
                                                    >
                                                        {company}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Expertise */}
                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <TrendingUp size={14} />
                                                Expertise:
                                            </div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                {member.expertise.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        style={{
                                                            fontSize: '0.75rem',
                                                            backgroundColor: '#eff6ff',
                                                            color: '#3b82f6',
                                                            padding: '0.25rem 0.75rem',
                                                            borderRadius: '9999px',
                                                            fontWeight: '500'
                                                        }}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Award size={14} />
                                                Achievements:
                                            </div>
                                            <ul style={{ fontSize: '0.75rem', color: '#6b7280', paddingLeft: '1.25rem', margin: 0 }}>
                                                {member.achievements.map((achievement, idx) => (
                                                    <li key={idx} style={{ marginBottom: '0.25rem' }}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Reviews Toggle */}
                                        <Button
                                            onClick={() => setExpandedMember(expandedMember === member.id ? null : member.id)}
                                            style={{
                                                width: '100%',
                                                backgroundColor: '#3b82f6',
                                                color: '#ffffff',
                                                padding: '0.75rem',
                                                borderRadius: '0.5rem',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontWeight: '600',
                                                fontSize: '0.875rem'
                                            }}
                                        >
                                            {expandedMember === member.id ? 'Hide Reviews' : 'View Client Reviews'}
                                        </Button>

                                        {/* Reviews Section */}
                                        {expandedMember === member.id && (
                                            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
                                                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <Users size={16} />
                                                    Client Reviews ({member.totalReviews} total)
                                                </div>
                                                <div style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                                                    {member.reviews.map((review, idx) => (
                                                        <div key={idx} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: idx < member.reviews.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                                                <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#1f2937' }}>{review.student}</div>
                                                                <div style={{ fontSize: '0.625rem', color: '#9ca3af' }}>{review.date}</div>
                                                            </div>
                                                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.5rem' }}>
                                                                {renderStars(review.rating)}
                                                            </div>
                                                            <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: 0 }}>{review.comment}</p>
                                                        </div>
                                                    ))}
                                                    {member.totalReviews > member.reviews.length && (
                                                        <div style={{ textAlign: 'center', padding: '1rem', fontSize: '0.75rem', color: '#6b7280', fontStyle: 'italic' }}>
                                                            ... and {member.totalReviews - member.reviews.length} more reviews
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Social Links */}
                                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5' }}>
                                                <Linkedin size={20} />
                                            </a>
                                            {member.email ? (
                                                <a href={`mailto:${member.email}`} style={{ color: '#ea4335' }}>
                                                    <Mail size={20} />
                                                </a>
                                            ) : (
                                                <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
                                                    <Github size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
