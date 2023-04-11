import { Injectable } from "@angular/core";
import * as PIXI from 'pixi.js';
import { MouseCoords } from "src/utils/interfaces/Mouse";

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
    tileRect: iTileRect = { xWidth: 24, yHeight: 16 };
    public graphics = new PIXI.Graphics();

    //function that draws the grid on the screen (used when initialized)
    public drawGrid(graphics: PIXI.Graphics, app: PIXI.Application)
    {
        const xMax = this.selectedEDO.xDeltaTime * this.tileRect.xWidth;
        const yMax = this.selectedEDO.yNotePitch * this.tileRect.yHeight;
        graphics.lineStyle(1, 0xafb2b6);

        for (let x: number = 0; x < xMax; x+= this.tileRect.xWidth)
            for(let y: number = 0; y < yMax; y+= this.tileRect.yHeight) {
                graphics.drawRect( x, y, this.tileRect.xWidth, this.tileRect.yHeight);
                app.stage.addChild(graphics);
            }
    }

    //function that draws highlight when you hover your mouse on a cell
    public drawHighlight(graphics: PIXI.Graphics, app: PIXI.Application, mCoords: MouseCoords):void {
        const xMax = this.selectedEDO.xDeltaTime * this.tileRect.xWidth;
        const yMax = this.selectedEDO.yNotePitch * this.tileRect.yHeight;
        graphics.lineStyle(1, 0xd7891c);

        //get mouse coordinates
        let mouseX: number = mCoords.x;
        let mouseY: number = mCoords.y;

        
        let gridX: number = this.selectedEDO.xDeltaTime;
        let gridY: number = this.selectedEDO.yNotePitch;
        /*find active cell
        SelCell = [MouseX / xDeltaTime, MouseY / yNotePitch]
        */
       
        selectedCell: [] = [mouseX / gridX, mouseY / gridY];
        
        //find offset into cell (later)


        //draw the highlight
        graphics.drawRect(gridX, gridY, this.tileRect.xWidth, this.tileRect.yHeight);
        app.stage.addChild(graphics);
    }

}