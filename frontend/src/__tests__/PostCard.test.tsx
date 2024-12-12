import { screen, fireEvent } from "@testing-library/react";
import { useDeletePost } from "@/api";
import useDisclosure from "@/hooks/useDisclosure";
import { PostData } from "@/api/types";
import PostCard from "@/components/PostCard";
import { render } from "../../jest.setup";

// Mock useDeletePost
jest.mock("@/api", () => ({
  useDeletePost: jest.fn(),
}));

// Mock useDisclosure
jest.mock("@/hooks/useDisclosure", () => jest.fn());

const mockDeletePost = jest.fn();
const mockOnOpen = jest.fn();
const mockOnClose = jest.fn();
const mockIsOpen = false;

describe("PostCard Component", () => {
  beforeEach(() => {
    // Reset mock implementations before each test
    jest.clearAllMocks();
    (useDeletePost as jest.Mock).mockReturnValue({
      isPending: false,
      mutate: mockDeletePost,
    });
    (useDisclosure as jest.Mock).mockReturnValue({
      isOpen: mockIsOpen,
      onOpen: mockOnOpen,
      onClose: mockOnClose,
    });
  });

  const post: PostData = {
    id: "10bf08876a5a4a7d94d67e6778e8b31d",
    title: "Test Post",
    body: "This is a test post body",
  };

  const renderComponent = () => render(<PostCard post={post} />);

  test("renders the post title and body", () => {
    renderComponent();

    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.body)).toBeInTheDocument();
  });

  test("opens the modal when delete button is clicked", () => {
    renderComponent();

    const deleteButton = screen.getByRole("button", { hidden: true });
    fireEvent.click(deleteButton);

    expect(mockOnOpen).toHaveBeenCalled();
  });

  test("calls deletePost when Yes is clicked and close modal on suuccess", () => {
    // Set modal to open
    (useDisclosure as jest.Mock).mockReturnValue({
      isOpen: true,
      onOpen: mockOnOpen,
      onClose: mockOnClose,
    });

    renderComponent();

    const yesButton = screen.getByText("Yes");
    fireEvent.click(yesButton);

    const expectedCall = mockDeletePost.mock.calls[0];
    expect(expectedCall[0]).toBe(post.id);
    expect(expectedCall[1]).toMatchObject({
      onSuccess: expect.any(Function),
    });
  });

  test("closes the modal when No is clicked", () => {
    // Set modal to open
    (useDisclosure as jest.Mock).mockReturnValue({
      isOpen: true,
      onOpen: mockOnOpen,
      onClose: mockOnClose,
    });

    renderComponent();

    const noButton = screen.getByText("No");
    fireEvent.click(noButton);

    expect(mockOnClose).toHaveBeenCalled();
  });
});
