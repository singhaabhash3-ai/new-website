export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  badgeType: 'ml' | 'core' | 'storage' | 'interface';
  icon: string;
  description: string;
  tags: string[];
  meterLabel: string;
  meterStatus: string;
  meterFill: number; // percentage or segments
  colorClass: string;
  accentHex: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  frameNumber: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  stackTag: string;
  buildStatus: string;
  canvasType: 'neural' | 'database' | 'matrix';
  primaryTag: string;
  secondaryTag: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  architectureDetails: {
    overview: string;
    keyModules: string[];
    metrics: { label: string; value: string }[];
  };
}

export interface EcosystemNode {
  id: string;
  title: string;
  role: string;
  icon: string;
  accent: string;
  description: string;
  inputsFrom?: string;
  outputsTo?: string;
  keyLibraries: string[];
}

export interface TrajectoryFocus {
  id: string;
  tag: string;
  title: string;
  icon: string;
  description: string;
  accentColor: string;
  currentMilestone: string;
}
