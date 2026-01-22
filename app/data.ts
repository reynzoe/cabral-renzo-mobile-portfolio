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
    // ... rest of projects
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
