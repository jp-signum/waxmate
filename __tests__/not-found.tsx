// __tests__/not-found.test.jsx
import { fireEvent, waitFor } from "@testing-library/react-native";
import { renderRouter, screen } from "expo-router/testing-library";
import NotFoundScreen from "@/app/+not-found";

describe("NotFound Component", () => {
  it("renders NotFoundScreen on invalid route and navigates to home", async () => {
    renderRouter(
      {
        "+not-found": NotFoundScreen,
      },
      {
        initialUrl: "/non-existent-route",
      },
    );

    await waitFor(() => {
      expect(screen.getByText("This screen doesn't exist.")).toBeVisible();
    });

    const link = screen.getByText("Go to home screen!");
    fireEvent.press(link);

    expect(screen).toHavePathname("/");
  });

  it("renders the correct content", () => {
    renderRouter(
      {
        "+not-found": NotFoundScreen,
      },
      {
        initialUrl: "/non-existent-route",
      },
    );

    expect(screen.getByText("This screen doesn't exist.")).toBeVisible();
    expect(screen.getByText("Go to home screen!")).toBeVisible();
  });
});
