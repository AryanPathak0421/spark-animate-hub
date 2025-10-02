import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    year: "2023 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    description: "Leading development of microservices architecture and mentoring junior developers. Implemented CI/CD pipelines reducing deployment time by 60%.",
    type: "work",
  },
  {
    year: "2022",
    title: "AWS Certified Solutions Architect",
    company: "Amazon Web Services",
    description: "Achieved professional certification in cloud architecture and infrastructure design.",
    type: "achievement",
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Built and maintained multiple client projects using React, Node.js, and MongoDB. Improved application performance by 40% through optimization.",
    type: "work",
  },
  {
    year: "2020",
    title: "Best Hackathon Project",
    company: "TechCrunch Disrupt",
    description: "Won first place for developing an AI-powered accessibility tool for web applications.",
    type: "achievement",
  },
  {
    year: "2019 - 2021",
    title: "Frontend Developer",
    company: "Creative Agency Co.",
    description: "Developed responsive web applications and collaborated with designers to create engaging user experiences.",
    type: "work",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and key milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.2 }}
                className="absolute left-6 top-0 w-5 h-5 rounded-full bg-background border-4 border-primary flex items-center justify-center"
              >
                <div className={`w-2 h-2 rounded-full ${exp.type === 'work' ? 'bg-primary' : 'bg-secondary'}`} />
              </motion.div>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${exp.type === 'work' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                    {exp.type === 'work' ? (
                      <Briefcase className={`w-5 h-5 ${exp.type === 'work' ? 'text-primary' : 'text-secondary'}`} />
                    ) : (
                      <Award className="w-5 h-5 text-secondary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className={`text-sm font-semibold ${exp.type === 'work' ? 'text-primary' : 'text-secondary'}`}>
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <p className="text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
