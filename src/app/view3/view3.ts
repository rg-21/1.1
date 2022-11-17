import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import NorthwindService from '../service/northwind-service';

@customElement('app-view3')
export default class View3 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .tree-grid {
      min-width: 600px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    const northwindService: NorthwindService = new NorthwindService();
    this.northwindEmployees = northwindService.getData('Employees');
  }

  @property()
  private northwindEmployees?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <igc-tree-grid .data="${this.northwindEmployees}" primary-key="employeeID" foreign-key="managerID" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" class="ig-typography tree-grid">
        <igc-column field="employeeID" data-type="number" header="employeeID" sortable="true" selectable="false"></igc-column>
        <igc-column field="lastName" data-type="string" header="lastName" sortable="true" selectable="false"></igc-column>
        <igc-column field="firstName" data-type="string" header="firstName" sortable="true" selectable="false"></igc-column>
        <igc-column field="title" data-type="string" header="title" sortable="true" selectable="false"></igc-column>
        <igc-column field="titleOfCourtesy" data-type="string" header="titleOfCourtesy" sortable="true" selectable="false"></igc-column>
        <igc-column field="birthDate" data-type="date" header="birthDate" sortable="true" selectable="false"></igc-column>
        <igc-column field="hireDate" data-type="date" header="hireDate" sortable="true" selectable="false"></igc-column>
        <igc-column field="address.street" data-type="string" header="street" sortable="true" selectable="false"></igc-column>
        <igc-column field="address.city" data-type="string" header="city" sortable="true" selectable="false"></igc-column>
        <igc-column field="address.region" data-type="string" header="region" sortable="true" selectable="false"></igc-column>
        <igc-column field="address.postalCode" data-type="string" header="postalCode" sortable="true" selectable="false"></igc-column>
        <igc-column field="address.country" data-type="string" header="country" sortable="true" selectable="false"></igc-column>
        <igc-column field="address.phone" data-type="string" header="phone" sortable="true" selectable="false"></igc-column>
        <igc-column field="managerID" data-type="number" header="managerID" sortable="true" selectable="false"></igc-column>
        <igc-column field="notes" data-type="string" header="notes" sortable="true" selectable="false"></igc-column>
        <igc-column field="avatarUrl" data-type="string" header="avatarUrl" sortable="true" selectable="false"></igc-column>
      </igc-tree-grid>
    `;
  }
}
