import { useStore } from "react-redux";

export function useAuth() {
  const store = useStore();
  return store.getState().connect;
}
