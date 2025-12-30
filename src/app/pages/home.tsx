import { useState } from "react";
import { FilterPanel } from "../components/filter-panel";
import { AtlasGrid } from "../components/atlas-grid";
import { ProjectDrawer } from "../components/project-drawer";

import portfolioImage1 from "figma:asset/1c90c4a3173007fd2188346685aef712c86bd50b.png";
import portfolioImage2 from "figma:asset/259cfcfcd949cd578a1d010a617c70fcc28fc6d0.png";
import portfolioImage3 from "figma:asset/05ab5ed3cd7bec7847b1b903f920d5ed7946f656.png";
import competitionImage1 from "figma:asset/f8ddac616cc5bc91a737773bfaaec390ff6f4577.png";
import competitionImage2 from "figma:asset/0df9c9f63869d73e1e7332c7d5ac671ee84a91d2.png";
import competitionImage3 from "figma:asset/e6a92e7364914638c84864abd2d6b1b63b5fd2cc.png";
import bursaCompetition1 from "figma:asset/390db5ef27833952363e1bc19d353348f4b9a941.png";
import bursaCompetition2 from "figma:asset/f482cd498ded7628a4c9fec7036d1863db7f7f71.png";
import bursaCompetition3 from "figma:asset/af46facb753f2b4886155361cbb3d1495bae6032.png";
import bursaCompetition4 from "figma:asset/bb00a88d8ad0450943e669a4e0c850d9b1027711.png";
import bursaRender1 from "figma:asset/ea348bcbef9a89665de84d0d6bc414355e3fc1a9.png";
import bursaRender2 from "figma:asset/2e81eb9f55869e9bb55feb7bd957d6042d55742d.png";
import bursaPavilionDetail from "figma:asset/04ec33013b68f02f576ef472a1e2d2ae34a6d023.png";
import studentSubmission1 from "figma:asset/cfe98e983f1ecf4b85934106e765df1e0dbc5863.png";
import studentSubmission2 from "figma:asset/78ec5a37b237e22f3f0249f3465d9764317f8466.png";
import studentSubmission3 from "figma:asset/12074d96ec2ce25ac275ef5abed7777521073864.png";
import studentSubmission4 from "figma:asset/063da4393038eb62df01299b91285da4d26d498e.png";
import studentSubmission5 from "figma:asset/96cc5e1c3d44d3776ede9f4cd4430da7ba9383ef.png";
import personalWork1 from "figma:asset/256d8241c8875fa9cccb35abcb5e5bbb2219d86e.png";
import bookBoxCompetition1 from "figma:asset/e30a7a473296c3280bad6af369e1ca35ea4697cc.png";
import bookBoxCompetition2 from "figma:asset/df9c7291fd870de0d11127afa1ad8ef7d29ad87a.png";

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

