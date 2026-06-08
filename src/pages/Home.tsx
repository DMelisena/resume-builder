import { Box, Grid, GridItem, Stack, useToast } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import FormPanel from '../components/FormPanel';
import PreviewPanel from '../components/PreviewPanel';
import PdfConfigPanel from '../components/PdfConfigPanel';
import LanguageSwitcher from '../components/LanguageSwitcher';
import ExportPanel from '../components/ExportPanel';
import { LatexEditor } from '../components/LatexEditor';
import { useResumeBuilder } from '../hooks/useResumeBuilder';
import { generatePdf, downloadPdf } from '../utils/pdf';

export default function Home() {
  const {
    form,
    setForm,
    compiled,
    compile,
    isCompiling,
    config,
    setConfig,
    latexConfig,
    isLatexEditorOpen,
    setIsLatexEditorOpen,
  } = useResumeBuilder();
  const toast = useToast();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  async function handleCompile() {
    if (!form.contact.fullName?.trim()) {
      toast({
        status: 'warning',
        title: 'Validation Error',
        description: 'Full name is required before compiling.',
      });
      return;
    }
    setIsProcessing(true);
    try {
      await compile();
    } finally {
      setIsProcessing(false);
    }
  }

  async function handleDownload() {
    if (!form.contact.fullName?.trim()) {
      toast({
        status: 'warning',
        title: 'Validation Error',
        description: 'Full name is required.',
      });
      return;
    }
    setIsProcessing(true);
    try {
      await compile();
      const { blob, filename } = await generatePdf(form, config);
      downloadPdf(blob, filename);
    } catch (e: any) {
      toast({
        status: 'error',
        title: 'Download Failed',
        description: e?.message || 'An error occurred.',
      });
    } finally {
      setIsProcessing(false);
    }
  }

  async function handleExport() {
    if (!form.contact.fullName?.trim()) {
      toast({
        status: 'warning',
        title: 'Validation Error',
        description: 'Full name is required.',
      });
      return;
    }
    setIsGenerating(true);
    setIsProcessing(true);
    try {
      await compile();
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
      const { blob } = await generatePdf(form, config);
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (e: any) {
      toast({
        status: 'error',
        title: 'Export Failed',
        description: e?.message || 'An error occurred.',
      });
    } finally {
      setIsGenerating(false);
      setIsProcessing(false);
    }
  }

  return (
    <Stack spacing={4}>
      <Header
        onCompile={handleCompile}
        onDownload={handleDownload}
        isCompiling={isCompiling}
        isProcessing={isProcessing}
        onOpenLatex={() => setIsLatexEditorOpen(true)}
      />
      <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={4}>
        <GridItem>
          <FormPanel form={form} onChange={setForm} />
        </GridItem>
        <GridItem h="full">
          <Stack spacing={4} h="full">
            <LanguageSwitcher />
            <PdfConfigPanel config={config} onChange={setConfig} />
            <ExportPanel onGenerate={handleExport} pdfUrl={pdfUrl} isGenerating={isGenerating} />
            <Box position="sticky" top={6}>
              <PreviewPanel data={compiled} />
            </Box>
          </Stack>
        </GridItem>
      </Grid>

      <LatexEditor
        isOpen={isLatexEditorOpen}
        onClose={() => setIsLatexEditorOpen(false)}
        data={compiled}
        config={latexConfig}
      />
    </Stack>
  );
}
