import { Button, Link, Box, Spinner, Input, useClipboard, Flex, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';

interface ExportPanelProps {
  onGenerate: () => Promise<void>;
  pdfUrl: string | null;
  isGenerating: boolean;
}

export default function ExportPanel({ onGenerate, pdfUrl, isGenerating }: ExportPanelProps) {
  const { onCopy, hasCopied } = useClipboard(pdfUrl || '');

  useEffect(() => {
    if (pdfUrl) {
      onCopy();
    }
  }, [pdfUrl]);

  return (
    <Box
      p={4}
      bg="white"
      rounded="lg"
      shadow="sm"
      border="1px solid"
      borderColor="gray.200"
    >
      <Heading as="h3" size="md" mb={2}>
        Export & Share
      </Heading>
      <Button onClick={onGenerate} isLoading={isGenerating} loadingText="Generating..." colorScheme="blue">
        Generate Shareable Link
      </Button>
      {isGenerating && <Spinner size="sm" ml={2} />}
      {pdfUrl && (
        <Box mt={2}>
          <Flex>
            <Input value={pdfUrl} isReadOnly />
            <Button onClick={onCopy} ml={2}>
              {hasCopied ? 'Copied' : 'Copy'}
            </Button>
          </Flex>
          <Link href={pdfUrl} isExternal mt={2} display="block">
            Open PDF in new tab
          </Link>
        </Box>
      )}
    </Box>
  );
}
