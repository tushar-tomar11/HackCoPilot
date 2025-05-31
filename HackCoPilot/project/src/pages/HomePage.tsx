import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lightbulb, Code, PenTool, Presentation as PresentationChart, ArrowRight } from 'lucide-react';
import AnimatedCard from '../components/ui/AnimatedCard';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb className="h-6 w-6 text-primary-600" />,
      title: 'Project Ideas',
      description: 'Get personalized project ideas based on your skills and hackathon theme.',
      color: 'from-primary-50 to-accent-50',
      delay: 0.1,
    },
    {
      icon: <Code className="h-6 w-6 text-secondary-600" />,
      title: 'Tech Stack',
      description: 'Receive recommendations for the best technologies to use for your project.',
      color: 'from-secondary-50 to-primary-50',
      delay: 0.2,
    },
    {
      icon: <PenTool className="h-6 w-6 text-accent-600" />,
      title: 'Templates',
      description: 'Access starter code templates to jumpstart your development process.',
      color: 'from-accent-50 to-secondary-50',
      delay: 0.3,
    },
    {
      icon: <PresentationChart className="h-6 w-6 text-primary-600" />,
      title: 'Pitch Decks',
      description: 'Generate professional pitch decks to present your project to judges.',
      color: 'from-primary-50 to-secondary-50',
      delay: 0.4,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 text-white">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Your Personal <br />
                <span className="text-accent-300">Hackathon Assistant</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Generate personalized project ideas, tech stack recommendations, 
                templates, and pitch decks for your next hackathon.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/generator" className="bg-white text-primary-700 hover:bg-gray-100 transition-colors py-3 px-6 rounded-md font-medium text-center">
                  Generate Your Kit
                </Link>
                <Link to="/resources" className="border border-white text-white hover:bg-white/10 transition-colors py-3 px-6 rounded-md font-medium text-center">
                  Explore Resources
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Hackathon team working together" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Everything You Need to Win
            </h2>
            <p className="text-lg text-gray-600">
              Our platform provides all the tools and resources you need to create an outstanding hackathon project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard 
                key={index} 
                delay={feature.delay}
                className={`bg-gradient-to-br ${feature.color} p-6 border border-gray-100`}
              >
                <div className="rounded-full bg-white p-3 w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Our simple process helps you go from idea to implementation in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary-100 text-primary-600 w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Input Your Details</h3>
              <p className="text-gray-600">
                Enter your skills, the hackathon theme, and your Devfolio link to get started.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-secondary-100 text-secondary-600 w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Generate Resources</h3>
              <p className="text-gray-600">
                Our platform analyzes your inputs and generates personalized resources.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-accent-100 text-accent-600 w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Your Project</h3>
              <p className="text-gray-600">
                Use the generated resources to build and present your hackathon project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how our platform has helped hackathon participants succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1} className="p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Winner, ETHGlobal 2024</p>
                </div>
              </div>
              <p className="text-gray-600">
                "HackCoPilot helped me generate an amazing project idea and tech stack recommendation that impressed the judges. I wouldn't have won without it!"
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Michael Chen" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Participant, MLH 2024</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The templates provided by HackCoPilot saved me hours of setup time. I could focus on building features instead of boilerplate code."
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Aisha Patel" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Aisha Patel</h4>
                  <p className="text-sm text-gray-500">Winner, Devfolio Hackathon</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The pitch deck generator helped me create a professional presentation that clearly communicated my project's value. It made all the difference!"
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Win Your Next Hackathon?
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Get started with HackCoPilot today and take your hackathon projects to the next level.
            </p>
            <Link to="/generator" className="inline-flex items-center bg-white text-primary-700 hover:bg-gray-100 transition-colors py-3 px-6 rounded-md font-medium">
              Generate Your Kit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;