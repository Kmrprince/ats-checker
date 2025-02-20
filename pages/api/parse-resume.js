import mammoth from 'mammoth';
import pdfParse from 'pdf-parse'; // Use pdf-parse for PDF text extraction
import { Buffer } from 'buffer';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb', // Set the file upload limit
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fileData, fileType } = req.body; // Get file data and type
    const buffer = Buffer.from(fileData, 'base64'); // Decode base64 data

    let text;
    if (fileType === 'application/pdf') {
      console.log('Attempting to parse PDF...'); // Debug log  
      const pdfData = await pdfParse(buffer); // Parse PDF text content
      console.log('Extracted PDF text:', pdfData.text); // Log extracted text for debug
      text = pdfData.text; // Assign text
    } else if (
      fileType === 'application/msword' || 
      fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      const { value } = await mammoth.extractRawText({ buffer }); // Handle DOCX extracting
      text = value;
    } else {
      throw new Error('Unsupported file type');
    }

    res.status(200).json({ text }); // Send back extracted text
  } catch (error) {
    console.error('Error during parsing:', error);
    res.status(500).json({ error: error.message || 'Failed to parse file' });
  }
}