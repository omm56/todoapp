import { Component, getNgModuleById, OnInit, ɵisListLikeIterable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task01';

  constructor() {
  }


  ngOnInit() {

  }
  
  Tasktodo = "";
  taskdate = "";
  complteList: any = [];
  albhabets = /^[A-Za-z]+$/;
  //  num = /^(\+\d{1,3}[- ]?)?\d{10}$/;

  addToList() {
    // let task = this.albhabets.test(this.Tasktodo);
    // let T_Date= this.num.test(this.taskdate);
    if (!this.Tasktodo || !this.taskdate) {
      alert("please enter the value in both fields")
    }
    // else if (!task) {
    //   alert("only albhabets are allowed")
    // }

    else {

      var details = { name: this.Tasktodo, date: this.taskdate };
      // this.complteList.push(details);
      console.log(this.complteList);
      if (this.complteList.find((taskName: { name: any; date: any; }) => taskName.name == details.name && taskName.date == details.date)) {
        alert("The task is already added in the list");
        return;
      }
      this.complteList.push(details);
      // this.complteList.sort((a: any, b: any) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);
      this.cleartextbox();
    }

  }
  cleartextbox() {
    this.Tasktodo = "";
    this.taskdate = "";
  } 
  DeletefromList(i: number) {
    this.complteList.splice(i, 1)
  }
  Edit(index: number) {
    this.Tasktodo = this.complteList[index].name;
    this.taskdate = this.complteList[index].date;
    this.DeletefromList(index);
  }
  Sortbytask(){

    this.complteList.sort((a: any, b: any) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
  }
  Sortbydate(){

    this.complteList.sort((a: any, b: any) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);
  }
  // drop down list for sort operation
  Changeby(event:Event)
  {
      console.log(event);
      if((event.target as HTMLInputElement).value == "name")
      this.Sortbytask();
      else{

      }
       console.log(event);
      if((event.target as HTMLInputElement).value == "date")
      this.Sortbydate();
      else
      {

      }

  }

}



