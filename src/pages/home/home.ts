import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TelevisionPage } from '../television/television';
import { BocinaPage } from '../bocina/bocina';
import { SmartphonePage } from '../smartphone/smartphone';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  television = TelevisionPage;
  bocina = BocinaPage;
  smart = SmartphonePage;
  lamp= LamparaPage;



  constructor(public navCtrl: NavController) {

  }

  clickbocina()
{
  this.navCtrl.push(this.bocina);
}

clicktelevision ()
{
  this.navCtrl.push(this.television);
}

clicksmart ()
{
  this.navCtrl.push(this.smart);
}

clicklampara ()
{
  this.navCtrl.push(this.lamp);
}
}
