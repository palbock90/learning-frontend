import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
        <h1>Welcome back</h1>
        <p> Something something posts </p>
        <p>
            <a href="/dashboard" datalink> View dashboard</a>
        </p>
      `;
  }
}
