// __tests__/not-found.test.jsx
import LandingScreen from "../src/app/(tabs)/index";
import { renderRouter } from "expo-router/testing-library";

describe("Tab Navigation", () => {
  it("navigates to the Home route when the Home tab is pressed", async () => {
    renderRouter(
      {
        home: LandingScreen,
      },
      {
        initialUrl: "/identify",
      },
    );
  });
});
