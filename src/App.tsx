import { Box, Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DownloadPdf from "./pages/DownloadPdf";
import DownloadLatex from "./pages/DownloadLatex";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="6xl" py={6}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<DownloadPdf />} />
            <Route path="/download/latex" element={<DownloadLatex />} />
          </Routes>
        </ErrorBoundary>
      </Container>
    </Box>
  );
}
