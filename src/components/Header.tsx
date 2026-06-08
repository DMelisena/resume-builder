import { Flex, Spacer, HStack, useToast, Button } from '@chakra-ui/react';
import GradientPill from './GradientPill';
import { useTranslation } from 'react-i18next';

type Props = {
  onCompile: () => Promise<void>;
  onDownload: () => void;
  isCompiling: boolean;
  isProcessing?: boolean;
  onOpenLatex?: () => void;
};

export default function Header({ onCompile, onDownload, isCompiling, isProcessing, onOpenLatex }: Props) {
  const { t } = useTranslation();
  const toast = useToast();

  const handleCompile = async () => {
    try {
      await onCompile();
    } catch (e: any) {
      toast({
        status: 'warning',
        title: t('error'),
        description: e?.message,
      });
    }
  };

  const handleDownload = async () => {
    try {
      await onDownload();
    } catch (e: any) {
      toast({
        status: 'warning',
        title: t('error'),
        description: e?.message,
      });
    }
  };

  return (
    <Flex align="center" mb={6}>
      <GradientPill as="h1" fontSize="xl">{t('appName')}</GradientPill>
      <Spacer />
      <HStack spacing={3}>
        <GradientPill asButton onClick={handleCompile} isDisabled={isCompiling || isProcessing}>
          {isCompiling ? t('compiling') : t('compile')}
        </GradientPill>
        <GradientPill asButton onClick={handleDownload} isDisabled={isProcessing}>
          {t('download')}
        </GradientPill>
        {onOpenLatex && (
          <Button size="sm" variant="outline" onClick={onOpenLatex}>
            LaTeX
          </Button>
        )}
      </HStack>
    </Flex>
  );
}
