import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.BillTracka',
  appName: 'BillTracka',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
