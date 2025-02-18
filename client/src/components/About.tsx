import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I am a Software Quality Assurance Engineer at Rebing Tech, where I focus on ensuring 
                the highest quality of software products through comprehensive testing and automation.
                With a B.Sc. in Computer Science and Engineering from North South University, I bring
                a strong technical foundation to my QA role.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                My expertise includes automated testing using Selenium WebDriver, Python, and Flask,
                as well as manual testing methodologies. I am passionate about implementing efficient
                QA processes and contributing to the development of robust, user-friendly software solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}