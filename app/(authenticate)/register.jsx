import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, Platform, StatusBar, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

const currentBarHeight = StatusBar.currentHeight

const register = () => {
    const router = useRouter();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff', alignItems: 'center' }}>
            <View style={{ height: 200, backgroundColor: "pink", width: "100%" }}>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 25 }}>
                    <Image
                        style={{ width: 200, height: 80, resizeMode: "contain" }}
                        source={{ uri: "https://cdn-1.webcatalog.io/catalog/flaticon/flaticon-icon-filled-256.png?v=1675597321933" }}
                    />
                </View>
                <Text
                    style={{
                        marginTop: 20,
                        textAlign: 'center',
                        fontSize: 20,
                    }}
                >
                    Match Mate
                </Text>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View
                    style={{ alignItems: 'center' }}
                >
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            marginTop: 25,
                            color: "#f9629f"
                        }}
                    >
                        Register to your account
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
                    <Image
                        style={{
                            width: 150,
                            height: 50,
                            resizeMode: 'contain'
                        }}
                        source={{ uri: "https://ingenius.agency/wp-content/uploads/2022/05/flaticon-logo.png" }}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                            paddingVertical: 5,
                            marginTop: 30,
                            borderRadius: 5,
                            backgroundColor: "#FFC0CB"
                        }}
                    >
                        <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="white" />
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder='Enter your name'
                            placeholderTextColor={"white"}
                            style={{ color: "white", marginVertical: 10, width: "80%", maxWidth: 300 }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                            paddingVertical: 5,
                            marginTop: 30,
                            borderRadius: 5,
                            backgroundColor: "#FFC0CB"
                        }}
                    >
                        <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="white" />
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder='Enter your email'
                            placeholderTextColor={"white"}
                            style={{ color: "white", marginVertical: 10, width: "80%", maxWidth: 300 }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                            paddingVertical: 5,
                            marginTop: 30,
                            borderRadius: 5,
                            backgroundColor: "#FFC0CB"
                        }}
                    >
                        <AntDesign style={{ marginLeft: 8 }} name="lock1" size={24} color="white" />
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            placeholder='Enter your password'
                            placeholderTextColor={"white"}
                            style={{ color: "white", marginVertical: 10, width: "80%", maxWidth: 300 }}
                        />
                    </View>
                    <View style={{
                        marginTop: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text>Keep me logged in</Text>
                        <Text style={{ color: "#007FFF", fontWeight: "500" }}>Forgot password</Text>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Pressable
                            style={{
                                width: "60%",
                                backgroundColor: '#FFC0CB',
                                borderRadius: 6,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                padding: 15
                            }}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white', textAlign: 'center' }}>Login</Text>
                        </Pressable>

                        <Pressable onPress={() => router.replace("/login")} style={{ marginTop: 12 }}>
                            <Text style={{ textAlign: 'center', color: 'gray' }}>Ban da co tai khoan? Sign Up</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default register

const styles = StyleSheet.create({})