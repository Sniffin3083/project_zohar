import React from 'react';
import Image from 'next/image';

export default function Home() {
  const games = [
    {
      title: 'Xenoblade Chronicles',
      image: '/xenoblade-chronicles.jpg',
      description: 'The first game in the series, released in 2010 for the Wii.',
      completionChecklist: [
        'Complete the main story',
        'Defeat all unique monsters',
        'Complete all side quests',
        'Collect all collectibles',
        'Reach level 99 with all characters',
      ],
      map: '/xenoblade-chronicles-map.jpg',
    },
    {
      title: 'Xenoblade Chronicles Definitive Edition: Future Connected',
      image: '/xenoblade-chronicles-definitive-edition.jpg',
      description: 'An epilogue story added to the Definitive Edition of the first game, released in 2020 for the Nintendo Switch.',
      completionChecklist: [
        'Complete the main story',
        'Defeat all unique monsters',
        'Complete all side quests',
        'Collect all collectibles',
        'Reach level 99 with all characters',
      ],
      map: '/xenoblade-chronicles-definitive-edition-map.jpg',
    },
    {
      title: 'Xenoblade Chronicles 2',
      image: '/xenoblade-chronicles-2.jpg',
      description: 'The second game in the series, released in 2017 for the Nintendo Switch.',
      completionChecklist: [
        'Complete the main story',
        'Defeat all superbosses',
        'Complete all side quests',
        'Collect all collectibles',
        'Reach level 99 with all characters',
      ],
      map: '/xenoblade-chronicles-2-map.jpg',
    },
    {
      title: 'Xenoblade Chronicles 2: Torna the Golden Country',
      image: '/xenoblade-chronicles-2-torna.jpg',
      description: 'A prequel story to Xenoblade Chronicles 2, released in 2018 for the Nintendo Switch.',
      completionChecklist: [
        'Complete the main story',
        'Defeat all unique monsters',
        'Complete all side quests',
        'Collect all collectibles',
        'Reach level 99 with all characters',
      ],
      map: '/xenoblade-chronicles-2-torna-map.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Xenoblade Chronicles Completion Checklist</h1>
        {games.map((game) => (
          <div key={game.title} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{game.title}</h2>
            <div className="relative h-0" style={{ paddingBottom: '56.25%' }}>
              <Image
                src={game.image}
                alt={game.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-700 mt-4">{game.description}</p>
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Completion Checklist</h3>
            <ul className="list-disc list-inside">
              {game.completionChecklist.map((item) => (
                <li key={item} className="text-gray-700">{item}</li>
              ))}
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Interactive Map</h3>
            <div className="relative h-0" style={{ paddingBottom: '56.25%' }}>
              <Image
                src={game.map}
                alt={`${game.title} Map`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}