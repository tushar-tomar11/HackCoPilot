import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ThumbsUp, ThumbsDown, Heart, ArrowLeft, MessageCircle, Share2 } from 'lucide-react';
import Button from '../components/ui/Button';
import AnimatedCard from '../components/ui/AnimatedCard';
import Badge from '../components/ui/Badge';
import { Link } from 'react-router-dom';

const ProjectIdeasPage: React.FC = () => {
  // Sample project ideas
  const projectIdeas = [
    {
      id: 1,
      title: "EcoTrack: Sustainable Supply Chain Tracker",
      description: "A blockchain-based platform that tracks products from source to consumer, verifying ethical sourcing and sustainability practices. Users can scan QR codes to see the entire journey of a product, including its carbon footprint and fair trade certifications.",
      difficulty: "Intermediate",
      category: "Sustainability",
      tags: ["Blockchain", "React", "Mobile App", "Sustainability"],
      likes: 128,
      saves: 45,
      comments: 12,
    },
    {
      id: 2,
      title: "MediConnect: AI-Powered Healthcare Assistant",
      description: "An AI-powered healthcare platform that connects patients with doctors, provides personalized health recommendations, and helps manage prescriptions. It uses natural language processing to understand symptoms and suggest potential diagnoses.",
      difficulty: "Advanced",
      category: "Healthcare",
      tags: ["AI/ML", "React Native", "Node.js", "Healthcare"],
      likes: 97,
      saves: 36,
      comments: 8,
    },
    {
      id: 3,
      title: "LearningBlocks: Adaptive Learning Platform",
      description: "An educational platform that uses machine learning to adapt content based on a student's learning style, pace, and areas of difficulty. It generates personalized learning paths and interactive exercises.",
      difficulty: "Intermediate",
      category: "Education",
      tags: ["Python", "React", "Machine Learning", "Education"],
      likes: 84,
      saves: 29,
      comments: 6,
    },
    {
      id: 4,
      title: "CommunityShare: Local Resource Exchange",
      description: "A peer-to-peer platform for communities to share resources, skills, and tools. Users can lend items, offer services, or organize local initiatives to reduce waste and build community resilience.",
      difficulty: "Beginner",
      category: "Community",
      tags: ["Vue.js", "Firebase", "Maps API", "Sharing Economy"],
      likes: 62,
      saves: 18,
      comments: 4,
    },
    {
      id: 5,
      title: "FoodRescue: Zero Waste Food Distribution",
      description: "An app connecting restaurants and grocery stores with excess food to local charities and food banks. It optimizes logistics to ensure food is distributed before it spoils, reducing waste and helping those in need.",
      difficulty: "Intermediate",
      category: "Sustainability",
      tags: ["Flutter", "Firebase", "Google Maps", "Food Waste"],
      likes: 104,
      saves: 41,
      comments: 9,
    },
  ];

  const [likedIdeas, setLikedIdeas] = useState<number[]>([]);
  const [dislikedIdeas, setDislikedIdeas] = useState<number[]>([]);
  const [savedIdeas, setSavedIdeas] = useState<number[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [difficultyFilter, setDifficultyFilter] = useState<string>("All");

  const handleLike = (id: number) => {
    if (likedIdeas.includes(id)) {
      setLikedIdeas(likedIdeas.filter((ideaId) => ideaId !== id));
    } else {
      setLikedIdeas([...likedIdeas, id]);
      setDislikedIdeas(dislikedIdeas.filter((ideaId) => ideaId !== id));
    }
  };

  const handleDislike = (id: number) => {
    if (dislikedIdeas.includes(id)) {
      setDislikedIdeas(dislikedIdeas.filter((ideaId) => ideaId !== id));
    } else {
      setDislikedIdeas([...dislikedIdeas, id]);
      setLikedIdeas(likedIdeas.filter((ideaId) => ideaId !== id));
    }
  };

  const handleSave = (id: number) => {
    if (savedIdeas.includes(id)) {
      setSavedIdeas(savedIdeas.filter((ideaId) => ideaId !== id));
    } else {
      setSavedIdeas([...savedIdeas, id]);
    }
  };

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const allTags = Array.from(
    new Set(projectIdeas.flatMap((idea) => idea.tags))
  );

  const filteredIdeas = projectIdeas.filter((idea) => {
    const matchesDifficulty = difficultyFilter === "All" || idea.difficulty === difficultyFilter;
    const matchesTags = selectedFilters.length === 0 || idea.tags.some((tag) => selectedFilters.includes(tag));
    return matchesDifficulty && matchesTags;
  });

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
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Project Ideas</h1>
              </div>
              <p className="text-gray-600">
                Explore personalized project ideas based on your skills and interests
              </p>
            </div>
            <Link to="/generator">
              <Button variant="primary" leftIcon={<Lightbulb className="h-4 w-4" />}>
                Generate More Ideas
              </Button>
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <div className="flex flex-wrap gap-2">
                {["All", "Beginner", "Intermediate", "Advanced"].map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setDifficultyFilter(difficulty)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      difficultyFilter === difficulty
                        ? "bg-primary-100 text-primary-800 border border-primary-200"
                        : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleFilter(tag)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedFilters.includes(tag)
                        ? "bg-secondary-100 text-secondary-800 border border-secondary-200"
                        : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Ideas */}
        <div className="space-y-6">
          {filteredIdeas.map((idea, index) => (
            <AnimatedCard 
              key={idea.id} 
              delay={index * 0.1}
              className="p-6"
            >
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
                  <Badge 
                    variant={
                      idea.difficulty === "Beginner" 
                        ? "success" 
                        : idea.difficulty === "Intermediate" 
                          ? "warning" 
                          : "error"
                    }
                  >
                    {idea.difficulty}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">{idea.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {idea.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant={tagIndex % 3 === 0 ? 'primary' : tagIndex % 3 === 1 ? 'secondary' : 'accent'}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => handleLike(idea.id)}
                      className={`flex items-center text-sm ${likedIdeas.includes(idea.id) ? 'text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>{idea.likes + (likedIdeas.includes(idea.id) ? 1 : 0)}</span>
                    </button>
                    <button 
                      onClick={() => handleDislike(idea.id)}
                      className={`flex items-center text-sm ${dislikedIdeas.includes(idea.id) ? 'text-error-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      <ThumbsDown className="h-4 w-4 mr-1" />
                    </button>
                    <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span>{idea.comments}</span>
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleSave(idea.id)}
                      className={`flex items-center p-1.5 rounded-full ${savedIdeas.includes(idea.id) ? 'text-accent-600 bg-accent-50' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                      <Heart className="h-4 w-4" fill={savedIdeas.includes(idea.id) ? "currentColor" : "none"} />
                    </button>
                    <button className="flex items-center p-1.5 rounded-full text-gray-500 hover:bg-gray-100">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectIdeasPage;