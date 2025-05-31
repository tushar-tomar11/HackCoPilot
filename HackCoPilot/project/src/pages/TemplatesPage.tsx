import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, PenTool, ArrowRight, Github, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';
import AnimatedCard from '../components/ui/AnimatedCard';
import Badge from '../components/ui/Badge';

const TemplatesPage: React.FC = () => {
  const templates = [
    {
      id: 1,
      title: 'Sustainable Web App Starter',
      description: 'A starter template for building sustainable web applications with React, NextJS, and TailwindCSS.',
      image: 'https://images.pexels.com/photos/7735699/pexels-photo-7735699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Frontend',
      downloads: 1287,
      framework: 'React + Next.js',
      tags: ['React', 'Next.js', 'TailwindCSS', 'Sustainability'],
      features: [
        'Server-side rendering for reduced client-side processing',
        'Optimized image loading and compression',
        'Dark mode support to reduce screen energy usage',
        'Minimal JavaScript bundle size',
        'Performance-optimized components',
      ],
    },
    {
      id: 2,
      title: 'Healthcare AI Backend',
      description: 'Backend template for AI-powered healthcare applications with FastAPI, PostgreSQL, and TensorFlow.',
      image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Backend',
      downloads: 965,
      framework: 'Python + FastAPI',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'AI/ML', 'Healthcare'],
      features: [
        'HIPAA-compliant data structure patterns',
        'Pre-configured TensorFlow pipeline',
        'Secure API endpoints with authentication',
        'Healthcare data validators and serializers',
        'Docker configuration for easy deployment',
      ],
    },
    {
      id: 3,
      title: 'Educational Platform Fullstack',
      description: 'Complete fullstack template for building interactive educational platforms with Vue, NestJS, and PostgreSQL.',
      image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Fullstack',
      downloads: 742,
      framework: 'Vue + NestJS',
      tags: ['Vue.js', 'NestJS', 'PostgreSQL', 'Education'],
      features: [
        'Interactive learning components',
        'Progress tracking system',
        'Content management for educational materials',
        'Student dashboard and analytics',
        'Real-time collaboration features',
      ],
    },
  ];

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
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Project Templates</h1>
              </div>
              <p className="text-gray-600">
                Ready-to-use starter templates to jumpstart your hackathon project
              </p>
            </div>
            <Link to="/generator">
              <Button variant="primary" leftIcon={<PenTool className="h-4 w-4" />}>
                Generate More Templates
              </Button>
            </Link>
          </div>
        </div>

        {/* Template Categories */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button className="px-4 py-2 rounded-md bg-primary-100 text-primary-700 font-medium">
            All Templates
          </button>
          <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100 font-medium">
            Frontend
          </button>
          <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100 font-medium">
            Backend
          </button>
          <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100 font-medium">
            Fullstack
          </button>
          <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100 font-medium">
            Mobile
          </button>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <AnimatedCard
              key={template.id}
              delay={index * 0.1}
              className="flex flex-col overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={
                      template.category === 'Frontend'
                        ? 'primary'
                        : template.category === 'Backend'
                        ? 'secondary'
                        : 'accent'
                    }
                  >
                    {template.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-semibold mb-2">{template.title}</h2>
                <p className="text-gray-600 mb-4 text-sm">{template.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-medium text-gray-700">{template.framework}</span> • {template.downloads} downloads
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Key Features:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {template.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {template.features.length > 3 && (
                      <li className="text-primary-600 cursor-pointer hover:underline">
                        + {template.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <div className="flex space-x-3">
                  <Button
                    variant="primary"
                    className="flex-1"
                    leftIcon={<Download className="h-4 w-4" />}
                  >
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    className="px-3"
                    aria-label="View on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="px-3"
                    aria-label="Preview"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Load More Templates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;