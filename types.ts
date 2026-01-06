
export interface WeatherRecord {
  id: number;
  date: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  rain: 'Yes' | 'No';
}

export interface FeatureImportance {
  feature: string;
  impact: number;
  direction: 'positive' | 'negative';
}

export interface PredictionResult {
  prediction: 'Rain' | 'No Rain';
  probability: number;
  confidenceInterval: [number, number];
  featureImportance: FeatureImportance[];
}

export enum Page {
  Home = 'Home',
  Prediction = 'Prediction',
  Analysis = 'Analysis'
}