const projects: Project[] = [
  {
    id: 1,
    title: "Mimarlık Fakültesi Sayısal Ortam-1 Final Teslimi",
    student: "Alperen İRAZ",
    category: "Student Submission",
    image: portfolioImage1,
    description:
      "Final project submission exploring spatial design concepts through digital modeling and visualization. The project demonstrates advanced understanding of form, structure, and architectural composition.",
    date: "Fall 2024",
    type: "submission",
  },
  {
    id: 2,
    title: "PLUVIA Pavilion - Student Project",
    student: "Design Team",
    category: "Student Submission",
    image: portfolioImage2,
    description:
      "PLUVIA pavilion project focusing on faculty space improvements and modern architectural interventions. The design explores fluid forms inspired by natural phenomena, creating a dynamic space for students and faculty.",
    date: "2024",
    type: "submission",
  },
  {
    id: 3,
    title: "İstanbul Üniversitesi Mimarlık Fakültesi Final Teslimi",
    student: "Tülçe Arslan",
    category: "Student Submission",
    image: portfolioImage3,
    description:
      "Comprehensive architectural project focusing on urban integration and spatial analysis. The submission includes detailed model development, site analysis, and perspective visualizations.",
    date: "Spring 2024",
    type: "submission",
  },
  {
    id: 4,
    title: "İstanbul Üniversitesi Mimarlık Fakültesi Final Projesi",
    student: "Halkan Mehroğan",
    category: "Student Submission",
    image: competitionImage1,
    description:
      "Final project submission for Digital Environment course focusing on innovative pavilion design. The project showcases advanced parametric modeling techniques and explores organic architectural forms inspired by natural systems.",
    date: "Fall 2024",
    type: "submission",
  },
  {
    id: 5,
    title: "Healing Eight - Student Project",
    student: "Student Team",
    category: "Student Submission",
    image: competitionImage2,
    description:
      "Student project proposing a new typology for educational architecture that goes beyond conventional teaching spaces by integrating healing modalities inspired by traditional knowledge. The project focuses on child-centered spatial experiences, passive climate strategies, and holistic learning environments.",
    date: "2024",
    type: "submission",
  },
  {
    id: 6,
    title: "Healing Eight - Site Planning & Spatial Organization",
    student: "Student Team",
    category: "Student Submission",
    image: competitionImage3,
    description:
      "Detailed site planning for the Healing Eight student project, showcasing spatial organization with interconnected circular forms. The design prioritizes learning spaces (60%), rehabilitation areas (20%), public engagement zones (10%), and play/ancillary areas (10%). The project emphasizes locally sourced materials and sustainable construction practices.",
    date: "2024",
    type: "submission",
  },
  {
    id: 11,
    title: "Ofis Tasarımı - 3D Görünümler ve Perspektifler",
    student: "Kağan Şengün",
    category: "Student Submission",
    image: studentSubmission1,
    description:
      "Detaylı ofis tasarım projesi, iç mekan tasarımı ve 3D görselleştirme çalışmalarını içerir. Proje, modern ofis mekanlarında işlevsellik ve estetik dengesini gösterir.",
    date: "Fall 2024",
    type: "submission",
  },
  {
    id: 12,
    title: "Ofis Tasarımı - Planlar ve Kesitler",
    student: "Kağan Şengün",
    category: "Student Submission",
    image: studentSubmission2,
    description:
      "Ofis tasarım projesinin kat planları, kesitler ve teknik çizimlerini içerir. Proje, mekansal organizasyon ve detaylı mimari çözümleri gösterir.",
    date: "Fall 2024",
    type: "submission",
  },
  {
    id: 13,
    title: "Mimari Proje - Revit Model ve Form-Finder",
    student: "Öğrenci Projesi",
    category: "Student Submission",
    image: studentSubmission3,
    description:
      "AI destekli tasarım süreciyle geliştirilen mimari proje. Tasarım, öncelikle form-finder araçları kullanılarak form bulma aşamasıyla başlamış, ardından elde edilen formlar Revit'te 3D modelleme ve detaylandırma aşamasına geçmiştir. Yapay zeka destekli tasarım süreci sonucunda parametrik modelleme gerçekleştirilmiştir.",
    date: "Fall 2024",
    type: "submission",
  },
  {
    id: 14,
    title: "Mimari Proje - Kesitler ve Detaylar",
    student: "Öğrenci Projesi",
    category: "Student Submission",
    image: studentSubmission4,
    description:
      "Mimari projenin kesit çizimleri ve curtain wall sistemi detayları. Cephe tasarımında mass komutu ve Revit custom family kullanımı gösterilmektedir.",
    date: "Fall 2024",
    type: "submission",
  },
  {
    id: 15,
    title: "Mimari Proje - Cephe Çizimleri",
    student: "Öğrenci Projesi",
    category: "Student Submission",
    image: studentSubmission5,
    description:
      "Doğu, Batı, Kuzey ve Güney cephe çizimlerini içeren detaylı mimari sunum. Proje, yapısal sistemi ve cephe detaylarını gösterir.",
    date: "Fall 2024",
    type: "submission",
  },
  {
    id: 7,
    title: "Bursa Setbaşı - Yeşil-Emirsultan Tarihi Aksi Kentsel Tasarım Yarışması",
    category: "Competition",
    image: bursaCompetition1,
    description:
      "Bursa Setbaşı kentsel tasarım projesi, tarihi dokular ve yeşil alanları birleştiren kapsamlı bir şehir planlaması yaklaşımı sunar. Proje, atmosferler yaratarak kentsel yaşam kalitesini artırmayı ve sürdürülebilir şehir tasarımı ilkelerini uygulamayı amaçlar.",
    date: "2025",
    type: "competition",
  },
  {
    id: 8,
    title: "Bursa Setbaşı - 1/500 Kentsel Tasarım Önerileri",
    category: "Competition",
    image: bursaCompetition2,
    description:
      "1/500 ölçekli detaylı kentsel tasarım planları, yeşil alanlar, sosyal mekanlar ve tarihi dokuların entegrasyonunu gösterir. Proje, çevresel sürdürülebilirlik ve toplumsal yaşam alanlarının geliştirilmesine odaklanır.",
    date: "2025",
    type: "competition",
  },
  {
    id: 9,
    title: "Bursa Setbaşı - 1/200 Detay Tasarımlar ve Perspektifler",
    category: "Competition",
    image: bursaCompetition3,
    description:
      "Yeşil ve Hocataşkın bölgelerinin detaylı tasarım önerileri, mekansal organizasyonlar ve perspektif görünümleri. Proje, tarihi mimarinin korunması ile modern yaşam alanlarının entegrasyonunu sağlar.",
    date: "2025",
    type: "competition",
  },
  {
    id: 10,
    title: "Bursa Setbaşı - Karınca Deresi ve Emirsultan Atmosferleri",
    category: "Competition",
    image: bursaCompetition4,
    description:
      "Karınca Deresi ve Emirsultan bölgelerinin detaylı tasarım yaklaşımları. Proje, tarihi doku analizi, kentsel tasarım önerileri ve mekansal perspektifler ile atmosfer yaratma stratejilerini içerir.",
    date: "2025",
    type: "competition",
  },
  {
    id: 19,
    title: "Bursa Setbaşı - Kentsel Donatı ve Pavilion Tasarımı",
    category: "Competition",
    image: bursaRender1,
    description:
      "Bursa Setbaşı kentsel tasarım yarışması kapsamında geliştirilen parametrik pavilion ve kentsel donatı tasarımı. Projede organik formlar ve yeşil alanlarla uyumlu çağdaş bir yapı önerilmektedir. Kuşbakışı perspektif kentsel entegrasyonu gösterir.",
    date: "2025",
    type: "competition",
  },
  {
    id: 20,
    title: "Bursa Setbaşı - Pavilion Detay Perspektifi",
    category: "Competition",
    image: bursaPavilionDetail,
    description:
      "Parametrik tasarım prensipleriyle geliştirilmiş organik ahşap pavilion yapısının detay perspektifi. Proje, kamusal alan kullanımı ve kentsel mobilyalar ile entegre bir sosyal etkileşim mekanı yaratır. Yapısal kafes sistemi ve gölge oyunları detaylandırılmıştır.",
    date: "2025",
    type: "competition",
  },
  {
    id: 16,
    title: "Generative Necklace - 3D Model",
    category: "Personal Works",
    image: personalWork1,
    description:
      "3D rendered visualization of a parametrically designed necklace and earrings. The project explores generative design principles using Grasshopper workflow to create intricate lattice patterns and organic jewelry forms through computational design methods.",
    date: "2024",
    type: "works",
    tools: "Grasshopper, Rhino",
  },
  {
    id: 17,
    title: "Book Box Competition - 1/500 Scale",
    category: "Competition",
    image: bookBoxCompetition1,
    description:
      "1/500 ölçekli detaylı kentsel tasarım planları, kitap kutusu tasarımını ve entegrasyonunu gösterir. Proje, çevresel sürdürülebilirlik ve toplumsal yaşam alanlarının geliştirilmesine odaklanır.",
    date: "2017",
    type: "competition",
  },
  {
    id: 18,
    title: "Book Box Competition - 1/200 Scale",
    category: "Competition",
    image: bookBoxCompetition2,
    description:
      "Kitap kutusu tasarımının detaylı tasarım önerileri, mekansal organizasyonlar ve perspektif görünümleri. Proje, tarihi mimarinin korunması ile modern yaşam alanlarının entegrasyonunu sağlar.",
    date: "2017",
    type: "competition",
  },
];

export function HomePage() {
  const [filters, setFilters] = useState({
    types: ["Student Submission", "Competition", "Personal Works"],
    yearRange: [2017, 2025] as [number, number],
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Filter projects based on selected filters
  const filteredProjects = projects.filter((project) => {
    if (!filters.types.includes(project.category)) return false;

    const yearMatch = project.date?.match(/\d{4}/);
    if (yearMatch) {
      const projectYear = parseInt(yearMatch[0]);
      if (
        projectYear < filters.yearRange[0] ||
        projectYear > filters.yearRange[1]
      )
        return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Filter Panel */}
      <FilterPanel filters={filters} onFiltersChange={setFilters} />

      {/* Main Content Area */}
      <div className="ml-64 pt-[65px]">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl tracking-tight mb-2">
              Project Atlas
            </h1>
            <p className="text-sm text-gray-600">
              A comprehensive view of architectural research, student works, and
              competition entries — {filteredProjects.length} projects indexed
            </p>
          </div>

          {/* Atlas Grid */}
          <AtlasGrid
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
          />
        </div>
      </div>

      {/* Project Drawer */}
      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </div>
  );
}