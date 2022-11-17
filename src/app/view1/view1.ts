import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcTreeComponent } from 'igniteui-webcomponents';

defineComponents(IgcTreeComponent);

@customElement('app-view1')
export default class View1 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .h5 {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .tree {
      min-width: max-content;
      min-height: max-content;
      flex-shrink: 0;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <h5 class="h5">
          View 1
        </h5>
        <igc-tree selection="none" class="tree">
          <igc-tree-item label="Design" ?expanded="${true}">
            <igc-tree-item label="Figma" ?expanded="${true}"></igc-tree-item>
            <igc-tree-item label="Adobe XD" ?expanded="${true}"></igc-tree-item>
            <igc-tree-item label="Sketch" ?expanded="${true}"></igc-tree-item>
            <igc-tree-item label="Sketch" ?expanded="${true}"></igc-tree-item>
          </igc-tree-item>
          <igc-tree-item label="Design" ?expanded="${true}">
            <igc-tree-item label="Figma" ?expanded="${true}"></igc-tree-item>
            <igc-tree-item label="Adobe XD" ?expanded="${true}"></igc-tree-item>
            <igc-tree-item label="Sketch" ?expanded="${true}"></igc-tree-item>
          </igc-tree-item>
          <igc-tree-item label="Development" ?expanded="${true}">
            <igc-tree-item label="Angular" ?expanded="${true}"></igc-tree-item>
            <igc-tree-item label="Blazor" ?expanded="${true}"></igc-tree-item>
            <igc-tree-item label="Web components" ?expanded="${true}"></igc-tree-item>
          </igc-tree-item>
        </igc-tree>
      </div>
    `;
  }
}
