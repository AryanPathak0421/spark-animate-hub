import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    fullDescription: "A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, payment processing with Stripe, and a complete admin dashboard for managing orders and inventory.",
    image: "🛍️",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-blue-500 to-cyan-500",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    fullDescription: "A real-time task management application that enables teams to collaborate effectively. Built with React, Socket.io, and MongoDB. Features include drag-and-drop task boards, real-time notifications, team chat, and project analytics.",
    image: "📋",
    tags: ["React", "Socket.io", "MongoDB", "Tailwind"],
    color: "from-purple-500 to-pink-500",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics and insights",
    fullDescription: "An advanced analytics dashboard that aggregates data from multiple social media platforms. Built with Next.js and integrated with various APIs. Features include real-time metrics, customizable charts, engagement tracking, and automated reporting.",
    image: "📊",
    tags: ["Next.js", "Chart.js", "API Integration"],
    color: "from-green-500 to-emerald-500",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "AI-powered tool for generating creative content",
    fullDescription: "An innovative content generation platform powered by AI. Users can create blog posts, social media content, and marketing copy. Built with React, OpenAI API, and Firebase. Features include template library, content customization, and export options.",
    image: "🤖",
    tags: ["React", "OpenAI API", "Firebase"],
    color: "from-orange-500 to-red-500",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all h-full group">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.image}
                  </motion.div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      variant="default"
                      className="flex-1 bg-gradient-primary"
                    >
                      View Details
                    </Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className={`h-64 rounded-lg bg-gradient-to-br ${selectedProject?.color} flex items-center justify-center text-8xl`}>
              {selectedProject?.image}
            </div>
            <p className="text-muted-foreground leading-relaxed">{selectedProject?.fullDescription}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject?.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Button className="flex-1 bg-gradient-primary">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
              <Button variant="outline" className="flex-1">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
