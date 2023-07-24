import { createStore } from "zustand/vanilla";
import { authSlice } from "./slices/authSlice";
import { videoSlice } from "./slices/videoSlice";
import { StoreState } from "./constants";

const store = createStore<StoreState>((set) => ({
  ...authSlice(set),
  ...videoSlice(set),
}));

jest.mock("../services/videoService", () => ({
  getVideos: () => Promise.resolve([{ id: 1 }, { id: 2 }]),
  createVideo: () => Promise.resolve({ id: 3 }),
}));

jest.mock("../services/authService", () => ({
  login: () => Promise.resolve({ email: "loggedin@eg.com" }),
  register: () => Promise.resolve({ email: "registered@eg.com" }),
  logout: () => Promise.resolve(undefined),
}));

describe("store", () => {
  it("has default values", () => {
    const { user, videos } = store.getState();

    expect(user).toEqual(null);
    expect(videos).toEqual([]);
  });

  describe("video slices", () => {
    describe("fetchVideos", () => {
      it("gets all videos", async () => {
        await store.getState().fetchVideos();
        expect(store.getState().videos).toEqual([{ id: 1 }, { id: 2 }]);
      });
    });

    describe("createVideo", () => {
      it("adds a new video with shared_by is current user", async () => {
        store.setState({ user: { id: 1, email: "current@eg.com" } });
        await store.getState().createVideo("http://sharing");
        expect(store.getState().videos[2]).toEqual({
          id: 3,
          shared_by: "current@eg.com",
        });
      });
    });
  });

  describe("auth slices", () => {
    describe("logout", () => {
      it("clears current user", async () => {
        await store.getState().logout();
        expect(store.getState().user).toEqual(null);
      });
    });

    describe("login", () => {
      it("perists current user", async () => {
        await store.getState().login("loggedin@eg.com", "foobar");
        expect(store.getState().user).toEqual({ email: "loggedin@eg.com" });
      });
    });
  });
});
