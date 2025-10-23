import React from 'react';

const changelogData = {
  version: '0.2.1',
  date: '2024-10-23',
  sections: [
    {
      header: "What's New",
      content: [
        '**Spell Upgrade** - 2 cards can now be "Upgraded" into a single more powerful version at the cost of 1 cast. ("Flame Cross" requires x3)',
        '**Discard System** - Right Click to discard a spell (once per turn).',
        '**New Graphics** - Monster tiles / Fireball VFX text.',
        '**New Monster Types** - New Boss and Healer type monsters.',
        '**New Stages** - Additional challenging stages added.'
      ],
    },
    {
      header: 'WIP',
      content: [
        '**Shop** - Only heals for now, this would be a full Market place in the near future.'
      ],
    },
    {
      header: 'Known Issues',
      content: [
        'General UX (lot\'s of improvements planned for the next iteration).',
        'Some spell descriptions need improvement.',
        'Missing VFX for other spells outside of a few fire types.'
      ],
    }
  ]
};

export default function Changelog() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        CHANGELOG
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Version {changelogData.version}</h3>
            <span className="text-sm text-gray-500">{changelogData.date}</span>
          </div>
          
          {changelogData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6 last:mb-0">
              <h4 className="text-base font-semibold mb-2 text-gray-800">
                {section.header}
              </h4>
              <div className="ml-4 border-gray-200 pl-4">
                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                  {section.content.map((item, itemIndex) => (
                    <li 
                      key={`${sectionIndex}-${itemIndex}`} 
                      dangerouslySetInnerHTML={{ 
                        __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                      }} 
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
