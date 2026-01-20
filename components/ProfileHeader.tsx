import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
    theme: any;
};

export default function ProfileHeader({ theme }: Props) {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/profile.jpeg")}
                style={styles.image}
            />

            <Text style={[styles.name, { color: theme.text }]}>
                Hi, I'm Renzo!
            </Text>

            <Text style={[styles.bio, { color: theme.text }]}>
                Aspiring developer passionate about building clean and usable digital
                experiences.
            </Text>

            <Text style={[styles.contact, { color: theme.text }]}>
                rnzcbrl@gmail.com
            </Text>
            <Text style={[styles.contact, { color: theme.text }]}>
                github.com/username · linkedin.com/in/username
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: 24,
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        marginBottom: 16,
    },
    name: {
        fontSize: 26,
        fontWeight: "700",
    },
    bio: {
        fontSize: 14,
        textAlign: "center",
        marginVertical: 8,
        opacity: 0.8,
    },
    contact: {
        fontSize: 12,
        opacity: 0.6,
    },
});
