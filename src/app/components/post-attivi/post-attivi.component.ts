import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { DataService } from 'src/app/service/dataservice.service';
@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {
@Input() data!:string
todos !: Todo [];



  constructor( private route:ActivatedRoute, private Data: DataService) { }
 nametodisplay:string = "";

 ngOnInit(): void {
this.todos = this.Data.getTodo();


  }


}
