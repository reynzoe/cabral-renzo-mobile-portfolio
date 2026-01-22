import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
    theme: any;
};

const SKILLS = [
    "JavaScript ",
    "HTML ",
    "CSS ",
    "Python ",
];

export default function SkillList({ theme }: Props) {
    return (
        <View>
            <Text style={[styles.title, { color: theme.text }]}>Skills</Text>
            <View style={styles.row}>
                {SKILLS.map((skill) => (
                    <View key={skill} style={[styles.badge, { backgroundColor: theme.card }]}>
                        <Text style={{ color: theme.text }}>{skill}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 12,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    badge: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 8,
    },
});
