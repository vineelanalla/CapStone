import { Component, OnInit } from '@angular/core';
import { CapstoneService } from '../capstone.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  public projects: any;
  constructor(private _myService: CapstoneService) { }
  ngOnInit() {
      this.getProjects();
  }
  getProjects() {
      this._myService.getProjects().subscribe(
          data => { this.projects = data},
          err => console.error(err),
          () => console.log('finished loading')
      );
  }
  onDelete(projectId: string) {
    this._myService.deleteProject(projectId);
}

}
