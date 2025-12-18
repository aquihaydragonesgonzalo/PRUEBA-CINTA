
import { Session } from './types.ts';

export const MIN_SEGMENTS = 5;
export const MAX_SPEED = 15;
export const MAX_INCLINE = 15;

export const DEFAULT_SESSIONS: Session[] = [
  {
    id: 'hiit-gonzalo',
    name: 'HIIT GONZALO',
    description: 'Sesión de alta intensidad con escalada piramidal y enfriamiento progresivo controlado.',
    segments: [
      { id: 'g1', duration: 300, speed: 3.5, incline: 5 },
      { id: 'g2', duration: 360, speed: 4.5, incline: 8 },
      { id: 'g3', duration: 360, speed: 4.5, incline: 11 },
      { id: 'g4', duration: 360, speed: 4.5, incline: 9 },
      { id: 'g5', duration: 360, speed: 4.5, incline: 12 },
      { id: 'g6', duration: 60, speed: 4.5, incline: 13 },
      { id: 'g7', duration: 60, speed: 4.5, incline: 14 },
      { id: 'g8', duration: 60, speed: 4.5, incline: 15 },
      { id: 'g9', duration: 30, speed: 4, incline: 14 },
      { id: 'g10', duration: 30, speed: 4, incline: 13 },
      { id: 'g11', duration: 30, speed: 4, incline: 12 },
      { id: 'g12', duration: 30, speed: 4, incline: 11 },
      { id: 'g13', duration: 30, speed: 4, incline: 10 },
      { id: 'g14', duration: 30, speed: 4, incline: 9 },
      { id: 'g15', duration: 30, speed: 4, incline: 8 },
      { id: 'g16', duration: 30, speed: 4, incline: 7 },
      { id: 'g17', duration: 30, speed: 4, incline: 6 },
      { id: 'g18', duration: 30, speed: 3.5, incline: 5 },
      { id: 'g19', duration: 30, speed: 3.5, incline: 4 },
      { id: 'g20', duration: 30, speed: 3, incline: 3 },
      { id: 'g21', duration: 60, speed: 2, incline: 2 },
    ]
  },
  {
    id: 'quema-grasa-pro',
    name: 'QUEMA GRASA PRO',
    description: 'Alta inclinación y velocidad constante para máxima oxidación calórica en 40 min.',
    segments: [
      { id: 'qg1', duration: 300, speed: 4, incline: 5 },
      { id: 'qg2', duration: 600, speed: 5, incline: 10 },
      { id: 'qg3', duration: 600, speed: 5, incline: 12 },
      { id: 'qg4', duration: 600, speed: 5, incline: 11 },
      { id: 'qg5', duration: 300, speed: 3.5, incline: 4 },
    ]
  },
  {
    id: 'montana-activa',
    name: 'MONTAÑA ACTIVA',
    description: 'Simulación de trekking con pendientes de hasta el 15%. Gran gasto calórico.',
    segments: [
      { id: 'ma1', duration: 600, speed: 4.5, incline: 8 },
      { id: 'ma2', duration: 600, speed: 4.5, incline: 13 },
      { id: 'ma3', duration: 600, speed: 4.5, incline: 15 },
      { id: 'ma4', duration: 600, speed: 4.5, incline: 11 },
      { id: 'ma5', duration: 300, speed: 3, incline: 5 },
    ]
  },
  {
    id: 'hiit-power',
    name: 'HIIT Intenso',
    description: 'Alta intensidad con periodos de recuperación corta.',
    segments: [
      { id: 'h1', duration: 120, speed: 4, incline: 0 },
      { id: 'h2', duration: 60, speed: 12, incline: 2 },
      { id: 'h3', duration: 60, speed: 4, incline: 0 },
      { id: 'h4', duration: 60, speed: 12, incline: 4 },
      { id: 'h5', duration: 60, speed: 4, incline: 0 },
      { id: 'h6', duration: 60, speed: 14, incline: 2 },
      { id: 'h7', duration: 180, speed: 3, incline: 0 },
    ]
  }
];
