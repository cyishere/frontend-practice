export interface ProjectTypes {
  id: number;
  website: string;
  webpage: string;
  screenshot: string;
  origin: string;
  demo: string;
  points?: string[];
  article?: string;
}

export const PROJECTS: ProjectTypes[] = [
  {
    id: 1,
    website: "bejamas",
    webpage: "Home page.",
    screenshot: "/images/bejamas.png",
    origin: "https://bejamas.io",
    demo: "https://bejamas-clone.vercel.app/",
    article:
      "https://www.cyishere.dev/blog/what-ive-learned-from-being-a-copycat",
  },
  {
    id: 2,
    website: "Ableton",
    webpage: "About page.",
    screenshot: "/images/ableton.png",
    origin: "https://www.ableton.com/en/about/",
    demo: "/ableton",
    points: ["Special CSS Grid layout", "Typography", "Multi-column footer"],
  },
  {
    id: 3,
    website: "Backstage Talks",
    webpage: "Magazine archive.",
    screenshot: "/images/backstage-talks.png",
    origin: "https://backstagetalks.com/",
    demo: "/backstagetalks",
    points: [
      "Fixed position content",
      "Full page scroll",
      "Change active anchor link while scrolling",
    ],
  },
];
