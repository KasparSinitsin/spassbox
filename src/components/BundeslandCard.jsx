import React from 'react';
import bundesl from '../data/land';

const styles = `
:root {
  --card-bg: #ffffff;
  --card-shadow: rgba(0, 0, 0, 0.1);
  --card-title: #1f2937;
  --card-border: #e5e7eb;
  --card-label: #6b7280;
  --card-hauptstadt: #2563eb;
  --card-text-primary: #1f2937;
  --card-text-secondary: #374151;
}
`;

const BundeslandCard = ({ land }) => {
  return (
    <>
      <style>{styles}</style>
      <div className="w-full h-full flex items-center justify-center p-4">
        <div 
          style={{ backgroundColor: 'var(--card-bg)' }}
          className="rounded-2xl shadow-2xl w-full max-w-4xl h-[85vh] p-8 flex flex-col"
        >
          
          <div className="flex justify-between items-start">
            <h1 
              style={{ color: 'var(--card-title)' }}
              className="text-4xl font-bold flex-1"
            >
              {land.name}
            </h1>
            <img 
              src={land.image} 
              alt={`${land.name} - Lage in Deutschland`}
              className="w-44 h-58 object-cover rounded-lg shadow-md ml-4"
            />
          </div>

          <div className="flex-1 space-y-4">
            
            <div 
              style={{ borderColor: 'var(--card-border)' }}
              className="border-b pb-4 -mt-4"
            >
              <h2 
                style={{ color: 'var(--card-label)' }}
                className="text-sm font-semibold uppercase tracking-wide mb-2"
              >
                Hauptstadt
              </h2>
              <p 
                style={{ color: 'var(--card-hauptstadt)' }}
                className="text-3xl font-semibold"
              >
                {land.hauptstadt}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              
              <div>
                <h3 
                  style={{ color: 'var(--card-label)' }}
                  className="text-sm font-semibold uppercase tracking-wide mb-2"
                >
                  Einwohner
                </h3>
                <p 
                  style={{ color: 'var(--card-text-primary)' }}
                  className="text-2xl font-semibold"
                >
                  {land.einwohner}
                </p>
              </div>

              <div>
                <h3 
                  style={{ color: 'var(--card-label)' }}
                  className="text-sm font-semibold uppercase tracking-wide mb-2"
                >
                  Fläche
                </h3>
                <p 
                  style={{ color: 'var(--card-text-primary)' }}
                  className="text-2xl font-semibold"
                >
                  {land.flaeche}
                </p>
              </div>

              <div>
                <h3 
                  style={{ color: 'var(--card-label)' }}
                  className="text-sm font-semibold uppercase tracking-wide mb-2"
                >
                  Gründung
                </h3>
                <p 
                  style={{ color: 'var(--card-text-primary)' }}
                  className="text-2xl font-semibold"
                >
                  {land.gruendung}
                </p>
              </div>

              <div>
                <h3 
                  style={{ color: 'var(--card-label)' }}
                  className="text-sm font-semibold uppercase tracking-wide mb-2"
                >
                  Sehenswürdigkeiten
                </h3>
                <p 
                  style={{ color: 'var(--card-text-secondary)' }}
                  className="text-lg font-medium leading-relaxed"
                >
                  {land.sehenswuerdigkeiten}
                </p>
              </div>

              <div>
                <h3 
                  style={{ color: 'var(--card-label)' }}
                  className="text-sm font-semibold uppercase tracking-wide mb-2"
                >
                  Wirtschaft
                </h3>
                <p 
                  style={{ color: 'var(--card-text-secondary)' }}
                  className="text-lg font-medium leading-relaxed"
                >
                  {land.wirtschaft}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default BundeslandCard;