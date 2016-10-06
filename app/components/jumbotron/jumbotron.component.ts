import { Component } from '@angular/core';

@Component({

  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'

})

export class JumbotronComponent {

  private jbtHeading: string;
  private jbtTitle: string;
  private jbtText: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;

  constructor(){
    this.jbtHeading = 'Mikias';
    this.jbtTitle = 'Software developer';
    this.jbtText = 'HTML5, CSS3, JavaScript, jQuery, React.js, Redux, MongoDB, Express.js, Angular.js, and Node.js, Yeoman, Grunt, Gulp, Bower, NPM, Firebase, Git and familiar with Java, MySql, the Android SDK and Python';
    this.jbtBtnText = 'Read More';
    this.jbtBtnUrl = '/about';
  }

}
