import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud_prueba';
applyFilter: any;
dataSource!: CdkTableDataSourceInput<any>;
displayedColumns: any;
}
