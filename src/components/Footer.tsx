import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg hero-gradient flex items-center justify-center">
              <MapPin className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="text-base font-semibold text-foreground">ProjectPoint</span>
          </Link>
          
          <p className="text-sm text-muted-foreground">
            © 2026 ProjectPoint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
