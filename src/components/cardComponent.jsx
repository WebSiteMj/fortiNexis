
import { Card } from "flowbite-react";

export default function CardComponent() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center mt-16 px-6 space-y-6 w-full max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide font-montserrat text-gray-800 mb-8">
              Our Services
            </h1>
    
            {/* Grid Container for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-4">
                  <div className="text-5xl mb-4">
                    {service.icon}
                  </div>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {service.description}
                  </p>
                  <Button className="mt-4">Learn More </Button>
                </Card>
              ))}
            </div>
        </div>
    
  );
}
