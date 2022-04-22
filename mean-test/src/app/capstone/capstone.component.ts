import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {CapstoneService} from '../capstone.service';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-capstone',
  templateUrl: './capstone.component.html',
  styleUrls: ['./capstone.component.css']
})
export class CapstoneComponent implements OnInit {
  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() email:  string = "";
  @Input()  phone:  string = "";
  @Input() jobTitle:  string = "";
  @Input() projectTitle:  string = "";
  @Input() street:  string = "";
  @Input() city:  string = "";
  @Input() state:  string = "";
  @Input() zip:  string = "";
  @Input() descriptionOfProject:  string = "";
  @Input() technicalSkillsRequired:  string = "";
  public mode = 'Add'; 
  private id: any;
  private project: any;
  constructor(private _myService: CapstoneService, private router:Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
        if (paramMap.has('_id')){
            this.mode = 'Edit'; 
            this.id = paramMap.get('_id');

            this._myService.getProject(this.id).subscribe(
                data => { 
                    this.project = data;
                    this.firstName = this.project.firstName;
                    this.lastName = this.project.lastName;
                    this.jobTitle= this.project.jobTitle;
                    this.email= this.project.email;
                    this.phone= this.project.phone;
                    this.street= this.project.street;
                    this.city= this.project.city;
                    this.state= this.project.state;
                    this.zip= this.project.zip;
                    this.projectTitle= this.project.projectTitle;
                    this.descriptionOfProject= this.project.descriptionOfProject;
                    this.technicalSkillsRequired= this.project.technicalSkillsRequired;
                },
                err => console.error(err),
                () => console.log('finished loading')
            );
        } 
        else {
            this.mode = 'Add';
            this.id = null; 
        }
    });
}
  profileForm = new FormGroup(
    {
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    jobTitle: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    organizationAddress: new FormGroup(
      {
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    projectTitle: new FormControl(''),
    descriptionOfProject: new FormControl(''),
    technicalSkillsRequired: new FormControl(''),
  });
  onSubmit() {
    console.log("You submitted: " + this.firstName + " " + this.lastName);
    //this._myService.addProjects(this.firstName ,this.lastName, this.email, this.phone, this.jobTitle,this.projectTitle,this.street,this.city,this.state,this.zip,this.descriptionOfProject,this.technicalSkillsRequired);
    if (this.mode == 'Add')
    this._myService.addProjects(this.firstName ,this.lastName, this.email, this.phone, this.jobTitle,this.projectTitle,this.street,this.city,this.state,this.zip,this.descriptionOfProject,this.technicalSkillsRequired);
    if (this.mode == 'Edit')
    this._myService.updateProject(this.id,this.firstName ,this.lastName, this.email, this.phone, this.jobTitle,this.projectTitle,this.street,this.city,this.state,this.zip,this.descriptionOfProject,this.technicalSkillsRequired);
    this.router.navigate(['/listProjects']);
  }
  
  getCityByZip(zip: string) {
    console.log(this);
    let postal_code=this.profileForm.get('organizationAddress')?.get('zip')?.value;
    console.log('Postal Code is: '+postal_code);
    let kennesaw_zipcodes=[30144,30152];
    let marietta_zipcodes=[30060,30061,300062,30063,30064,30065,30066,30067,30068,30069];
    let woodstock_zipcodes=[30188,30189];
    if(kennesaw_zipcodes.includes(postal_code))
    {    
      this.profileForm.patchValue({
        organizationAddress: {
          city: 'Kennesaw'
        }
      });
    }
    else if(marietta_zipcodes.includes(postal_code))
    {    
      this.profileForm.patchValue({
        organizationAddress: {
          city: 'Marietta'
        }
      });
    }
    else if(woodstock_zipcodes.includes(postal_code))
    {    
      this.profileForm.patchValue({
        organizationAddress: {
          city: 'WoodStock'
        }
      });
    }
    
  }
  
}
