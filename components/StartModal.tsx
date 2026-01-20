
import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
    visible: boolean;
    message: string;
    onClose: () => void;
};

export default function StartModal({ visible, message, onClose }: Props) {
    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
            <View style={styles.backdrop}>
                <View style={styles.box}>
                    <Text style={styles.title}>Notice</Text>
                    <Text style={styles.message}>{message}</Text>
                    <TouchableOpacity onPress={onClose} style={styles.button}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
        elevation: 10,
    },
    title: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
    message: { fontSize: 15, textAlign: "center", marginBottom: 16 },
    button: {
        paddingHorizontal: 18,
        paddingVertical: 10,
        backgroundColor: "#ff6b6b",
        borderRadius: 8,
    },
    buttonText: { color: "#fff", fontWeight: "600" },
});

// File: `app/index.tsx` (snippet showing usage)
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from "react-native";
import StartModal from "../components/StartModal"; // adjust path if needed

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.start} onPress={() => setModalVisible(true)}>
                <Text style={styles.startText}>► START</Text>
            </TouchableOpacity>

            <StartModal
                visible={modalVisible}
                message="Game starting soon — good luck!"
                onClose={() => setModalVisible(false)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "flex-start", padding: 24 },
    start: { paddingVertical: 8, paddingHorizontal: 12 },
    startText: { color: "#fff", fontSize: 18 },
});
