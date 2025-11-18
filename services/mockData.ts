import { AppItem } from '../types';

export const CATEGORIES = [
  'Action', 'RPG', 'Simulation', 'Strategy', 'Sports', 'Tools', 'Music', 'Productivity'
];

export const MOCK_APPS: AppItem[] = [
  {
    id: '1',
    title: 'Minecraft PE Mod',
    developer: 'Mojang',
    version: '1.20.40.01',
    size: '560 MB',
    rating: 4.8,
    downloads: '10M+',
    category: 'Simulation',
    iconUrl: 'https://picsum.photos/id/1047/200/200',
    bannerUrl: 'https://picsum.photos/id/1047/800/400',
    screenshots: [
      'https://picsum.photos/id/1047/400/225',
      'https://picsum.photos/id/1035/400/225',
      'https://picsum.photos/id/1020/400/225'
    ],
    updatedDate: 'October 25, 2023',
    description: 'Experience the world of Minecraft with unlimited resources, unlocked skins, and god mode. Build anything you can imagine with blocks. This mod unlocks all premium textures and skins for free.',
    features: ['Unlocked All Skins', 'God Mode', 'Unlimited Breath', 'One Hit Kill']
  },
  {
    id: '2',
    title: 'Spotify Premium Mod',
    developer: 'Spotify AB',
    version: '8.8.74.652',
    size: '85 MB',
    rating: 4.9,
    downloads: '50M+',
    category: 'Music',
    iconUrl: 'https://picsum.photos/id/39/200/200',
    bannerUrl: 'https://picsum.photos/id/39/800/400',
    screenshots: [
      'https://picsum.photos/id/39/400/225',
      'https://picsum.photos/id/145/400/225',
      'https://picsum.photos/id/250/400/225'
    ],
    updatedDate: 'November 01, 2023',
    description: 'Listen to music ad-free with unlimited skips. High quality audio unlocked. Download your favorite tracks for offline listening without a subscription.',
    features: ['No Ads', 'Unlimited Skips', 'Extreme Audio Quality', 'Offline Mode']
  },
  {
    id: '3',
    title: 'Genshin Impact Mod Menu',
    developer: 'HoYoverse',
    version: '4.2.0',
    size: '550 MB (APK)',
    rating: 4.7,
    downloads: '5M+',
    category: 'RPG',
    iconUrl: 'https://picsum.photos/id/237/200/200',
    bannerUrl: 'https://picsum.photos/id/237/800/400',
    screenshots: [
      'https://picsum.photos/id/237/400/225',
      'https://picsum.photos/id/238/400/225',
      'https://picsum.photos/id/239/400/225'
    ],
    updatedDate: 'November 08, 2023',
    description: 'Step into Teyvat with enhanced abilities. This menu provides damage multipliers, defense multipliers, and ESP features to help you explore the world.',
    features: ['Damage Multiplier', 'God Mode', 'Unlimited Stamina', 'Skill No Cooldown']
  },
  {
    id: '4',
    title: 'Netflix Mod',
    developer: 'Netflix, Inc.',
    version: '8.92.0',
    size: '105 MB',
    rating: 4.5,
    downloads: '100M+',
    category: 'Entertainment',
    iconUrl: 'https://picsum.photos/id/366/200/200',
    bannerUrl: 'https://picsum.photos/id/366/800/400',
    screenshots: [
      'https://picsum.photos/id/366/400/225',
      'https://picsum.photos/id/367/400/225'
    ],
    updatedDate: 'October 20, 2023',
    description: 'Watch 4K movies and TV shows without a login account. Supports subtitles in all languages and fast streaming servers.',
    features: ['4K HDR Support', 'No Login Required', 'No Ads', 'Global Content']
  },
  {
    id: '5',
    title: 'Car Parking Multiplayer',
    developer: 'olzhass',
    version: '4.8.12.7',
    size: '890 MB',
    rating: 4.6,
    downloads: '15M+',
    category: 'Simulation',
    iconUrl: 'https://picsum.photos/id/1070/200/200',
    bannerUrl: 'https://picsum.photos/id/1070/800/400',
    screenshots: [
      'https://picsum.photos/id/1070/400/225',
      'https://picsum.photos/id/1071/400/225'
    ],
    updatedDate: 'September 15, 2023',
    description: 'More than just parking: open-world multiplayer mode, car tuning, free walking! Thousands of players are waiting for you.',
    features: ['Unlimited Money', 'Unlocked All Cars', 'W16 Engine Unlocked', 'Police Mode']
  },
  {
    id: '6',
    title: 'PicsArt Gold',
    developer: 'PicsArt, Inc.',
    version: '23.5.1',
    size: '70 MB',
    rating: 4.8,
    downloads: '25M+',
    category: 'Tools',
    iconUrl: 'https://picsum.photos/id/535/200/200',
    bannerUrl: 'https://picsum.photos/id/535/800/400',
    screenshots: [
      'https://picsum.photos/id/535/400/225',
      'https://picsum.photos/id/534/400/225'
    ],
    updatedDate: 'November 12, 2023',
    description: 'The #1 photo and video editor on mobile. Gold membership unlocked with all premium filters, stickers, and fonts.',
    features: ['Gold Unlocked', 'No Watermark', 'Premium Filters', 'Ad-Free']
  }
];