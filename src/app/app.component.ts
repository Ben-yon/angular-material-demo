import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-demo';
  notification = 0;

  showSpinner = false;
  opened = false;

  loadData(){
    this.showSpinner = true;
    setTimeout(()=> {
      this.showSpinner = false;
    }, 5000);
  }
}
