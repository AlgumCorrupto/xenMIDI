import { Component, OnInit, ElementRef } from '@angular/core';
import * as PIXI from 'pixi.js';

import { tilemapService } from 'src/graphics/tilemap/tilemap.service';

@Component({
  selector: 'app-sequencer-root',
  templateUrl: './sequencer-root.component.html',
  styleUrls: ['./sequencer-root.component.scss'],
  providers: [tilemapService]
})
export class SequencerRootComponent  implements OnInit{
  private app: PIXI.Application = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight
  });

  tilemap: tilemapService = new tilemapService();

  constructor(private elementRef: ElementRef, private service: tilemapService) {

  }

  graphics: PIXI.Graphics = new PIXI.Graphics();

  ngOnInit(): void {
    this.elementRef.nativeElement.appendChild(this.app.view);
    this.tilemap.drawGrid(this.graphics, this.app);

  }

}
