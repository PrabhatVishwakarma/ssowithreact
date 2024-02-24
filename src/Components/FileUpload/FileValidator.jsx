export const validateFile = (file) => {
  if (!file) {
    return "Please select a file to upload.";
  }

  if (file.size > 1000000) {
    return "The file size should not exceed 1MB.";
  }

  const allowedExtensions = ["xlsx", "xls", "txt"];
  const fileExtension = file.name.split(".").pop().toLowerCase();

  if (!allowedExtensions.includes(fileExtension)) {
    return "Only Excel (XLSX, XLS) and text (TXT) files are allowed.";
  }

  return null;
};