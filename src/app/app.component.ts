import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader: string = 'Employee Detais';
  imagePath: string ='https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  isDisabled: boolean = false;
  badHtml:string = 'Hello <script>alert("Hacked!");</script> World';
  isBold:boolean = true;
  fontSize:number = 30;
  isItalic:boolean = true;

  addStyles() {
    let styles = {
      'font-size.px': this.fontSize,
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal'
    };

    return styles;
  }

  onClick(): void {
    console.log('Button Clicked')
  }

  //Two way data binding
  name:string = 'Shafiq';

  firstName: string = 'Shafiq';
  lastName: string = 'Tahir';

  getFullName() : string {
    return this.firstName + ' ' + this.lastName;
  }
}
