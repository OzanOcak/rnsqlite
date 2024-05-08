yarn create expo-app --template
yarn
yarn add expo

# Required for sqlite

npx expo install expo-sqlite
npx expo install expo-file-system expo-asset

# Required for navigation and UI

yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add @react-native-segmented-control/segmented-control
npx expo install react-native-screens react-native-safe-area-context
yarn add react-native-auto-size-text
