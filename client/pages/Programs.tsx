import { useState, useEffect } from "react";
import { Clock, Users, TrendingUp, Star, ArrowRight, Zap } from "lucide-react";

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: "all", name: "All Programs" },
    { id: "strength", name: "Strength Training" },
    { id: "cardio", name: "Cardio & HIIT" },
    { id: "group", name: "Group Classes" },
    { id: "personal", name: "Personal Training" },
  ];

  const programs = [
    {
      id: 1,
      category: "strength",
      title: "PowerLift Pro",
      description:
        "Advanced powerlifting program focusing on squat, bench press, and deadlift mastery.",
      duration: "12 weeks",
      difficulty: "Advanced",
      participants: "8-12",
      image: "strength",
      features: [
        "Progressive overload",
        "Competition prep",
        "Form analysis",
        "Nutrition guidance",
      ],
    },
    {
      id: 2,
      category: "cardio",
      title: "HIIT Ignite",
      description:
        "High-intensity interval training designed to burn fat and build cardiovascular endurance.",
      duration: "45 mins",
      difficulty: "Intermediate",
      participants: "15-20",
      image: "cardio",
      features: [
        "Fat burning",
        "Metabolic boost",
        "Full body workout",
        "Equipment variety",
      ],
    },
    {
      id: 3,
      category: "group",
      title: "Iron Warriors",
      description:
        "Group strength training sessions combining powerlifting and functional movements.",
      duration: "60 mins",
      difficulty: "All Levels",
      participants: "10-15",
      image: "group",
      features: [
        "Team motivation",
        "Scalable workouts",
        "Social fitness",
        "Expert coaching",
      ],
    },
    {
      id: 4,
      category: "personal",
      title: "1-on-1 Elite",
      description:
        "Personalized training sessions tailored to your specific goals and fitness level.",
      duration: "Flexible",
      difficulty: "All Levels",
      participants: "1",
      image: "personal",
      features: [
        "Custom programming",
        "Dedicated coach",
        "Flexible scheduling",
        "Goal tracking",
      ],
    },
    {
      id: 5,
      category: "strength",
      title: "Foundation Builder",
      description:
        "Perfect for beginners learning proper form and building fundamental strength.",
      duration: "8 weeks",
      difficulty: "Beginner",
      participants: "6-10",
      image: "beginner",
      features: [
        "Form fundamentals",
        "Progressive training",
        "Injury prevention",
        "Confidence building",
      ],
    },
    {
      id: 6,
      category: "cardio",
      title: "Endurance Elite",
      description:
        "Advanced cardiovascular training for athletes and endurance enthusiasts.",
      duration: "10 weeks",
      difficulty: "Advanced",
      participants: "8-12",
      image: "endurance",
      features: [
        "VO2 max improvement",
        "Sport-specific training",
        "Recovery protocols",
        "Performance testing",
      ],
    },
  ];

  const filteredPrograms =
    activeCategory === "all"
      ? programs
      : programs.filter((program) => program.category === activeCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-400";
      case "Intermediate":
        return "text-yellow-400";
      case "Advanced":
        return "text-red-400";
      default:
        return "text-gym-orange";
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gym-dark via-background to-gym-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our comprehensive range of fitness programs designed to
            help you achieve your goals, no matter your current fitness level.
          </p>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-12 bg-gym-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gym-orange text-black"
                    : "bg-gym-dark text-white hover:bg-gym-orange hover:text-black"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <div
                key={program.id}
                className={`group cursor-pointer transform transition-all duration-500 ${
                  hoveredProgram === program.id
                    ? "scale-105 -translate-y-2"
                    : ""
                } bg-gym-dark-light rounded-xl overflow-hidden animate-fade-in animate-delay-${index * 100}`}
                onMouseEnter={() => setHoveredProgram(program.id)}
                onMouseLeave={() => setHoveredProgram(null)}
              >
                <div className="h-48 bg-gradient-to-br from-gym-orange/20 to-gym-orange/5 flex items-center justify-center relative overflow-hidden">
                  <div
                    className={`text-6xl transform transition-all duration-300 ${
                      hoveredProgram === program.id ? "scale-125 rotate-12" : ""
                    }`}
                  >
                    💪
                  </div>
                  <div
                    className={`absolute inset-0 bg-gym-orange/10 transition-opacity duration-300 ${
                      hoveredProgram === program.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {program.title}
                    </h3>
                    <span
                      className={`text-sm font-medium ${getDifficultyColor(program.difficulty)}`}
                    >
                      {program.difficulty}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6">{program.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-sm text-gray-300">
                      <Clock className="h-4 w-4 text-gym-orange" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-300">
                      <Users className="h-4 w-4 text-gym-orange" />
                      <span>{program.participants} participants</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Program Features:
                    </h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-400 flex items-center space-x-2"
                        >
                          <Star className="h-3 w-3 text-gym-orange" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full btn-primary flex items-center justify-center space-x-2 group transition-all duration-300 ${
                      hoveredProgram === program.id
                        ? "bg-gradient-to-r from-gym-orange-light to-gym-orange"
                        : ""
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      className={`h-4 w-4 transform transition-transform duration-300 ${
                        hoveredProgram === program.id ? "translate-x-1" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gym-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Not Sure Which Program is Right for You?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Our expert trainers will help you choose the perfect program based
            on your goals, experience level, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Free Consultation</button>
            <button className="btn-secondary">Contact Our Team</button>
          </div>
        </div>
      </section>
    </div>
  );
}
