import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CapstoneService {

    constructor(private http:HttpClient) {}

    getProjects() {
        return this.http.get('http://localhost:8000/projects');
    }
    addProjects(firstName: string, lastName: string, email:  string,
        phone:  string,
        jobTitle:  string,
        projectTitle:  string,
        street:  string,
        city:  string,
        state:  string,
        zip:  string,
        descriptionOfProject:  string,
        technicalSkillsRequired:  string,) {
         this.http.post('http://localhost:8000/projects',{ firstName, lastName, email, phone, jobTitle,projectTitle,street,
        city,state,zip,descriptionOfProject,technicalSkillsRequired })
        .subscribe((responseData) => {
            console.log(responseData);
        }); 
    }
    deleteProject(projectId: string) {
        this.http.delete("http://localhost:8000/projects/" + projectId)
            .subscribe(() => {
                console.log('Deleted: ' + projectId);
            });
            location.reload();
    }
    updateProject(projectId: string,firstName: string, lastName: string, email:  string,
        phone:  string,
        jobTitle:  string,
        projectTitle:  string,
        street:  string,
        city:  string,
        state:  string,
        zip:  string,
        descriptionOfProject:  string,
        technicalSkillsRequired:  string) {
        this.http.put("http://localhost:8000/projects/" + 
        projectId,{ firstName, lastName, email, phone, jobTitle,projectTitle,street,
            city,state,zip,descriptionOfProject,technicalSkillsRequired })
        .subscribe(() => {
            console.log('Updated: ' + projectId);
        });
    }
    getProject(projectId: string) {
        return this.http.get('http://localhost:8000/projects/'+ projectId);
      }
      
             
}