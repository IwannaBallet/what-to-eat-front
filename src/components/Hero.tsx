
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full hero-gradient text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Build Modern Web Apps with React & TypeScript
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-lg">
              A powerful combination for type-safe, maintainable, and scalable frontend applications that your team will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-blue-800 p-6 rounded-lg shadow-lg w-full max-w-md">
              <pre className="text-blue-100 overflow-x-auto">
                <code>{`import React from 'react';

type Props = {
  name: string;
};

const Greeting: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
    </div>
  );
};

export default Greeting;`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
