export class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private isRunning: boolean = false;
    private lastTime: number = 0;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        // 鼠标事件
        this.canvas.addEventListener('click', (e) => {
            this.handleClick(e);
        });

        // 键盘事件
        document.addEventListener('keydown', (e) => {
            this.handleKeyDown(e);
        });
    }

    private handleClick(e: MouseEvent): void {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        console.log(`点击位置: (${x}, ${y})`);
        // TODO: 处理塔放置等逻辑
    }

    private handleKeyDown(e: KeyboardEvent): void {
        switch (e.key) {
            case ' ':
                // 空格键暂停/继续
                this.togglePause();
                break;
            case 'r':
                // R键重启
                this.restart();
                break;
        }
    }

    public start(): void {
        if (this.isRunning) return;
        this.isRunning = true;
        this.lastTime = performance.now();
        this.gameLoop();
    }

    public stop(): void {
        this.isRunning = false;
    }

    public togglePause(): void {
        this.isRunning = !this.isRunning;
        if (this.isRunning) {
            this.gameLoop();
        }
    }

    public restart(): void {
        console.log('游戏重启');
        // TODO: 重置游戏状态
        this.start();
    }

    private gameLoop = (currentTime: number = 0): void => {
        if (!this.isRunning) return;

        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;

        this.update(deltaTime);
        this.render();

        requestAnimationFrame(this.gameLoop);
    };

    private update(deltaTime: number): void {
        // TODO: 更新游戏逻辑
        // - 敌人移动
        // - 子弹移动
        // - 碰撞检测
        // - 塔攻击
    }

    private render(): void {
        // 清空画布
        this.ctx.fillStyle = '#001122';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // 绘制网格
        this.drawGrid();

        // TODO: 绘制游戏元素
        // - 塔
        // - 敌人
        // - 子弹
        // - 特效

        // 绘制UI文本
        this.drawUI();
    }

    private drawGrid(): void {
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;

        const gridSize = 40;

        for (let x = 0; x <= this.canvas.width; x += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }

        for (let y = 0; y <= this.canvas.height; y += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
    }

    private drawUI(): void {
        this.ctx.fillStyle = '#fff';
        this.ctx.font = '16px Microsoft YaHei';
        this.ctx.fillText('东方梦符祭风格塔防游戏', 10, this.canvas.height - 10);
    }
}