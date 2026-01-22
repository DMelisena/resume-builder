import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  Code,
  Flex,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { CopyIcon, DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { buildLatex, downloadLatex, sanitizeFilename } from "../utils/latex";
import type { ResumeData, LatexConfig } from "../types";

interface LatexEditorProps {
  isOpen: boolean;
  onClose: () => void;
  data: ResumeData | null;
  config: LatexConfig;
}

export function LatexEditor({ isOpen, onClose, data, config }: LatexEditorProps) {
  const [latexCode, setLatexCode] = useState("");
  const [filename, setFilename] = useState("resume.tex");
  const [hasEdits, setHasEdits] = useState(false);
  const [isCreatingOverleaf, setIsCreatingOverleaf] = useState(false);
  const toast = useToast();

  // Generate LaTeX when data changes or modal opens
  useEffect(() => {
    if (isOpen && data) {
      const generated = buildLatex(data, config);
      setLatexCode(generated);
      setFilename(sanitizeFilename((data.contact.fullName || "resume") + ".tex"));
      setHasEdits(false);
    }
  }, [isOpen, data, config]);

  const handleCodeChange = (value: string) => {
    setLatexCode(value);
    setHasEdits(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(latexCode);
    toast({
      title: "Copied to clipboard",
      description: "LaTeX code copied to clipboard",
      status: "success",
      duration: 2000,
    });
  };

  const handleDownload = () => {
    downloadLatex(latexCode, filename);
    toast({
      title: "Downloaded",
      description: `Saved as ${filename}`,
      status: "success",
      duration: 2000,
    });
  };

  const handleOpenOverleaf = async () => {
    setIsCreatingOverleaf(true);

    try {
      // Create a hidden form to POST the LaTeX to Overleaf
      const form = document.createElement("form");
      form.action = "https://www.overleaf.com/docs";
      form.method = "POST";
      form.target = "_blank";

      // Use encoded_snip parameter with URL-encoded LaTeX
      const encodedSnip = document.createElement("input");
      encodedSnip.type = "hidden";
      encodedSnip.name = "encoded_snip";
      encodedSnip.value = encodeURIComponent(latexCode);
      form.appendChild(encodedSnip);

      // Optionally set the engine
      const engine = document.createElement("input");
      engine.type = "hidden";
      engine.name = "engine";
      engine.value = "pdflatex";
      form.appendChild(engine);

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      toast({
        title: "Opening in Overleaf...",
        description: "Your LaTeX will open in a new tab.",
        status: "success",
        duration: 2000,
      });
    } catch (error) {
      console.error("Failed to open Overleaf:", error);
      toast({
        title: "Failed to open Overleaf",
        description: error instanceof Error ? error.message : "Unknown error",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsCreatingOverleaf(false);
    }
  };

  const handleRevert = () => {
    if (data) {
      const generated = buildLatex(data, config);
      setLatexCode(generated);
      setHasEdits(false);
      toast({
        title: "Reverted",
        description: "LaTeX code reset to generated version",
        status: "info",
        duration: 2000,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent maxW="90vw" h="90vh">
        <ModalHeader>
          <Flex align="center" gap={2}>
            <Code>LaTeX Editor</Code>
            {hasEdits && (
              <Box
                as="span"
                fontSize="xs"
                px={2}
                py={0.5}
                bg="yellow.100"
                color="yellow.800"
                borderRadius="md"
              >
                Unsaved changes
              </Box>
            )}
          </Flex>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody display="flex" flexDirection="column" gap={4}>
          <FormControl display="flex" alignItems="center" maxW="400px">
            <FormLabel mb={0} mr={2} whiteSpace="nowrap">
              Filename:
            </FormLabel>
            <Input
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder="resume.tex"
              flex={1}
            />
          </FormControl>

          <Box
            flex={1}
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            overflow="hidden"
            display="flex"
            flexDirection="column"
          >
            <Textarea
              value={latexCode}
              onChange={(e) => handleCodeChange(e.target.value)}
              fontFamily="monospace"
              fontSize="sm"
              flex={1}
              resize="none"
              p={4}
              spellCheck={false}
            />
          </Box>

          <Box fontSize="xs" color="gray.500">
            <strong>Tip:</strong> You can edit the LaTeX code directly. Changes won't affect your
            resume data — this is a one-way export. Click "Revert" to reset to the
            generated version. Click "Create on Overleaf" to automatically create a new project.
          </Box>
        </ModalBody>

        <ModalFooter>
          <Flex gap={2} w="100%">
            {hasEdits && (
              <Button colorScheme="gray" variant="outline" onClick={handleRevert}>
                Revert Changes
              </Button>
            )}

            <Spacer />

            <Button leftIcon={<CopyIcon />} onClick={handleCopy} variant="outline">
              Copy
            </Button>
            <Button
              leftIcon={<ExternalLinkIcon />}
              onClick={handleOpenOverleaf}
              variant="outline"
              isLoading={isCreatingOverleaf}
              loadingText="Creating..."
            >
              Create on Overleaf
            </Button>
            <Button
              leftIcon={<DownloadIcon />}
              onClick={handleDownload}
              colorScheme="blue"
            >
              Download .tex
            </Button>
            <Button onClick={onClose} ml={2}>
              Close
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
