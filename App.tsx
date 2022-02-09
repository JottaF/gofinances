import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'

import { Dashboard } from './src/screens/dashboard/'
import theme from './src/global/styles/theme'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    <AppLoading/>
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
  )}

