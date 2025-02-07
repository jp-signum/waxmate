/* eslint-env jest */

jest.mock("expo-font", () => ({
  useFonts: jest.fn(() => [true, null]),
}));

jest.mock("../styles/global.css", () => ({}));
