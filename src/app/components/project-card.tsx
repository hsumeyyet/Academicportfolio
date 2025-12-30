import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title: string;
  student?: string;
  category: string;
  image: string;
  description: string;
  date?: string;
  onClick: () => void;
}

export function ProjectCard({
  title,
  student,
  category,
  image,
  description,
  date,
  onClick,
}: ProjectCardProps) {
  return (
    <Card
      className="overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 group"
      onClick={onClick}
    >
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{category}</Badge>
          {date && <span className="text-sm text-gray-500">{date}</span>}
        </div>
        <h3 className="mb-1">{title}</h3>
        {student && (
          <p className="text-sm text-gray-600 mb-2">By {student}</p>
        )}
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
      </div>
    </Card>
  );
}
