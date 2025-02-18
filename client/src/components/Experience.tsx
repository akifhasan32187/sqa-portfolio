import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">SQA Engineer</h3>
                  <p className="text-sm text-foreground/60">Rebing Tech</p>
                </div>
                <Badge>February 2024 - Present</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Track daily progress using Ezzyplan and Jira board</li>
                <li>Perform manual testing of various modules</li>
                <li>Automate UI features using Selenium WebDriver</li>
                <li>Build interfaces for automated script execution</li>
                <li>Work with SDLC methodologies (Agile/Waterfall)</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
