import CourseMetaData from "./CourseMetaData";
import CourseMetaDataWithIcons from "./CourseMetaDataWithIcons";
import PriceLabel from "./PriceLabel";

interface IProps {
  taglist: string[];
  title: string;
  shortDescription: string;
  logoFileUrl: string | null;
  enrollType: number;
  isFree: boolean;
}

export default function CourseCard({
  enrollType,
  isFree,
  logoFileUrl,
  shortDescription,
  taglist,
  title,
}: IProps) {
  return (
    <div className="w-full h-[338px] px-6 py-7 rounded-lg bg-white border border-filtering-title-border/75 overflow-hidden flex flex-col justify-between">
      <div>
        <CourseMetaData
          title={title}
          shortDescription={shortDescription}
          taglist={taglist}
        />
        <CourseMetaDataWithIcons logoFileUrl={logoFileUrl} />
      </div>
      <div>
        <PriceLabel enrollType={enrollType} isFree={isFree} />
      </div>
    </div>
  );
}
