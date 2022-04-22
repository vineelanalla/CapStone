import { Directive, Input , HostBinding, OnChanges} from '@angular/core';

@Directive({
  selector: '[appAnimalImage]'
})
export class AnimalImageDirective implements OnChanges{

  constructor() { }
  @Input()  animalName: string = "";
  @HostBinding('src') imageSource = "";

  ngOnChanges() {
    this.imageSource = '../assets/Square.svg';
    if(this.animalName){
        if (this.animalName.indexOf('dog') > -1) 
            this.imageSource = '../assets/Dog.svg';
        if (this.animalName.indexOf('cat') > -1)  
            this.imageSource = '../assets/Cat.svg';
    }
}
}
