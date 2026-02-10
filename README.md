# Navigation App - Expo Router & NativeWind

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Una aplicación móvil demostrativa construida con **React Native** y **Expo Router**, diseñada para explorar y dominar patrones avanzados de navegación, estilizado dinámico y arquitectura modular.

Este proyecto implementa una estructura de navegación compleja y anidada (**Drawer + Tabs + Stack**) totalmente tipada con TypeScript y estilizada con **NativeWind**.

## 🚀 Características Principales

### 🧭 Navegación Avanzada (Nested Navigation)
La aplicación maneja una jerarquía de navegación profunda:
- **Drawer (Menú Lateral):** Contenedor principal personalizado (`CustomDrawer`).
- **Tabs (Pestañas):** Anidadas dentro del Drawer.
- **Stack (Pila):** Anidado dentro de las Tabs para manejar el historial de navegación.
- **Lógica de Retroceso:** Control inteligente del botón "Back" para alternar entre volver atrás en el stack o abrir el menú lateral (`DrawerActions`).

### 🎨 UI/UX con NativeWind
- **Diseño Atomic:** Componentes reutilizables estilizados con clases de utilidad (Tailwind).
- **Temas Personalizados:** Colores semánticos (`primary`, `secondary`, `tertiary`) y fuentes personalizadas (**WorkSans**).
- **Layouts Flexibles:** Uso de `SafeAreaView` y múltiples layouts para adaptar la interfaz a diferentes pantallas.

### 🔗 Enrutamiento Dinámico
- **Paso de Argumentos:** Navegación a detalles de productos (`products/[id].tsx`) usando parámetros de ruta (Deep Linking).
- **File-based Routing:** Aprovechamiento total de la estructura de directorios de Expo Router.

### 🛠 Componentes Personalizados
- **CustomButton:** Un componente botón versátil creado con `forwardRef` para soportar el prop `asChild` de Expo Router, con variantes de diseño (`text-only`, `contained`) y colores dinámicos.
- **CustomDrawer:** Un menú lateral personalizado con cabecera de usuario y estilos redondeados.

## 📂 Estructura del Proyecto

La arquitectura sigue el patrón de rutas de Expo Router para lograr la anidación:

```text
app/
├── (drawer)/                  # Layout del Drawer Principal
│   ├── (tabs)/                # Layout de Pestañas anidado
│   │   ├── (stack)/           # Layout de Stack anidado
│   │   │   ├── home/          # Pantalla principal del Stack
│   │   │   ├── products/      # Lista y detalle de productos ([id])
│   │   │   ├── profile/       # Perfil de usuario
│   │   │   └── settings/      # Configuraciones
│   │   ├── favorites/         # Tab de favoritos
│   │   └── home/              # Tab de inicio (acceso alternativo)
│   ├── schedule/              # Pantalla directa en Drawer
│   └── user/                  # Pantalla directa en Drawer
├── _layout.tsx                # Entry point, carga de fuentes y Splash
└── global.css                 # Configuración de Tailwind/Nativewind
```

## 💻 Tecnologías

- Core: React Native, Expo SDK +50, TypeScript.
- Navegación: Expo Router (Stack, Drawer, Tabs), DrawerActions, useNavigation, router.push vs Link.
- Estilos: NativeWind (TailwindCSS), Fuentes personalizadas (expo-font).
- Gestión de Estado (UI): Control de UI mediante Props, paso de parámetros entre pantallas (useLocalSearchParams).
- Buenas Prácticas:
   - Uso de Slot y Stack.Screen.
   - Manejo de SplashScreen.
   - Creación de componentes agnósticos (CustomButton).
   - Tipado estricto con interfaces de TypeScript.

## 🔧 Instalación y Uso
1. Clonar el repositorio:
2. Instalar dependencias:
```bash
bun install
```
3. Ejecutar la aplicación:
```bash
bun start -c
```
