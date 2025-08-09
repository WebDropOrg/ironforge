import { Award, Heart, Target, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our equipment to our training programs.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Community',
      description: 'Building a supportive community where everyone feels welcome and motivated to succeed.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Results',
      description: 'We are committed to helping you achieve real, lasting results through proven methods.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Support',
      description: 'Our team is here to support you every step of the way on your fitness journey.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Head Trainer & Founder',
      specialty: 'Strength Training & Nutrition',
      experience: '8 years',
      certifications: 'NASM-CPT, CSCS, Precision Nutrition',
      bio: 'Sarah founded IronForge with a vision to create a gym that focuses on real results and community support.'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Lead Personal Trainer',
      specialty: 'Powerlifting & Sports Performance',
      experience: '6 years',
      certifications: 'NSCA-CSCS, USA Powerlifting',
      bio: 'Former competitive powerlifter specializing in strength development and athletic performance.'
    },
    {
      name: 'Emily Chen',
      role: 'Group Fitness Director',
      specialty: 'HIIT & Functional Training',
      experience: '5 years',
      certifications: 'ACE-CPT, TRX, Kettlebell Concepts',
      bio: 'Passionate about making fitness fun and accessible through engaging group classes.'
    },
    {
      name: 'David Thompson',
      role: 'Nutrition Specialist',
      specialty: 'Sports Nutrition & Meal Planning',
      experience: '7 years',
      certifications: 'RD, CSSD, Precision Nutrition',
      bio: 'Registered dietitian helping members optimize their nutrition for better performance and results.'
    }
  ];

  const stats = [
    { number: '2019', label: 'Founded' },
    { number: '2000+', label: 'Members Transformed' },
    { number: '15+', label: 'Expert Trainers' },
    { number: '50+', label: 'Classes Per Week' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gym-dark via-background to-gym-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="gradient-text">IronForge</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                IronForge was born from a simple belief: everyone deserves access to world-class 
                fitness training and support. We're not just a gym - we're a community dedicated 
                to helping you forge your strongest self.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="bg-gradient-to-br from-gym-orange/20 to-transparent p-8 rounded-2xl">
                <div className="bg-gym-dark p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-400 mb-6">
                    To empower individuals to achieve their fitness goals through expert guidance, 
                    cutting-edge facilities, and an inclusive community that celebrates every victory.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gym-orange rounded-full"></div>
                      <span className="text-gray-300">Transform lives through fitness</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gym-orange rounded-full"></div>
                      <span className="text-gray-300">Build a supportive community</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gym-orange rounded-full"></div>
                      <span className="text-gray-300">Deliver exceptional results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gym-dark-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Our <span className="gradient-text">Story</span>
          </h2>
          <div className="text-lg text-gray-400 leading-relaxed space-y-6">
            <p>
              IronForge began in 2019 when our founder, Sarah Johnson, recognized a gap in the fitness industry. 
              Too many gyms focused on quantity over quality, offering overcrowded spaces with minimal support. 
              Sarah envisioned something different - a place where fitness enthusiasts could receive personalized 
              attention while being part of a motivating community.
            </p>
            <p>
              Starting with just 500 square feet and a handful of dedicated members, IronForge has grown into 
              a 10,000 square foot facility that serves over 2,000 members. But our growth isn't just about 
              size - it's about the lives we've transformed and the community we've built.
            </p>
            <p>
              Today, IronForge stands as a testament to what's possible when passion meets purpose. Every piece 
              of equipment, every program, and every interaction is designed with one goal in mind: helping you 
              become the strongest version of yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core values guide everything we do and shape the IronForge experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`card-hover bg-gym-dark-light p-8 rounded-xl text-center animate-fade-in animate-delay-${index * 100}`}
              >
                <div className="text-gym-orange mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gym-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our certified trainers and specialists are here to guide you on your fitness journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`card-hover bg-gym-dark p-8 rounded-xl animate-fade-in animate-delay-${index * 100}`}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gym-orange to-gym-orange-light rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-gym-orange font-medium mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-white font-medium">Specialty: </span>
                        <span className="text-gray-400">{member.specialty}</span>
                      </div>
                      <div>
                        <span className="text-white font-medium">Experience: </span>
                        <span className="text-gray-400">{member.experience}</span>
                      </div>
                      <div>
                        <span className="text-white font-medium">Certifications: </span>
                        <span className="text-gray-400">{member.certifications}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-gym-orange to-gym-orange-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
            Become part of the IronForge family and start your transformation journey today. 
            Your strongest self is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-black text-white font-bold py-4 px-8 rounded-lg hover:bg-gray-900 transition-colors duration-300">
              Schedule a Tour
            </button>
            <button className="border-2 border-black text-black font-bold py-4 px-8 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
