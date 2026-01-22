import React from "react";
import { View, Text, Animated, Image } from "react-native";
import { styles } from "../app/styles";
import { Theme } from "./types";

type Props = {
    theme: Theme;
    scrollY: Animated.Value;
};

export default function HomeSection({ theme, scrollY }: Props) {
    return (
        <><Animated.View style={styles.backgroundLayer} pointerEvents="none">
            <Animated.View
                style={[
                    styles.blob,
                    {
                        width: 400,
                        height: 400,
                        borderRadius: 200,
                        backgroundColor: theme.primary,
                        opacity: 0.15,
                        top: -100,
                        right: -80,
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: [0, 60],
                                    extrapolate: "clamp",
                                }),
                            },
                            {
                                rotate: scrollY.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: ['0deg', '45deg'],
                                    extrapolate: "clamp",
                                }),
                            },
                        ],
                    },
                ]}
            /><Animated.View
            style={[
                styles.blob,
                {
                    width: 350,
                    height: 350,
                    borderRadius: 175,
                    backgroundColor: theme.accent,
                    opacity: 0.18,
                    bottom: 100,
                    left: -60,
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [0, 400],
                                outputRange: [0, -70],
                                extrapolate: "clamp",
                            }),
                        },
                        {
                            scale: scrollY.interpolate({
                                inputRange: [0, 400],
                                outputRange: [1, 0.8],
                                extrapolate: "clamp",
                            }),
                        },
                    ],
                },
            ]}
        />

            <Animated.View
                style={[
                    styles.blob,
                    {
                        width: 180,
                        height: 180,
                        borderRadius: 40,
                        backgroundColor: theme.primary,
                        opacity: 0.12,
                        top: 200,
                        left: 30,
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: [0, -40],
                                    extrapolate: "clamp",
                                }),
                            },
                            {
                                rotate: scrollY.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: ['0deg', '-90deg'],
                                    extrapolate: "clamp",
                                }),
                            },
                        ],
                    },
                ]}
            />

            <Animated.View
                style={[
                    styles.blob,
                    {
                        width: 120,
                        height: 120,
                        borderRadius: 60,
                        backgroundColor: theme.accent,
                        opacity: 0.2,
                        top: 400,
                        right: 40,
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: [0, 80],
                                    extrapolate: "clamp",
                                }),
                            },
                            {
                                translateX: scrollY.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: [0, -40],
                                    extrapolate: "clamp",
                                }),
                            },
                        ],
                    },
                ]}
            />

            <Animated.View
                style={[
                    styles.blob,
                    {
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        backgroundColor: theme.primary,
                        opacity: 0.25,
                        bottom: 300,
                        right: 100,
                        transform: [
                            {
                                scale: scrollY.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: [1, 1.3],
                                    extrapolate: "clamp",
                                }),
                            },
                        ],
                    },
                ]}
            />
        </Animated.View>

            <View style={styles.nameContainer}>
                <Animated.View
                    style={{
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: [0, -30],
                                    extrapolate: "clamp",
                                }),
                            },{
                                rotate: scrollY.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: ['0deg', '5deg'],
                                    extrapolate: "clamp",
                                }),
                            },
                        ],
                    }}
                >
                    <View style={{
                        padding: 8,
                        borderRadius: 24,
                        borderWidth: 3,
                        borderColor: theme.primary,
                        backgroundColor: theme.card,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 8 },
                        shadowOpacity: 0.3,
                        shadowRadius: 12,
                        elevation: 10,
                        marginBottom: 32,
                    }}>
                        <Image
                            source={require('../assets/images/profile.jpeg')}
                            style={{
                                width: 180,
                                height: 180,
                                borderRadius: 16,
                            }}
                            resizeMode="cover"
                        />
                    </View>
                </Animated.View>

                <Text style={[styles.bigName, { color: theme.text }]}>
                    RENZO{"\n"}CABRAL
                </Text><Text style={[styles.tagline, { color: theme.subtext }]}>
                Aspiring developer passionate about building clean and usable digital
                experiences.
            </Text>
            </View>
        </>
    );
}
