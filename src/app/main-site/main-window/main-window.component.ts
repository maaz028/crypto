import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {

  constructor(private router : Router, private title:Title, private active_router:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.changeTitle()
  }
  changeTitle() {
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationEnd:
          this.title.setTitle(this.active_router.firstChild?.snapshot.data.title)
          break;
  
        default:
          break;
      }
    });
  }
  }

