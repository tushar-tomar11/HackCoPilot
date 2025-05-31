import React, { useState } from 'react';
import { ArrowLeft, Settings, Edit, Save, X, PenTool, Lightbulb, Code, Presentation as PresentationChart, FileText, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import AnimatedCard from '../components/ui/AnimatedCard';

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    role: 'Full Stack Developer',
    bio: 'Passionate developer with experience in React, Node.js, and Python. I love participating in hackathons and building innovative solutions to real-world problems.',
    skills: ['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'UI/UX Design'],
    interests: ['Web Development', 'AI/ML', 'Sustainability', 'Education'],
    experience: 'Intermediate',
    email: 'alex.johnson@example.com',
    github: 'github.com/alexjohnson',
    devfolio: 'devfolio.co/alexjohnson',
  });

  const [editedData, setEditedData] = useState({ ...profileData });

  const handleEditToggle = () => {
    if (isEditing) {
      setProfileData(editedData);
    } else {
      setEditedData({ ...profileData });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedData(prev => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setEditedData({ ...profileData });
    setIsEditing(false);
  };

  // Sample data
  const achievements = [
    { id: 1, title: 'ETHGlobal 2024', type: 'Winner', category: 'Best Sustainability Solution', date: 'Apr 2024' },
    { id: 2, title: 'HealthTech Hackathon', type: 'Runner-up', category: 'Most Innovative Idea', date: 'Feb 2024' },
    { id: 3, title: 'MLH Hackathon 2023', type: 'Participant', category: 'AI Category', date: 'Nov 2023' },
  ];

  const activity = [
    { id: 1, type: 'generated', item: 'EcoTrack Project Idea', date: '2 days ago' },
    { id: 2, type: 'saved', item: 'Healthcare AI Backend Template', date: '1 week ago' },
    { id: 3, type: 'downloaded', item: 'Eco-Innovation Pitch Deck', date: '2 weeks ago' },
    { id: 4, type: 'generated', item: 'MediConnect Tech Stack', date: '3 weeks ago' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container-wide">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Link to="/dashboard" className="text-gray-500 hover:text-gray-700 mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Your Profile</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="flex justify-between items-start p-6 border-b">
                <h2 className="text-xl font-semibold">Profile Information</h2>
                <Button
                  variant={isEditing ? 'primary' : 'outline'}
                  size="sm"
                  leftIcon={isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                  onClick={handleEditToggle}
                >
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </Button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {isEditing && (
                      <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                        <PenTool className="h-4 w-4 text-gray-600" />
                      </button>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    {isEditing ? (
                      <>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={editedData.name}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                          <input
                            type="text"
                            name="role"
                            value={editedData.role}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-semibold">{profileData.name}</h3>
                        <p className="text-gray-600">{profileData.role}</p>
                        <div className="flex space-x-4 mt-2">
                          <a href={`https://${profileData.github}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-700">
                            GitHub
                          </a>
                          <a href={`https://${profileData.devfolio}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-700">
                            Devfolio
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  {isEditing ? (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      <textarea
                        name="bio"
                        rows={4}
                        value={editedData.bio}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                  ) : (
                    <p className="text-gray-600">{profileData.bio}</p>
                  )}
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Skills</h3>
                  {isEditing ? (
                    <div className="mb-4">
                      <input
                        type="text"
                        name="skills"
                        value={editedData.skills.join(', ')}
                        onChange={(e) => setEditedData({
                          ...editedData,
                          skills: e.target.value.split(',').map(skill => skill.trim()).filter(Boolean)
                        })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        placeholder="Separate skills with commas"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.map((skill, index) => (
                        <Badge key={index} variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Interests</h3>
                  {isEditing ? (
                    <div className="mb-4">
                      <input
                        type="text"
                        name="interests"
                        value={editedData.interests.join(', ')}
                        onChange={(e) => setEditedData({
                          ...editedData,
                          interests: e.target.value.split(',').map(interest => interest.trim()).filter(Boolean)
                        })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        placeholder="Separate interests with commas"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profileData.interests.map((interest, index) => (
                        <Badge key={index} variant="outline">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {isEditing && (
                  <div className="mt-6 flex justify-end space-x-3">
                    <Button
                      variant="outline"
                      onClick={handleCancel}
                      leftIcon={<X className="h-4 w-4" />}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-soft mt-8">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Hackathon Achievements</h2>
              </div>
              <div className="p-6">
                {achievements.length > 0 ? (
                  <div className="space-y-6">
                    {achievements.map((achievement) => (
                      <div key={achievement.id} className="flex">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                            <Medal className="h-6 w-6 text-primary-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium">{achievement.title}</h3>
                          <div className="flex items-center mt-1">
                            <Badge 
                              variant={
                                achievement.type === 'Winner' 
                                  ? 'success' 
                                  : achievement.type === 'Runner-up' 
                                  ? 'warning' 
                                  : 'outline'
                              }
                            >
                              {achievement.type}
                            </Badge>
                            <span className="text-sm text-gray-500 ml-2">{achievement.category}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{achievement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <Medal className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No achievements yet</h3>
                    <p className="text-gray-500 mb-4">
                      Participate in hackathons to earn achievements
                    </p>
                    <Link to="/resources">
                      <Button variant="outline">
                        Explore Hackathons
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Account Settings */}
            <div className="bg-white rounded-xl shadow-soft">
              <div className="p-6 border-b flex items-center justify-between">
                <h2 className="text-xl font-semibold">Account Settings</h2>
                <Settings className="h-5 w-5 text-gray-500" />
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Email</h3>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={editedData.email}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    ) : (
                      <p className="text-gray-600">{profileData.email}</p>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Experience Level</h3>
                    {isEditing ? (
                      <select
                        name="experience"
                        value={editedData.experience}
                        onChange={(e) => setEditedData({ ...editedData, experience: e.target.value })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    ) : (
                      <p className="text-gray-600">{profileData.experience}</p>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">GitHub</h3>
                    {isEditing ? (
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-1">github.com/</span>
                        <input
                          type="text"
                          name="github"
                          value={editedData.github.replace('github.com/', '')}
                          onChange={(e) => setEditedData({ ...editedData, github: `github.com/${e.target.value}` })}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                      </div>
                    ) : (
                      <a 
                        href={`https://${profileData.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {profileData.github}
                      </a>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Devfolio</h3>
                    {isEditing ? (
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-1">devfolio.co/</span>
                        <input
                          type="text"
                          name="devfolio"
                          value={editedData.devfolio.replace('devfolio.co/', '')}
                          onChange={(e) => setEditedData({ ...editedData, devfolio: `devfolio.co/${e.target.value}` })}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                      </div>
                    ) : (
                      <a 
                        href={`https://${profileData.devfolio}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {profileData.devfolio}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-soft">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {activity.map((item) => (
                    <div key={item.id} className="flex">
                      <div className="mr-3 flex-shrink-0">
                        {item.type === 'generated' && <Lightbulb className="h-5 w-5 text-primary-600" />}
                        {item.type === 'saved' && <Code className="h-5 w-5 text-secondary-600" />}
                        {item.type === 'downloaded' && <PresentationChart className="h-5 w-5 text-accent-600" />}
                      </div>
                      <div>
                        <p className="text-sm">
                          You {item.type} <span className="font-medium">{item.item}</span>
                        </p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subscription */}
            <AnimatedCard className="bg-gradient-to-r from-primary-600 to-accent-600 text-white">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Free Account</h2>
                <p className="text-white/80 mb-4">
                  You're currently on the free plan with limited features.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Upgrade to Pro
                </Button>
              </div>
            </AnimatedCard>

            {/* Need Help? */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <div className="flex items-start">
                <div className="mr-3 flex-shrink-0">
                  <FileText className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium">Need help?</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Check our <a href="#" className="text-primary-600 hover:underline">documentation</a> or <a href="#" className="text-primary-600 hover:underline">contact support</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;