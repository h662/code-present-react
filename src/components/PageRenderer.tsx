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
      return (
        <Title
          title={title!}
          description={description!}
          useOverlay={theme.useOverlay}
        />
      );
    case "TOC":
      return (
        <TOC
          title={title!}
          description={description!}
          useOverlay={theme.useOverlay}
        />
      );
    case "TEXT_ONLY":
      return (
        <TextOnly
          title={title!}
          description={description!}
          code={code || null}
          isDownloading={isDownloading}
          useOverlay={theme.useOverlay}
        />
      );
    case "CONCLUSION":
      return (
        <Conclusion
          title={title!}
          description={description!}
          useOverlay={theme.useOverlay}
        />
      );
    case "IMAGE_ONLY":
      return <ImageOnly title={title!} imageUrl={imageUrl!} />;
    case "IMAGE_TEXT":
      return (
        <ImageText
          title={title!}
          description={description!}
          imageUrl={imageUrl!}
          useOverlay={theme.useOverlay}
        />
      );
    case "TABLE_ONLY":
      return (
        <TableOnly
          title={title!}
          description={description!}
          useOverlay={theme.useOverlay}
        />
      );
    case "TABLE_IMAGE":
      return (
        <TableImage
          title={title!}
          description={description!}
          imageUrl={imageUrl!}
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
          useOverlay={theme.useOverlay}
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
          useOverlay={theme.useOverlay}
        />
      );
    default:
      return <p>Unsupported page type.</p>;
  }
}
