// __tests__/tabs.test.jsx
import { fireEvent, waitFor } from "@testing-library/react-native";
import { renderRouter, screen, testRouter } from "expo-router/testing-library";
import HomeScreen from "../src/app/(tabs)/index";
import IdentifyScreen from "../src/app/(tabs)/identify";
import DiscoverScreen from "../src/app/(tabs)/discover";
import ConnectScreen from "../src/app/(tabs)/connect";

describe("Tabs Router Integration", () => {
  it("navigates correctly when tabs are pressed", async () => {
    renderRouter(
      {
        index: HomeScreen,
        identify: IdentifyScreen,
        discover: DiscoverScreen,
        connect: ConnectScreen,
      },
      {
        initialUrl: "/",
      },
    );

    // verify HomeScreen is initially rendered
    await waitFor(() => {
      expect(screen.getByText("Auth Placeholder")).toBeTruthy();
    });

    // press Identify tab
    testRouter.navigate("/identify");
    await waitFor(() => {
      expect(screen).toHavePathname("/identify");
      expect(screen.getByText("Identify Placeholder")).toBeTruthy();
    });

    // press Discover tab
    testRouter.navigate("/discover");
    await waitFor(() => {
      expect(screen).toHavePathname("/discover");
      expect(screen.getByText("Discovery Placeholder")).toBeTruthy();
    });

    // press Connect tab
    testRouter.navigate("/connect");
    await waitFor(() => {
      expect(screen).toHavePathname("/connect");
      expect(
        screen.getByText(
          "If !connected then bring up Discogs connection untility",
        ),
      ).toBeTruthy();
    });
  });
});
