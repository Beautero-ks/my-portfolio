import { Component, OnInit } from '@angular/core';
import { Projects } from '../../models/project';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project implements OnInit{
//   projects: Projects[] = [];

//   constructor(private projectService: ProjectService) {}

//   ngOnInit() {
//     this.projects = this.projectService.getProjects();
//   }

//   openProject(url: string) {
//     window.location.href = url; // Redirects to GitHub
//   }
//   trackByProjectName(index: number, project: Projects) {
//   return project.name;
// }

projects: Projects[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-featured frontend e-commerce platform built with Angular and Node.js, featuring user authentication, shopping cart, payment integration, and admin dashboard.',
      image: '/assets/images/ecomerce.jpeg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API'],
      category: 'frontend',
      demoUrl: 'https://demo-ecommerce.beautero.dev',
      githubUrl: 'https://github.com/Beautero-ks/ecommerce-platform',
      status: 'in-progress',
      rating: 4.8,
      duration: '1 months',
      teamSize: 'Solo',
      features: [
        'User authentication & authorization',
        'Shopping cart & wishlist functionality',
        'Secure payment processing with Stripe',
        'Admin dashboard for inventory management',
        'Responsive design for all devices'
      ],
      isLiked: false,
      likes: 24
    },
    {
      id: '2',
      title: 'SmartAgro - AI Plant Disease Diagnosis',
      description: 'React Native mobile application that uses AI to diagnose plant diseases, helping farmers identify and treat crop issues early with machine learning models.',
      image: '/assets/images/react-native.jpeg',
      technologies: ['React Native', 'Python', 'PyTorch', 'TensorFlow', 'Appwrite', 'Tailwind CSS', 'Metro'],
      category: 'mobile',
      demoUrl: '',
      githubUrl: 'https://github.com/Beautero-ks/smart-agro',
      status: 'completed',
      rating: 4.9,
      duration: '4 months',
      teamSize: '2 developers',
      features: [
        'AI-powered plant disease detection',
        'Camera integration for real-time diagnosis',
        'Treatment recommendations database',
        'Offline mode for rural areas',
        'Multi-language support for farmers'
      ],
      isLiked: true,
      likes: 42
    },
    {
      id: '3',
      title: 'Business Dashboard - Order Management',
      description: 'Comprehensive business management dashboard for handling orders, services, statistics, earnings tracking, visitor analytics, and customer communication.',
      image: '/assets/images/business-dashboard.jpeg',
      technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Chart.js', 'LocalStorage'],
      category: 'frontend',
      demoUrl: 'https://business-dashboard.beautero.dev',
      githubUrl: 'https://github.com/Beautero-ks/Business-Dashboard',
      status: 'completed',
      rating: 4.6,
      duration: '1 months',
      teamSize: 'Solo',
      features: [
        'Order management and tracking',
        'Service booking system',
        'Real-time earnings statistics',
        'Visitor analytics with charts',
        'Customer messaging system'
      ],
      isLiked: false,
      likes: 22
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with modern design, smooth animations, and responsive layout.',
      image: '/assets/images/portfolio.jpeg',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript', 'SCSS'],
      category: 'frontend',
      demoUrl: 'https://beautero.dev',
      githubUrl: 'https://github.com/Beautero-ks/my-portfolio',
      status: 'completed',
      rating: 4.9,
      duration: '1 month',
      teamSize: 'Solo',
      features: [
        'Responsive design',
        'Dark/Light mode toggle',
        'Smooth animations',
        'Contact form integration'
      ],
      isLiked: true,
      likes: 31
    },
    {
      id: '6',
      title: 'Nexa Stay - Hotel Management Platform',
      description: 'Comprehensive hotel management system with booking management, room allocation, customer service, and analytics dashboard built with modern technologies.',
      image: '/assets/images/nexastay.png',
      technologies: ['React.js', 'Spring Boot', 'Docker', 'GitHub Actions', 'PostgreSQL', 'JWT'],
      category: 'fullstack',
      demoUrl: 'https://nexastay.demo.com',
      githubUrl: 'https://github.com/Beautero-ks/nexa-stay-frontend',
      status: 'completed',
      rating: 4.8,
      duration: '2 months',
      teamSize: '4 developers',
      features: [
        'Room booking and management system',
        'Customer check-in/check-out process',
        'Revenue analytics and reporting',
        'Staff management and scheduling',
        'Multi-language support and responsive design'
      ],
      isLiked: true,
      likes: 36
    },
    {
      id: '6',
      title: 'Complete Authentication System',
      description: 'Enterprise-grade authentication microservice with JWT tokens, OTP verification, password reset, email notifications, and Docker containerization.',
      image: '/assets/images/auth-system.jpeg',
      technologies: ['Spring Boot', 'Docker', 'SMTP4Dev', 'JWT', 'PostgreSQL', 'Redis'],
      category: 'backend',
      demoUrl: '',
      githubUrl: 'https://github.com/Beautero-ks/spring-auth-otp-jwt-service',
      status: 'completed',
      rating: 4.7,
      duration: '1 months',
      teamSize: 'Solo',
      features: [
        'JWT token-based authentication',
        'OTP verification via email/SMS',
        'Password reset and recovery',
        'Email notification system',
        'Role-based permissions',
        'Dockerized deployment ready'
      ],
      isLiked: false,
      likes: 28
    },
    {
      id: '6',
      title: 'Electronic E-commerce Backend',
      description: 'Complete backend system for electronics e-commerce with product management, order processing, payment integration, and inventory tracking.',
      image: 'assets/images/projects/electronics-backend.jpeg',
      technologies: ['Spring Boot', 'MySQL', 'Redis', 'JWT', 'Swagger', 'Maven'],
      category: 'backend',
      demoUrl: '',
      githubUrl: 'https://github.com/Beautero-ks/Easy-Market-Backend',
      status: 'completed',
      rating: 4.7,
      duration: '3 months',
      teamSize: 'Solo',
      features: [
        'Product catalog management',
        'Order processing system',
        'Inventory tracking and alerts',
        'Payment gateway integration',
        'RESTful API documentation'
      ],
      isLiked: false,
      likes: 19
    },
    {
      id: '7',
      title: 'Photo Sharing Platform',
      description: 'Social photo sharing application with user profiles, image galleries, likes, comments, and responsive design built with Angular.',
      image: 'assets/images/projects/photo-sharing.png',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'Angular Material'],
      category: 'frontend',
      demoUrl: 'https://photo-share.beautero.dev',
      githubUrl: 'https://github.com/Beautero-ks/photo-sharing',
      status: 'in-progress',
      rating: 4.4,
      duration: '1 months',
      teamSize: 'Solo',
      features: [
        'User profile management',
        'Photo upload and galleries',
        'Social interactions (likes, comments)',
        'Responsive design',
        'Image optimization and lazy loading'
      ],
      isLiked: false,
      likes: 16
    },
    {
      id: '8',
      title: 'BUSY Bar - Productivity Device',
      description: 'Multi-tool productivity device with LED pixelized screen, focus timer, and distraction blocking features for phones and PCs.',
      image: 'assets/images/projects/busy.jpeg',
      technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Arduino', 'IoT'],
      category: 'iot',
      demoUrl: 'https://busybar.beautero.dev',
      githubUrl: 'https://github.com/Beautero-ks/busy-bar',
      status: 'completed',
      rating: 4.6,
      duration: '3 days',
      teamSize: 'Solo',
      features: [
        'LED pixelized display screen',
        'Focus timer with Pomodoro technique',
        'Device distraction blocking',
        'Customizable productivity themes',
        'Mobile and desktop companion app'
      ],
      isLiked: true,
      likes: 33
    }
  ];

  projectFilters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Full Stack' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'iot', label: 'IoT' }
  ];

  activeFilter = 'all';
  filteredProjects: Projects[] = [];
  isLoading = false;
  hasMoreProjects = false;

  ngOnInit(): void {
    this.filteredProjects = [...this.projects];
    this.checkForMoreProjects();
  }

  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
    this.filterProjects();
  }

  private filterProjects(): void {
    if (this.activeFilter === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.category === this.activeFilter
      );
    }
    this.checkForMoreProjects();
  }

  private checkForMoreProjects(): void {
    // Simulate checking for more projects
    this.hasMoreProjects = this.filteredProjects.length >= 6;
  }

  loadMoreProjects(): void {
    this.isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      this.hasMoreProjects = false;
    }, 2000);
  }

  likeProject(projectId: string): void {
    const project = this.projects.find(p => p.id === projectId);
    if (project) {
      project.isLiked = !project.isLiked;
      project.likes = (project.likes || 0) + (project.isLiked ? 1 : -1);
    }
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'completed': 'Completed',
      'in-progress': 'In Progress',
      'planned': 'Planned'
    };
    return labels[status] || status;
  }

}
