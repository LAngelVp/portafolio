import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-tools-used',
    imports: [CommonModule],
    templateUrl: './tools-used.component.html',
    styleUrl: './tools-used.component.css'
})
export class ToolsUsedComponent {
  tools_used = [
      {
        name : 'word',
        url: 'https://cdn.worldvectorlogo.com/logos/word-1.svg'
      },
      {
        name : 'excel',
        url: 'https://cdn.worldvectorlogo.com/logos/excel-4.svg'
      },
      {
        name : 'powerpoint',
        url: 'https://cdn.worldvectorlogo.com/logos/powerpoint-2.svg'
      },
      {
        name : 'base de datos',
        url: 'https://cdn-icons-png.flaticon.com/512/9698/9698555.png'
      },
      {
        name : 'python',
        url: 'https://cdn.worldvectorlogo.com/logos/python-5.svg'
      },
      {
        name : '.net',
        url: 'https://cdn.worldvectorlogo.com/logos/c--4.svg'
      },
      {
        name : 'Salesforce',
        url: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg'
      },
      {
        name : 'typescript',
        url: 'https://cdn.worldvectorlogo.com/logos/typescript.svg'
      },
      {
        name : 'angular',
        url: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg'
      },
      {
        name : 'data analytics',
        url: 'https://cdn-icons-png.flaticon.com/512/10397/10397165.png'
      },
      {
        name : 'redes',
        url: 'https://cdn-icons-png.flaticon.com/512/1991/1991118.png'
      },
      {
        name : 'soporte',
        url: 'https://cdn-icons-png.flaticon.com/512/1055/1055683.png'
      },
      {
        name : 'git',
        url: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg'
      },
      
    ];

  getKeyName(name:{}):string{
    const name_key = Object.keys(name)[0];
    return name_key;
  }
}
