import { renderHook, waitFor } from "@testing-library/react";
import usePaginate from "./usePaginate";

describe("usePaginate", () => {
  it("should return the correct data when called with valid input", async () => {
    const { result } = renderHook(() =>
      usePaginate({ pageIndex: 0, pageSize: 10, status: "CREATED" })
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.isError).toBe(undefined);
    expect(result.current.paginate?.pageSize).toBeGreaterThan(0);
  });

  it("should return an error when called with invalid input", async () => {
    const { result } = renderHook(() =>
      usePaginate({ pageIndex: -1, pageSize: 0, status: "invalid" })
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.isError).toBeDefined();
    expect(result.current.paginate?.status).not.toBe(200);
  });
});
