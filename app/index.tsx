import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Linking,
    FlatList,
} from "react-native";
import ThemeToggle from "../components/ThemeToggle";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { Project, Theme } from "../components/types";

const LIGHT_THEME: Theme = {
    background: "#f5f5f5",
    card: "#ffffff",
    text: "#000000",
    subtext: "#666666",
    accent: "#ff6b6b",
    primary: "#4a90e2",
};

const DARK_THEME: Theme = {
    background: "#121212",
    card: "#1e1e1e",
    text: "#ffffff",
    subtext: "#b0b0b0",
    accent: "#ff6b6b",
    primary: "#64b5f6",
};

const PROJECTS: Project[] = [
    {
        title: "San Gubat",
        description: "Interactive pixel art game with retro aesthetics",
        image: require("../assets/images/sangubat.png"),
        technologies: ["React", "Canvas API", "TypeScript"],
        features: ["Pixel-perfect rendering", "Smooth animations", "Retro UI"],
    },
    {
        title: "Starkiller",
        description:
            "Space shooter game inspired by classic arcade games. Features wave-based enemies, power-ups, and smooth arcade-style gameplay.",
        image: require("../assets/images/starkiller.png"),
        technologies: ["JavaScript", "Canvas API", "Game Physics"],
        features: ["Classic arcade mechanics", "Enemy AI", "Score tracking"],
    },
    {
        title: "Portfolio Website",
        description:
            "Personal portfolio website showcasing creative design work and projects with a modern, user-friendly interface.",
        image: require("../assets/images/webport.png"),
        technologies: ["React", "TypeScript", "CSS"],
        features: ["Responsive design", "Smooth animations", "Project gallery"],
    },
    {
        title: "Pokémon Companion",
        description:
            "A Pokémon companion app with stats and information. Features include detailed Pokédex entries, type effectiveness calculator, and team builder.",
        image: require("../assets/images/pokemon.png"),
        technologies: ["React Native", "API Integration", "TypeScript"],
        features: ["Pokédex database", "Type calculator", "Team management"],
    },
];

export default function Index() {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const theme = darkMode ? DARK_THEME : LIGHT_THEME;

    const openLink = (url?: string) => {
        if (url) Linking.openURL(url);
    };

    const onPressProject = (project: Project) => {
        setSelectedProject(project);
        setModalVisible(true);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <FlatList contentContainerStyle={styles.listContent}
                      ListHeaderComponent={
                          <>
                              <View style={styles.header}>
                                  <Text style={[styles.title, { color: theme.text }]}>
                                      Hi, I'm Renzo 👋 </Text>
                                  <Text style={[styles.subtitle, { color: theme.subtext }]}>
                                      Creative Designer!
                                  </Text>
                                  <Text style={[styles.description, { color: theme.subtext }]}>
                                      I craft art, designs, and all things creative, bringing them to life as interactive and user-friendly web experiences.
                                  </Text>
                              </View>
                              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                              <Text style={[styles.sectionTitle, { color: theme.text }]}>
                                  My Projects </Text>
                          </>
                      }
                      data={PROJECTS}
                      keyExtractor={(item, index) => `${item.title}-${index}`}
                      renderItem={({ item }) => (
                          <ProjectCard project={item}
                                       theme={theme}
                                       onPress={() => onPressProject(item)}
                          />
                      )}
                      showsVerticalScrollIndicator={false}
            />

            <ProjectModal visible={modalVisible}
                          project={selectedProject}
                          theme={theme}
                          onClose={() => setModalVisible(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex:1 },
    listContent: { padding:20 },
    header: { marginBottom:24, alignItems: "center" },
    title: { fontSize:32, fontWeight: "bold", marginBottom:8 },
    subtitle: { fontSize:20, fontWeight: "600", marginBottom:12 },
    description: { fontSize:15, textAlign: "center", lineHeight:22 },
    sectionTitle: { fontSize:24, fontWeight: "700", marginTop:24, marginBottom:16 },
});
