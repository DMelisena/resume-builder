import { Button, ButtonGroup, Box, Heading } from '@chakra-ui/react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const current = i18n.language;

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
        {t('language')}
      </Heading>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button onClick={() => i18n.changeLanguage('en')} isActive={current.startsWith('en')}>
          {t('english')}
        </Button>
        <Button onClick={() => i18n.changeLanguage('jp')} isActive={current.startsWith('jp')}>
          {t('Japanese')}
        </Button>
      </ButtonGroup>
    </Box>
  );
}
