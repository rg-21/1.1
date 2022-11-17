import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcNavDrawerComponent, IgcRippleComponent, IgcTreeComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcNavDrawerComponent, IgcTreeComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .navbar {
      height: max-content;
      min-width: min-content;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      flex-shrink: 0;
    }
    .view-container {
      position: relative;
      flex-grow: 1;
    }
    .nav-drawer::part(main) {
      width: 320px;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .tree {
      min-width: max-content;
      min-height: max-content;
    }
  `;

  @query('#nav-drawer')
  public navDrawer?: IgcNavDrawerComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="navbar">
        <div slot="start">
          <igc-icon-button variant="flat" @click=${() => this.navDrawer?.toggle()}>
            <span class="material-icons">
              menu
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
        </div>
        <div slot="end">
          <igc-icon-button variant="flat">
            <span class="material-icons">
              search
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button variant="flat">
            <span class="material-icons">
              favorite
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button variant="flat">
            <span class="material-icons">
              more_vert
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
        </div>
        <div>App Name</div>
      </igc-navbar>
      <div class="row-layout group">
        <igc-nav-drawer ?open="${true}" position="relative" id="nav-drawer" class="nav-drawer">
          <igc-nav-drawer-item @click="${() => Router.go('/view1')}">
            <span slot="icon">
              <span class="material-icons icon">
                home
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">View 1</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go('/view2')}">
            <span slot="icon">
              <span class="material-icons icon">
                dns
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">View 2</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go('/view3')}">
            <span slot="icon">
              <span class="material-icons icon">
                dashboard
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">View 3</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go('<%=route_43d0d3a8_42c6_4eb9_92bb_30208538628a%>')}">
            <span slot="icon">
              <span class="material-icons icon">
                dashboard
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">View 3</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go('<%=route_43d0d3a8_42c6_4eb9_92bb_30208538628a%>')}">
            <span slot="icon">
              <span class="material-icons icon">
                dashboard
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">View 3</div>
          </igc-nav-drawer-item>
          <igc-tree selection="none" class="tree">
            <igc-tree-item label="Design" ?expanded="${true}">
              <igc-tree-item label="Figma" ?expanded="${true}" @click="${() => Router.go('<%=route_fbef7e5b_c4fc_486c_a106_d55ff9155bca%>')}"></igc-tree-item>
              <igc-tree-item label="Adobe XD" ?expanded="${true}" @click="${() => Router.go('<%=route_85b28506_8bbc_4de2_b65c_1103d0b39a2a%>')}"></igc-tree-item>
              <igc-tree-item label="Sketch" ?expanded="${true}" @click="${() => Router.go('<%=route_43d0d3a8_42c6_4eb9_92bb_30208538628a%>')}"></igc-tree-item>
            </igc-tree-item>
            <igc-tree-item label="Development" ?expanded="${true}">
              <igc-tree-item label="Angular" ?expanded="${true}"></igc-tree-item>
              <igc-tree-item label="Blazor" ?expanded="${true}"></igc-tree-item>
              <igc-tree-item label="Web components" ?expanded="${true}"></igc-tree-item>
            </igc-tree-item>
          </igc-tree>
        </igc-nav-drawer>
        <router-outlet class="view-container"></router-outlet>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
