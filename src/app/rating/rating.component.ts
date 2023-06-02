import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  star: number = 0;
  previousButtonObject = {
    label: 9,
    selected: false
  }
  buttonList = [{
    label: 1,
    selected: false
  },
  {
    label: 2,
    selected: false
  },
  {
    label: 3,
    selected: false
  },
  {
    label: 4,
    selected: false
  },
  {
    label: 5,
    selected: false
  }, {
    label: 6,
    selected: false
  },
  {
    label: 7,
    selected: false
  },
  {
    label: 8,
    selected: false
  },
  {
    label: 9,
    selected: false

  },
  {
    label: 10,
    selected: false
  }];

  buttonList2 = [{
    label: 1,
    selected: false
  },
  {
    label: 2,
    selected: false
  },
  {
    label: 3,
    selected: false
  },
  {
    label: 4,
    selected: false
  },
  {
    label: 5,
    selected: false
  }, {
    label: 6,
    selected: false
  },
  {
    label: 7,
    selected: false
  },
  {
    label: 8,
    selected: false
  },
  {
    label: 9,
    selected: false

  },
  {
    label: 10,
    selected: false
  }];
  constructor() { }

  ratingReview(currenctButtonObject: any) {
    this.previousButtonObject.selected = false;
    console.log(currenctButtonObject);
    currenctButtonObject.selected = true;
    this.previousButtonObject = currenctButtonObject; // 3  
  }
  ratingReview1(currenctButtonObject: any) {
    this.buttonList2.forEach(btn => {
      btn.selected = currenctButtonObject.label >= btn.label;
      // if(currenctButtonObject.label >= btn.label){
      //   btn.selected = true;
      //   }
      //   else{
      //     btn.selected = false;
      //   }
    })

  }


}

