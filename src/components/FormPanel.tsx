import { Box, Button, FormControl, FormLabel, Grid, GridItem, HStack, IconButton, Input, Text, Textarea, VStack, Heading } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import type { ResumeData } from '../types';

type Props = {
  form: ResumeData;
  onChange: (next: ResumeData) => void;
};

export default function FormPanel({ form, onChange }: Props) {
  const { t } = useTranslation();

  const update = (path: string, value: any) => {
    const next: any = { ...form };
    const segs = path.split('.');
    let obj = next;
    for (let i = 0; i < segs.length - 1; i++) {
      obj[segs[i]] = Array.isArray(obj[segs[i]]) ? [...obj[segs[i]]] : { ...obj[segs[i]] };
      obj = obj[segs[i]];
    }
    obj[segs[segs.length - 1]] = value;
    onChange(next);
  };

  const add = (key: 'education' | 'experience' | 'projects') => {
    const next: any = { ...form, [key]: [...(form as any)[key]] };
    const blank: any = key === 'education' ? { school: '' } : key === 'experience' ? { company: '' } : { name: '' };
    next[key].push(blank);
    onChange(next);
  };
  const remove = (key: 'education' | 'experience' | 'projects', idx: number) => {
    const next: any = { ...form, [key]: [...(form as any)[key]] };
    next[key].splice(idx, 1);
    onChange(next);
  };

  return (
    <VStack align="stretch" spacing={4}>
      <Heading as="h3" size="md" mb={3}>
        {t('form')}
      </Heading>
      <Box p={4} bg="white" rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
        <Heading as="h4" size="sm" mb={3}>{t('contact')}</Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>{t('fullName')}</FormLabel>
              <Input value={form.contact.fullName} onChange={e => update('contact.fullName', e.target.value)} />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>{t('headline')}</FormLabel>
              <Input value={form.contact.headline || ''} onChange={e => update('contact.headline', e.target.value)} />
            </FormControl>
          </GridItem>
          <FormControl>
            <FormLabel>{t('phone')}</FormLabel>
            <Input value={form.contact.phone || ''} onChange={e => update('contact.phone', e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>{t('email')}</FormLabel>
            <Input value={form.contact.email || ''} onChange={e => update('contact.email', e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>{t('location')}</FormLabel>
            <Input value={form.contact.location || ''} onChange={e => update('contact.location', e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>{t('website')}</FormLabel>
            <Input value={form.contact.website || ''} onChange={e => update('contact.website', e.target.value)} />
          </FormControl>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>{t('linkedin')}</FormLabel>
              <Input value={form.contact.linkedin || ''} onChange={e => update('contact.linkedin', e.target.value)} />
            </FormControl>
          </GridItem>
        </Grid>
      </Box>

      <Box p={4} bg="white" rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
        <HStack justify="space-between" mb={3}>
          <Heading as="h4" size="sm">{t('education')}</Heading>
          <Button leftIcon={<AddIcon />} size="sm" onClick={() => add('education')}>{t('add')}</Button>
        </HStack>
        <VStack align="stretch" spacing={4}>
          {form.education.map((ed, idx) => (
            <Box key={idx} p={3} border="1px solid" borderColor="gray.200" rounded="md">
              <HStack justify="space-between" mb={2}>
                <Heading as="h5" size="sm">{ed.school || t('school')}</Heading>
                <IconButton aria-label="remove" icon={<DeleteIcon />} size="sm" variant="ghost" onClick={() => remove('education', idx)} />
              </HStack>
              <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                <FormControl><FormLabel>{t('school')}</FormLabel><Input value={ed.school} onChange={e => update(`education.${idx}.school`, e.target.value)} /></FormControl>
                <FormControl><FormLabel>{t('degree')}</FormLabel><Input value={ed.degree || ''} onChange={e => update(`education.${idx}.degree`, e.target.value)} /></FormControl>
                <FormControl><FormLabel>{t('startDate')}</FormLabel><Input value={ed.startDate || ''} onChange={e => update(`education.${idx}.startDate`, e.target.value)} /></FormControl>
                <FormControl><FormLabel>{t('endDate')}</FormLabel><Input value={ed.endDate || ''} onChange={e => update(`education.${idx}.endDate`, e.target.value)} /></FormControl>
                <FormControl><FormLabel>{t('location')}</FormLabel><Input value={ed.location || ''} onChange={e => update(`education.${idx}.location`, e.target.value)} /></FormControl>
                <GridItem colSpan={2}><FormControl><FormLabel>{t('notes')}</FormLabel><Input value={ed.notes || ''} onChange={e => update(`education.${idx}.notes`, e.target.value)} /></FormControl></GridItem>
              </Grid>
            </Box>
          ))}
        </VStack>
      </Box>

      <Box p={4} bg="white" rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
        <HStack justify="space-between" mb={3}>
          <Heading as="h4" size="sm">{t('experience')}</Heading>
          <Button leftIcon={<AddIcon />} size="sm" onClick={() => add('experience')}>{t('add')}</Button>
        </HStack>
        <VStack align="stretch" spacing={4}>
          {form.experience.map((ex, idx) => (
            <Box key={idx} p={3} border="1px solid" borderColor="gray.200" rounded="md">
              <HStack justify="space-between" mb={2}>
                <Heading as="h5" size="sm">{ex.company || t('company')}</Heading>
                <IconButton aria-label="remove" icon={<DeleteIcon />} size="sm" variant="ghost" onClick={() => remove('experience', idx)} />
              </HStack>
              <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                <FormControl><FormLabel>{t('company')}</FormLabel><Input value={ex.company} onChange={e => update(`experience.${idx}.company`, e.target.value)} /></FormControl>
                <FormControl><FormLabel>{t('title')}</FormLabel><Input value={ex.title || ''} onChange={e => update(`experience.${idx}.title`, e.target.value)} /></FormControl>
                <FormControl><FormLabel>{t('startDate')}</FormLabel><Input value={ex.startDate || ''} onChange={e => update(`experience.${idx}.startDate`, e.target.value)} /></FormControl>
                <FormControl><FormLabel>{t('endDate')}</FormLabel><Input value={ex.endDate || ''} onChange={e => update(`experience.${idx}.endDate`, e.target.value)} /></FormControl>
                <FormControl><FormLabel>{t('location')}</FormLabel><Input value={ex.location || ''} onChange={e => update(`experience.${idx}.location`, e.target.value)} /></FormControl>
                <GridItem colSpan={2}><FormControl><FormLabel>{t('bullets')}</FormLabel><Textarea value={ex.bullets || ''} onChange={e => update(`experience.${idx}.bullets`, e.target.value)} /></FormControl></GridItem>
              </Grid>
            </Box>
          ))}
        </VStack>
      </Box>

      <Box p={4} bg="white" rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
        <HStack justify="space-between" mb={3}>
          <Heading as="h4" size="sm">{t('projects')}</Heading>
          <Button leftIcon={<AddIcon />} size="sm" onClick={() => add('projects')}>{t('add')}</Button>
        </HStack>
        <VStack align="stretch" spacing={4}>
          {form.projects.map((p, idx) => (
            <Box key={idx} p={3} border="1px solid" borderColor="gray.200" rounded="md">
              <HStack justify="space-between" mb={2}>
                <Heading as="h5" size="sm">{p.name || t('name')}</Heading>
                <IconButton aria-label="remove" icon={<DeleteIcon />} size="sm" variant="ghost" onClick={() => remove('projects', idx)} />
              </HStack>
              <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                <FormControl><FormLabel>{t('name')}</FormLabel><Input value={p.name} onChange={e => update(`projects.${idx}.name`, e.target.value)} /></FormControl>
                <FormControl><FormLabel>{t('url')}</FormLabel><Input value={p.url || ''} onChange={e => update(`projects.${idx}.url`, e.target.value)} /></FormControl>
                <GridItem colSpan={2}><FormControl><FormLabel>{t('description')}</FormLabel><Textarea value={p.description || ''} onChange={e => update(`projects.${idx}.description`, e.target.value)} /></FormControl></GridItem>
              </Grid>
            </Box>
          ))}
        </VStack>
      </Box>

      <Box p={4} bg="white" rounded="lg" shadow="sm" border="1px solid" borderColor="gray.200">
        <Heading as="h4" size="sm" mb={3}>{t('skills')}</Heading>
        <FormControl>
          <FormLabel>{t('skills')}</FormLabel>
          <Textarea placeholder={t('skillsHint') as string} value={form.skills} onChange={e => update('skills', e.target.value)} />
        </FormControl>
      </Box>
    </VStack>
  );
}
