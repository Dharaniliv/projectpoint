import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchFilter from "@/components/SearchFilter";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const Index = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (state) params.set("state", state);
    if (city) params.set("city", city);
    window.location.href = `/projects?${params.toString()}`;
  };

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-12 lg:pb-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Find Your Next Property
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80">
              Explore verified real estate projects across India
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <SearchFilter
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
              onSearch={handleSearch}
              variant="hero"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Featured Projects
            </h2>
            <Link to="/projects">
              <Button variant="ghost" size="sm" className="gap-1">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                city={project.city}
                state={project.state}
                image={project.images[0]}
                type={project.type}
                status={project.status}
                priceRange={project.priceRange}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
