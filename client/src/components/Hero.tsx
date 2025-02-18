import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { useToast } from "@/hooks/use-toast";

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut"
  }
};

const textCharacters = "S.M. Ashraful Hasan".split("");

const titles = [
  'Software Quality Assurance Engineer',
  3000,
  'Automation Enthusiast',
  3000,
  'Team Player',
  3000,
  'Fast Learner and Explorer',
  3000,
  'Test Plan Specialist',
  3000,
];

export default function Hero() {
  const { toast } = useToast();

  const handleDownloadCV = () => {
    try {
      // Fetch from our API endpoint
      fetch('/api/download-cv')
        .then(response => {
          if (!response.ok) {
            throw new Error('CV file not found');
          }
          return response.blob();
        })
        .then(blob => {
          // Create a URL for the blob
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'S_M_Ashraful_Hasan.pdf';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        })
        .catch(error => {
          toast({
            title: "Error",
            description: "Unable to download CV. Please try again later.",
            variant: "destructive",
          });
          console.error('CV download error:', error);
        });
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to download CV. Please try again later.",
        variant: "destructive",
      });
      console.error('CV download error:', error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-purple-500/5">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <div className="container px-4 py-32 mx-auto flex flex-col items-center gap-12 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-[400px] md:h-[400px]"
        >
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full blur-2xl opacity-20"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <img
            src="/S_M_Ashraful Hasan.jpg"
            alt="S.M. Ashraful Hasan"
            className="relative rounded-full object-cover w-full h-full border-4 border-primary/20 shadow-xl"
          />
          <motion.div 
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-purple-500 to-blue-500 opacity-30"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center relative"
        >
          

          <div className="flex justify-center gap-[2px] mb-6">
            {textCharacters.map((char, index) => (
              <motion.span
                key={index}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent inline-block hover:scale-125 transition-transform cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.2, 
                  color: "#fff",
                  textShadow: "0 0 8px rgba(124, 58, 237, 0.8)"
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <div className="h-20 mb-8">
            <TypeAnimation
              sequence={titles}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent"
              repeat={Infinity}
              cursor={true}
            />
          </div>

          <motion.p 
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            Passionate about ensuring software quality and automating testing processes
          </motion.p>

          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Button 
              size="lg" 
              variant="default"
              className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg"
              onClick={() => document.getElementById("project-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/20 hover:bg-primary/5 transition-all hover:scale-105 hover:shadow-lg"
              
            >
              <a href={"https://drive.google.com/file/d/1jrb_LDYSDw3oApdPmKvIdjBEce1X-XTO/view?usp=sharing"} target="_blank">
              Download CV
      </a>
              
            </Button>
          </motion.div>
        </motion.div>
      </div>

     
    </section>
  );
}