import Conclusion from "./page-types/Conclusion";
import ImageOnly from "./page-types/ImageOnly";
import ImageText from "./page-types/ImageText";
import MCQ from "./page-types/MCQ";
import Subjective from "./page-types/Subjective";
import TableImage from "./page-types/TableImage";
import TableOnly from "./page-types/TableOnly";
import TextOnly from "./page-types/TextOnly";
import Title from "./page-types/Title";
import TOC from "./page-types/TOC";

interface PageRendererProps {
  page: Page;
  isDownloading: boolean;
  theme: ThemeOption;
}

export default function PageRenderer({
  page,
  isDownloading,
  theme,
}: PageRendererProps) {
  const { pageType, title, description, code, options, answer, imageUrl } =
    page;

  switch (pageType) {
    case "TITLE":
      return <Title title={title!} description={description!} />;
    case "TOC":
      return <TOC title={title!} description={description!} />;
    case "TEXT_ONLY":
      return (
        <TextOnly
          title={title!}
          description={description!}
          code={code || null}
          isDownloading={isDownloading}
        />
      );
    case "CONCLUSION":
      return <Conclusion title={title!} description={description!} />;
    case "IMAGE_ONLY":
      return <ImageOnly title={title!} imageUrl={imageUrl!} />;
    case "IMAGE_TEXT":
      return (
        <ImageText
          title={title!}
          description={description!}
          imageUrl={imageUrl!}
        />
      );
    case "TABLE_ONLY":
      return (
        <TableOnly title={title!} description={description!} theme={theme} />
      );
    case "TABLE_IMAGE":
      return (
        <TableImage
          title={title!}
          description={description!}
          imageUrl={imageUrl!}
          theme={theme}
        />
      );
    case "MCQ":
      return (
        <MCQ
          key={page.id}
          title={title!}
          description={description!}
          code={code || null}
          isDownloading={isDownloading}
          options={options!}
          answer={answer!}
          theme={theme}
        />
      );
    case "SUBJECTIVE":
      return (
        <Subjective
          key={page.id}
          title={title!}
          description={description!}
          code={code || null}
          isDownloading={isDownloading}
          answer={answer!}
          theme={theme}
        />
      );
    default:
      return <p>Unsupported page type.</p>;
  }
}
