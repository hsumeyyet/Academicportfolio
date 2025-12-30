import { X, Download, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDrawer({
  project,
  isOpen,
  onClose,
}: ProjectDrawerProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-sm tracking-tight mb-1">{project.title}</h2>
                <p className="text-xs text-gray-500">{project.category}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Hero Image */}
              <div className="w-full aspect-video bg-gray-100 overflow-hidden rounded">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Abstract */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                  Abstract
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {project.description}
                </p>
              </div>

              {/* Metadata Table */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                  Project Details
                </h3>
                <div className="border border-gray-200 rounded divide-y divide-gray-200">
                  <div className="flex p-4">
                    <span className="text-xs text-gray-500 w-32">Type</span>
                    <span className="text-xs">{project.category}</span>
                  </div>
                  <div className="flex p-4">
                    <span className="text-xs text-gray-500 w-32">Year</span>
                    <span className="text-xs">{project.date}</span>
                  </div>
                  {project.student && (
                    <div className="flex p-4">
                      <span className="text-xs text-gray-500 w-32">
                        Student / Team
                      </span>
                      <span className="text-xs">{project.student}</span>
                    </div>
                  )}
                  {project.tools && (
                    <div className="flex p-4">
                      <span className="text-xs text-gray-500 w-32">Tools</span>
                      <span className="text-xs">{project.tools}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white text-xs rounded hover:bg-gray-800 transition-colors">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-xs rounded hover:bg-gray-50 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  View Full Project
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}