import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

type Props = {
    project: {
        title: string;
        description: string;
        image: any;
        onPress: () => void;
    };
    theme: any;
};

export default function ProjectCard({ project, theme }: Props) {
    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: theme.card }]}
            onPress={project.onPress}
            activeOpacity={0.7}
        >
            <Image
                source={project.image}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={[styles.title, { color: theme.text }]}>
                {project.title}
            </Text>
            <Text style={[styles.description, { color: theme.text }]}>
                {project.description}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 12,
        marginBottom: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 6,
    },
    description: {
        opacity: 0.7,
    },
});
