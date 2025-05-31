import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Presentation as PresentationChart, ArrowRight, ExternalLink, Image, FileText } from 'lucide-react';
import Button from '../components/ui/Button';
import AnimatedCard from '../components/ui/AnimatedCard';
import Badge from '../components/ui/Badge';

const PitchDecksPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Sustainability', 'Healthcare', 'Education', 'Community', 'Financial'];

  const pitchDecks = [
    {
      id: 1,
      title: 'Eco-Innovation Pitch Deck',
      description: 'Professional pitch deck template for sustainability-focused projects. Includes slides for environmental impact metrics and SDG alignment.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Sustainability',
      downloads: 874,
      format: 'PowerPoint & Google Slides',
      slideCount: 18,
      tags: ['Sustainability', 'Environmental', 'SDG'],
      features: [
        'Impact assessment slide templates',
        'Sustainability metrics visualizations',
        'Carbon footprint comparison charts',
        'SDG alignment framework',
        'Environmental benefits showcase',
      ],
    },
    {
      id: 2,
      title: 'Healthcare Innovation Deck',
      description: 'Comprehensive pitch deck for healthcare solutions with slides for clinical validation, patient impact, and regulatory compliance.',
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Healthcare',
      downloads: 692,
      format: 'PowerPoint & Figma',
      slideCount: 20,
      tags: ['Healthcare', 'Medical', 'Clinical'],
      features: [
        'Patient journey mapping slides',
        'Clinical validation frameworks',
        'Healthcare metrics dashboard',
        'Medical illustration templates',
        'HIPAA compliance checklist',
      ],
    },
    {
      id: 3,
      title: 'EdTech Innovator Deck',
      description: 'Modern pitch deck for educational technology projects with slides for learning outcomes, engagement metrics, and accessibility features.',
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Education',
      downloads: 531,
      format: 'PowerPoint, Keynote & Canva',
      slideCount: 16,
      tags: ['Education', 'EdTech', 'Learning'],
      features: [
        'Learning outcome measurement slides',
        'Student engagement visualizations',
        'Accessibility feature showcase',
        'Educational impact metrics',
        'Classroom integration roadmap',
      ],
    },
    {
      id: 4,
      title: 'Community Impact Deck',
      description: 'Engaging pitch deck for community-focused projects with slides for social impact measurement, community engagement, and scaling strategies.',
      image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Community',
      downloads: 428,
      format: 'PowerPoint & Google Slides',
      slideCount: 15,
      tags: ['Community', 'Social Impact', 'Nonprofit'],
      features: [
        'Social impact measurement frameworks',
        'Community engagement visualizations',
        'Volunteer coordination templates',
        'Local economic impact slides',
        'Community feedback showcase',
      ],
    },
  ];

  const filteredDecks = activeCategory === 'All' 
    ? pitchDecks 
    : pitchDecks.filter(deck => deck.category === activeCategory);

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
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Pitch Deck Templates</h1>
              </div>
              <p className="text-gray-600">
                Professional pitch deck templates to present your project to judges
              </p>
            </div>
            <Link to="/generator">
              <Button variant="primary" leftIcon={<PresentationChart className="h-4 w-4" />}>
                Generate Custom Deck
              </Button>
            </Link>
          </div>
        </div>

        {/* Deck Categories */}
        <div className="mb-8 flex flex-wrap gap-4">
          {categories.map(category => (
            <button 
              key={category}
              className={`px-4 py-2 rounded-md ${
                activeCategory === category 
                  ? 'bg-primary-100 text-primary-700 font-medium' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 font-medium'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pitch Decks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDecks.map((deck, index) => (
            <AnimatedCard
              key={deck.id}
              delay={index * 0.1}
              className="flex flex-col overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deck.image}
                  alt={deck.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={
                      deck.category === 'Sustainability'
                        ? 'success'
                        : deck.category === 'Healthcare'
                        ? 'primary'
                        : deck.category === 'Education'
                        ? 'secondary'
                        : 'accent'
                    }
                  >
                    {deck.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-white text-xs">
                  {deck.slideCount} slides
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-semibold mb-2">{deck.title}</h2>
                <p className="text-gray-600 mb-4 text-sm">{deck.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {deck.tags.map((tag, tagIndex) => (
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
                  <span className="font-medium text-gray-700">{deck.format}</span> • {deck.downloads} downloads
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Key Features:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {deck.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {deck.features.length > 3 && (
                      <li className="text-primary-600 cursor-pointer hover:underline">
                        + {deck.features.length - 3} more features
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
                    aria-label="Preview Slides"
                  >
                    <Image className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="px-3"
                    aria-label="Template Documentation"
                  >
                    <FileText className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Custom Request */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl shadow-soft text-white p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Pitch Deck?</h2>
            <p className="text-white/80 mb-6">
              We can generate a fully customized pitch deck tailored to your specific project requirements,
              industry, and audience. Just provide us with your project details and preferences.
            </p>
            <Link to="/generator">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Request Custom Deck
              </Button>
            </Link>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Pitch Deck Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-primary-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Keep It Concise</h3>
              <p className="text-gray-600">
                Limit your presentation to 10-15 slides. Focus on the most important aspects of your project.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="rounded-full bg-secondary-100 w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-secondary-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Tell a Story</h3>
              <p className="text-gray-600">
                Structure your pitch as a narrative. Start with the problem, introduce your solution, and conclude with your vision.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="rounded-full bg-accent-100 w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-accent-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Show, Don't Tell</h3>
              <p className="text-gray-600">
                Use visuals, demos, and prototypes to demonstrate your project rather than just describing it.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a 
              href="#" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Read our complete guide to winning pitch presentations
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDecksPage;