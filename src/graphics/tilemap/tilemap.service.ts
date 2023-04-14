import * as PIXI from "pixi.js"
import { mouseCoords } from "src/utils/interfaces/mouse";

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

export class tilemapService{
    selectedEDO: iNoteGrid = { xDeltaTime: 128, yNotePitch: 128,idTemperament: 12 };
    tileRect: iTileRect = { xWidth: 24, yHeight: 16 };
    private tiles: PIXI.Graphics [] = []


    //function that draws the grid on the screen (used when initialized)
    public drawGrid(graphics: PIXI.Graphics, app: PIXI.Application)
    {
        const xMax = this.selectedEDO.xDeltaTime * this.tileRect.xWidth;
        const yMax = this.selectedEDO.yNotePitch * this.tileRect.yHeight;

        let i : number = 0
        for (let x: number = 0; x < xMax; x+= this.tileRect.xWidth) {
            for(let y: number = 0; y < yMax; y+= this.tileRect.yHeight) {
                this.tiles.push(new PIXI.Graphics())
                this.tiles[i].lineStyle(1, 0xafb2b6);
                this.tiles[i].hitArea = new PIXI.Rectangle(x ,y, this.tileRect.xWidth, this.tileRect.yHeight)
                this.tiles[i].interactive = true;
                this.tiles[i].buttonMode = true;
                this.tiles[i].on('mouseover', () => {
                    this.tiles[i].clear();
                    this.tiles[i].lineStyle(1, 0xd7891c)
                    this.tiles[i].drawRect(x, y, this.tileRect.xWidth, this.tileRect.yHeight)});
                this.tiles[i].drawRect( x, y, this.tileRect.xWidth, this.tileRect.yHeight);
                app.stage.addChild(this.tiles[i]);
                i++;
            }
        }
    }

    //function that draws highlight when you hover your mouse on a cell
    public drawHighlight( ev: PIXI.InteractionEvent, app: PIXI.Application ):void {
        /*const xMax = this.selectedEDO.xDeltaTime * this.tileRect.xWidth;
        const yMax = this.selectedEDO.yNotePitch * this.tileRect.yHeight;
        let pos = ev.data.global;
        let mouseMove: mouseCoords = {x: pos.x, y: pos.y}
        let graphics: PIXI.Graphics = new PIXI.Graphics();
        graphics.lineStyle(1, 0xd7891c);


        
        let gridX: number = this.selectedEDO.xDeltaTime;
        let gridY: number = this.selectedEDO.yNotePitch;
        /*find active cell
        SelCell = [MouseX / xDeltaTime, MouseY / yNotePitch]
        /
       
        let selectedCell: number [] = [mouseMove.x / gridX, mouseMove.y / gridY];
        
        //find offset into cell (later)


        //draw the highlight
        graphics.drawRect(selectedCell[0], selectedCell[1], this.tileRect.xWidth, this.tileRect.yHeight);
        app.stage.addChild(graphics)
        */
        
        const xMax = this.selectedEDO.xDeltaTime * this.tileRect.xWidth;
        const yMax = this.selectedEDO.yNotePitch * this.tileRect.yHeight;
        
        const tiles: PIXI.Graphics[][] = [];
        
        const graphics = new PIXI.Graphics();
        graphics.lineStyle(1, 0xafb2b6);
        
        for (let x: number = 0; x < xMax; x+= this.tileRect.xWidth) {
            tiles[x] = [];
            for(let y: number = 0; y < yMax; y+= this.tileRect.yHeight) {
                const tile = new PIXI.Graphics();
                tile.x = x;
                tile.y = y;
                tile.drawRect(0, 0, this.tileRect.xWidth, this.tileRect.yHeight);
                tiles[x][y] = tile;
                app.stage.addChild(tile);
            
                tile.interactive = true;
                tile.on('mouseover', () => {
                    tile.clear();
                    tile.lineStyle(1, 0xd7891c);
                    tile.drawRect(0, 0, this.tileRect.xWidth, this.tileRect.yHeight);
                });
            }
        }
        
    }
        
    }