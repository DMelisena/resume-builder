import { Grid, GridItem, Stack } from '@chakra-ui/react';
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
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  async function handleCompile() {
    await compile();
  }

  async function handleDownload() {
    const { blob, filename } = await generatePdf(compiled, config);
    downloadPdf(blob, filename);
  }

  async function handleExport() {
    setIsGenerating(true);
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
    }
    const { blob } = await generatePdf(compiled, config);
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);
    setIsGenerating(false);
  }

  return (
    <Stack spacing={4}>
      <Header
        onCompile={handleCompile}
        onDownload={handleDownload}
        isCompiling={isCompiling}
        onOpenLatex={() => setIsLatexEditorOpen(true)}
      />
      <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={4} align="start">
        <GridItem>
          <FormPanel form={form} onChange={setForm} />
        </GridItem>
        <GridItem position="sticky" top={6} alignSelf="start">
          <Stack spacing={4}>
            <LanguageSwitcher />
            <PdfConfigPanel config={config} onChange={setConfig} />
            <ExportPanel onGenerate={handleExport} pdfUrl={pdfUrl} isGenerating={isGenerating} />
            <PreviewPanel data={compiled} />
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
