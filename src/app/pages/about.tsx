import profileImage from "figma:asset/086017e3c45bc42d54014ecea98693aef568e8a5.png";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-[65px]">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="space-y-12">
          <div className="flex items-start gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src={profileImage}
                  alt="H. Sümeyye Taşdelen"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="flex-1">
              <h1 className="text-3xl tracking-tight mb-6">About</h1>
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  I am a lecturer and PhD candidate at Istanbul University,
                  Faculty of Architecture, where I teach and conduct research at
                  the intersection of computational design, AI-supported
                  architectural workflows, and digital culture in architecture.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  My research focuses on exploring how computational methods and
                  artificial intelligence can enhance architectural design
                  processes, particularly in educational contexts. Through my
                  teaching in Digital Environment in Architecture courses, I
                  introduce students to parametric modeling, algorithmic design,
                  and BIM workflows.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This portfolio showcases student submissions from my courses,
                  competition entries, and personal research projects that
                  demonstrate the application of computational design
                  methodologies in contemporary architectural practice.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-xl tracking-tight mb-6">Research Areas</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm mb-2">Computational Design</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Parametric modeling, algorithmic design, and generative
                  systems in architectural education and practice.
                </p>
              </div>
              <div>
                <h3 className="text-sm mb-2">AI-Supported Workflows</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Integration of artificial intelligence in architectural design
                  processes and decision-making systems.
                </p>
              </div>
              <div>
                <h3 className="text-sm mb-2">Urban Computing</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Computational analysis of urban systems, spatial data mining,
                  and digital urban planning methodologies.
                </p>
              </div>
              <div>
                <h3 className="text-sm mb-2">Digital Culture</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Exploring the relationship between digital media, architecture,
                  and contemporary design culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}