import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarProvider } from '../../providers/bar/bar';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  bars=[];

  constructor(
    public _navCtrl: NavController,
    public _bar : BarProvider
  ) {}

  ngOnInit(){
    this._bar.getBars().subscribe(
      res => {
        this.bars = res.bars;
      },
      err => {
        console.error('ERREUR', err);
      }
    );
  }

}
