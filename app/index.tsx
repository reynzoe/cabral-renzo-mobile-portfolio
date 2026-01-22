import React, { useState, useRef, useCallback, useEffect } from "react";
import {
    View,
    Text,
    Animated,
    TouchableOpacity,
    ScrollView,
    Linking,
    Image,
} from "react-native";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
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

type ViewType = "home" | "projects" | "contact";

export default function Index() {
    const [appReady, setAppReady] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentView, setCurrentView] = useState<ViewType>("home");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const menuAnimation = useRef(new Animated.Value(0)).current;
    const scrollY = useRef(new Animated.Value(0)).current;

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

    const toggleMenu = () => {
        const toValue = menuOpen ? 0 : 1;
        Animated.spring(menuAnimation, {
            toValue,
            useNativeDriver: false,
            tension: 50,
            friction: 7,
        }).start();
        setMenuOpen(!menuOpen);
    };

    const navigateTo = (view: ViewType) => {
        setCurrentView(view);
        toggleMenu();
    };

    const onPressProject = (project: Project) => {
        setSelectedProject(project);
        setModalVisible(true);
    };

    const menuHeight = menuAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200],
    });

    const menuOpacity = menuAnimation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1],
    });

    const renderHome = () => (
        <Animated.ScrollView
            style={styles.homeContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.homeContent}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
        >
            <Animated.View style={styles.backgroundLayer} pointerEvents="none">
                {/* Large blob 1 */}
                <Animated.View
                    style={[
                        styles.blob,
                        {
                            width: 400,
                            height: 400,
                            borderRadius: 200,
                            backgroundColor: theme.primary,
                            opacity: 0.15,
                            top: -100,
                            right: -80,
                            transform: [
                                {
                                    translateY: scrollY.interpolate({
                                        inputRange: [0, 400],
                                        outputRange: [0, 60],
                                        extrapolate: "clamp",
                                    }),
                                },
                                {
                                    rotate: scrollY.interpolate({
                                        inputRange: [0, 400],
                                        outputRange: ['0deg', '45deg'],
                                        extrapolate: "clamp",
                                    }),
                                },
                            ],
                        },
                    ]}
                />

                {/* Large blob 2 */}
                <Animated.View
                    style={[
                        styles.blob,
                        {
                            width: 350,
                            height: 350,
                            borderRadius: 175,
                            backgroundColor: theme.accent,
                            opacity: 0.18,
                            bottom: 100,
                            left: -60,
                            transform: [
                                {
                                    translateY: scrollY.interpolate({
                                        inputRange: [0, 400],
                                        outputRange: [0, -70],
                                        extrapolate: "clamp",
                                    }),
                                },
                                {
                                    scale: scrollY.interpolate({
                                        inputRange: [0, 400],
                                        outputRange: [1, 0.8],
                                        extrapolate: "clamp",
                                    }),
                                },
                            ],
                        },
                    ]}
                />

                {/* Floating square */}
                <Animated.View
                    style={[
                        styles.blob,
                        {
                            width: 180,
                            height: 180,
                            borderRadius: 40,
                            backgroundColor: theme.primary,
                            opacity: 0.12,
                            top: 200,
                            left: 30,
                            transform: [
                                {
                                    translateY: scrollY.interpolate({
                                        inputRange: [0, 400],
                                        outputRange: [0, -40],
                                        extrapolate: "clamp",
                                    }),
                                },
                                {
                                    rotate: scrollY.interpolate({
                                        inputRange: [0, 400],
                                        outputRange: ['0deg', '-90deg'],
                                        extrapolate: "clamp",
                                    }),
                                },
                            ],
                        },
                    ]}
                />

                {/* Floating circle */}
                <Animated.View
                    style={[
                        styles.blob,
                        {
                            width: 120,
                            height: 120,
                            borderRadius: 60,
                            backgroundColor: theme.accent,
                            opacity: 0.2,
                            top: 400,
                            right: 40,
                            transform: [
                                {
                                    translateY: scrollY.interpolate({
                                        inputRange: [0, 400],
                                        outputRange: [0, 80],
                                        extrapolate: "clamp",
                                    }),
                                },
                                {
                                    translateX: scrollY.interpolate({
                                        inputRange: [0, 400],
                                        outputRange: [0, -40],
                                        extrapolate: "clamp",
                                    }),
                                },
                            ],
                        },
                    ]}
                />

                {/* Small accent circle */}
                <Animated.View
                    style={[
                        styles.blob,
                        {
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            backgroundColor: theme.primary,
                            opacity: 0.25,
                            bottom: 300,
                            right: 100,
                            transform: [
                                {
                                    scale: scrollY.interpolate({
                                        inputRange: [0, 400],
                                        outputRange: [1, 1.3],
                                        extrapolate: "clamp",
                                    }),
                                },
                            ],
                        },
                    ]}
                />
            </Animated.View>

            <View style={styles.nameContainer}>
                <Animated.View
                    style={{
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: [0, -30],
                                    extrapolate: "clamp",
                                }),
                            },
                            {
                                rotate: scrollY.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: ['0deg', '5deg'],
                                    extrapolate: "clamp",
                                }),
                            },
                        ],
                    }}
                >
                    <View style={{
                        padding: 8,
                        borderRadius: 24,
                        borderWidth: 3,
                        borderColor: theme.primary,
                        backgroundColor: theme.card,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 8 },
                        shadowOpacity: 0.3,
                        shadowRadius: 12,
                        elevation: 10,
                        marginBottom: 32,
                    }}>
                        <Animated.Image
                            source={require('../assets/images/profile.jpeg')}
                            style={{
                                width: 180,
                                height: 180,
                                borderRadius: 16,
                            }}
                            resizeMode="cover"
                        />
                    </View>
                </Animated.View>

                <Text style={[styles.bigName, { color: theme.text }]}>
                    RENZO{"\n"}CABRAL
                </Text>
                <Text style={[styles.tagline, { color: theme.subtext }]}>
                    Aspiring developer passionate about building clean and usable digital
                    experiences.
                </Text>
            </View>

            <View style={styles.projectsSection}>
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
        </Animated.ScrollView>
    );


    const renderProjects = () => (
        <ScrollView
            style={styles.projectsContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.projectsContent}
        >
            <Text style={[styles.sectionTitle, { color: theme.text }]}>My Latest Works</Text>
            {PROJECTS.map((project, index) => (
                <ProjectCard
                    key={`${project.title}-${index}`}
                    project={project}
                    theme={theme}
                    onPress={() => onPressProject(project)}
                />
            ))}
        </ScrollView>
    );

    const renderContact = () => (
        <ScrollView
            style={styles.contactContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contactContent}
        >
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Get in Touch</Text>
            <TouchableOpacity
                style={[styles.contactButton, { backgroundColor: theme.card }]}
                onPress={() => Linking.openURL("mailto:your.email@example.com")}
            >
                <Text style={[styles.contactButtonText, { color: theme.text }]}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.contactButton, { backgroundColor: theme.card }]}
                onPress={() => Linking.openURL("https://github.com/yourusername")}
            >
                <Text style={[styles.contactButtonText, { color: theme.text }]}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.contactButton, { backgroundColor: theme.card }]}
                onPress={() => Linking.openURL("https://linkedin.com/in/yourusername")}
            >
                <Text style={[styles.contactButtonText, { color: theme.text }]}>
                    LinkedIn
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );

    if (!appReady) {
        return null;
    }

    return (
        <View
            style={[styles.container, { backgroundColor: theme.background }]}
            onLayout={onLayoutRootView}
        ><View style={styles.menuButtonContainer}>
            <View style={[styles.dynamicIsland, { backgroundColor: "#3d3d2e" }]}>
                <TouchableOpacity
                    onPress={() => setDarkMode(!darkMode)}
                    style={styles.themeButton}
                >
                    <Text style={styles.themeIcon}>{darkMode ? "☀️" : "🌙"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
                    <Text style={[styles.menuButtonText, { color: "#e8e8e8" }]}>
                        Menu
                    </Text>
                    <Text style={[styles.menuIcon, { color: "#e8e8e8" }]}>
                        {menuOpen ? "✕" : "☰"}
                    </Text>
                </TouchableOpacity>
            </View>

            <Animated.View
                style={[
                    styles.dropdownMenu,
                    {
                        backgroundColor: "#3d3d2e",
                        height: menuHeight,
                        opacity: menuOpacity,
                    },
                ]}
                pointerEvents={menuOpen ? "auto" : "none"}
            >
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigateTo("home")}
                >
                    <Text style={[styles.menuItemText, { color: "#e8e8e8" }]}>
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigateTo("projects")}
                >
                    <Text style={[styles.menuItemText, { color: "#e8e8e8" }]}>
                        Projects
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigateTo("contact")}
                >
                    <Text style={[styles.menuItemText, { color: "#e8e8e8" }]}>
                        Contact
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </View>

            {currentView === "home" && renderHome()}
            {currentView === "projects" && renderProjects()}
            {currentView === "contact" && renderContact()}

            <ProjectModal
                visible={modalVisible}
                project={selectedProject}
                theme={theme}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
}
