export function parseDocumentDownloadName(fileName: string | undefined) {
  // change based on feedback
  if (fileName && fileName.length > 0) {
    let newFileName = fileName.trim();
    // Remove any existing .pdf extension and numbers in parentheses
    while (newFileName.toLowerCase().endsWith(".pdf")) {
      newFileName = newFileName.slice(0, -4).replace(/\(\d+\)$/g, '').trim();
    }
    // Always append .pdf extension
    return `${newFileName.replace(/\(\d+\)$/g, '').trim()}.pdf`;
  } else {
    const date = new Date();
    const readableDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return `Goby Homes - ${readableDate}.pdf`;
  }
}