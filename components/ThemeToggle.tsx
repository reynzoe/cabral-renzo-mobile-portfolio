import React from "react";
import { View, Switch, Text, StyleSheet } from "react-native";

type Props = {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
};

export default function ThemeToggle({ darkMode, setDarkMode }: Props) {
    return (
        <View style={styles.container}>
            <Text style={{ color: darkMode ? "#fff" : "#000" }}>
                {darkMode ? "Dark Mode" : "Light Mode"}
            </Text>
            <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
});
