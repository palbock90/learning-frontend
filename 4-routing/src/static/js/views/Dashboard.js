import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
        <h1>Welcome back</h1>
        <p> Something something dashboard </p>
        <p>
            <a href="/posts" datalink> View recent posts</a>
        </p>
      `;
  }
}
