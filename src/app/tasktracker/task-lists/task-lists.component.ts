import { Component } from '@angular/core';
import { AdvanceFilterComponent } from "../layouts/advance-filter/advance-filter.component";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-task-lists',
  imports: [AdvanceFilterComponent,NgxDatatableModule],
  templateUrl: './task-lists.component.html',
  styleUrl: './task-lists.component.css'
})
export class TaskListsComponent {
  
}
