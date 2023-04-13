
import { Component, OnInit, ElementRef, AfterViewInit, ApplicationRef } from '@angular/core';
import * as PIXI from 'pixi.js';
import { mouseCoords } from 'src/utils/interfaces/mouse'
import { TilemapService } from 'src/graphics/tilemap/tilemap.service';

@Component({
  selector: 'app-sequencer-root',
  templateUrl: './sequencer-root.component.html',
  styleUrls: ['./sequencer-root.component.scss'],
})
export class SequencerRootComponent  implements OnInit, AfterViewInit{
  private app: PIXI.Application = new PIXI.Application({
    backgroundColor: 0x424041,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  tilemap: TilemapService = new TilemapService();
  highlited: boolean = false;

  constructor(private elementRef: ElementRef, private appRef: ApplicationRef) {

  }

  graphics: PIXI.Graphics = new PIXI.Graphics();

  ngOnInit(): void {
    this.elementRef.nativeElement.appendChild(this.app.view);
    this.tilemap.drawGrid(this.graphics, this.app);
    this.app.stage.interactive = true;
    console.log(PIXI.VERSION);
  };

  ngAfterViewInit(): void {
    this.app.stage.on("pointermove", this.onMouseMove);
    //this.app.stage.on("pointermove", this.onMouseMove2);
    this.graphics.interactive = true;
  }
 

  
  private onMouseMove(ev: PIXI.InteractionEvent) {
    let pos = ev.data.global
    let MouseMov: mouseCoords = {x: 0, y: 0};
    let app = this.app;
    let graphics: PIXI.Graphics = new PIXI.Graphics()

    MouseMov.x = pos.x;
    MouseMov.y = pos.y;


    this.tilemap.drawHighlight(graphics, MouseMov);
  }
}