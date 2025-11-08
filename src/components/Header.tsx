import { Flex, Spacer, HStack, useToast } from '@chakra-ui/react';
import GradientPill from './GradientPill';
import { useTranslation } from 'react-i18next';

type Props = {
  onCompile: () => Promise<void>;
  onDownload: () => void;
  isCompiling: boolean;
};

export default function Header({ onCompile, onDownload, isCompiling }: Props) {
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
      <GradientPill>{t('appName')}</GradientPill>
      <Spacer />
      <HStack spacing={3}>
        <GradientPill asButton onClick={handleCompile} isDisabled={isCompiling}>
          {isCompiling ? t('compiling') : t('compile')}
        </GradientPill>
        <GradientPill asButton onClick={handleDownload}>{t('download')}</GradientPill>
      </HStack>
    </Flex>
  );
}
