import React from "react";
import { View, Text } from "react-native";
import { styles } from "../app/styles";
import { Theme } from "./types";

type Props = {
    theme: Theme;
};

const SKILLS = [
    { icon: "💻", name: "JavaScript" },
    { icon: "🌐", name: "HTML/CSS" },
    { icon: "🐍", name: "Python" },
    { icon: "📱", name: "Frontend Dev" },
    { icon: "🗄️", name: "Databases & SQL" },
    { icon: "📊", name: "Statistics" },
    { icon: "🤖", name: "Machine Learning" },
];

export default function SkillsSection({ theme }: Props) {
    return (
        <View style={styles.skillsSection}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
                My Skills
            </Text>
            <View style={styles.skillsGrid}>
                {SKILLS.map((skill, index) => (
                    <View key={index} style={[styles.skillCard, { backgroundColor: theme.card }]}>
                        <Text style={styles.skillIcon}>{skill.icon}</Text>
                        <Text style={[styles.skillName, { color: theme.text }]}>
                            {skill.name}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
