import React from 'react';

export interface AppItem {
  id: string;
  title: string;
  developer: string;
  version: string;
  size: string;
  rating: number;
  downloads: string;
  category: string;
  iconUrl: string;
  bannerUrl: string;
  screenshots: string[];
  description: string;
  updatedDate: string;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export enum DownloadStep {
  LOCKED = 'LOCKED',
  VERIFYING = 'VERIFYING',
  TASK_1 = 'TASK_1',
  TASK_2 = 'TASK_2',
  UNLOCKED = 'UNLOCKED',
  DOWNLOADING = 'DOWNLOADING',
  COMPLETED = 'COMPLETED'
}