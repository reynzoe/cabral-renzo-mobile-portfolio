import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from "../app/styles";
import { Theme } from "./types";

type Props = {
    theme: Theme;
};

export default function ContactFooter({ theme }: Props) {
    return (
        <View style={[styles.contactFooter, { backgroundColor: theme.card }]}>
            <Text style={[styles.footerTitle, { color: theme.text }]}>
                Let's Connect
            </Text>
            <View style={styles.socialLinks}>
                <TouchableOpacity
                    style={[styles.socialButton, { backgroundColor: theme.background }]}
                    onPress={() => Linking.openURL("https://www.facebook.com/renzolouiscabral")}
                >
                    <FontAwesome name="facebook" size={24} color={theme.primary} />
                    <Text style={[styles.socialLabel, { color: theme.text }]}>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.socialButton, { backgroundColor: theme.background }]}
                    onPress={() => Linking.openURL("https://github.com/reynzoe")}
                >
                    <FontAwesome name="github" size={24} color={theme.primary} />
                    <Text style={[styles.socialLabel, { color: theme.text }]}>GitHub</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.socialButton, { backgroundColor: theme.background }]}
                    onPress={() => Linking.openURL("https://instagram.com/rnzcbrl")}
                >
                    <FontAwesome name="instagram" size={24} color={theme.primary} />
                    <Text style={[styles.socialLabel, { color: theme.text }]}>Instagram</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.socialButton, { backgroundColor: theme.background }]}
                    onPress={() => Linking.openURL("https://www.linkedin.com/in/renzo-cabral-958604380")}
                >
                    <FontAwesome name="linkedin" size={24} color={theme.primary} />
                    <Text style={[styles.socialLabel, { color: theme.text }]}>LinkedIn</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.socialButton, { backgroundColor: theme.background }]}
                    onPress={() => Linking.openURL("mailto:rnzcbrl@gmail.com")}
                >
                    <FontAwesome name="envelope" size={24} color={theme.primary} />
                    <Text style={[styles.socialLabel, { color: theme.text }]}>Email</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.footerText, { color: theme.subtext }]}>
                © 2025 Renzo Cabral. All rights reserved.
            </Text>
        </View>
    );
}
