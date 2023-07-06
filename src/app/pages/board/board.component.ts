import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  todos: ToDo[] = [
    {
      id: '1',
      title: 'Make Dishes',
    },
    {
      id: '2',
      title: 'Buy a unicorn',
    },

  ];

  doing: ToDo[] = [
    {
      id: '3',
      title: 'Watch Angular Path',
    },
  ];

  done: ToDo[] = [
    {
      id: '4',
      title: 'Play Video Games',
    },
  ];

  drop(event: CdkDragDrop<ToDo[]>): void {
    if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
