import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'day35workshop-client';

  ngOnInit(): void {
      
  }

  keypressed(text: any) {
    console.info('>>>', text);
  }
}
