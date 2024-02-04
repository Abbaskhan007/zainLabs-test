import Section from "@/components/Section";
import Slider from "@/components/Slider";
import {
  bookMarksData,
  convertFromPDFData,
  convertToPDFData,
} from "@/utils/data";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-6 py-12 md:px-24">
      <Section data={bookMarksData} title="Your Bookmarks" />
      <Slider data={convertFromPDFData} title="Convert from PDF" />
      <Section data={convertFromPDFData} title="Convert from PDF" />
      <Section data={convertToPDFData} title="Convert to PDF" />
    </main>
  );
}
