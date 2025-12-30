import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    student?: string;
    category: string;
    image: string;
    description: string;
    date?: string;
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="mb-2">{project.title}</DialogTitle>
              <DialogDescription className="sr-only">
                {project.description}
              </DialogDescription>
              {project.student && (
                <p className="text-gray-600 mb-2">By {project.student}</p>
              )}
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{project.category}</Badge>
                {project.date && (
                  <span className="text-sm text-gray-500">{project.date}</span>
                )}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        <div className="space-y-4">
          <div className="w-full overflow-hidden rounded-lg bg-gray-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain"
            />
          </div>
          <div>
            <h4 className="mb-2">Project Description</h4>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}