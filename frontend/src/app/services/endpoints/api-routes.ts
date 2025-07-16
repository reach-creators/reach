class RouteBuilder {
  private readonly backendUrl = "http://localhost:8080";
  private readonly route: string[] = [this.backendUrl];

  constructor(path?: string) {
    if (path) {
      this.route.push(path);
    }
  }

  resolve(path: string): RouteBuilder {
    this.route.push(path);
    return this;
  }

  build() {
    return this.route.join("/");
  }
}

export const health = new RouteBuilder().resolve("health").build();
export const signup = new RouteBuilder().resolve("signup").build();
