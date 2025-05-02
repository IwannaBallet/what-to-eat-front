
import { Code, Layers, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-10 w-10 text-blue-500" />,
    title: 'Fast Development',
    description: 'Vite provides lightning-fast hot module replacement for a smooth development experience.'
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-500" />,
    title: 'Type Safety',
    description: 'TypeScript catches errors early during development, making your applications more robust.'
  },
  {
    icon: <Code className="h-10 w-10 text-blue-500" />,
    title: 'Component-Based',
    description: 'React\'s component architecture helps you build encapsulated, reusable UI elements.'
  },
  {
    icon: <Layers className="h-10 w-10 text-blue-500" />,
    title: 'Modern Stack',
    description: 'Leverage the latest web technologies to build high-performance applications.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Why Choose This Stack?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            React, TypeScript, and Vite combine to deliver a powerful, modern development experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
