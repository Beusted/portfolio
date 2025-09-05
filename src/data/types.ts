export interface Project {
    id: string
    title: string
    description: string
    longDescription?: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    imageUrl?: string
    featured: boolean
    completedAt: string
  }
  
  export interface Experience {
    id: string
    company: string
    position: string
    startDate: string
    endDate?: string
    description: string
    technologies: string[]
    achievements: string[]
    image?: string
  }
  
  export interface Skill {
    name: string
    category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other'
    proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  }
  
  export interface Education {
    institution: string
    degree: string
    field: string
    startDate: string
    endDate: string
    gpa?: string
    honors?: string[]
  }