const fs = require("fs/promises");
const path = require("path");
const { createReadStream } = require("fs");
const { processFiles } = require("../src/app/api/process/backend_work.js");

// Mock file system and read-stream
jest.mock("fs/promises");
jest.mock("fs", () => ({
  ...jest.requireActual("fs"),
  createReadStream: jest.fn()
}));

describe("processFiles function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should process files correctly with a valid sessionId", async () => {
    // Mock readdir to return the required files
    fs.readdir.mockResolvedValue(["template.html", "input.csv", "logo.png", "font.ttf"]);
    // Mock readFile on the template
    fs.readFile.mockResolvedValueOnce("<html>{{logo}}{{font}}{{sku_name}}{{brand}}{{catagory}}</html>");
    // Mock CSV reading
    createReadStream.mockReturnValue({ pipe: () => ({ on: jest.fn(), once: jest.fn() }) });
    // Mock mkdir
    fs.mkdir.mockResolvedValue();

    const result = await processFiles("my-session-id");
    expect(result.success).toBe(true);
  });

  it("should throw error if sessionId is missing", async () => {
    await expect(processFiles(null)).rejects.toThrow("Missing sessionId");
  });

  it("should throw error if required files are missing", async () => {
    fs.readdir.mockResolvedValue(["template.html"]);
    await expect(processFiles("test-session")).rejects.toThrow("Missing required files");
  });
});