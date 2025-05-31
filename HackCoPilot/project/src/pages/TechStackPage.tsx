import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, ExternalLink, Copy, Check, Heart } from 'lucide-react';
import Button from '../components/ui/Button';
import AnimatedCard from '../components/ui/AnimatedCard';
import Badge from '../components/ui/Badge';

const TechStackPage: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [savedStacks, setSavedStacks] = useState<number[]>([]);

  const techStacks = [
    {
      id: 1,
      title: "Sustainable Web App Stack",
      description: "Modern, lightweight tech stack optimized for sustainability and carbon-efficient web applications.",
      suitableFor: ["EcoTrack", "FoodRescue", "CommunityShare"],
      frontend: [
        { name: "React", description: "UI library with optimized rendering" },
        { name: "Next.js", description: "For server-side rendering and static generation" },
        { name: "TailwindCSS", description: "Utility-first CSS for lightweight styling" },
      ],
      backend: [
        { name: "Node.js", description: "JavaScript runtime" },
        { name: "Express", description: "Minimalist web framework" },
        { name: "MongoDB", description: "NoSQL database" },
      ],
      other: [
        { name: "Vercel", description: "For efficient hosting and deployment" },
        { name: "PWA", description: "Progressive Web App capabilities" },
        { name: "Web Socket", description: "For real-time updates" },
      ],
      levelRecommendation: "Intermediate",
      tags: ["React", "Node.js", "MongoDB", "Sustainability"],
    },
    {
      id: 2,
      title: "AI Healthcare Platform Stack",
      description: "Robust stack for building AI-powered healthcare applications with security and compliance in mind.",
      suitableFor: ["MediConnect", "HealthTracker"],
      frontend: [
        { name: "React", description: "UI library with component reusability" },
        { name: "TypeScript", description: "For type safety and better developer experience" },
        { name: "Material UI", description: "Component library with accessibility" },
      ],
      backend: [
        { name: "Python", description: "For AI/ML capabilities" },
        { name: "FastAPI", description: "Modern, high-performance web framework" },
        { name: "PostgreSQL", description: "Relational database for structured data" },
      ],
      other: [
        { name: "TensorFlow/PyTorch", description: "For machine learning models" },
        { name: "Docker", description: "For containerization" },
        { name: "Auth0", description: "For secure authentication" },
      ],
      levelRecommendation: "Advanced",
      tags: ["React", "Python", "AI/ML", "Healthcare"],
    },
    {
      id: 3,
      title: "Educational Platform Stack",
      description: "Scalable and interactive stack for building educational platforms with personalized learning experiences.",
      suitableFor: ["LearningBlocks", "EducateMe"],
      frontend: [
        { name: "Vue.js", description: "Progressive JavaScript framework" },
        { name: "Nuxt.js", description: "For server-side rendering" },
        { name: "TailwindCSS", description: "For responsive design" },
      ],
      backend: [
        { name: "Node.js", description: "JavaScript runtime" },
        { name: "NestJS", description: "TypeScript backend framework" },
        { name: "PostgreSQL", description: "Relational database" },
      ],
      other: [
        { name: "Redis", description: "For caching and performance" },
        { name: "AWS", description: "For scalable hosting" },
        { name: "Socket.io", description: "For real-time collaboration" },
      ],
      levelRecommendation: "Intermediate",
      tags: ["Vue.js", "Node.js", "PostgreSQL", "Education"],
    },
  ];

  const handleCopyStack = (id: number) => {
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleSaveStack = (id: number) => {
    if (savedStacks.includes(id)) {
      setSavedStacks(savedStacks.filter((stackId) => stackId !== id));
    } else {
      setSavedStacks([...savedStacks, id]);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container-wide">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center mb-2">
                <Link to="/dashboard" className="text-gray-500 hover:text-gray-700 mr-2">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Tech Stack Recommendations</h1>
              </div>
              <p className="text-gray-600">
                Curated technology stacks optimized for your project ideas
              </p>
            </div>
            <Link to="/generator">
              <Button variant="primary" leftIcon={<Code className="h-4 w-4" />}>
                Generate More Stacks
              </Button>
            </Link>
          </div>
        </div>

        {/* Tech Stacks */}
        <div className="space-y-8">
          {techStacks.map((stack, index) => (
            <AnimatedCard
              key={stack.id}
              delay={index * 0.1}
              className="overflow-visible"
            >
              <div className="p-6 border-b">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{stack.title}</h2>
                    <p className="text-gray-600 mb-3">{stack.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {stack.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant={tagIndex % 3 === 0 ? 'primary' : tagIndex % 3 === 1 ? 'secondary' : 'accent'}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      Recommended for: <span className="font-medium text-gray-700">{stack.levelRecommendation}</span> developers
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleSaveStack(stack.id)}
                      className={`p-2 rounded-full ${
                        savedStacks.includes(stack.id)
                          ? 'text-accent-600 bg-accent-50'
                          : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                      }`}
                      aria-label={savedStacks.includes(stack.id) ? "Unsave stack" : "Save stack"}
                    >
                      <Heart
                        className="h-5 w-5"
                        fill={savedStacks.includes(stack.id) ? "currentColor" : "none"}
                      />
                    </button>
                    <button
                      onClick={() => handleCopyStack(stack.id)}
                      className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                      aria-label="Copy stack"
                    >
                      {copiedId === stack.id ? (
                        <Check className="h-5 w-5 text-success-600" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                {stack.suitableFor.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Suitable for projects like:</h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.suitableFor.map((project, projectIndex) => (
                        <span
                          key={projectIndex}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Frontend */}
                  <div>
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold">FE</span>
                      </span>
                      Frontend
                    </h3>
                    <ul className="space-y-3">
                      {stack.frontend.map((tech, techIndex) => (
                        <li key={techIndex} className="flex">
                          <div className="mr-3 flex-shrink-0 text-primary-600">
                            <Code className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{tech.name}</div>
                            <div className="text-sm text-gray-500">{tech.description}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Backend */}
                  <div>
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold">BE</span>
                      </span>
                      Backend
                    </h3>
                    <ul className="space-y-3">
                      {stack.backend.map((tech, techIndex) => (
                        <li key={techIndex} className="flex">
                          <div className="mr-3 flex-shrink-0 text-secondary-600">
                            <Code className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{tech.name}</div>
                            <div className="text-sm text-gray-500">{tech.description}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Other */}
                  <div>
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold">+</span>
                      </span>
                      Additional
                    </h3>
                    <ul className="space-y-3">
                      {stack.other.map((tech, techIndex) => (
                        <li key={techIndex} className="flex">
                          <div className="mr-3 flex-shrink-0 text-accent-600">
                            <Code className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{tech.name}</div>
                            <div className="text-sm text-gray-500">{tech.description}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                  <a
                    href="#"
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Learn more about this stack
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackPage;