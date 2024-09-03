import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common'; // Assurez-vous que Location est importé
import { SideBarService } from 'src/app/core/services/side-bar/side-bar.service';
import { DataService, SideBar, SideBarMenu } from 'src/app/core/data/data.service';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';


interface routerlink {
  id?: number;
  type?: number;
  url: string;
  urlAfterRedirects?: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  public innerHeight!: string;
  title = 'template';
  public authenticated = false;
  public miniSidebar = 'false';
  public expandMenu = 'false';
  public mobileSidebar = 'false';
  url!: string;
  show = true;
  public layoutPosition = '1';
  public base = '';
  public page = '';

  constructor(
    private sideBar: SideBarService,
    public router: Router,
    private data: DataService,
    private location: Location, // Assurez-vous que Location est injecté ici
    private ngZone: NgZone
  ) {
    this.getRoutes(this.router);
    
    router.events.subscribe((event: object) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
        localStorage.removeItem('isMobileSidebar');
      }
    });

    this.sideBar.toggleSideBar.subscribe((res: string) => {
      this.miniSidebar = res === 'true' ? 'true' : 'false';
    });

    this.sideBar.toggleMobileSideBar.subscribe((res: string) => {
      this.mobileSidebar = res === 'true' ? 'true' : 'false';
    });

    this.sideBar.expandSideBar.subscribe((res: string) => {
      this.expandMenu = res;
      if (res === 'false' && this.miniSidebar === 'true') {
        this.data.sideBar.forEach((mainMenus: SideBar) => {
          mainMenus.menu.forEach((resMenu: SideBarMenu) => {
            resMenu.showSubRoute = false;
          });
        });
      }
      if (res === 'true' && this.miniSidebar === 'true') {
        this.data.sideBar.forEach((mainMenus: SideBar) => {
          mainMenus.menu.forEach((resMenu: SideBarMenu) => {
            const menuValue = sessionStorage.getItem('menuValue');
            resMenu.showSubRoute = menuValue === resMenu.menuValue;
          });
        });
      }
    });

    this.sideBar.layoutPosition.subscribe((res: string) => {
      this.layoutPosition = res;
    });

    window.onresize = () => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + 'px';
      });
    };

    this.getScreenHeight();
  }

  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }

  getScreenHeight() {
    this.innerHeight = window.innerHeight + 'px';
  }

  getRoutes(event: routerlink) {
    const splitVal = event.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.show = !['login', 'register', 'forgotpassword', 'errorpage'].includes(this.base);
  }
}

