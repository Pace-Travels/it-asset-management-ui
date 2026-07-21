import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface MenuItem {
  label: string;
  icon: string;
  expanded?: boolean;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})

export class Sidebar {
  @Input()
  collapsed: boolean = false;

  menu: MenuItem[] = [

    {
      label: 'Dashboard',
      icon: 'pi pi-home'
    },

    {
      label: 'Masters',
      icon: 'pi pi-database',
      expanded: true,
      children: [

        { label: 'User Master', icon: 'pi pi-users' },
        { label: 'Department', icon: 'pi pi-building' },
        { label: 'Location', icon: 'pi pi-map-marker' },
        { label: 'Asset Type', icon: 'pi pi-box' },
        { label: 'Vendor', icon: 'pi pi-briefcase' }

      ]
    },

    {
      label: 'Reports',
      icon: 'pi pi-chart-bar'
    },

    {
      label: 'Settings',
      icon: 'pi pi-cog'
    }

  ];

  toggle(item: MenuItem): void {

    if (item.children) {

      item.expanded = !item.expanded;

    }

  }

  activeMenu = 'Dashboard';

  setActive(menu: string) {
    this.activeMenu = menu;
  }



}
