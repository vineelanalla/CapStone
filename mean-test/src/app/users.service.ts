import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersService {

    constructor(private http:HttpClient) {}

    getUsers() {
        return this.http.get('http://localhost:8000/users');
    }
    addUsers(firstName: string, lastName: string, email:  string,
        phone:  string,
        jobTitle:  string,
        projectTitle:  string,
        street:  string,
        city:  string,
        state:  string,
        zip:  string,
        descriptionOfProject:  string,
        technicalSkillsRequired:  string,) {
         this.http.post('http://localhost:8000/users',{ firstName, lastName, email, phone, jobTitle,projectTitle,street,
        city,state,zip,descriptionOfProject,technicalSkillsRequired })
        .subscribe((responseData) => {
            console.log(responseData);
        }); 
    }
    deleteUser(userId: string) {
        this.http.delete("http://localhost:8000/users/" + userId)
            .subscribe(() => {
                console.log('Deleted: ' + userId);
            });
            location.reload();
    }
    updateUser(userId: string,firstName: string, lastName: string, email:  string,
        phone:  string,
        jobTitle:  string,
        projectTitle:  string,
        street:  string,
        city:  string,
        state:  string,
        zip:  string,
        descriptionOfProject:  string,
        technicalSkillsRequired:  string) {
        this.http.put("http://localhost:8000/users/" + 
        userId,{ firstName, lastName, email, phone, jobTitle,projectTitle,street,
            city,state,zip,descriptionOfProject,technicalSkillsRequired })
        .subscribe(() => {
            console.log('Updated: ' + userId);
        });
    }
    getUser(userId: string) {
        return this.http.get('http://localhost:8000/users/'+ userId);
      }
      
             
}