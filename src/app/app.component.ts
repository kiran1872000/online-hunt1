import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';

  globalRoutes=[
    {linkName:'Login',url:'login'},
    {linkName:'SignUp',url:'signup'},
    {linkName:'details',url:'details'},
    {linkName:'Purchase',url:'product'}
  ]
}
 

