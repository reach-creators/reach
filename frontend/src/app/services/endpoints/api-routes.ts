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
export const signupBrand = new RouteBuilder().resolve("signup").resolve("brand").build();
export const signupCreator = new RouteBuilder().resolve("signup").resolve("creator").build();
