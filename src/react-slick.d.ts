// src/react-slick.d.ts
declare module 'react-slick' {
    import { Component } from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      // Adicione outras configurações conforme necessário
    }
  
    export default class Slider extends Component<Settings> {}
  }
  