import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../../data-communication.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private passData : DataCommunicationService) { }

  ngOnInit(): void {
    console.log('about called')
    sessionStorage.setItem('_showMoreFeatures2','none')
    sessionStorage.setItem('_showMoreFeaturesAdmin2','none')
    this.passData.passData()
  }

}
