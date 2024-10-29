'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react'

export default function EnhancedPortfolio() {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "IllumiFact",
      shortDescription: "A platform for refuting misinformation",
      fullDescription: "IllumiFact is an organization created to highlight, correct, and hold accountable those who propagate misinformation. Our platform serves as a formal and authoritative alternative to informal fact-checking on social media and mainstream media companies. We aim to combat the increasing amount of misinformation that affects the worldviews of the British population, recognizing that informed citizens are crucial for a prosperous society governed by fruitful domestic policies.",
      image: "https://sjc.microlink.io/_SJ0iCOdlQiNtxmKo0jPzMUPZoLTzNYDLYi-PgTdrjwvqbe4yRhny13Zdsf11gMoz2PiL_RRRlILgASpXgWbmQ.jpeg",
      link: "https://www.illumifact.org/",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "Supabase"],
      achievements: [
        "Developed with best practices using Next.js, Tailwind, and TypeScript",
        "Achieved an average Lighthouse performance score of 97",
        "Implemented CI/CD pipeline using GitHub Actions",
        "Designed to be responsive across various devices"
      ]
    },
    {
      id: 2,
      title: "yFiles for HTML Neo4j Graph Visualizer",
      shortDescription: "A powerful graph visualization tool",
      fullDescription: "This project leverages yFiles for HTML to create a sophisticated graph visualization tool integrated with Neo4j. It allows users to explore complex network structures and relationships stored in Neo4j databases through an intuitive and interactive interface. The visualizer supports various graph layouts, filtering options, and real-time data updates, making it an invaluable tool for data analysts and researchers working with interconnected data.",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      technologies: ["yFiles for HTML", "Neo4j", "JavaScript", "D3.js", "HTML5 Canvas"],
      achievements: [
        "Implemented advanced graph rendering techniques for optimal performance",
        "Developed custom graph algorithms for data analysis",
        "Created an intuitive user interface for graph exploration and manipulation"
      ]
    },
    {
      id: 3,
      title: "D3 Graph Visualizer",
      shortDescription: "A custom graph visualization tool using D3.js",
      fullDescription: "This D3-based graph visualizer is a lightweight yet powerful tool for rendering and interacting with complex graph structures. Built entirely with D3.js, it offers a high degree of customization and extensibility. The visualizer supports various graph types, including directed and undirected graphs, and provides features such as zooming, panning, and interactive node/edge manipulation. It's particularly useful for smaller to medium-sized datasets where a full-fledged graph library might be overkill.",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      technologies: ["D3.js", "JavaScript", "SVG", "HTML5", "CSS3"],
      achievements: [
        "Developed a custom force-directed graph layout algorithm",
        "Implemented efficient data binding for smooth updates and transitions",
        "Created a modular architecture for easy extension and customization"
      ]
    },
    {
      id: 4,
      title: "Telos House CRM",
      shortDescription: "A CRM system for Telos House (Coming Soon)",
      fullDescription: "The Telos House CRM is an innovative solution designed to bridge the gap between problem-solvers and those facing real-world challenges. This platform aims to connect builders, industry experts, academics, and government bodies under one roof. By facilitating communication and collaboration, we're working to ensure that important problems don't go unsolved, academic research gets utilized, and innovation thrives. The CRM will manage relationships, track projects, and foster an environment where talent is exposed to real-world problems, moving beyond ivory towers to benefit our world directly.",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      technologies: ["React", "Node.js", "Express", "MongoDB", "GraphQL"],
      achievements: [
        "Designing an intuitive interface for managing complex relationships",
        "Implementing a scalable architecture to support a growing user base",
        "Developing advanced matching algorithms to connect problems with solvers"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <header className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-white shadow-lg">
              <AvatarImage src="/aliprofilepic.jpg" alt="Ali Reda" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.h1 
            className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Ali Reda
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Innovative Software Engineer | Problem Solver | Continuous Learner
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4 mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
          </motion.div>
        </header>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.shortDescription}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button onClick={() => setActiveProject(project)}>Learn More</Button>
                      <Button variant="outline" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4 text-lg">Technical Skills</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Badge variant="outline" className="mr-2">Front-End</Badge>
                        HTML5, CSS3, Tailwind CSS, TypeScript, JavaScript
                      </li>
                      <li className="flex items-center">
                        <Badge variant="outline" className="mr-2">Frameworks</Badge>
                        React, Next.js
                      </li>
                      <li className="flex items-center">
                        <Badge variant="outline" className="mr-2">Databases</Badge>
                        PostgreSQL
                      </li>
                      <li className="flex items-center">
                        <Badge variant="outline" className="mr-2">DevOps</Badge>
                        Git, GitHub Actions, Jest, TDD, Google Lighthouse
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-lg">Soft Skills</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Badge variant="outline" className="mr-2">Learning</Badge>
                        Passionate about continuous growth
                      </li>
                      <li className="flex items-center">
                        <Badge variant="outline" className="mr-2">Collaboration</Badge>
                        Effective team player
                      </li>
                      <li className="flex items-center">
                        <Badge variant="outline" className="mr-2">Problem-solving</Badge>
                        Methodical approach to complex issues
                      </li>
                      <li className="flex items-center">
                        <Badge variant="outline" className="mr-2">Communication</Badge>
                        Clear and concise in written and verbal forms
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  I'm a passionate Software Engineering student at the University of Westminster, set to graduate in July 2024. My journey in tech is driven by a deep fascination with creating innovative solutions that make a real impact.
                </p>
                <p className="mb-4">
                  Currently maintaining a first-class honors standing, I've honed my skills in front-end development, with a particular focus on React and Next.js. My experience extends to database management, particularly with PostgreSQL, and I'm well-versed in modern DevOps practices.
                </p>
                <p>
                  What sets me apart is my commitment to continuous learning and my ability to tackle complex problems methodically. I thrive in collaborative environments and am always eager to contribute my skills to meaningful projects that push the boundaries of what's possible in tech.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{activeProject.title}</h2>
              <img src={activeProject.image} alt={activeProject.title} className="w-full h-64 object-cover rounded-md mb-4" />
              <ScrollArea className="h-60 mb-4">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{activeProject.fullDescription}</p>
                <h3 className="font-semibold mb-2">Key Achievements:</h3>
                <ul className="list-disc list-inside mb-4">
                  {activeProject.achievements.map((achievement, index) => (
                    <li  key={index}>{achievement}</li>
                  ))}
                </ul>
              </ScrollArea>
              <div className="flex justify-end">
                <Button onClick={() => setActiveProject(null)}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}