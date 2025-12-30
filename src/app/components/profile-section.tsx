import { Card } from "./ui/card";
import { Mail, MapPin, GraduationCap, Briefcase, BookOpen } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProfileData {
  name: string;
  title: string;
  position: string;
  institution: string;
  location: string;
  email: string;
  researchInterests: string[];
  softwareSkills: { name: string; level: string }[];
  coursesTaught?: { name: string; description: string }[];
  publications?: {
    journalArticles?: { title: string; authors: string; year: string; publication: string }[];
    conferencePapers?: { title: string; authors: string; year: string; conference: string }[];
    bookChapters?: { title: string; authors: string; year: string; book: string }[];
  };
}

interface ProfileSectionProps {
  data: ProfileData;
}

export function ProfileSection({ data }: ProfileSectionProps) {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2">{data.name}</h1>
            <p className="text-xl text-gray-700 mb-4">{data.title}</p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>{data.position}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>{data.institution}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${data.email}`} className="hover:text-gray-900">
                  {data.email}
                </a>
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <Card className="p-6 mb-6">
            <h3 className="mb-4">Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {data.researchInterests.map((interest, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {interest}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Software Competencies */}
          <Card className="p-6 mb-6">
            <h3 className="mb-4">Software Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {data.softwareSkills.map((skill, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium">{skill.name}</span>
                  {skill.level && (
                    <span className="text-gray-500 ml-2">({skill.level})</span>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Courses Taught */}
          {data.coursesTaught && data.coursesTaught.length > 0 && (
            <Card className="p-6 mb-6">
              <h3 className="mb-4">Courses Taught</h3>
              <div className="space-y-4">
                {data.coursesTaught.map((course, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-1">{course.name}</h4>
                    <p className="text-sm text-gray-600">{course.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Publications */}
          {data.publications && (
            <Card className="p-6">
              <h3 className="mb-4">Publications</h3>
              
              {/* Journal Articles */}
              {data.publications.journalArticles && data.publications.journalArticles.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Journal Articles</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    {data.publications.journalArticles.map((article, index) => (
                      <li key={index} className="text-sm text-gray-700">
                        <span className="font-medium">{article.title}</span>
                        <span className="text-gray-600"> {article.authors} ({article.year}). {article.publication}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Conference Papers */}
              {data.publications.conferencePapers && data.publications.conferencePapers.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Conference Papers</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    {data.publications.conferencePapers.map((paper, index) => (
                      <li key={index} className="text-sm text-gray-700">
                        <span className="font-medium">{paper.title}</span>
                        <span className="text-gray-600"> {paper.authors} ({paper.year}). {paper.conference}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Book Chapters */}
              {data.publications.bookChapters && data.publications.bookChapters.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3">Book Chapters</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    {data.publications.bookChapters.map((chapter, index) => (
                      <li key={index} className="text-sm text-gray-700">
                        <span className="font-medium">{chapter.title}</span>
                        <span className="text-gray-600"> {chapter.authors} ({chapter.year}). {chapter.book}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
