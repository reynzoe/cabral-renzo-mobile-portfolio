import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Project, Theme } from "./types";

type Props = {
    project: Project;
    theme: Theme;
    onPress: () => void;
    scrollY?: Animated.Value;
    index?: number;
};

export default function ProjectCard({ project, theme, onPress, scrollY, index = 0 }: Props) {
    const animatedStyle = scrollY ? {
        transform: [
            {
                translateY: scrollY.interpolate({
                    inputRange: [0, 400],
                    outputRange: [0, -20 + (index * 5)],
                    extrapolate: "clamp",
                }),
            },
            {
                rotate: scrollY.interpolate({
                    inputRange: [0, 400],
                    outputRange: ['0deg', `${(index % 2 === 0 ? 1 : -1) * 2}deg`],
                    extrapolate: "clamp",
                }),
            },
        ],
    } : {};

    return (<Animated.View style={animatedStyle}>
            <TouchableOpacity
                style={[styles.card, { backgroundColor: theme.card }]}
                onPress={onPress}
                activeOpacity={0.7}
            >
                <View style={{
                    padding: 8,
                    borderRadius: 16,
                    borderWidth: 2,
                    borderColor: theme.primary,
                    backgroundColor: theme.background,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 8,
                    elevation: 6,marginBottom: 12,
                }}>
                    <Animated.Image
                        source={project.image}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <Text style={[styles.title, { color: theme.text }]}>
                    {project.title}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 16,
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 8,
    },
});
