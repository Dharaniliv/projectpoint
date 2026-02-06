import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchFilter from "@/components/SearchFilter";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState(searchParams.get("state") || "");
  const [city, setCity] = useState(searchParams.get("city") || "");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const projectTypes = ["Residential", "Commercial", "Villa", "Mixed Use"];
  const statuses = ["upcoming", "ongoing", "completed"];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (state && project.state !== state) return false;
      if (city && project.city !== city) return false;
      if (selectedType && project.type !== selectedType) return false;
      if (selectedStatus && project.status !== selectedStatus) return false;
      return true;
    });
  }, [state, city, selectedType, selectedStatus]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (state) params.set("state", state);
    if (city) params.set("city", city);
    setSearchParams(params);
  };

  const clearFilters = () => {
    setState("");
    setCity("");
    setSelectedType(null);
    setSelectedStatus(null);
    setSearchParams({});
  };

  const hasActiveFilters = state || city || selectedType || selectedStatus;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 lg:pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Browse Projects
            </h1>
            <p className="text-muted-foreground">
              {filteredProjects.length} projects found
              {hasActiveFilters && " with applied filters"}
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <SearchFilter
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
              onSearch={handleSearch}
              variant="compact"
            />

            {/* Type & Status Filters */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground py-2">Type:</span>
              {projectTypes.map((type) => (
                <Badge
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSelectedType(selectedType === type ? null : type)}
                >
                  {type}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground py-2">Status:</span>
              {statuses.map((status) => (
                <Badge
                  key={status}
                  variant={selectedStatus === status ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors capitalize"
                  onClick={() => setSelectedStatus(selectedStatus === status ? null : status)}
                >
                  {status}
                </Badge>
              ))}
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2 pt-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {state && (
                  <Badge variant="secondary" className="gap-1">
                    {state}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => { setState(""); setCity(""); }} />
                  </Badge>
                )}
                {city && (
                  <Badge variant="secondary" className="gap-1">
                    {city}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setCity("")} />
                  </Badge>
                )}
                {selectedType && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedType}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedType(null)} />
                  </Badge>
                )}
                {selectedStatus && (
                  <Badge variant="secondary" className="gap-1 capitalize">
                    {selectedStatus}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedStatus(null)} />
                  </Badge>
                )}
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent hover:underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  <ProjectCard
                    id={project.id}
                    name={project.name}
                    city={project.city}
                    state={project.state}
                    image={project.images[0]}
                    type={project.type}
                    status={project.status}
                    priceRange={project.priceRange}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No projects found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters to find more projects
              </p>
              <button
                onClick={clearFilters}
                className="text-accent hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
