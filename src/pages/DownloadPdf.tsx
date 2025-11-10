
import { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { generatePdf, downloadPdf } from '../utils/pdf';
import { useResumeBuilder } from '../hooks/useResumeBuilder';

export default function DownloadPdf() {
  const [status, setStatus] = useState('Generating PDF...');
  const { form: defaultResume, config: defaultPdfConfig } = useResumeBuilder();

  useEffect(() => {
    const createAndDownloadPdf = async () => {
      try {
        setStatus('Generating PDF...');
        const { blob, filename } = await generatePdf(defaultResume, defaultPdfConfig);
        setStatus('Downloading...');
        downloadPdf(blob, filename);
        setStatus('PDF downloaded successfully!');
      } catch (error) {
        console.error('Error generating or downloading PDF:', error);
        setStatus('Failed to generate PDF. Please try again.');
      }
    };

    createAndDownloadPdf();
  }, [defaultResume, defaultPdfConfig]);

  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl">{status}</Text>
    </Box>
  );
}
