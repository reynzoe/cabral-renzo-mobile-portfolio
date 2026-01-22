import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { styles } from "../app/styles";

type Props = {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
    onNavigate: (view: "home" | "projects" | "contact") => void;
};

export default function DynamicIslandMenu({ darkMode, setDarkMode, onNavigate }: Props) {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const menuAnimation = useRef(new Animated.Value(0)).current;

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

    const handleNavigate = (view: "home" | "projects" | "contact") => {
        onNavigate(view);
        toggleMenu();
    };

    const menuHeight = menuAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200],
    });

    const menuOpacity = menuAnimation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1],
    });

    return (
        <View style={styles.menuButtonContainer}>
            <View style={[styles.dynamicIsland, { backgroundColor: "#3d3d2e" }]}>
                <TouchableOpacity onPress={() => setDarkMode(!darkMode)} style={styles.themeButton}>
                    <Text style={styles.themeIcon}>{darkMode ? "☀️" : "🌙"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
                    <Text style={[styles.menuButtonText, { color: "#e8e8e8" }]}>Menu</Text>
                    <Text style={[styles.menuIcon, { color: "#e8e8e8" }]}>{menuOpen ? "✕" : "☰"}</Text>
                </TouchableOpacity>
            </View>

            <Animated.View
                style={[styles.dropdownMenu, { backgroundColor: "#3d3d2e", height: menuHeight, opacity: menuOpacity }]}
                pointerEvents={menuOpen ? "auto" : "none"}
            >
                <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate("home")}>
                    <Text style={[styles.menuItemText, { color: "#e8e8e8" }]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate("projects")}>
                    <Text style={[styles.menuItemText, { color: "#e8e8e8" }]}>Projects</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate("contact")}>
                    <Text style={[styles.menuItemText, { color: "#e8e8e8" }]}>Contact</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}
