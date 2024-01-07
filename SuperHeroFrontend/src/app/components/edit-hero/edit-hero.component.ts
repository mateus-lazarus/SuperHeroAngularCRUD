import { SuperHeroService } from './../../services/super-hero.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})

export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(
    private superHeroService: SuperHeroService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  updateHero(hero: SuperHero) {
    this.superHeroService
      .updateHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));

    this.router.navigate(['/home']);
  }

  createHero(hero: SuperHero) {
    this.superHeroService
      .createHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));

    this.router.navigate(['/home']);
  }

  deleteHero(hero: SuperHero) {
    this.superHeroService
      .deleteHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));

    this.router.navigate(['/home']);
  }
}
