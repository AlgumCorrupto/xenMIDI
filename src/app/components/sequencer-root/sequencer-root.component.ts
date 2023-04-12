/*
import { Component, OnInit, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as PIXI from 'pixi.js';
import { InteractionEvent } from '@pixi/interaction'
import { MouseCoords } from 'src/utils/interfaces/Mouse';
import { tilemapService } from 'src/graphics/tilemap/tilemap.service';
import * as core from '@pixi/core'

@Component({
  selector: 'app-sequencer-root',
  templateUrl: './sequencer-root.component.html',
  styleUrls: ['./sequencer-root.component.scss'],
  providers: [tilemapService]
})
export class SequencerRootComponent  implements OnInit{
  private app: PIXI.Application = new PIXI.Application({
    backgroundColor: 0x424041,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  tilemap: tilemapService = new tilemapService();

  constructor(private elementRef: ElementRef, private service: tilemapService, private document: Document) {

  }

  graphics: PIXI.Graphics = new PIXI.Graphics();

  ngOnInit(): void {
    this.elementRef.nativeElement.appendChild(this.app.view);
    //nthis.document.addEventListener('mousemove', this.onMouseMove)
    this.tilemap.drawGrid(this.graphics, this.app);
    this.app.stage.on('pointermove', this.onMouseMove(PIXI.EventSystem));
  };
 
  private MouseMov: MouseCoords = {x: 0, y: 0};

  private onMouseMove(e: InteractionEvent) {
    let pos: any = e.data;
    this.MouseMov.x = pos.x;
    this.MouseMov.y = pos.y;

    this.tilemap.drawHighlight(this.graphics, this.app, this.MouseMov)

  }




}
*/

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
  private app: PIXI.Application = new PIXI.Application({
    backgroundColor: 0x424041,
    width: window.innerWidth,
    height: window.innerHeight,
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
    this.app.stage.on("pointermove", (e: PIXI.FederatedPointerEvent) => {
      this.MouseMov.x = e.clientX;
      this.MouseMov.y = e.clientY;
    })
  }
 
  private MouseMov: mouseCoords = {x: 0, y: 0};
  /*
  private onMouseMove(e: PIXI.FederatedPointerEvent) {
    this.MouseMov.x = e.clientX;
    this.MouseMov.y = e.clientY;

    this.tilemap.drawHighlight(this.graphics, this.app, this.MouseMov);
  }
  */

}