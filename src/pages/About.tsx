import PageLayout from "@/components/layout/PageLayout";
import { ShieldCheck, Star, Lightbulb, Globe, TrendingUp } from "lucide-react";


export type Journal = {
  id: number;
  title: string;
};

export type AboutUsProps = {
  title?: string;
  journals?: Journal[];
};

const defaultJournals: Journal[] = [
  { id: 1, title: "Makandu Journal of Marketing Research" },
  { id: 2, title: "Makandu Journal of Business Administration and Management" },
  { id: 3, title: "Makandu Journal of Banking and Finance" },
  { id: 4, title: "Makandu Journal of Office and Information Management" },
  { id: 5, title: "Makandu Journal of Entrepreneurship and Small Business" },
  { id: 6, title: "Makandu Journal of Hospitality and Tourism Management" },
  { id: 7, title: "Makandu Journal of Supply Chain and Logistics Management" },
  { id: 8, title: "Makandu Journal of Nursing and Health Sciences" },
  { id: 9, title: "Makandu Journal of Education and Learning" },
];

function AboutUs({
  title = "About Makandu Journal Series",
  journals = defaultJournals,
}: AboutUsProps) {
  return (
    <PageLayout title="About Makandu">
      <section className="bg-blue-600 text-white py-16 rounded-3xl shadow-md">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            The Makandu Journal Series is a multidisciplinary publishing platform dedicated to advancing 
            research and knowledge across diverse academic fields. Each journal provides a peer-reviewed, 
            open-access outlet for cutting-edge scholarship, bridging theory and practice. The series adheres 
            to international publishing standards and aims to become a leading reference point for researchers, 
            practitioners, and policymakers.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto md:px-12 py-16 space-y-16">

        <div className="border-l-4 border-blue-600 pl-6 bg-white shadow-sm rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Mission Statement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            “To promote high-quality research and innovative knowledge that drives academic excellence,
             professional practice, and sustainable development across disciplines.”
          </p>
        </div>

        <div className="border-l-4 border-blue-600 bg-blue-50 shadow-sm rounded-2xl p-8">

        <h2 className="text-2xl font-semibold text-blue-700 mb-6">Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
        {
        title: "Integrity",
        description: "Upholding ethical publishing and academic honesty.",
        icon: ShieldCheck,
        },
        {
        title: "Excellence",
        description: "Ensuring rigorous peer review and quality content.",
        icon: Star,
        },
        {
        title: "Innovation",
        description:
        "Encouraging new research ideas and interdisciplinary dialogue.",
        icon: Lightbulb,
        },
        {
        title: "Accessibility",
        description: "Providing open access for global audiences.",
        icon: Globe,
        },
        {
        title: "Impact",
        description: "Supporting research that influences policy and practice.",
        icon: TrendingUp,
        },
        ].map((value) => {
        const Icon = value.icon;
        return (
        <div
          key={value.title}
          className="bg-white border border-blue-100 rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Icon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-blue-800">
              {value.title}
            </h3>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {value.description}
          </p>
        </div>
        );
      })}
      </div>
      </div>



        <div className="bg-white p-10 rounded-2xl border-l-4 border-blue-600 shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center tracking-wide">
        Journals Under the Makandu Series
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
       {journals.map((j) => (
        <div
        key={j.id}
        className="p-4 border border-gray-100 rounded-xl bg-gray-50 text-gray-800 flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
        <p className="font-medium leading-snug">{j.title}</p>
        </div>
        ))}
        </div>

  <p className="text-sm text-gray-500 italic mt-8 text-center">
    (Future expansion may include: Law, Agriculture, ICT, Environmental Studies,
    Engineering, etc.)
  </p>
</div>




        <div className="grid md:grid-cols-2 gap-8">
          <Card title="Editorial Structure">
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li><strong>Editor-in-Chief (per journal):</strong> Senior academic with expertise in the field.</li>
              <li><strong>Associate Editors: </strong> Specialists handling submissions in sub-disciplines.</li>
              <li><strong>Editorial Board:</strong> 10–15 experts from universities, research institutes, and industries worldwide.</li>
              <li><strong>Advisory Board:</strong>Senior scholars and professionals guiding long-term direction.</li>
              <li><strong>Managing Editor:</strong>Oversees publication process and communication.</li>

            </ul>
          </Card>

          <Card title="Peer Review Policy">
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li><strong>Double-Blind Review:</strong>Authors and reviewers remain anonymous.</li>
              <li><strong>Turnaround Time:</strong>Initial decision within 6–8 weeks.</li>
              <li><strong>Ethics Compliance:</strong>Aligned with COPE (Committee on Publication Ethics) guidelines.</li>
              <li><strong>Plagiarism Check:</strong>All submissions screened with plagiarism detection software.</li>
            </ul>
          </Card>

        

          <Card title="Indexing & Visibility">
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Apply for indexing in: <strong>Google Scholar, CrossRef (DOI), Scopus, EBSCO, ProQuest, DOAJ</strong>.</li>
              <li>ISSN registration for print and online versions through the <strong>ISSN International Centre</strong>.</li>
              <li>Assign <strong>Digital Object Identifiers (DOIs)</strong> to all published articles.</li>
              <li>•	Develop <strong>Makandu Online Publishing Portal</strong> with an open-access policy.</li>
            </ul>
          </Card>


          <Card title="Long-Term Vision">
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>To establish <strong>Makandu Journal Series</strong> as a reputable academic publishing brand in Africa with global recognition.</li>
              <li>To rank among <strong>Scopus and Web of Science indexed journals</strong> within 5 years.</li>
              <li>•	To provide a <strong>platform for African scholarship</strong> while maintaining global relevance.</li>
            </ul>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-blue-100 transition p-6 border border-gray-100">
    <h2 className="text-xl font-semibold text-blue-700 mb-3 border-l-4 border-blue-600 pl-3">
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </div>
);

export default AboutUs;
