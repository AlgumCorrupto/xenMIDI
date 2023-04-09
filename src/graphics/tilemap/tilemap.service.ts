import { Injectable } from "@angular/core";
import * as PIXI from 'pixi.js'

// the tilemap coordinate system
interface iNoteGrid {
    xDeltaTime: number;
    yNotePitch: number;
    idTemperament: number;
};

// a single cell of the tilemap (width and height probabily in pixels)
interface iTileRect {
    xWidth: number;
    yHeight: number;
}

@Injectable({
    providedIn: 'root'  
})
export class tilemapService{
    selectedEDO: iNoteGrid = { xDeltaTime: 128, yNotePitch: 128,idTemperament: 12 };
    tileRect: iTileRect = { xWidth: 32, yHeight: 16 };
    public graphics = new PIXI.Graphics();

    public drawGrid(graphics: PIXI.Graphics, app: PIXI.Application)
    {
        const xMax = this.selectedEDO.xDeltaTime * this.tileRect.xWidth;
        const yMax = this.selectedEDO.yNotePitch * this.tileRect.yHeight;
        graphics.lineStyle(4, 0xFF0000);

        for (let x: number = 0; x < xMax; x+= this.tileRect.xWidth)
            for(let y: number = 0; y < yMax; y+= this.tileRect.yHeight) {
                graphics.drawRect( x, y, this.tileRect.xWidth, this.tileRect.yHeight);
                app.stage.addChild(graphics);
            }
            
    }


}