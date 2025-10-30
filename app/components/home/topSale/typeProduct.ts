export type TVProduct = {
  name : string ,
  brand: string;
  model: string;
  series: string;
  screen_size: string;
  resolution: string;
  display_type: string;
  special_design: string;
  processor: string;
  refresh_rate: string;
  backlight_tech: string;
  anti_glare: string;
  hdr: string;
  image_enhancement: string[];
  sound_system: {
    channels: string;
    power: string;
    technologies: string[];
  };
  smart_os: string;
  connectivity: {
    hdmi: string;
    usb: string;
    wifi: string;
    bluetooth: string;
    others: string[];
  };
  features: string[];
  dimensions: {
    with_stand: {
      width: string;
      height: string;
      depth: string;
    };
    without_stand: {
      width: string;
      height: string;
      depth: string;
    };
  };
  weight: {
    with_stand: string;
    without_stand: string;
  };
  origin: string;
  warranty: string;
  release_year: string;
  retail_price: number;
  discount_percent: number;
  promotions: string;
  images: string[];
};
