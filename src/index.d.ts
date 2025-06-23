interface Page {
  id: string | null;
  pageNumber: number;
  pageType: string;
  title?: string | null;
  description?: string | null;
  code?: string | null;
  options?: string[] | null;
  answer?: string | null;
  imageUrl?: string | null;
}

interface FontOption {
  label: string;
  value: string;
}

interface ThemeOption {
  label: string;
  lightBg: string;
  lightText: string;
  darkBg: string;
  darkText: string;
  backgroundImage: string;
  backgroundSize: string;
  backgroundRepeat: string;
  backgroundPosition: string;
  lightButtonBg: string;
  lightButtonText: string;
  darkButtonBg: string;
  darkButtonText: string;
}

interface Font {
  label: string;
  value: string;
}
