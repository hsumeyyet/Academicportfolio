export function CVPage() {
  return (
    <div className="min-h-screen bg-white pt-[65px]">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="space-y-16">
          {/* Header */}
          <div>
            <h1 className="text-3xl tracking-tight mb-2">
              Hanife Sümeyye Taşdelen
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Lecturer & PhD Candidate in Architecture
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>
                Lecturer, Faculty of Architecture, Istanbul University
                (2020–present)
              </p>
              <p>
                PhD Candidate, Istanbul Technical University (ITU), Informatics
                Institute – Architecture (2019–present)
              </p>
              <p>Istanbul – Üsküdar, Türkiye</p>
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-xl tracking-tight mb-6">Education</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm mb-1">
                  PhD in Architecture (Ongoing)
                </div>
                <div className="text-xs text-gray-600">
                  Istanbul Technical University, Informatics Institute
                </div>
                <div className="text-xs text-gray-500">2019 – Present</div>
              </div>
            </div>
          </div>

          {/* Teaching */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-xl tracking-tight mb-6">Teaching</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm mb-2">
                  Digital Environment in Architecture I
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Introduces students to digital modelling and computational
                  design tools for architectural representation, including 2D
                  drafting, 3D modelling, parametric modelling, and algorithmic
                   design methods. Emphasises generative thinking and exploring
                  form variation using software such as Rhino and Grasshopper.
                  Students engage with digital–physical prototyping (e.g., 3D
                  printing, laser cutting).
                </p>
              </div>
              <div>
                <h3 className="text-sm mb-2">
                  Digital Environment in Architecture II
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  The course introduces Revit and Building Information Modeling
                  (BIM) processes. This advanced course explores digital
                  modeling techniques and their applications in architectural
                  design, focusing on both creation and modification of 3D
                  architectural models, with emphasis on Revit as the primary
                  platform while addressing interoperability across multiple
                  software environments.
                </p>
              </div>
              <div>
                <h3 className="text-sm mb-2">
                  Architectural Design Studio 1–2-3-4
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A sequence of design studio courses exploring architectural
                  design from conceptual development to complex proposals. The
                  studios emphasise digital representation, computational
                  design, and integration of social and environmental factors
                  while fostering critical and creative thinking. These courses
                  cover all levels from first to third year.
                </p>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-xl tracking-tight mb-6">
              Selected Publications
            </h2>
            <div className="space-y-8">
              {/* Journal Articles */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                  Journal Articles
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs mb-1">
                      "A Symbiotic Research in the Architectural Design Studio:
                      From Model to Text, from Text to Dall‑e2, 'Underground'
                      as a Metaphor"
                    </p>
                    <p className="text-xs text-gray-600">
                      Yazıcıoğlu Halu Z., Büyük Öksüz K., Taşdelen H.S.
                    </p>
                    <p className="text-xs text-gray-500">
                      Yapı, no.490, pp.34–39 (2024)
                    </p>
                  </div>
                  <div>
                    <p className="text-xs mb-1">
                      "The Digital Habitus of Architecture: Praxis of
                      Design‑Oriented Internet Usage"
                    </p>
                    <p className="text-xs text-gray-600">
                      Taşdelen H.S., Gül L.F.
                    </p>
                    <p className="text-xs text-gray-500">
                      Journal of Computational Design, vol.4, no.1, pp.71–98
                      (2023)
                    </p>
                  </div>
                  <div>
                    <p className="text-xs mb-1">
                      "From House to House: Architecture, Arrangement, Practice
                      in the Turkish House"
                    </p>
                    <p className="text-xs text-gray-600">
                      Taşdelen H.S.
                    </p>
                    <p className="text-xs text-gray-500">
                      İnsan & Toplum – The Journal of Humanity & Society,
                      vol.12, no.1, pp.190–194 (2022)
                    </p>
                  </div>
                </div>
              </div>

              {/* Conference Papers */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                  Conference Papers
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs mb-1">
                      "Aesthetic 'Dissensus' in Public Architecture:
                      Computational Analysis of Contextual Strangeness and Place
                      Appropriation"
                    </p>
                    <p className="text-xs text-gray-600">
                      Taşdelen H.S., Gül L.F.
                    </p>
                    <p className="text-xs text-gray-500">
                      CDVE 2025, Bangkok, Thailand (October 2025)
                    </p>
                  </div>
                  <div>
                    <p className="text-xs mb-1">
                      "The analysis of architectural discourse in the context of
                      computational public opinion: Data mining of Google map
                      reviews"
                    </p>
                    <p className="text-xs text-gray-600">
                      Taşdelen H.S., Gül L.F.
                    </p>
                    <p className="text-xs text-gray-500">
                      SIGraDI 2022, Lima, Peru, pp.101–112 (November 2022)
                    </p>
                  </div>
                  <div>
                    <p className="text-xs mb-1">
                      "'CONNECTED TO' New Methodologies in Online Visual
                      Communication Design Education"
                    </p>
                    <p className="text-xs text-gray-600">
                      Yazıcıoğlu Halu Z., Taşdelen H.S.
                    </p>
                    <p className="text-xs text-gray-500">
                      "CONNECTED TO" Online Visual Communication Design
                      Education, Istanbul, Turkey (November 2021)
                    </p>
                  </div>
                  <div>
                    <p className="text-xs mb-1">
                      "SOCIAL NETWORK ANALYSIS OF DIGITAL DESIGN ACTORS:
                      Exploratory Study Covering the Journal Architectural
                      Design"
                    </p>
                    <p className="text-xs text-gray-600">
                      Taşdelen H.S., Gül L.F.
                    </p>
                    <p className="text-xs text-gray-500">
                      ASCAAD 2021 – Architecture in the Age of Disruptive
                      Technologies, Cairo, Egypt, pp.280–292 (March 2021)
                    </p>
                  </div>
                  <div>
                    <p className="text-xs mb-1">
                      "Mimarlıkta Dijital Piyasa: Mimari Tasarım Süreçlerinde
                      Yazılım Teknolojisi Politikaları"
                    </p>
                    <p className="text-xs text-gray-600">
                      Taşdelen H.S., Gül L.F.
                    </p>
                    <p className="text-xs text-gray-500">
                      XI. Mimarlıkta Sayısal Tasarım Ulusal Sempozyumu, Ankara,
                      Turkey, pp.114–123 (June 2017)
                    </p>
                  </div>
                </div>
              </div>

              {/* Book Chapters */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                  Book Chapters
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs mb-1">
                      "Uzaktan Öğretimde 'Birinci Sınıf Mimari Tasarım
                      Stüdyosu' Deneysel Öğretim Yaklaşımları: Pedagojik
                      Yaklaşım Denemesi"
                    </p>
                    <p className="text-xs text-gray-600">
                      Yazıcıoğlu Halu Z., Taşdelen H.S.
                    </p>
                    <p className="text-xs text-gray-500">
                      In: Çevrimçi Görsel İletişim Tasarımı Eğitiminde Yeni
                      Yöntemler. Editors: Çetin Tüker, Işıl Alaca, Leman Figen
                      Gül. Mimar Sinan Fine Arts University Publications,
                      Istanbul, pp.367–380 (2023)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Software Skills */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-xl tracking-tight mb-6">Software Skills</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Revit</span>
                  <span className="text-gray-500">Advanced</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Rhino/Grasshopper</span>
                  <span className="text-gray-500">Advanced</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Python</span>
                  <span className="text-gray-500">Intermediate</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>QGIS</span>
                  <span className="text-gray-500">Intermediate</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs">Sketchup</div>
                <div className="text-xs">Autocad</div>
                <div className="text-xs">Figma</div>
                <div className="text-xs">Adobe Illustrator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}