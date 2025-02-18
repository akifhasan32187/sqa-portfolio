import { Github, Linkedin, Twitter, Facebook, Globe } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-12 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            
          </div>
          
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} S.M. Ashraful Hasan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
