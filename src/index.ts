import { Game } from './core/Game';

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

const game = new Game(canvas, ctx);
game.start();

console.log('FirstGame - 东方梦符祭风格塔防游戏启动！');