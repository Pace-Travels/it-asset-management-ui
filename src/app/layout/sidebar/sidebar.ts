import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { OnInit } from '@angular/core';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
  permission?: string;
  expanded?: boolean;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})

export class Sidebar implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.setActiveRoute(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {

        this.setActiveRoute(event.urlAfterRedirects);

      });

  }

  private setActiveRoute(route: string): void {

    // Sab parents close
    this.menu.forEach(menu => {
      menu.expanded = false;
    });

    this.menu.forEach(parent => {

      if (parent.route === route) {
        this.activeMenu = parent.id;
      }

      if (parent.children) {

        const child = parent.children.find(c => c.route === route);

        if (child) {
          this.activeMenu = child.id;
          parent.expanded = true; // Sirf current parent open
        }

      }

    });

  }

  isParentActive(item: MenuItem): boolean {
    if (this.activeMenu === item.id) {
      return true;
    }
    if (item.children) {
      return item.children.some(child => child.id === this.activeMenu);
    }
    return false;
  }

  @Input()
  collapsed: boolean = false;

  menu: MenuItem[] = [

    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'pi pi-home',
      route: '/dashboard',
      permission: 'DASHBOARD_VIEW'
    },
    {
      id: 'masters', label: 'Masters', icon: 'pi pi-database', permission: 'MASTER_VIEW', expanded: false, children:
        [

          { id: 'user-master', label: 'User Master', icon: 'pi pi-users', route: '/masters/users', permission: 'MASTER_USER' },
          { id: 'department', label: 'Department', icon: 'pi pi-building', route: '/masters/departments', permission: 'MASTER_DEPARTMENT' },
          { id: 'location', label: 'Location', icon: 'pi pi-map-marker', route: '/masters/location', permission: 'MASTER_LOCATION' },
          { id: 'asset-type', label: 'Asset Type', icon: 'pi pi-box', route: '/masters/asset-type', permission: 'MASTER_ASSET_TYPE' },
          { id: 'vendor', label: 'Vendor', icon: 'pi pi-briefcase', route: '/masters/vendor', permission: 'MASTER_VENDOR' },

        ]
    },
    { id: 'reports', label: 'Reports', icon: 'pi pi-chart-bar', route: '/reports', permission: 'REPORT_VIEW' },
    { id: 'settings', label: 'Settings', icon: 'pi pi-cog', route: '/settings', permission: 'SETTINGS_VIEW' }

  ];

  toggle(item: MenuItem): void {

    if (item.children) {

      item.expanded = !item.expanded;

    }

  }

  activeMenu = 'dashboard';

  setActive(menu: string) {
    this.activeMenu = menu;
  }

  onMenuClick(item: MenuItem): void {
    this.setActive(item.id);
    if (item.children) {

      // Pehle sab close
      this.menu.forEach(menu => {

        if (menu.children) {
          menu.expanded = false;
        }

      });

      // Sirf current open
      item.expanded = true;

      this.setActive(item.id);

      return;
    }
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }

  onChildMenuClick(child: MenuItem): void {
    this.setActive(child.id);
    if (child.route) {
      this.router.navigate([child.route]);
    }
  }

}
