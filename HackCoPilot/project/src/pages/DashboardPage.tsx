import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lightbulb, Code, PenTool, Presentation as PresentationChart, ArrowRight, Clock, Plus, Star, BarChart } from 'lucide-react';
import Button from '../components/ui/Button';
import AnimatedCard from '../components/ui/AnimatedCard';
import Badge from '../components/ui/Badge';

const DashboardPage: React.FC = () => {
  // Mock data for recent kits
  const recentKits = [
    {
      id: 1,
      name: 'EcoTrack',
      theme: 'Sustainability Hackathon',
      date: '2 days ago',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      name: 'MediConnect',
      theme: 'Healthcare Innovation',
      date: '1 week ago',
      tags: ['Flutter', 'Firebase', 'ML'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container-wide">
        {/* Dashboard Header */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Your Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's an overview of your hackathon kits</p>
            </div>
            <Link to="/generator">
              <Button 
                variant="primary"
                leftIcon={<Plus className="h-4 w-4" />}
              >
                New Kit
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <AnimatedCard delay={0.1} className="p-6">
            <div className="flex items-center">
              <div className="rounded-full bg-primary-100 p-3 mr-4">
                <Lightbulb className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Generated Ideas</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="p-6">
            <div className="flex items-center">
              <div className="rounded-full bg-secondary-100 p-3 mr-4">
                <Code className="h-6 w-6 text-secondary-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Tech Stacks</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.3} className="p-6">
            <div className="flex items-center">
              <div className="rounded-full bg-accent-100 p-3 mr-4">
                <PenTool className="h-6 w-6 text-accent-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Templates Used</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.4} className="p-6">
            <div className="flex items-center">
              <div className="rounded-full bg-success-100 p-3 mr-4">
                <Star className="h-6 w-6 text-success-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Completed Projects</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </AnimatedCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Kits */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold">Recent Kits</h2>
                <Link to="/dashboard" className="text-primary-600 text-sm flex items-center hover:text-primary-700">
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              {recentKits.length > 0 ? (
                <div className="divide-y">
                  {recentKits.map((kit) => (
                    <div key={kit.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-lg">{kit.name}</h3>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {kit.date}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{kit.theme}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {kit.tags.map((tag, index) => (
                          <Badge key={index} variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2 mt-2">
                        <Link to={`/project-ideas?kit=${kit.id}`}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                        <Link to={`/generator?edit=${kit.id}`}>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Plus className="h-6 w-6 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No kits yet</h3>
                  <p className="text-gray-500 mb-4">
                    Generate your first hackathon kit to get started
                  </p>
                  <Link to="/generator">
                    <Button variant="primary">
                      Create Your First Kit
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Resources and Activity */}
          <div className="space-y-8">
            {/* Quick Access */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Quick Access</h2>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/project-ideas" className="group">
                    <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors text-center">
                      <Lightbulb className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                      <p className="text-sm font-medium">Project Ideas</p>
                    </div>
                  </Link>
                  <Link to="/tech-stack" className="group">
                    <div className="p-4 border border-gray-200 rounded-lg hover:border-secondary-300 hover:bg-secondary-50 transition-colors text-center">
                      <Code className="h-6 w-6 mx-auto mb-2 text-secondary-600" />
                      <p className="text-sm font-medium">Tech Stack</p>
                    </div>
                  </Link>
                  <Link to="/templates" className="group">
                    <div className="p-4 border border-gray-200 rounded-lg hover:border-accent-300 hover:bg-accent-50 transition-colors text-center">
                      <PenTool className="h-6 w-6 mx-auto mb-2 text-accent-600" />
                      <p className="text-sm font-medium">Templates</p>
                    </div>
                  </Link>
                  <Link to="/pitch-decks" className="group">
                    <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors text-center">
                      <PresentationChart className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                      <p className="text-sm font-medium">Pitch Decks</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Your Progress</h2>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">EcoTrack Project</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">MediConnect Project</span>
                    <span className="text-sm text-gray-500">40%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary-600 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Hackathons */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Upcoming Hackathons</h2>
              </div>
              <div className="p-6">
                <div className="mb-4 pb-4 border-b">
                  <h3 className="font-medium mb-1">ETHGlobal 2025</h3>
                  <p className="text-sm text-gray-600 mb-2">May 15-18, 2025</p>
                  <Badge variant="primary">Web3</Badge>
                </div>
                <div>
                  <h3 className="font-medium mb-1">MLH Hackathon 2025</h3>
                  <p className="text-sm text-gray-600 mb-2">June 10-12, 2025</p>
                  <Badge variant="secondary">AI/ML</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;