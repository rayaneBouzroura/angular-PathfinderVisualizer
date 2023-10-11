import { Component, OnInit } from '@angular/core';
import { Cell } from '../models/cell.model';

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrls: ['./grid-display.component.css']
})
export class GridDisplayComponent implements OnInit {
  cells: Cell[] =[];//an array of cells (x,y and status)
  action = 'stop';
  startPlaced = false;

  ngOnInit(): void {
    this.createGrid();
  }
  createGrid() {
    const gridSize = 10; // for a 10x10 grid
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        this.cells.push({ x, y, type: '' }); // each cell has coordinates and a type
      }
    }


  }

  //cell click handler depending on the action
  onCellClick(index:number){
    if (this.action ==='start' && !this.startPlaced){//we use === to make loose comparision where type is not factual
      this.cells[index].type = 'start';
      this.startPlaced = true;
      this.action = 'stop';//switch back to stop  action after placing start to reset
    }
    else if(this.action === 'stop'){
      this.cells[index].type = this.cells[index].type ==='stop' ? '':'stop' //we toggle stop cell
    }
  }


  // Method to set action
setAction(action: string) {
  this.action = action;
}

}
