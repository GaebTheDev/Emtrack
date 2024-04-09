import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'Emtrack';

  constructor(private primengConfig: PrimeNGConfig){}
  
  ngOnInit() {
    this.primengConfig.ripple = true;
}
}
