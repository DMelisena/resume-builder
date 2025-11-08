import {
  Box,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  HStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { PdfConfig } from "../types";

type Props = {
  config: PdfConfig;
  onChange: (cfg: PdfConfig) => void;
};

export default function PdfConfigPanel({ config, onChange }: Props) {
  const { t } = useTranslation();

  return (
    <Box
      p={4}
      bg="white"
      rounded="lg"
      shadow="sm"
      border="1px solid"
      borderColor="gray.200"
    >
      <Heading as="h3" size="md" mb={3}>
        {t("pdfConfig")}
      </Heading>

      <FormControl mb={4}>
        <FormLabel>
          {t("fontSize")}: {config.fontSize.toFixed(1)}pt
        </FormLabel>
        <Slider
          min={9}
          max={12}
          step={0.1}
          value={config.fontSize}
          onChange={(v) => onChange({ ...config, fontSize: v })}
        >
          <SliderTrack bg="blackAlpha.200">
            <SliderFilledTrack bg="black" />
          </SliderTrack>
          <SliderThumb
            bg="white"
            border="2px solid"
            borderColor="black"
            _focusVisible={{ boxShadow: "0 0 0 3px rgba(0,0,0,0.3)" }}
          />
        </Slider>
      </FormControl>

      <FormControl>
        <FormLabel>{t("hyperlinks")}</FormLabel>
        <HStack>
          <Switch
            isChecked={config.asLinks.email}
            onChange={(e) =>
              onChange({
                ...config,
                asLinks: { ...config.asLinks, email: e.target.checked },
              })
            }
          />
          <Text>{t("email")}</Text>
          <Switch
            isChecked={config.asLinks.linkedin}
            onChange={(e) =>
              onChange({
                ...config,
                asLinks: { ...config.asLinks, linkedin: e.target.checked },
              })
            }
          />
          <Text>{t("linkedin")}</Text>
          <Switch
            isChecked={config.asLinks.website}
            onChange={(e) =>
              onChange({
                ...config,
                asLinks: { ...config.asLinks, website: e.target.checked },
              })
            }
          />
          <Text>{t("website")}</Text>
        </HStack>
        <Text fontSize="sm" color="gray.600" mt={2}>
          {t("asLinks")}
        </Text>
      </FormControl>
    </Box>
  );
}
