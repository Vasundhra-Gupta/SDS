import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//counseling webinar page
export default  function CounsellorHome  ()  {
  const [activeTab, setActiveTab] = useState("webinars");
  const [showCounselorForm, setShowCounselorForm] = useState(false);
  const [registeredWebinars, setRegisteredWebinars] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    experience: "",
    bio: ""
  });

  // Sample webinar data
  const [webinars, setWebinars] = useState([
    {
      id: 1,
      title: "Career Paths in Computer Science",
      date: "June 15, 2023",
      time: "3:00 PM EST",
      category: "Technology",
      speaker: "Dr. Sarah Johnson",
      description: "Explore various career opportunities in the fast-growing field of computer science.",
      registered: false
    },
    {
      id: 2,
      title: "Breaking Into the Healthcare Industry",
      date: "June 20, 2023",
      time: "1:00 PM EST",
      category: "Healthcare",
      speaker: "Michael Chen",
      description: "Learn about different roles and pathways in the healthcare sector.",
      registered: false
    },
    {
      id: 3,
      title: "Creative Careers in Design",
      date: "June 25, 2023",
      time: "4:00 PM EST",
      category: "Design",
      speaker: "Emma Rodriguez",
      description: "Discover how to turn your creative passion into a sustainable career.",
      registered: false
    },
    {
      id: 4,
      title: "Business Management Careers",
      date: "July 2, 2023",
      time: "11:00 AM EST",
      category: "Business",
      speaker: "James Wilson",
      description: "Understand the various career trajectories in business management.",
      registered: false
    },
    {
      id: 5,
      title: "Engineering Specializations",
      date: "July 10, 2023",
      time: "2:30 PM EST",
      category: "Engineering",
      speaker: "Lisa Zhang",
      description: "Learn about different engineering disciplines and career prospects.",
      registered: false
    },
    {
      id: 6,
      title: "Careers in Education",
      date: "July 18, 2023",
      time: "5:00 PM EST",
      category: "Education",
      speaker: "David Miller",
      description: "Explore rewarding career paths in the education sector.",
      registered: false
    }
  ]);

  // Sample career resources
  const careerResources = [
    {
      id: 1,
      title: "Resume Building Workshop",
      type: "Guide",
      category: "Job Search",
      description: "Step-by-step guide to creating a professional resume that stands out.",
      link: "#"
    },
    {
      id: 2,
      title: "Interview Preparation Series",
      type: "Video Series",
      category: "Job Search",
      description: "Master the art of interviewing with our comprehensive video series.",
      link: "#"
    },
    {
      id: 3,
      title: "Networking Strategies",
      type: "Article",
      category: "Career Growth",
      description: "Learn effective networking techniques to advance your career.",
      link: "#"
    },
    {
      id: 4,
      title: "Salary Negotiation Guide",
      type: "Guide",
      category: "Career Growth",
      description: "Techniques to negotiate your salary with confidence.",
      link: "#"
    },
    {
      id: 5,
      title: "Career Change Roadmap",
      type: "Interactive Tool",
      category: "Career Transition",
      description: "Plan your career change with our step-by-step roadmap.",
      link: "#"
    },
    {
      id: 6,
      title: "Professional Branding",
      type: "Video Series",
      category: "Career Growth",
      description: "Build a strong professional brand online and offline.",
      link: "#"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitCounselorForm = (e) => {
    e.preventDefault();
    console.log("Counselor application submitted:", formData);
    alert("Thank you for your application! We'll review your information and get back to you soon.");
    setShowCounselorForm(false);
    setFormData({
      name: "",
      email: "",
      expertise: "",
      experience: "",
      bio: ""
    });
  };

  const handleRegisterWebinar = (webinarId) => {
    const updatedWebinars = webinars.map(webinar => {
      if (webinar.id === webinarId) {
        const updatedWebinar = { ...webinar, registered: true };
        if (!registeredWebinars.some(w => w.id === webinarId)) {
          setRegisteredWebinars([...registeredWebinars, updatedWebinar]);
        }
        return updatedWebinar;
      }
      return webinar;
    });
    setWebinars(updatedWebinars);
    alert("You've successfully registered for this webinar!");
  };

  // SVG Icons
  const WebinarIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );

  const CareerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const CounselorIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* <div className="flex items-center">
             <div className="flex-shrink-0 flex items-center">
                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-900">EduGuide</span>
              </div> 
            </div> */}
          
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-indigo-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Career Journey Starts Here
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Access expert-led webinars, career resources, and personalized guidance to help you navigate your professional path.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("webinars")}
              className={`${activeTab === "webinars" ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <WebinarIcon className="mr-2" />
              Upcoming Webinars
            </button>
            <button
              onClick={() => setActiveTab("career")}
              className={`${activeTab === "career" ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <CareerIcon className="mr-2" />
              Career Resources
            </button>
            {registeredWebinars.length > 0 && (
              <button
                onClick={() => setActiveTab("registered")}
                className={`${activeTab === "registered" ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                <CheckIcon className="mr-2" />
                My Webinars ({registeredWebinars.length})
              </button>
            )}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="py-8">
          <AnimatePresence mode="wait">
            {activeTab === "webinars" && (
              <motion.div
                key="webinars"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {webinars.map((webinar) => (
                  <motion.div
                    whileHover={{ y: -5 }}
                    key={webinar.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="bg-indigo-600 px-4 py-3">
                      <h3 className="text-lg font-medium text-white">{webinar.title}</h3>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {webinar.date} • {webinar.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Hosted by {webinar.speaker}
                      </div>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {webinar.category}
                        </span>
                        <button
                          onClick={() => handleRegisterWebinar(webinar.id)}
                          disabled={webinar.registered}
                          className={`inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white ${webinar.registered ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                          {webinar.registered ? 'Registered' : 'Register Now'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "career" && (
              <motion.div
                key="career"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {careerResources.map((resource) => (
                  <motion.div
                    whileHover={{ y: -5 }}
                    key={resource.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {resource.type}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {resource.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <a
                        href={resource.link}
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Access Resource
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "registered" && (
              <motion.div
                key="registered"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900">My Registered Webinars</h2>
                {registeredWebinars.length > 0 ? (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {registeredWebinars.map((webinar) => (
                      <motion.div
                        whileHover={{ y: -5 }}
                        key={webinar.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-green-200"
                      >
                        <div className="bg-green-600 px-4 py-3">
                          <h3 className="text-lg font-medium text-white">{webinar.title}</h3>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {webinar.date} • {webinar.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Hosted by {webinar.speaker}
                          </div>
                          <p className="text-gray-600 mb-4">{webinar.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                              {webinar.category}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Registered
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No webinars registered yet</h3>
                    <p className="mt-1 text-sm text-gray-500">Register for webinars to see them listed here.</p>
                    <div className="mt-6">
                      <button
                        onClick={() => setActiveTab("webinars")}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <WebinarIcon className="mr-2" />
                        Browse Webinars
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Counselor Registration Modal */}
      <AnimatePresence>
        {showCounselorForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-10 inset-0 overflow-y-auto"
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowCounselorForm(false)}></div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

     
     
    </div>
  );
};

