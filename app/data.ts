import { Project, Theme } from "../components/types";

export const LIGHT_THEME: Theme = {
    background: "#f5f5f5",
    card: "#ffffff",
    text: "#000000",
    subtext: "#666666",
    accent: "#ff6b6b",
    primary: "#4a90e2",
};

export const DARK_THEME: Theme = {
    background: "#121212",
    card: "#1e1e1e",
    text: "#ffffff",
    subtext: "#b0b0b0",
    accent: "#ff6b6b",
    primary: "#64b5f6",
};

export const PROJECTS: Project[] = [
    {
        title: "San Gubat",
        description: "Interactive pixel art game with retro aesthetics",
        image: require("../assets/images/sangubat.png"),
        technologies: ["React", "Canvas API", "TypeScript"],
        features: ["Pixel-perfect rendering", "Smooth animations", "Retro UI"],
    },
    {
        title: "Starkiller",
        description: "Space shooter game inspired by classic arcade games. Features wave-based enemies, power-ups, and smooth arcade-style gameplay.",
        image: require("../assets/images/starkiller.png"),
        technologies: ["JavaScript", "Canvas API", "Game Physics"],
        features: ["Classic arcade mechanics", "Enemy AI", "Score tracking"],
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio website showcasing creative design work and projects with a modern, user-friendly interface.",
        image: require("../assets/images/webport.png"),
        technologies: ["React", "TypeScript", "CSS"],
        features: ["Responsive design", "Smooth animations", "Project gallery"],
    },
    {
        title: "Pokémon team Builder",
        description: "A Pokémon companion app with stats and information. Features include detailed Pokédex entries, type effectiveness calculator, and team builder.",
        image: require("../assets/images/pokemon.png"),
        technologies: ["React Native", "API Integration", "TypeScript"],
        features: ["Pokédex database", "Type calculator", "Team management"],
    },
    {
        title: "RecipeNest",
        description: "Web-based AI powered cooking app designed to help with recipes, meal planning, and all things cooking. Smart ingredient suggestions and personalized cooking guidance.",
        image: require("../assets/images/recipenest.jpeg"),
        technologies: ["React", "AI/ML", "Node.js"],
        features: ["AI recipe generation", "Meal planning", "Ingredient suggestions"],
    },
    {
        title: "AnimoMatch UI",
        description: "AnimoMatch is a prototype UI for a project designed for students to match with others based on their academic needs and find study buddies. Connects students for collaborative learning.",
        image: require("../assets/images/animo.jpeg"),
        technologies: ["React Native", "UI/UX Design", "TypeScript"],
        features: ["Student matching", "Study groups", "Academic profiles"],
    },
];

export const SKILLS = [
    { icon: "💻", name: "JavaScript" },
    { icon: "🌐", name: "HTML/CSS" },
    { icon: "🐍", name: "Python" },
    { icon: "📱", name: "Frontend Dev" },
    { icon: "🗄️", name: "Databases & SQL" },
    { icon: "📊", name: "Statistics" },
    { icon: "🤖", name: "Machine Learning" },
];
