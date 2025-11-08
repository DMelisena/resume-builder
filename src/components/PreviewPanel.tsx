import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  Divider,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { ResumeData } from "../types";

type Props = {
  data: ResumeData | null;
};

export default function PreviewPanel({ data }: Props) {
  const { t } = useTranslation();
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

  const sep = (a?: string, b?: string) => [a, b].filter(Boolean).join(" • ");

  return (
    <Box
      p={6}
      bg="white"
      rounded="lg"
      shadow="sm"
      border="1px solid"
      borderColor="gray.200"
    >
      <Heading as="h3" size="md" mb={3}>
        {t("preview")}
      </Heading>
      <Stack spacing={3}>
        <Box>
          <Heading size="lg">{data.contact.fullName || "—"}</Heading>
          {data.contact.headline && (
            <Text color="gray.700">{data.contact.headline}</Text>
          )}
          <Text color="gray.700">
            {[
              data.contact.phone,
              data.contact.email,
              data.contact.website,
              data.contact.linkedin,
              data.contact.location,
            ]
              .filter(Boolean)
              .join("  •  ")}
          </Text>
        </Box>

        {/* Education */}
        {data.education?.length ? (
          <Box>
            <SectionHeading title={t("education")} />
            <Stack>
              {data.education.map((ed, i) => (
                <Entry
                  key={i}
                  left={sep(ed.school, ed.location)}
                  right={sep(ed.startDate, ed.endDate)}
                  sub={sep(ed.degree, ed.notes)}
                />
              ))}
            </Stack>
          </Box>
        ) : null}

        {/* Experience */}
        {data.experience?.length ? (
          <Box>
            <SectionHeading title={t("experience")} />
            <Stack>
              {data.experience.map((ex, i) => (
                <Box key={i}>
                  <Entry
                    left={sep(
                      [ex.title, ex.company].filter(Boolean).join(" — "),
                      ex.location
                    )}
                    right={sep(ex.startDate, ex.endDate)}
                  />
                  {ex.bullets?.split(/\r?\n/).filter(Boolean).length ? (
                    <Box as="ul" pl={6} mt={1}>
                      {ex.bullets
                        .split(/\r?\n/)
                        .filter(Boolean)
                        .map((b, j) => (
                          <Box as="li" key={j}>
                            <Text>{b}</Text>
                          </Box>
                        ))}
                    </Box>
                  ) : null}
                </Box>
              ))}
            </Stack>
          </Box>
        ) : null}

        {/* Projects */}
        {data.projects?.length ? (
          <Box>
            <SectionHeading title={t("projects")} />
            <Stack>
              {data.projects.map((p, i) => (
                <Box key={i}>
                  <Entry left={[p.name, p.url].filter(Boolean).join(" — ")} />
                  {p.description?.split(/\r?\n/).filter(Boolean).length ? (
                    <Box as="ul" pl={6} mt={1}>
                      {p.description
                        .split(/\r?\n/)
                        .filter(Boolean)
                        .map((d, j) => (
                          <Box as="li" key={j}>
                            <Text>{d}</Text>
                          </Box>
                        ))}
                    </Box>
                  ) : null}
                </Box>
              ))}
            </Stack>
          </Box>
        ) : null}

        {/* Skills */}
        {data.skills ? (
          <Box>
            <SectionHeading title={t("skills")} />
            <Box as="ul" pl={6} mt={1}>
              {data.skills
                .split(/\r?\n/)
                .filter(Boolean)
                .map((d, j) => (
                  <Box as="li" key={j}>
                    <Text>{d}</Text>
                  </Box>
                ))}
            </Box>
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <Box mb={1}>
      <Text
        fontWeight="bold"
        fontSize="sm"
        letterSpacing="wide"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Divider />
    </Box>
  );
}

function Entry({
  left,
  right,
  sub,
}: {
  left: string;
  right?: string;
  sub?: string;
}) {
  return (
    <Box py={1}>
      <Flex>
        <Text fontWeight="semibold">{left}</Text>
        <Spacer />
        {right && <Text>{right}</Text>}
      </Flex>
      {sub && <Text color="gray.700">{sub}</Text>}
    </Box>
  );
}
