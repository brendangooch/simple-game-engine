/**
 * combines simple game loop and simple renderer into one single package
 */

import { Canvas } from "@brendangooch/canvas";
import { iUpdateable, SimpleGameLoop } from "@brendangooch/simple-game-loop";
import { iRenderable, SimpleRenderer } from "@brendangooch/simple-renderer";


export class SimpleGameEngine {

    private gameLoop: SimpleGameLoop = new SimpleGameLoop();
    private renderer: SimpleRenderer;
    private running: boolean = false;

    public constructor(canvas: Canvas) {
        this.renderer = new SimpleRenderer(canvas);
    }

    public loop(objects: iUpdateable[]): void {
        objects.forEach(obj => this.gameLoop.add(obj));
    }

    public render(objects: iRenderable[]): void {
        objects.forEach(obj => this.renderer.add(obj));
    }

    public start(): void {
        if (!this.running) {
            this.gameLoop.start();
            this.renderer.start();
            this.running = true;
        }
    }

    public stop(): void {
        if (this.running) {
            this.gameLoop.stop();
            this.renderer.stop();
            this.running = false;
        }
    }

    public toggle(): void {
        if (!this.running) this.start();
        else this.stop();
    }

}