import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export interface PDFOptions {
  filename: string
  format: "a4" | "letter"
  orientation: "portrait" | "landscape"
  quality: number
}

export const generatePDF = async (elementId: string, options: PDFOptions) => {
  try {
    const element = document.getElementById(elementId)
    if (!element) {
      throw new Error(`Element with ID "${elementId}" not found`)
    }

    // Create canvas from HTML element
    const canvas = await html2canvas(element, {
      scale: options.quality,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight,
    })

    const imgData = canvas.toDataURL("image/png")

    // Create PDF
    const pdf = new jsPDF({
      orientation: options.orientation,
      unit: "mm",
      format: options.format,
    })

    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()

    const imgWidth = canvas.width
    const imgHeight = canvas.height

    // Calculate dimensions to fit page
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
    const finalWidth = imgWidth * ratio
    const finalHeight = imgHeight * ratio

    // Center the image
    const x = (pdfWidth - finalWidth) / 2
    const y = (pdfHeight - finalHeight) / 2

    pdf.addImage(imgData, "PNG", x, y, finalWidth, finalHeight)

    // Save the PDF
    pdf.save(options.filename)

    return true
  } catch (error) {
    console.error("PDF generation error:", error)
    throw error
  }
}

export const generateFilename = (personalInfo: any, templateId: string) => {
  const name = personalInfo.fullName || "Resume"
  const cleanName = name.replace(/[^a-zA-Z0-9]/g, "_")
  const date = new Date().toISOString().split("T")[0]
  return `${cleanName}_${templateId}_${date}.pdf`
}
