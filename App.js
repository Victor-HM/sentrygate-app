import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/theme/theme';
import { useFonts, Livvic_400Regular, Livvic_700Bold } from '@expo-google-fonts/livvic';

export default function App() {
  const [fontsLoaded] = useFonts({ Livvic_400Regular, Livvic_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style='light' />
      <Home />
    </NativeBaseProvider>
  );
}
