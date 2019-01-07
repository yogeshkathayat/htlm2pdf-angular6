import { Component,Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {

  }

  openDialog() {

  //   const dialogConfig = new MatDialogConfig();

  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.data = {
  //     id: 1,
  //     title: 'Angular For Beginners'
  // };
  //   //this.dialog.open(PdfViewerComponent, dialogConfig);
  //   const dialogRef = this.dialog.open(PdfViewerComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(
  //       data => console.log("Dialog output:", data)
  //   );  

  
  }
}
