import { StyleSheet, Dimensions } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,},
    menuButtonContainer: {
        position: "absolute",
        top: 50,
        left: 20,
        right: 20,
        zIndex: 1000,
    },
    dynamicIsland: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    themeButton: {
        padding: 4,
    },
    themeIcon: {
        fontSize: 24,
    },
    menuButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    menuButtonText: {
        fontSize: 18,
        fontWeight: "600",
    },
    menuIcon: {
        fontSize: 20,
        fontWeight: "300",
    },
    dropdownMenu: {
        marginTop: 8,
        borderRadius: 24,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    menuItem: {
        paddingVertical: 18,
        paddingHorizontal: 24,
        alignItems: "center",
    },
    menuItemText: {
        fontSize: 18,
        fontWeight: "500",
    },
    homeContainer: {
        flex: 1,
    },
    homeContent: {
        paddingBottom: 40,
    },
    backgroundLayer: {
        ...StyleSheet.absoluteFillObject,
        overflow: "hidden",
    },
    blob: {
        position: "absolute",
        width: 320,
        height: 320,
        borderRadius: 160,
        opacity: 0.22,
    },
    blobPrimary: {
        top: -60,
        left: -40,
    },
    blobAccent: {
        bottom: -80,
        right: -30,
    },
    nameContainer: {
        height: SCREEN_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    bigName: {
        fontSize: 80,
        fontWeight: "900",
        letterSpacing: .2,
        textAlign: "left",
        lineHeight: 80,
        fontFamily: "Montserrat-Black", // or "Montserrat-ExtraBold"
    },

    tagline: {
        fontSize: 16,
        textAlign: "left",
        lineHeight: 24,
        maxWidth: 320,
        marginTop: 16,
    },
    projectsSection: {
        padding: 20,
    },
    projectsContainer: {
        flex: 1,
    },
    projectsContent: {
        padding: 20,
        paddingTop: 140,
        paddingBottom: 40,
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: "700",
        marginBottom: 24,
    },
    contactContainer: {
        flex: 1,
    },
    contactContent: {
        padding: 20,
        paddingTop: 140,
        paddingBottom: 40,
    },
    contactButton: {
        padding: 20,
        borderRadius: 16,
        marginBottom: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    contactButtonText: {
        fontSize: 18,
        fontWeight: "600",
    },
    contactFooter: {
        marginTop: 40,
        padding: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        alignItems: "center",
    },
    footerTitle: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 24,
    },
    socialLinks: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 12,
        marginBottom: 24,
    },
    socialButton: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        alignItems: "center",
        minWidth: 100,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    socialIcon: {
        fontSize: 28,
        marginBottom: 4,
    },
    socialLabel: {
        fontSize: 13,
        fontWeight: "600",
    },
    footerText: {
        fontSize: 12,
        textAlign: "center",
    },
    skillsSection: {
        padding: 20,
        marginTop: 20,
    },
    skillsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        marginTop: 16,
    },
    skillCard: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        minWidth: "30%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    skillIcon: {
        fontSize: 32,
        marginBottom: 8,
    },
    skillName: {
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
    },

});
