import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as PIXI from 'pixi.js';
import { mouseCoords } from "src/utils/interfaces/mouse";
import { tilemapService } from 'src/graphics/tilemap/tilemap.service';

@Component({
  selector: 'app-sequencer-root',
  templateUrl: './sequencer-root.component.html',
  styleUrls: ['./sequencer-root.component.scss'],
})
export class SequencerRootComponent  implements OnInit, AfterViewInit{
  public screenWidthHeight: number [] = [24 * 128 , 16 * 128]
  private app: PIXI.Application = new PIXI.Application({
    backgroundColor: 0x424041,
    width: this.screenWidthHeight[0],
    height: this.screenWidthHeight[1],
  });

  tilemap: tilemapService = new tilemapService();

  constructor(private elementRef: ElementRef) {

  }



  graphics: PIXI.Graphics = new PIXI.Graphics();

  ngOnInit(): void {
    this.elementRef.nativeElement.appendChild(this.app.view);
    this.tilemap.drawGrid(this.graphics, this.app);
    this.app.stage.interactive = true;
    // this.app.stage.onmousemove = this.onMouseMove.bind(onmousemove);
    console.log(PIXI.VERSION);
  };

  ngAfterViewInit(): void {
    this.app.stage.on("pointermove", (event) => { this.tilemap.drawHighlight(event, this.app) })
  }

}