#include <hpdf.h>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>

// Utility function to split a string into lines
std::vector<std::string> splitLines(const std::string &text, size_t maxLength)
{
    std::vector<std::string> lines;
    std::istringstream stream(text);
    std::string word, line;

    while (stream >> word)
    {
        if (line.size() + word.size() + 1 > maxLength)
        {
            lines.push_back(line);
            line.clear();
        }
        line += (line.empty() ? "" : " ") + word;
    }
    if (!line.empty())
    {
        lines.push_back(line);
    }
    return lines;
}

void saveDomElementAsPdf(const std::string &htmlContent, const std::string &filename)
{
    HPDF_Doc pdf = HPDF_New(nullptr, nullptr);
    if (!pdf)
    {
        std::cerr << "Error: Cannot create PDF object" << std::endl;
        return;
    }

    HPDF_Page page = HPDF_AddPage(pdf);
    HPDF_Page_SetSize(page, HPDF_PAGE_SIZE_A4, HPDF_PAGE_PORTRAIT);
    HPDF_Page_SetFontAndSize(page, HPDF_GetFont(pdf, "Helvetica", nullptr), 12);

    std::vector<std::string> lines = splitLines(htmlContent, 80); // Wrap text to 80 characters per line
    float x = 50, y = 800;

    HPDF_Page_BeginText(page);
    for (const auto &line : lines)
    {
        HPDF_Page_TextOut(page, x, y, line.c_str());
        y -= 20; // Move down by 20 units for the next line
        if (y < 50)
        { // Add a new page if out of space
            HPDF_Page_EndText(page);
            page = HPDF_AddPage(pdf);
            HPDF_Page_SetSize(page, HPDF_PAGE_SIZE_A4, HPDF_PAGE_PORTRAIT);
            HPDF_Page_SetFontAndSize(page, HPDF_GetFont(pdf, "Helvetica", nullptr), 12);
            y = 800;
            HPDF_Page_BeginText(page);
        }
    }
    HPDF_Page_EndText(page);

    HPDF_SaveToFile(pdf, filename.c_str());
    HPDF_Free(pdf);

    std::cout << "PDF saved successfully to " << filename << std::endl;
}

// Usage example
int main()
{
    std::string htmlContent = "Hello, World! This is a basic example of wrapping text and using libharu for PDF generation.";
    saveDomElementAsPdf(htmlContent, "output.pdf");
    return 0;
}
