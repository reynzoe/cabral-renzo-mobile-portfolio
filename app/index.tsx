import React, { useState, useRef, useCallback, useEffect } from "react";
import { View, Text, Animated, ScrollView } from "react-native";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import HomeSection from "../components/HomeSection";
import SkillsSection from "../components/SkillsSection";
import ContactFooter from "../components/ContactFooter";
import DynamicIslandMenu from "../components/DynamicIslandMenu";
import { Project, Theme } from "../components/types";
import { styles } from "./styles";

SplashScreen.preventAutoHideAsync();

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
        title: "Pokémon Companion",
        description: "A Pokémon companion app with stats and information. Features include detailed Pokédex entries, type effectiveness calculator, and team builder.",
        image: require("../assets/images/pokemon.png"),
        technologies: ["React Native", "API Integration", "TypeScript"],
        features: ["Pokédex database", "Type calculator", "Team management"],
    },
];

export default function Index() {
    const [appReady, setAppReady] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const scrollViewRef = useRef<ScrollView>(null);
    const scrollY = useRef(new Animated.Value(0)).current;

    const skillsRef = useRef<View>(null);
    const projectsRef = useRef<View>(null);
    const contactRef = useRef<View>(null);

    const theme = darkMode ? DARK_THEME : LIGHT_THEME;

    useEffect(() => {
        async function loadFonts() {
            try {
                await Font.loadAsync({
                    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
                    'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
                    'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setAppReady(true);
            }
        }

        loadFonts();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appReady) {
            await SplashScreen.hideAsync();
        }
    }, [appReady]);

    const scrollToSection = (section: "home" | "skills" | "projects" | "contact") => {
        if (section === "home") {
            scrollViewRef.current?.scrollTo({ y: 0, animated: true });
        } else if (section === "skills") {
            skillsRef.current?.measureLayout(
                scrollViewRef.current as any,
                (x, y) => {
                    scrollViewRef.current?.scrollTo({ y: y - 100, animated: true });
                },
                () => {}
            );
        } else if (section === "projects") {
            projectsRef.current?.measureLayout(
                scrollViewRef.current as any,
                (x, y) => {
                    scrollViewRef.current?.scrollTo({ y: y - 100, animated: true });
                },
                () => {}
            );
        } else if (section === "contact") {
            contactRef.current?.measureLayout(
                scrollViewRef.current as any,
                (x, y) => {
                    scrollViewRef.current?.scrollTo({ y: y - 100, animated: true });
                },
                () => {}
            );
        }
    };

    const onPressProject = (project: Project) => {
        setSelectedProject(project);
        setModalVisible(true);
    };

    if (!appReady) {
        return null;
    }

    return (
        <View
            style={[styles.container, { backgroundColor: theme.background }]}
            onLayout={onLayoutRootView}
        >
            <DynamicIslandMenu
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                onNavigate={scrollToSection}
            />

            <Animated.ScrollView
                ref={scrollViewRef}
                style={styles.homeContainer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.homeContent}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
            >
                <HomeSection theme={theme} scrollY={scrollY} />

                <View ref={skillsRef} collapsable={false}>
                    <SkillsSection theme={theme} />
                </View>

                <View ref={projectsRef} collapsable={false} style={styles.projectsSection}>
                    <Text style={[styles.sectionTitle, { color: theme.text }]}>My Latest Works</Text>
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={`${project.title}-${index}`}
                            project={project}
                            theme={theme}
                            onPress={() => onPressProject(project)}
                            scrollY={scrollY}
                            index={index}
                        />
                    ))}
                </View>

                <View ref={contactRef} collapsable={false}>
                    <ContactFooter theme={theme} />
                </View>
            </Animated.ScrollView>

            <ProjectModal
                visible={modalVisible}
                project={selectedProject}
                theme={theme}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
}
