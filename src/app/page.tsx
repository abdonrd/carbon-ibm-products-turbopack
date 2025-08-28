import {
  TagSet,
  UnauthorizedEmptyState,
} from "@/components/@carbon/ibm-products-client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <UnauthorizedEmptyState
        headingAs="h3"
        illustrationDescription="Test alt text"
        subtitle="Description text explaining why this section is empty."
        title="Empty state title"
        className="border border-gray-200 p-6"
      />

      <TagSet
        tags={[
          { label: "Tag 1", type: "blue" },
          { label: "Tag 12", type: "green" },
          { label: "Tag 123", type: "red" },
          { label: "Tag 1234", type: "high-contrast" },
        ]}
      />
    </div>
  );
}
