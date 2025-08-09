import { useState } from 'react';
import { Check, X, Star, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      icon: <Zap className="h-8 w-8" />,
      description: 'Perfect for getting started with your fitness journey',
      monthlyPrice: 29,
      yearlyPrice: 290,
      popular: false,
      features: [
        { name: 'Gym access during off-peak hours', included: true },
        { name: 'Basic equipment usage', included: true },
        { name: 'Locker room access', included: true },
        { name: 'Online workout library', included: true },
        { name: 'Group fitness classes', included: false },
        { name: 'Personal training sessions', included: false },
        { name: '24/7 gym access', included: false },
        { name: 'Nutrition consultation', included: false }
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: <Star className="h-8 w-8" />,
      description: 'Most popular choice for serious fitness enthusiasts',
      monthlyPrice: 49,
      yearlyPrice: 490,
      popular: true,
      features: [
        { name: '24/7 gym access', included: true },
        { name: 'All equipment and facilities', included: true },
        { name: 'Unlimited group fitness classes', included: true },
        { name: 'Guest passes (2 per month)', included: true },
        { name: 'Personal training (1 session/month)', included: true },
        { name: 'Nutrition consultation', included: true },
        { name: 'Progress tracking app', included: true },
        { name: 'Sauna and steam room', included: false }
      ]
    },
    {
      id: 'elite',
      name: 'Elite',
      icon: <Crown className="h-8 w-8" />,
      description: 'Ultimate fitness experience with premium benefits',
      monthlyPrice: 89,
      yearlyPrice: 890,
      popular: false,
      features: [
        { name: 'Everything in Premium', included: true },
        { name: 'Unlimited personal training', included: true },
        { name: 'Sauna and steam room', included: true },
        { name: 'Massage therapy (1 session/month)', included: true },
        { name: 'Nutrition meal planning', included: true },
        { name: 'Priority class booking', included: true },
        { name: 'Exclusive member events', included: true },
        { name: 'Dedicated member concierge', included: true }
      ]
    }
  ];

  const getCurrentPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (billingCycle === 'yearly') {
      const monthlyCost = plan.monthlyPrice * 12;
      const yearlyDiscount = monthlyCost - plan.yearlyPrice;
      return yearlyDiscount;
    }
    return 0;
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gym-dark via-background to-gym-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your <span className="gradient-text">Membership</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Flexible pricing plans designed to fit your lifestyle and fitness goals. 
            Start your transformation today.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gym-dark-light rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gym-orange text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-gym-orange text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative card-hover rounded-2xl overflow-hidden animate-fade-in animate-delay-${index * 100} ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-gym-orange/20 to-gym-dark-light border-2 border-gym-orange' 
                    : 'bg-gym-dark-light border border-gym-dark'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gym-orange text-black text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="text-gym-orange mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-white">
                        ${getCurrentPrice(plan)}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    
                    {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                      <div className="text-green-400 text-sm">
                        Save ${getSavings(plan)} per year
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-gym-orange flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                      plan.popular
                        ? 'btn-primary'
                        : 'bg-gym-dark border-2 border-gym-orange text-gym-orange hover:bg-gym-orange hover:text-black'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gym-dark-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I cancel my membership anytime?",
                answer: "Yes! You can cancel your membership at any time with 30 days notice. No cancellation fees apply."
              },
              {
                question: "Is there a contract or commitment?",
                answer: "Our monthly plans are month-to-month with no long-term commitment. Yearly plans require a 12-month commitment but offer significant savings."
              },
              {
                question: "What's included in personal training sessions?",
                answer: "Personal training sessions include one-on-one coaching, customized workout plans, form correction, and progress tracking with our certified trainers."
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Absolutely! You can change your membership plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Do you offer corporate memberships?",
                answer: "Yes, we offer special corporate packages for businesses. Contact us for custom pricing and group rates."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gym-dark p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-gym-orange to-gym-orange-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
            Join thousands of members who have transformed their lives at IronForge. 
            Your first week is always free!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-black text-white font-bold py-4 px-12 rounded-lg text-lg hover:bg-gray-900 transition-colors duration-300"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
