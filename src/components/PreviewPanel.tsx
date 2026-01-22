import {
  Box,
  Heading,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  Button,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import type { ResumeData } from "../types";

type Props = {
  data: ResumeData | null;
};

export default function PreviewPanel({ data }: Props) {
  const { t } = useTranslation();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const toast = useToast();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Clean up blob URLs on unmount
  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  // Generate PDF preview when data changes
  useEffect(() => {
    if (data) {
      generatePreview();
    } else {
      setPdfUrl(null);
    }
  }, [data]);

  async function generatePreview() {
    if (!data) return;

    setIsLoading(true);
    setError(null);

    // Clean up previous URL
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl(null);
    }

    try {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

      // Import buildLatex dynamically
      const { buildLatex } = await import("../utils/latex");

      // Generate LaTeX code
      const latexCode = buildLatex(data, { asLinks: { email: false, website: false, linkedin: false } });

      // Compile to PDF
      const response = await fetch(`${BACKEND_URL}/api/compile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: latexCode }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Compilation failed: ${errorText}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      toast({
        title: "Preview generation failed",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleRefresh() {
    generatePreview();
  }

  // Empty state
  if (!data) {
    return (
      <Box
        p={6}
        bg="white"
        rounded="lg"
        shadow="sm"
        border="1px solid"
        borderColor="gray.200"
      >
        <Text color="gray.500">{t("preview")}</Text>
      </Box>
    );
  }

  return (
    <Box
      bg="white"
      rounded="lg"
      shadow="sm"
      border="1px solid"
      borderColor="gray.200"
      overflow="hidden"
    >
      <Box
        p={4}
        borderBottom="1px solid"
        borderColor="gray.200"
        bg="gray.50"
      >
        <HStack justify="space-between">
          <Heading as="h3" size="sm">
            {t("preview")}
          </Heading>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleRefresh}
            isLoading={isLoading}
            isDisabled={!data}
          >
            Refresh
          </Button>
        </HStack>
      </Box>

      <Box position="relative" bg="gray.100">
        {isLoading && (
          <Box
            position="absolute"
            inset={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="white/80"
            zIndex={1}
          >
            <Box textAlign="center">
              <Spinner size="xl" color="blue.500" mb={4} />
              <Text color="gray.600">Generating preview...</Text>
            </Box>
          </Box>
        )}

        {error && (
          <Alert status="error" m={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}

        {pdfUrl && (
          <Box
            as="iframe"
            ref={iframeRef}
            src={pdfUrl}
            width="100%"
            height="700px"
            border="none"
            display="block"
          />
        )}

        {!pdfUrl && !isLoading && !error && (
          <Box p={8} textAlign="center" color="gray.500">
            Click "Refresh" to generate preview
          </Box>
        )}
      </Box>
    </Box>
  );
}
