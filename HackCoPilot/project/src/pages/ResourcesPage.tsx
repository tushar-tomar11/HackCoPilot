import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ArrowRight, Search, ExternalLink, Filter, Clock, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import AnimatedCard from '../components/ui/AnimatedCard';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';

const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Technical', 'Design', 'Presentation', 'Project Management', 'Inspiration'];

  const resources = [
    {
      id: 1,
      title: 'The Ultimate Hackathon Checklist',
      description: 'A comprehensive checklist covering everything you need before, during, and after a hackathon.',
      image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Project Management',
      readTime: '7 min read',
      author: 'Sarah Johnson',
      date: 'Apr 12, 2025',
      tags: ['Planning', 'Organization', 'Productivity'],
      link: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Rapid Prototyping Techniques for Hackathons',
      description: 'Learn how to quickly build functional prototypes to demonstrate your ideas effectively.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Technical',
      readTime: '12 min read',
      author: 'David Chen',
      date: 'Mar 28, 2025',
      tags: ['Prototyping', 'Development', 'MVP'],
      link: '#',
      featured: false,
    },
    {
      id: 3,
      title: 'Crafting a Winning Pitch: Tips from Hackathon Judges',
      description: 'Insider advice from experienced hackathon judges on what makes a pitch stand out.',
      image: 'https://images.pexels.com/photos/7235677/pexels-photo-7235677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Presentation',
      readTime: '9 min read',
      author: 'Michelle Rodriguez',
      date: 'Apr 5, 2025',
      tags: ['Pitching', 'Presentation', 'Communication'],
      link: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'UI/UX Design Principles for Hackathon Projects',
      description: 'Essential design principles to create user-friendly interfaces in a limited timeframe.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Design',
      readTime: '10 min read',
      author: 'Alex Thompson',
      date: 'Mar 15, 2025',
      tags: ['UI/UX', 'Design', 'User Experience'],
      link: '#',
      featured: false,
    },
    {
      id: 5,
      title: '10 Inspiring Hackathon Projects That Changed Industries',
      description: 'A showcase of innovative hackathon projects that went on to become successful startups.',
      image: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Inspiration',
      readTime: '15 min read',
      author: 'Priya Patel',
      date: 'Apr 10, 2025',
      tags: ['Success Stories', 'Innovation', 'Startups'],
      link: '#',
      featured: true,
    },
    {
      id: 6,
      title: 'Building Effective Teams for Hackathons',
      description: 'Strategies for assembling a well-balanced team with complementary skills.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Project Management',
      readTime: '8 min read',
      author: 'James Wilson',
      date: 'Mar 22, 2025',
      tags: ['Teamwork', 'Collaboration', 'Leadership'],
      link: '#',
      featured: false,
    },
  ];

  const filteredResources = resources
    .filter(resource => 
      (activeCategory === 'All' || resource.category === activeCategory) &&
      (searchQuery === '' || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    );

  // Extract featured resources
  const featuredResources = filteredResources.filter(resource => resource.featured);
  const regularResources = filteredResources.filter(resource => !resource.featured);

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
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Hackathon Resources</h1>
              </div>
              <p className="text-gray-600">
                Learn from guides, tips, and best practices for hackathon success
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
                leftIcon={<Search className="h-4 w-4 text-gray-400" />}
                containerClassName="w-full md:w-64"
              />
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="mb-8 flex items-center overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex space-x-4">
            {categories.map(category => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-md whitespace-nowrap ${
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
        </div>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Star className="h-5 w-5 text-warning-500 mr-2" />
              Featured Resources
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredResources.map((resource, index) => (
                <AnimatedCard
                  key={resource.id}
                  delay={index * 0.1}
                  className="flex flex-col overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant={
                          resource.category === 'Technical'
                            ? 'primary'
                            : resource.category === 'Design'
                            ? 'secondary'
                            : resource.category === 'Presentation'
                            ? 'accent'
                            : resource.category === 'Project Management'
                            ? 'success'
                            : 'warning'
                        }
                      >
                        {resource.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{resource.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{resource.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
                    <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <a
                      href={resource.link}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read full article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        )}

        {/* All Resources */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="h-5 w-5 text-gray-700 mr-2" />
            All Resources
            {searchQuery && (
              <span className="ml-2 text-lg font-normal text-gray-500">
                for "{searchQuery}"
              </span>
            )}
          </h2>
          
          {regularResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularResources.map((resource, index) => (
                <AnimatedCard
                  key={resource.id}
                  delay={index * 0.1}
                  className="flex flex-col overflow-hidden"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant={
                          resource.category === 'Technical'
                            ? 'primary'
                            : resource.category === 'Design'
                            ? 'secondary'
                            : resource.category === 'Presentation'
                            ? 'accent'
                            : resource.category === 'Project Management'
                            ? 'success'
                            : 'warning'
                        }
                      >
                        {resource.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{resource.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{resource.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
                    <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <a
                      href={resource.link}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read full article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-soft p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="h-6 w-6 text-gray-500" />
              </div>
              <h3 className="text-lg font-medium mb-2">No resources found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Resource Collections */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Resource Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-soft group hover:shadow-md transition-shadow">
              <div className="rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <BookOpen className="h-5 w-5 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">First-time Hacker Guide</h3>
              <p className="text-gray-600 mb-4">
                Essential resources for those participating in their first hackathon.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                View collection
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft group hover:shadow-md transition-shadow">
              <div className="rounded-full bg-secondary-100 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-secondary-200 transition-colors">
                <BookOpen className="h-5 w-5 text-secondary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-secondary-600 transition-colors">Technical Workshops</h3>
              <p className="text-gray-600 mb-4">
                Tutorials and guides on popular technologies used in hackathons.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-medium"
              >
                View collection
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft group hover:shadow-md transition-shadow">
              <div className="rounded-full bg-accent-100 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-accent-200 transition-colors">
                <BookOpen className="h-5 w-5 text-accent-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-600 transition-colors">Presentation Mastery</h3>
              <p className="text-gray-600 mb-4">
                Resources to help you create and deliver compelling presentations.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium"
              >
                View collection
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl shadow-soft text-white p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
                <p className="text-white/80">
                  Subscribe to our newsletter to receive the latest hackathon resources, tips, and upcoming events.
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="rounded-l-md px-4 py-2 w-full focus:outline-none"
                  />
                  <button className="bg-accent-700 hover:bg-accent-800 text-white px-4 py-2 rounded-r-md transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;