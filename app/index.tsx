import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
} from "react-native";

import { lightTheme, darkTheme } from "../theme/colors";
import ProfileHeader from "../components/ProfileHeader";
import SkillList from "../components/SkillList";
import ProjectCard from "../components/ProjectCard";
import ThemeToggle from "../components/ThemeToggle";
import ProjectModal from "../components/ProjectModal";
import { Project } from "../components/types";

const projects: Project[] = [
    {
        title: "Pokémon",
        description: "A Pokémon companion app with stats and information. Features include detailed Pokédex entries, type effectiveness calculator, team builder, and move set recommendations for competitive play.",
        image: require("../assets/images/pokemon.png"),
    },
    {
        title: "Sangubat",
        description: "Community platform for local connections. Connect with neighbors, organize local events, share resources, and build stronger community bonds through our intuitive social platform.",
        image: require("../assets/images/sangubat.png"),
    },
    {
        title: "Starkiller",
        description: "Gaming stats tracker and analytics dashboard. Track your performance across multiple games, analyze your improvement over time, and compare stats with friends.",
        image: require("../assets/images/starkiller.png"),
    },
    {
        title: "Webport",
        description: "Portfolio website builder and hosting platform. Create stunning portfolio websites with our drag-and-drop builder, custom domains, and integrated hosting solution.",
        image: require("../assets/images/webport.png"),
    },
];

export default function App(): React.JSX.Element {
    const [darkMode, setDarkMode] = useState<boolean>(true);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const theme = darkMode ? darkTheme : lightTheme;

    const handleProjectPress = (project: Project): void => {
        setSelectedProject(project);
        setModalVisible(true);
    };

    const handleCloseModal = (): void => {
        setModalVisible(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            <FlatList<Project>
                ListHeaderComponent={
                    <>
                        <ProfileHeader theme={theme} />
                        <SkillList theme={theme} />
                        <Text style={[styles.sectionTitle, { color: theme.text }]}>
                            Projects
                        </Text>
                    </>
                }
                data={projects}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <ProjectCard
                        project={item}
                        theme={theme}
                        onPress={() => handleProjectPress(item)}
                    />
                )}
            />

            <ProjectModal
                visible={modalVisible}
                project={selectedProject}
                theme={theme}
                onClose={handleCloseModal}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "600",
        marginVertical: 16,
    },
});