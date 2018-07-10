import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-nar-bar',
  templateUrl: './nar-bar.component.html',
  styleUrls: ['./nar-bar.component.css']
})
export class NarBarComponent implements OnInit {
  title = "COJ";

  constructor(@Inject('auth') private auth) { }

  ngOnInit() {
  }
  login(): void{
    this.auth.login();
  }
  logout(): void{
    this.auth.logout();
  }

  isAuthenticated(): boolean{
    return this.auth.isAuthenticated();
  }


}
