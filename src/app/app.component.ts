import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  username:string='SidraMowlana';
  filterStatus ='';
  appStatus = new Promise((resolve,reject)=>
  {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  })
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database Server',
      status: 'critical',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Developement Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
  ];

  getStatusClass(server: {instanceType: string, name: string, status: string, started: Date}) {
    return{
      'list-group-item-success' : server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger' : server.status === 'critical'
    };
  }
  onAddServer()
  {
    this.servers.push({
      instanceType:'large',
      name:'Test Server',
      status:'offline',
      started: new Date(15, 1, 2017)
    });
  }
}
