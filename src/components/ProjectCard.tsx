import { Link } from "react-router-dom";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  id: string;
  name: string;
  city: string;
  state: string;
  image: string;
  type: string;
  status: "upcoming" | "ongoing" | "completed";
  priceRange?: string;
}

const statusColors = {
  upcoming: "bg-accent/10 text-accent border-accent/20",
  ongoing: "bg-primary/10 text-primary border-primary/20",
  completed: "bg-green-500/10 text-green-700 border-green-500/20",
};

const ProjectCard = ({
  id,
  name,
  city,
  state,
  image,
  type,
  status,
  priceRange,
}: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`} className="group block">
      <div className="card-elevated rounded-xl overflow-hidden border border-border">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge className={`${statusColors[status]} border`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {name}
            </h3>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>

          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
            <MapPin className="w-4 h-4" />
            <span>{city}, {state}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Building2 className="w-4 h-4" />
              <span>{type}</span>
            </div>
            {priceRange && (
              <span className="text-sm font-semibold text-foreground">
                {priceRange}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
