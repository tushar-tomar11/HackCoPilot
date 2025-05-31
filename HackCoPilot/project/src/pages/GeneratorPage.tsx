import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Code, Lightbulb, PenTool, ChevronRight, Link as LinkIcon, BrainCircuit } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';

const GeneratorPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    devfolioLink: '',
    hackathonName: '',
    hackathonTheme: '',
    skills: [''],
    interests: [''],
    teamSize: '1',
    experienceLevel: 'intermediate',
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData(prev => ({ ...prev, skills: updatedSkills }));
  };

  const addSkill = () => {
    setFormData(prev => ({ ...prev, skills: [...prev.skills, ''] }));
  };

  const removeSkill = (index: number) => {
    if (formData.skills.length > 1) {
      const updatedSkills = [...formData.skills];
      updatedSkills.splice(index, 1);
      setFormData(prev => ({ ...prev, skills: updatedSkills }));
    }
  };

  const handleInterestChange = (index: number, value: string) => {
    const updatedInterests = [...formData.interests];
    updatedInterests[index] = value;
    setFormData(prev => ({ ...prev, interests: updatedInterests }));
  };

  const addInterest = () => {
    setFormData(prev => ({ ...prev, interests: [...prev.interests, ''] }));
  };

  const removeInterest = (index: number) => {
    if (formData.interests.length > 1) {
      const updatedInterests = [...formData.interests];
      updatedInterests.splice(index, 1);
      setFormData(prev => ({ ...prev, interests: updatedInterests }));
    }
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setIsCompleted(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Hackathon Kit Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill in the details below to generate your personalized hackathon kit.
          </p>
        </div>

        {!isCompleted ? (
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            {/* Progress Steps */}
            <div className="bg-gray-50 px-6 py-4 border-b">
              <div className="flex justify-between items-center">
                <div className={`flex items-center ${step >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 1 ? 'bg-primary-100' : 'bg-gray-200'}`}>
                    <span className="font-medium">1</span>
                  </div>
                  <span className="hidden sm:inline">Hackathon Info</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-primary-500' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center ${step >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 2 ? 'bg-primary-100' : 'bg-gray-200'}`}>
                    <span className="font-medium">2</span>
                  </div>
                  <span className="hidden sm:inline">Your Skills</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-primary-500' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center ${step >= 3 ? 'text-primary-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 3 ? 'bg-primary-100' : 'bg-gray-200'}`}>
                    <span className="font-medium">3</span>
                  </div>
                  <span className="hidden sm:inline">Preferences</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-6">
                {/* Step 1: Hackathon Info */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-semibold mb-4">Hackathon Information</h2>
                    
                    <Input
                      label="Devfolio Link (Optional)"
                      type="url"
                      name="devfolioLink"
                      placeholder="https://devfolio.co/hackathon/example"
                      value={formData.devfolioLink}
                      onChange={handleInputChange}
                      helperText="We'll extract hackathon details automatically if provided"
                      leftIcon={<LinkIcon className="h-4 w-4 text-gray-400" />}
                      fullWidth
                    />
                    
                    <Input
                      label="Hackathon Name"
                      type="text"
                      name="hackathonName"
                      placeholder="E.g., ETHGlobal, MLH Hackathon"
                      value={formData.hackathonName}
                      onChange={handleInputChange}
                      fullWidth
                      required
                    />
                    
                    <div className="space-y-1">
                      <label htmlFor="hackathonTheme" className="block text-sm font-medium text-gray-700">
                        Hackathon Theme (if any)
                      </label>
                      <textarea
                        id="hackathonTheme"
                        name="hackathonTheme"
                        rows={3}
                        placeholder="E.g., Sustainability, AI for Good, Web3"
                        value={formData.hackathonTheme}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      ></textarea>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Your Skills */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-semibold mb-4">Your Skills & Experience</h2>
                    
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Technical Skills
                      </label>
                      {formData.skills.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Input
                            type="text"
                            placeholder={`E.g., React, Python, UI/UX Design`}
                            value={skill}
                            onChange={(e) => handleSkillChange(index, e.target.value)}
                            fullWidth
                            className="flex-grow"
                            required={index === 0}
                          />
                          <button
                            type="button"
                            onClick={() => removeSkill(index)}
                            className="text-gray-400 hover:text-error-500"
                            disabled={formData.skills.length <= 1 && index === 0}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addSkill}
                        className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Add another skill
                      </button>
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700">
                        Experience Level
                      </label>
                      <select
                        id="experienceLevel"
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        required
                      >
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                      </select>
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700">
                        Team Size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        required
                      >
                        <option value="1">Solo (Just me)</option>
                        <option value="2">2 members</option>
                        <option value="3">3 members</option>
                        <option value="4">4 members</option>
                        <option value="5+">5+ members</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Preferences */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-semibold mb-4">Your Preferences</h2>
                    
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Areas of Interest
                      </label>
                      {formData.interests.map((interest, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Input
                            type="text"
                            placeholder={`E.g., AI, Web3, IoT, Mobile Apps`}
                            value={interest}
                            onChange={(e) => handleInterestChange(index, e.target.value)}
                            fullWidth
                            className="flex-grow"
                            required={index === 0}
                          />
                          <button
                            type="button"
                            onClick={() => removeInterest(index)}
                            className="text-gray-400 hover:text-error-500"
                            disabled={formData.interests.length <= 1 && index === 0}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addInterest}
                        className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Add another interest
                      </button>
                    </div>
                    
                    <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          <Sparkles className="h-5 w-5 text-primary-600" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-primary-800">Ready to generate your kit!</h3>
                          <div className="mt-2 text-sm text-primary-700">
                            <p>
                              We'll use your information to create personalized project ideas, tech stack recommendations,
                              starter templates, and pitch deck outlines.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="bg-gray-50 px-6 py-4 flex justify-between border-t">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {step < 3 ? (
                  <Button
                    type="button"
                    variant="primary"
                    onClick={nextStep}
                    rightIcon={<ChevronRight className="h-4 w-4" />}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={isGenerating}
                    leftIcon={!isGenerating && <Sparkles className="h-4 w-4" />}
                  >
                    Generate Kit
                  </Button>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-soft p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-success-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Your Hackathon Kit is Ready!</h2>
              <p className="text-gray-600 mb-6">
                We've generated personalized resources based on your input. Explore them below!
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['React', 'Node.js', 'TailwindCSS', 'TypeScript', 'Sustainability'].map((tag, index) => (
                  <Badge key={index} variant={index % 2 === 0 ? 'primary' : 'secondary'}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/project-ideas" className="group">
                <div className="bg-white rounded-xl shadow-soft p-6 h-full transition-all group-hover:shadow-md group-hover:-translate-y-1">
                  <div className="rounded-full bg-primary-100 text-primary-600 w-12 h-12 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">Project Ideas</h3>
                  <p className="text-gray-600 mb-4">
                    5 personalized project ideas based on the hackathon theme and your skills.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary-600">View Ideas</span>
                    <ChevronRight className="h-5 w-5 text-primary-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              <Link to="/tech-stack" className="group">
                <div className="bg-white rounded-xl shadow-soft p-6 h-full transition-all group-hover:shadow-md group-hover:-translate-y-1">
                  <div className="rounded-full bg-secondary-100 text-secondary-600 w-12 h-12 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary-600 transition-colors">Tech Stack</h3>
                  <p className="text-gray-600 mb-4">
                    Recommended technologies based on your project ideas and skill level.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">View Stack</span>
                    <ChevronRight className="h-5 w-5 text-secondary-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              <Link to="/templates" className="group">
                <div className="bg-white rounded-xl shadow-soft p-6 h-full transition-all group-hover:shadow-md group-hover:-translate-y-1">
                  <div className="rounded-full bg-accent-100 text-accent-600 w-12 h-12 flex items-center justify-center mb-4">
                    <PenTool className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-600 transition-colors">Templates</h3>
                  <p className="text-gray-600 mb-4">
                    Starter code templates to jumpstart your development process.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-accent-600">View Templates</span>
                    <ChevronRight className="h-5 w-5 text-accent-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              <Link to="/pitch-decks" className="group">
                <div className="bg-white rounded-xl shadow-soft p-6 h-full transition-all group-hover:shadow-md group-hover:-translate-y-1">
                  <div className="rounded-full bg-primary-100 text-primary-600 w-12 h-12 flex items-center justify-center mb-4">
                    <BrainCircuit className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">Pitch Decks</h3>
                  <p className="text-gray-600 mb-4">
                    Professional pitch deck templates to present your project to judges.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary-600">View Decks</span>
                    <ChevronRight className="h-5 w-5 text-primary-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex justify-center mt-8">
              <Link to="/dashboard">
                <Button variant="primary" size="lg">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratorPage;