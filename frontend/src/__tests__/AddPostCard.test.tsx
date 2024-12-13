import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useCreatePost } from "@/api";
import { useParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import useDisclosure from "@/hooks/useDisclosure";
import AddPostCard from "@/components/AddPostCard";

// Mocking all the hooks used in project
jest.mock("next/navigation", () => ({
  useParams: jest.fn(),
}));

jest.mock("@/api", () => ({
  useCreatePost: jest.fn(),
}));

jest.mock("@tanstack/react-query", () => ({
  useQueryClient: jest.fn(),
}));

jest.mock("@/hooks/useDisclosure", () => jest.fn());

describe("AddPostCard", () => {
  const mockUseParams = useParams as jest.Mock;
  const mockUseCreatePost = useCreatePost as jest.Mock;
  const mockUseQueryClient = useQueryClient as jest.Mock;
  const mockUseDisclosure = useDisclosure as jest.Mock;

  beforeEach(() => {
    mockUseParams.mockReturnValue({ id: "10bf08876a5a4a7d94d67e6778e8b31d" });
    mockUseQueryClient.mockReturnValue({
      refetchQueries: jest.fn(),
    });
    mockUseDisclosure.mockReturnValue({
      isOpen: false,
      onOpen: jest.fn(),
      onClose: jest.fn(),
    });
    mockUseCreatePost.mockReturnValue({
      isPending: false,
      mutate: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the "New Post" button', () => {
    render(<AddPostCard />);
    expect(screen.getByText("New Post")).toBeInTheDocument();
  });

  it('opens the modal when "New Post" button is clicked', () => {
    const mockOnOpen = jest.fn();
    mockUseDisclosure.mockReturnValue({
      isOpen: false,
      onOpen: mockOnOpen,
      onClose: jest.fn(),
    });

    render(<AddPostCard />);

    fireEvent.click(screen.getByText("New Post"));
    expect(mockOnOpen).toHaveBeenCalled();
  });

  it("calls createPost with the correct data when form is submitted", () => {
    const mockMutate = jest.fn();
    mockUseCreatePost.mockReturnValue({
      isPending: false,
      mutate: mockMutate,
    });
    mockUseDisclosure.mockReturnValue({
      isOpen: true,
      onOpen: jest.fn(),
      onClose: jest.fn(),
    });

    render(<AddPostCard />);

    fireEvent.change(screen.getByPlaceholderText("Give your post a title"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Write something mind-blowing"),
      {
        target: { value: "Test Body" },
      }
    );

    fireEvent.submit(screen.getByRole("form"));

    expect(mockMutate).toHaveBeenCalledWith(
      {
        title: "Test Title",
        body: "Test Body",
        user_id: "10bf08876a5a4a7d94d67e6778e8b31d",
      },
      expect.anything()
    );
  });

  it("closes the modal and clears the form after successful submission", async () => {
    const mockOnClose = jest.fn();
    const mockMutate = jest.fn((data, { onSuccess }) => onSuccess());

    mockUseCreatePost.mockReturnValue({
      isPending: false,
      mutate: mockMutate,
    });
    mockUseDisclosure.mockReturnValue({
      isOpen: true,
      onOpen: jest.fn(),
      onClose: mockOnClose,
    });

    render(<AddPostCard />);

    fireEvent.change(screen.getByPlaceholderText("Give your post a title"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Write something mind-blowing"),
      {
        target: { value: "Test Body" },
      }
    );

    fireEvent.submit(screen.getByRole("form"));

    expect(mockMutate).toHaveBeenCalled();
    expect(mockOnClose).toHaveBeenCalled();
    expect(screen.getByPlaceholderText("Give your post a title")).toHaveValue(
      ""
    );
    expect(
      screen.getByPlaceholderText("Write something mind-blowing")
    ).toHaveValue("");
  });
});
