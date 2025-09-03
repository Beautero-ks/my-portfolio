export interface Projects {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  rating: number;
  duration?: string;
  teamSize?: string;
  features?: string[];
  isLiked?: boolean;
  likes?: number;
}