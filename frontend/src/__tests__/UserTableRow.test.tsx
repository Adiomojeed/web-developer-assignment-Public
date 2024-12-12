import { useRouter } from "next/navigation";
import UserTableRow from "@/components/UserTableRow";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../jest.setup";

// Mock the `useRouter` hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("UserTableRow", () => {
  it("navigates to the correct URL when a row is clicked", () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    const user = {
      id: "10bf08876a5a4a7d94d67e6778e8b31d",
      name: "James Sunderland",
      email: "james.sunderland@example.com",
      street: "123 Main St",
      city: "City",
      state: "CA",
      zipcode: "12345",
    };

    render(
      <table>
        <tbody>
          <UserTableRow user={user} />
        </tbody>
      </table>
    );

    const row = screen.getByRole("row");
    fireEvent.click(row);

    // Verify router.push was called with the correct URL
    expect(mockPush).toHaveBeenCalledWith(
      "/10bf08876a5a4a7d94d67e6778e8b31d/posts"
    );
  });

  it("displays the correct user data", () => {
    const user = {
      id: "10bf08876a5a4a7d94d67e6778e8b31d",
      name: "James Sunderland",
      email: "james.sunderland@example.com",
      street: "123 Main St",
      city: "City",
      state: "CA",
      zipcode: "12345",
    };

    render(
      <table>
        <tbody>
          <UserTableRow user={user} />
        </tbody>
      </table>
    );

    // Verify the user data is correctly rendered in the table cells
    expect(screen.getByText("James Sunderland")).toBeInTheDocument();
    expect(
      screen.getByText("james.sunderland@example.com")
    ).toBeInTheDocument();
    expect(
      screen.getByText("123 Main St, CA, City, 12345")
    ).toBeInTheDocument();
  });
});
