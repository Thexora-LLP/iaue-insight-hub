import PageLayout from "@/components/layout/PageLayout";

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
// About Us
function AboutUs({
  title = "About Makandu Journal Series",
  journals = defaultJournals,
}: AboutUsProps) {
  return (
    <PageLayout title="">
      <section className="max-w-5xl mx-auto p-8 md:p-16 bg-grey-50 rounded-3xl shadow-sm shadow-blue-600 space-y-10">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-3xl font-bold text-blue-600 mb-4">
            {title}
          </h1>
          <p className=" text-lg  max-w-2xl mx-auto">
            The Makandu Journal Series is a multi-disciplinary publishing
            platform dedicated to advancing research and knowledge across
            diverse academic fields. Each journal provides a peer-reviewed,
            open-access outlet for cutting-edge scholarship, bridging theory and
            practice.The series adheres to international publishing standards
            and aims to become a leading reference point for researchers,
            practitioners, and policymakers.
          </p>
        </header>

        <section className="bg-white p-6 rounded-2xl shadow-sm shadow-blue-600">
          <h2 className="text-2xl text-blue-600 font-semibold mb-3">
            Mission Statement
          </h2>
          <p className="italic text-gray-500">
            “To promote high-quality research and innovative knowledge that
            drives academic excellence, professional practice and sustainable
            development across disciplines.”
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm shadow-blue-600">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">
            Core Values
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Integrity</strong> – Upholding ethical publishing and
              academic honesty.
            </li>
            <li>
              <strong>Excellence</strong> – Ensuring rigorous peer review and
              quality content.
            </li>
            <li>
              <strong>Innovation</strong> – Encouraging new research ideas and
              interdisciplinary dialogue.
            </li>
            <li>
              <strong>Accessibility</strong> – Providing open access to global
              audiences.
            </li>
            <li>
              <strong>Impact</strong> – Supporting research that influences
              practice and policy.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm shadow-blue-600">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Journals Under the Makandu Series
          </h2>
          <ol className="list-decimal ml-5  space-y-1">
            {journals.map((j) => (
              <li key={j.id}>{j.title}</li>
            ))}
          </ol>
          <p>
            (Future expansion possible: Law, Agriculture, ICT, Environmental
            Studies, Engineering, etc.)
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm shadow-blue-600">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Editorial Structure
          </h2>
          <ul className="list-disc ml-5  space-y-1">
            <li>
              <strong>Editor-in-Chief(per journal):</strong> Senior academic
              with expertise in each field.
            </li>
            <li>
              <strong>Associate Editors:</strong> Specialists handling
              submissions in sub-discipline.
            </li>
            <li>
              <strong>Editorial Board:</strong> 10–15 experts from universities,
              research institute and industries worldwide.
            </li>
            <li>
              <strong>Advisory Board:</strong> Senior scholars and professionals
              guiding long-term direction.
            </li>
            <li>
              <strong>Managing Editor:</strong> Oversees publication process and
              communication.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm shadow-blue-600">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Peer Review Policy
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              Double-Blind Review: Authors and reviewers remain anonymous.
            </li>
            <li>Turnaround Time: Initial decision within 6–8 weeks.</li>
            <li>
              Ethics Compliance: Aligned with COPE (Committee on Publication
              Ethics) guidelines.
            </li>
            <li>
              Plagiarism Check: All submissions screened with plagiarism
              detection software.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm shadow-blue-600">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Submission Guidelines
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              Manuscripts must be original and not under review elsewhere.
            </li>
            <li>
              Articles should range between 4,000–8,000 words, including
              references.
            </li>
            <li>Abstract: 150–250 words, with 4–6 keywords.</li>
            <li>Referencing Style: APA (7th edition).</li>
            <li>
              Acceptable submission types:Research Articles, Review Papers, Case
              Studies, Book Reviews, Policy Briefs
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm shadow-blue-600">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Publication Frequency
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Quarterly (4 issues per year).</li>
            <li>
              Special issues may be published for conferences or thematic
              research calls.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm shadow-blue-600">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Indexing and Visibility Strategy
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              Apply for indexing in: Google Scholar, CrossRef (DOI), Scopus,
              EBSCO, ProQuest, DOAJ.
            </li>
            <li>
              SSN registration for print and online versions through the ISSN
              International Centre.
            </li>
            <li>
              Assign Digital Object Identifiers (DOIs) to all published
              articles.
            </li>
            <li>
              Develop Makandu Online Publishing Portal with an open-access
              policy.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm shadow-blue-600">
          <h2 className="text-2xl font-semibold  text-blue-600 mb-3">
            Funding and Sustainability
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              Article Processing Charges (APC) for sustainability (with waivers
              for developing countries).
            </li>
            <li>
              Partnerships with universities, research institutions, and
              professional bodies.
            </li>
            <li>
              Advertisement and sponsorship opportunities within journal issues.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm shadow-blue-600">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Target Audience
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Academics (lecturers, professors, researchers).</li>
            <li>Students (undergraduate, postgraduate, doctoral).</li>
            <li>
              Practitioners (business leaders, nurses, teachers, policy makers,
              entrepreneurs).
            </li>
            <li>
              Institutions (universities, colleges, research centers, government
              agencies).
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm shadow-blue-600">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Long-Term Vision
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              To establish Makandu Journal Series as a reputable academic
              publishing brand in Africa with global recognition.
            </li>
            <li>
              To rank among Scopus and Web of Science indexed journals within 5
              years.
            </li>
            <li>
              To provide a platform for African scholarship while maintaining
              global relevance.
            </li>
            {/* <li>Title, ISSN placeholders (print & online), Scope, TargetAudience</li> */}
          </ul>
        </section>
      </section>
    </PageLayout>
  );
}

export default AboutUs;
