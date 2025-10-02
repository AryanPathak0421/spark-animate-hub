import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

const skills = [
  { name: "React / Next.js", level: 95, icon: "⚛️" },
  { name: "TypeScript", level: 90, icon: "📘" },
  { name: "Node.js / Express", level: 88, icon: "🟢" },
  { name: "Tailwind CSS", level: 92, icon: "🎨" },
  { name: "PostgreSQL / MongoDB", level: 85, icon: "🗄️" },
  { name: "AWS / Cloud", level: 80, icon: "☁️" },
  { name: "Docker / DevOps", level: 78, icon: "🐳" },
  { name: "UI/UX Design", level: 87, icon: "🎯" },
];

const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "Git", icon: "🔀" },
  { name: "Figma", icon: "🎨" },
  { name: "Postman", icon: "📮" },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <h3 className="font-semibold">{skill.name}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                >
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center text-3xl mb-2 shadow-lg">
                  {tool.icon}
                </div>
                <span className="text-sm font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
