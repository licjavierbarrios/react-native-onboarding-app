# Proyecto de Onboarding en React Native con Bun

Este proyecto es una aplicación de React Native que presenta un flujo de onboarding de múltiples pantallas utilizando Expo y Bun como gestor de paquetes. Las pantallas incluyen animaciones impulsadas por `react-native-reanimated` y componentes personalizados para una experiencia de usuario fluida.

## Características

- **Flujo de Onboarding Animado:** Transiciones suaves y efectos de animación para las pantallas de bienvenida.
- **Componentes Personalizados:** Incluye componentes reutilizables como `Button`, `IconButton`, `Paginator` y `BouncyOnboardingItem`.
- **React Native Reanimated:** Animaciones avanzadas utilizando valores compartidos y estilos animados.
- **Diseño Responsivo:** Se adapta a diferentes tamaños de pantalla con `Dimensions`.

## Pantallas

La aplicación incluye las siguientes pantallas de bienvenida:
1. **Travel & Study**
2. **Listen & Focus**
3. **Be Active**
4. **Learn Things**

## Instalación

1. Asegúrate de tener Bun instalado. Si no, puedes instalarlo siguiendo las instrucciones en [sitio oficial de Bun](https://bun.sh/).
2. Clona el repositorio:
   ```bash
   git clone <repository-url>
   cd bouncyonboarding
   ```
3. Instala las dependencias:
   ```bash
   bun install
   ```

## Ejecución de la Aplicación

- Inicia el servidor de desarrollo:
  ```bash
  bun start
  ```
- Ejecuta en un emulador/dispositivo Android:
  ```bash
  bun android
  ```
- Ejecuta en un simulador/dispositivo iOS:
  ```bash
  bun ios
  ```
- Ejecuta en la web:
  ```bash
  bun web
  ```

## Scripts del Proyecto

Los scripts personalizados incluidos en el proyecto son los siguientes:

- **Iniciar el proyecto:** `bun start`
- **Reiniciar el proyecto:** `bun reset-project`
- **Ejecutar pruebas:** `bun test`
- **Linting:** `bun lint`

## Dependencias

Este proyecto utiliza las siguientes dependencias:

### Dependencias principales:
- **React Native:** Versión `0.76.6`
- **Expo:** Versión `~52.0.26`
- **React Native Reanimated:** Versión `~3.16.1`
- **React Native Redash:** Versión `^18.1.3`
- **@react-navigation/native:** Versión `^7.0.14`

### Dependencias de desarrollo:
- **Jest:** Versión `^29.2.1`
- **TypeScript:** Versión `^5.3.3`

## Licencia

Este proyecto está bajo la Licencia MIT.
