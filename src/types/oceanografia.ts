export interface Oceanografia {

  hourly: {

    time: string[];

    wave_height: number[];

    wave_direction: number[];

    wave_period: number[];

    sea_surface_temperature: number[];

    wind_speed_10m: number[];

    wind_direction_10m: number[];

    temperature_2m: number[];

    relative_humidity_2m: number[];

    precipitation: number[];

    cloud_cover: number[];

  };

}