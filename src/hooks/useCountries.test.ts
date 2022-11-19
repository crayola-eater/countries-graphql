import { it, expect } from "vitest";
import { renderHook, RenderHookOptions, waitFor } from "@testing-library/react";
import useCountries from "./useCountries";
import ApolloProviderWithClient from "../contexts/ApolloProvider";

/**
 * Helper function for tests. Keep implementation as simple and close to actual app as possible.
 *
 * Currently this will result in a real call to an external service. Can potentially be isolated with
 * msw node.
 */
function renderUseCountriesHook() {
  return renderHook(() => useCountries(), {
    wrapper: ApolloProviderWithClient,
  });
}

it("should have valid initial state", async () => {
  const { result } = renderUseCountriesHook();

  expect(result.current).toStrictEqual({
    loading: true,
    error: undefined,
    data: undefined,
  });
});

it("should have valid state once fetched", async () => {
  const { result } = renderUseCountriesHook();

  await waitFor(() => {
    expect(result.current.loading).toBe(false);
  });

  expect(result.current).toStrictEqual({
    loading: false,
    error: undefined,
    data: expect.any(Array),
  });

  /**
   * Non-null assertion operator safe to use (below) as in order for execution
   * to reach this line, the above runtime assertion (that `result.current.data` is
   * an array) must have been true.
   */
  result.current.data!.forEach((country: any) => {
    expect(country).toStrictEqual({
      __typename: "Country",
      code: expect.stringMatching(/^[A-Z]{2}$/),
      emoji: expect.any(String),
      name: expect.any(String),
      native: expect.any(String),
    });
  });
});
