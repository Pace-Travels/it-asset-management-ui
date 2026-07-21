import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashabord',
  imports: [CommonModule, ChartModule],
  templateUrl: './dashabord.html',
  styleUrl: './dashabord.scss',
})
export class Dashabord {

  constructor(
    private router: Router
  ) { }

  viewAllAssets(): void {

    this.router.navigate(['/asset-info']);

  }
  userName = 'Administrator';

  today = new Date();

  cards = [

    {
      title: 'Total Assets',
      value: 248,
      icon: 'pi pi-box',
      footer: '+12 this month',
      iconClass: 'primary'
    },

    {
      title: 'Assigned Assets',
      value: 176,
      icon: 'pi pi-desktop',
      footer: '71% Utilized',
      iconClass: 'success'
    },

    {
      title: 'Available Assets',
      value: 52,
      icon: 'pi pi-check-circle',
      footer: 'Ready to Assign',
      iconClass: 'warning'
    },

    {
      title: 'Under Repair',
      value: 20,
      icon: 'pi pi-wrench',
      footer: 'Need Attention',
      iconClass: 'danger'
    }

  ];

  categoryData: any;

  chartOptions: any;

  ngOnInit() {


    this.categoryData = {

      labels: ['Laptop', 'Desktop', 'Printer', 'Monitor'],

      datasets: [{

        label: 'Assets',

        data: [120, 65, 28, 35],

        backgroundColor: '#2563EB',

        borderRadius: 8

      }]

    };

    this.chartOptions = {

      responsive: true,

      maintainAspectRatio: false,

      plugins: {
        legend: {
          position: 'bottom'
        }
      }

    };

  }


  recentAssets = [

    {
      assetCode: 'AST001',
      assetName: 'Dell Latitude 5440',
      category: 'Laptop',
      status: 'Assigned'
    },

    {
      assetCode: 'AST002',
      assetName: 'HP ProBook 450',
      category: 'Laptop',
      status: 'Available'
    },

    {
      assetCode: 'AST003',
      assetName: 'Canon MF3010',
      category: 'Printer',
      status: 'Repair'
    },

    {
      assetCode: 'AST004',
      assetName: 'Dell Monitor 24"',
      category: 'Monitor',
      status: 'Assigned'
    },

    {
      assetCode: 'AST005',
      assetName: 'Lenovo ThinkCentre',
      category: 'Desktop',
      status: 'Available'
    }

  ];

  warrantyAlerts = [

    {
      asset: 'Dell Latitude 5440',
      daysLeft: 12
    },

    {
      asset: 'HP ProBook 450',
      daysLeft: 25
    },

    {
      asset: 'Canon MF3010',
      daysLeft: 30
    }

  ];

  recentActivities = [

    {
      icon: 'pi pi-plus-circle',
      title: 'New Asset Added',
      description: 'Dell Latitude 5440',
      time: '10 min ago'
    },

    {
      icon: 'pi pi-user-plus',
      title: 'Asset Assigned',
      description: 'Assigned to Rahul Sharma',
      time: '1 hour ago'
    },

    {
      icon: 'pi pi-wrench',
      title: 'Maintenance Updated',
      description: 'HP ProDesk 600',
      time: 'Today'
    }

  ];

  reminders = [

{
  provider:'Jio Fiber',
  due:'Recharge in 5 Days',
  icon:'pi pi-wifi',
  class:'danger'
},

{
  provider:'Airtel Fiber',
  due:'Recharge Tomorrow',
  icon:'pi pi-wifi',
  class:'warning'
},

{
  provider:'ACT Broadband',
  due:'Recharge in 12 Days',
  icon:'pi pi-wifi',
  class:'primary'
},

{
  provider:'BSNL Fiber',
  due:'Recharge in 20 Days',
  icon:'pi pi-wifi',
  class:'success'
}

];
}
