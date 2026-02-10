
import CustomDrawer from "@/components/shared/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                // headerShown: false,
                overlayColor: 'rgba(0,0,0,0.5)',
                drawerActiveTintColor: 'indigo',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white'
                },
                drawerStyle: {
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                },
                drawerItemStyle: {
                    borderRadius: 10, // Aquí ajustas qué tan redondo quieres el contenedor
                    marginVertical: 5, // Opcional: espacio entre ítems
                }
            }}
        >
            <Drawer.Screen
                name="user/index" // This is the name of the page and must match the url from root
                options={{

                    drawerLabel: 'User',
                    title: 'Usuario',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="schedule/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Horario',
                    title: 'Horarios',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="calendar-outline"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="(tabs)" // This is the name of the page and must match the url from root
                options={{
                    headerShown: false,
                    drawerLabel: 'Tabs + Stack',
                    title: 'Tab y Stack',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="albums-outline"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Drawer>
    )
}

export default DrawerLayout