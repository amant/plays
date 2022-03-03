import React from 'react';
import { LitElement, html, css } from 'lit';

class MyLitButton extends LitElement {
  static properties = {
    color: {
      type: String,
    }
  };

  static styles = [css`
    button {
      font-size: 19px;
      height: 42px;
      border-radius: 4px;
    }

    .blue {
      background-color: blue;
      color: white;
    }

    .red {
      background-color: red;
      color: white;
    }

    .green {
      background-color: green;
      color: white;
    }

    .orange {
      background-color: orange;
      color: white;
    }
  `];

  constructor() {
    super();
    this.color = 'blue';
  }

  render() {
    return html`<button class=${this.color}>LitButton Hello World</button>`;
  }
}

customElements.define('my-lit-button', MyLitButton);
