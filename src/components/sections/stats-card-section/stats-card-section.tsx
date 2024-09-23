import React from "react";

const StatsCardSection: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* Main StatsCardSection Container */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* First Section */}
          <div
            className="relative flex flex-col items-center justify-center p-6 text-center bg-cover bg-center h-64 w-full md:w-1/3"
            style={{
              backgroundImage: 'url("/images/_banner1.png")',
            }}
          >
            <h2 className="text-white text-4xl font-bold">60000+</h2>
            <p className="text-white text-lg mt-2">Our Family</p>
          </div>

          {/* Second Section */}
          <div
            className="relative flex flex-col items-center justify-center p-6 text-center bg-cover bg-center h-64 w-full md:w-1/3"
            style={{
              backgroundImage: 'url("/images/_banner2.png")',
            }}
          >
            <h2 className="text-white text-4xl font-bold">$5,00,000+</h2>
            <p className="text-white text-lg mt-2">Grocery Gift</p>
          </div>

          {/* Third Section */}
          <div
            className="relative flex flex-col items-center justify-center p-6 text-center bg-cover bg-center h-64 w-full md:w-1/3"
            style={{
              backgroundImage: 'url("/images/_banner3.png")',
            }}
          >
            <h2 className="text-white text-4xl font-bold">100+</h2>
            <p className="text-white text-lg mt-2">Draws</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCardSection;
