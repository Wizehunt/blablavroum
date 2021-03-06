import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MembresService} from '../membres.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private membreService: MembresService) { }

  register() {
    this.loading = true;
    this.membreService.create(this.model)
      .subscribe(
        data => {
          this.loading = false;
          // this.router.navigate(['/login']);
          this.router.navigate(['/login'], { queryParams: { origin: 'register', mail: this.model.mail }});
        },
        error => {
          this.loading = false;
        });
  }

  ngOnInit() {
  }

}
