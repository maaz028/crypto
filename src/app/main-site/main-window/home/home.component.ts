import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common'
import { DataCommunicationService } from '../../data-communication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  landingUrl: string = "/";
  constructor(private location: PlatformLocation, private passData:DataCommunicationService) {
    location.onPopState(() => {
      window.location.href = this.landingUrl;
  });
   }
   value = ''
  alt = 'alternate'
  ngOnInit(): void {

    sessionStorage.setItem('_showMoreFeatures2','none')
    sessionStorage.setItem('_showMoreFeaturesAdmin2','none')
    this.passData.passData()


      console.log(' home loaded')
    let crore = 36454243
    console.log(crore)
    setInterval(()=>
    {
       crore = crore + 1
       var str = crore.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   
       this.value =  str.join(".");
    },1000)
  
  
  
  
  }

}
