import weatherInstance from './weather.instance';

export interface WeatherData {
  place: string;
}

export interface LightingData extends WeatherData {
  occur: boolean;
}

export interface RegionalWeatherData extends WeatherData {
  value: number;
  unit: 'C' | 'F' | string;
}

export interface RainfallData extends WeatherData {
  unit: 'mm' | 'cm' | string;
  main: boolean;
  max?: number;
  min?: number;
}

export interface Rainfall {
  data: RainfallData[];
  startTime: Date;
  endTime: Date;
}

export interface UvindexData extends WeatherData {
  value: number;
  desc: string;
  message?: string;
}

export interface Uvindex {
  data: UvindexData[];
  recordDesc: string;
}

export interface RegionalValueWeatherData {
  data: RegionalWeatherData[];
  recordTime: Date;
}

export interface Temperature extends RegionalValueWeatherData {}

export interface Humidity extends RegionalValueWeatherData {}

export interface CurrentWeatherReport {
  icon: number[];
  uvindex: Uvindex;
  temperature: Temperature;
  humidity: Humidity;
  rainfall: Rainfall;
  warningMessage: string;
  updateTime: Date;
  iconUpdateTime: Date;
  mintempFrom00To09?: string;
  rainfallFrom00To12?: string;
  rainfallLastMonth?: string;
  rainfallJanuaryToLastMonth?: string;
  rainstormReminder?: string;
  tcmessage?: '' | string | string[];
  specialWxTips?: '' | string | string[];
}

export default weatherInstance.get<CurrentWeatherReport>('/', {
  params: {
    dataType: 'rhrread',
    lang: 'en',
  }
})
