import { useState } from "react";

interface Project {
  id: number;
  title: string;
  student?: string;
  category: string;
  image: string;
  description: string;
  date?: string;
  type: "submission" | "competition" | "works";
  tools?: string;
}

interface AtlasGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const typeColors = {
  submission: "#3B82F6",
  competition: "#EF4444",
  works: "#10B981",
};

export function AtlasGrid({ projects, onProjectClick }: AtlasGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Atlas Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical Grid Lines */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 border-l border-gray-100"
            style={{ left: `${(i + 1) * 16.66}%` }}
          />
        ))}
        {/* Horizontal Grid Lines */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 border-t border-gray-100"
            style={{ top: `${(i + 1) * 16.66}%` }}
          />
        ))}

        {/* Axis Labels */}
        <div className="absolute top-0 left-0 text-[10px] text-gray-400 -translate-y-4">
          0
        </div>
        <div className="absolute top-0 right-0 text-[10px] text-gray-400 -translate-y-4">
          {projects.length}
        </div>
        <div className="absolute bottom-0 left-0 text-[10px] text-gray-400 translate-y-4">
          2020
        </div>
        <div className="absolute bottom-0 right-0 text-[10px] text-gray-400 translate-y-4">
          2024
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-3 gap-4 p-8">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onProjectClick(project)}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {/* Project Image */}
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Project Info */}
            <div className="p-4 space-y-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor:
                      typeColors[project.type as keyof typeof typeColors],
                  }}
                />
                <span className="text-[10px] uppercase tracking-wider text-gray-500">
                  {project.category}
                </span>
              </div>

              <h3 className="text-sm line-clamp-2 text-left">
                {project.title}
              </h3>

              {project.student && (
                <p className="text-xs text-gray-500">{project.student}</p>
              )}

              <div className="flex items-center gap-3 pt-1">
                <span className="text-xs text-gray-400">{project.date}</span>
              </div>
            </div>

            {/* Hover Metadata Overlay */}
            {hoveredId === project.id && (
              <div className="absolute inset-0 bg-black/90 p-6 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-sm mb-2">{project.title}</h3>
                <p className="text-xs text-gray-300 line-clamp-4">
                  {project.description}
                </p>
                <div className="mt-4 space-y-1 text-[10px] text-gray-400">
                  <div>Type: {project.category}</div>
                  <div>Year: {project.date}</div>
                  {project.student && <div>By: {project.student}</div>}
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}