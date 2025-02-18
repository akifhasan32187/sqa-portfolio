import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/constants";
import { Github, ExternalLink, Youtube } from "lucide-react";


export default function Projects() {

  // Function to map icon names to actual React components
 const getIconComponent = (iconName: string)=> {
  switch (iconName) {
    case "github":
      return <Github className="w-4 h-4 mr-1" />;
    case "external":
      return <ExternalLink className="w-4 h-4 mr-1" />;
    case "youtube":
      return <Youtube className="w-4 h-4 mr-1" />;
    default:
      return null;
  }
};
  return (
    <section className="py-20" id="project-section">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PROJECTS.map((project) => (
              <Card key={project.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
  {project.demo.map((demo, index) => (
    <Button key={index} variant="outline" size="sm" asChild>
      <a href={demo.link} target="_blank" rel="noopener noreferrer">
        {getIconComponent(demo.icon)} {/* Dynamically render icons */}
        {demo.title}
      </a>
    </Button>
  ))}
</CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
