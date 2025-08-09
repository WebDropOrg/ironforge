import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Target,
  Users,
  Trophy,
  Zap,
  Play,
  CheckCircle,
  Clock,
  Heart,
  Star,
  ArrowRight,
  TrendingUp,
  Shield,
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeWidget, setActiveWidget] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate widgets
    const interval = setInterval(() => {
      setActiveWidget((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Expert Training",
      description:
        "Professional trainers with years of experience to guide your fitness journey",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description:
        "Join a supportive community of fitness enthusiasts working towards their goals",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Results Driven",
      description:
        "Proven methods and programs that deliver real, measurable results",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "State-of-Art Equipment",
      description:
        "Latest fitness equipment and technology for optimal workout experiences",
      color: "from-green-500 to-blue-500",
    },
  ];

  const stats = [
    {
      number: "2000+",
      label: "Active Members",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: "15+",
      label: "Expert Trainers",
      icon: <Target className="h-6 w-6" />,
    },
    {
      number: "5",
      label: "Years Experience",
      icon: <Trophy className="h-6 w-6" />,
    },
    {
      number: "50+",
      label: "Classes Weekly",
      icon: <Clock className="h-6 w-6" />,
    },
  ];

  const benefits = [
    "24/7 Gym Access",
    "Personal Training Sessions",
    "Group Fitness Classes",
    "Nutrition Guidance",
    "Equipment Training",
    "Progress Tracking",
  ];

  const workoutPrograms = [
    {
      title: "Strength & Power",
      description: "Build serious muscle and explosive power",
      image: "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg",
      intensity: "High",
      duration: "60-90 min",
    },
    {
      title: "Functional Training",
      description: "Real-world movement patterns for everyday strength",
      image:
        "https://images.pexels.com/photos/1502388/pexels-photo-1502388.jpeg",
      intensity: "Medium",
      duration: "45-60 min",
    },
    {
      title: "Elite Conditioning",
      description: "Push your limits with high-intensity training",
      image:
        "https://images.pexels.com/photos/5327476/pexels-photo-5327476.jpeg",
      intensity: "Very High",
      duration: "30-45 min",
    },
  ];

  const successStories = [
    {
      name: "Marcus Johnson",
      transformation: "Lost 45 lbs in 6 months",
      quote:
        "IronForge changed my life completely. The trainers pushed me beyond what I thought was possible.",
      image:
        "https://images.pexels.com/photos/33360899/pexels-photo-33360899.jpeg",
    },
    {
      name: "David Rodriguez",
      transformation: "Gained 20 lbs muscle",
      quote:
        "The community here is incredible. Everyone supports each other's journey.",
      image:
        "https://images.pexels.com/photos/6844953/pexels-photo-6844953.jpeg",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow">
              FORGE YOUR
              <span className="block gradient-text animate-pulse-glow">
                STRONGEST SELF
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your body and mind with our world-class fitness
              programs, expert trainers, and state-of-the-art equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="btn-primary text-lg animate-pulse-glow"
              >
                Start Your Journey
              </Link>
              <button className="btn-secondary text-lg flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                <Play className="h-5 w-5" />
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gym-orange animate-pulse" />
        </div>
      </section>

      {/* Animated Stats Widgets */}
      <section className="py-20 bg-gym-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-110 ${
                  activeWidget === index ? "scale-110" : ""
                }`}
                onMouseEnter={() => setActiveWidget(index)}
              >
                <div className="bg-gym-dark p-6 rounded-xl text-center card-hover">
                  <div
                    className={`text-gym-orange mb-3 flex justify-center transform transition-transform duration-300 ${
                      activeWidget === index ? "scale-125 rotate-12" : ""
                    }`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 animate-fade-in">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 uppercase tracking-wide text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">IronForge</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the difference with our comprehensive approach to
              fitness and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group cursor-pointer transform transition-all duration-500 ${
                  hoveredFeature === index ? "scale-105 -translate-y-2" : ""
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="bg-gym-dark-light p-8 rounded-xl text-center h-full relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 ${
                      hoveredFeature === index ? "opacity-10" : ""
                    }`}
                  />

                  <div
                    className={`text-gym-orange mb-4 flex justify-center transform transition-all duration-300 ${
                      hoveredFeature === index ? "scale-125 rotate-12" : ""
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <div
                    className={`absolute bottom-4 right-4 transform transition-all duration-300 ${
                      hoveredFeature === index
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  >
                    <ArrowRight className="h-5 w-5 text-gym-orange" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Programs Gallery */}
      <section className="py-20 bg-gym-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Elite <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our signature workout programs designed by expert
              trainers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workoutPrograms.map((program, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              >
                <div className="bg-gym-dark rounded-xl overflow-hidden card-hover">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex space-x-2 mb-2">
                        <span className="px-2 py-1 bg-gym-orange text-black text-xs font-bold rounded">
                          {program.intensity}
                        </span>
                        <span className="px-2 py-1 bg-gym-dark-light text-white text-xs rounded">
                          {program.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gym-orange transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{program.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-gym-orange fill-current"
                          />
                        ))}
                      </div>
                      <ArrowRight className="h-5 w-5 text-gym-orange transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real transformations from our IronForge family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              >
                <div className="bg-gym-dark-light rounded-xl overflow-hidden card-hover">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-gym-orange text-black px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                        {story.transformation}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {story.name}
                      </h3>
                      <p className="text-gray-300 italic">"{story.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Animation */}
      <section className="py-20 bg-gym-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Everything You Need to
                <span className="block gradient-text">Succeed</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Our comprehensive membership includes all the tools, support,
                and guidance you need to achieve your fitness goals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group hover:bg-gym-dark p-2 rounded-lg transition-colors duration-300"
                  >
                    <CheckCircle className="h-5 w-5 text-gym-orange flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/programs" className="btn-primary">
                Explore Programs
              </Link>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-gradient-to-br from-gym-orange/20 to-transparent p-8 rounded-2xl">
                <div className="bg-gym-dark p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Start?
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Join thousands of members who have transformed their lives
                    at IronForge.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-gym-orange" />
                      <span className="text-gray-300">
                        Expert Guidance Guaranteed
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-6 w-6 text-gym-orange" />
                      <span className="text-gray-300">
                        Proven Results System
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-gym-orange" />
                      <span className="text-gray-300">
                        Supportive Community
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full mt-6 btn-primary block text-center"
                  >
                    Join Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gym-orange to-gym-orange-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto animate-fade-in animate-delay-200">
            Don't wait for tomorrow. Your strongest self is waiting. Start your
            journey today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-black text-white font-bold py-4 px-12 rounded-lg text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 animate-fade-in animate-delay-300"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
