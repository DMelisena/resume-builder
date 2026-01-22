import { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { buildLatex, downloadLatex, sanitizeFilename } from '../utils/latex';
import { useResumeBuilder } from '../hooks/useResumeBuilder';

export default function DownloadLatex() {
  const [status, setStatus] = useState('Generating LaTeX...');
  const { form: defaultResume, latexConfig: defaultLatexConfig } = useResumeBuilder();

  useEffect(() => {
    const createAndDownloadLatex = async () => {
      try {
        setStatus('Generating LaTeX...');
        const latexCode = buildLatex(defaultResume, defaultLatexConfig);
        const filename = sanitizeFilename(
          (defaultResume.contact.fullName || 'resume') + '.tex'
        );
        setStatus('Downloading...');
        downloadLatex(latexCode, filename);
        setStatus('LaTeX downloaded successfully!');
      } catch (error) {
        console.error('Error generating or downloading LaTeX:', error);
        setStatus('Failed to generate LaTeX. Please try again.');
      }
    };

    createAndDownloadLatex();
  }, [defaultResume, defaultLatexConfig]);

  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl">{status}</Text>
    </Box>
  );
}
