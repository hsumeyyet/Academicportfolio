import { Mail, MapPin } from "lucide-react";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-[65px]">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="space-y-12">
          <div>
            <h1 className="text-3xl tracking-tight mb-6">Contact</h1>
            <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
              For inquiries regarding research collaboration, teaching
              opportunities, or project consultations, please feel free to
              reach out.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl tracking-tight mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Email</p>
                        <a
                          href="mailto:hsumeyyetasdelen@gmail.com"
                          className="text-sm hover:underline"
                        >
                          hsumeyyetasdelen@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Location</p>
                        <p className="text-sm">Istanbul – Üsküdar, Türkiye</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Affiliations */}
              <div>
                <h2 className="text-xl tracking-tight mb-6">Affiliations</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm mb-1">Istanbul University</h3>
                    <p className="text-xs text-gray-600">
                      Faculty of Architecture
                    </p>
                    <p className="text-xs text-gray-500">
                      Lecturer (2020–present)
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm mb-1">
                      Istanbul Technical University
                    </h3>
                    <p className="text-xs text-gray-600">
                      Informatics Institute – Architecture
                    </p>
                    <p className="text-xs text-gray-500">
                      PhD Candidate (2019–present)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-xl tracking-tight mb-6">Research Interests</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Computational Design",
                "Parametric Modeling",
                "AI-Supported Workflows",
                "Urban Computing",
                "Digital Culture",
                "Architectural Education",
                "BIM Methodologies",
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
