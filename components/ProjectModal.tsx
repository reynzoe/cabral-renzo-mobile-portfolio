import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Pressable,
    TouchableOpacity,
    Image,
} from "react-native";
import { Project, Theme } from "./types";

type Props = {
    visible: boolean;
    project: Project | null;
    theme: Theme;
    onClose: () => void;
};

export default function ProjectModal({ visible, project, theme, onClose }: Props): React.JSX.Element | null {
    if (!project) return null;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <Pressable
                style={styles.modalOverlay}
                onPress={onClose}
            >
                <Pressable
                    style={[styles.modalContent, { backgroundColor: theme.card }]}
                    onPress={(e) => e.stopPropagation()}
                >
                    <Image
                        source={project.image}
                        style={styles.modalImage}
                        resizeMode="cover"
                    />
                    <Text style={[styles.modalTitle, { color: theme.text }]}>
                        {project.title}
                    </Text>
                    <Text style={[styles.modalDescription, { color: theme.text }]}>
                        {project.description}
                    </Text>
                    <TouchableOpacity
                        style={[styles.closeButton, { backgroundColor: theme.primary }]}
                        onPress={onClose}
                    >
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        maxWidth: 500,
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalImage: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 16,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 12,
    },
    modalDescription: {
        fontSize: 16,
        lineHeight: 24,
        opacity: 0.8,
        marginBottom: 20,
    },
    closeButton: {
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});