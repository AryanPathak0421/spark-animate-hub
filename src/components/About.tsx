import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";

const timelineItems = [
  {
    year: "2023 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Digital Agency",
    description: "Built responsive web applications and managed end-to-end project delivery.",
  },
  {
    year: "2019 - 2021",
    title: "Frontend Developer",
    company: "Startup Inc",
    description: "Developed modern UI components and improved user experience across multiple products.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating beautiful and functional web experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-primary p-1">
              <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Full Stack Developer & Designer</h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I specialize in building modern,
              scalable applications that solve real-world problems. My expertise spans across
              frontend frameworks, backend technologies, and cloud infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about clean code, user experience, and staying up-to-date with the
              latest technologies. When I'm not coding, you'll find me contributing to open-source
              projects or exploring new tech trends.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "Cloud"].map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Education & Experience</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`mb-8 flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-5/12" />
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                </div>
                <Card className="w-5/12 p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                  <span className="text-sm text-primary font-semibold">{item.year}</span>
                  <h4 className="text-xl font-bold mt-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.company}</p>
                  <p className="text-muted-foreground mt-3">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
