import ProjectModule from "../../components/ProjectModule";
import { imageBasePath } from "../../lib/config";

export default function Project3() {
  return (
    <ProjectModule
      title="Award Istiadat Management System"
      subtitle="A Ruby on Rails-based Award Management System"
      breadcrumb="Award Istiadat Management System"
      images={[
        `${imageBasePath}/project3-preview.webp`,
        `${imageBasePath}/project3-1.webp`,
        `${imageBasePath}/project3-2.webp`,
        `${imageBasePath}/project3-3.webp`,
        `${imageBasePath}/project3-4.webp`,
      ]}
      overview={`"The Award Istiadat Management System is designed to simplify and centralize the process of managing award recipients.
      Administrators can upload awardee data via Excel files, preview details, and make information publicly accessible.
      The system includes tools for managing award categories, events, and awardee details, ensuring a seamless and efficient workflow."`}
      technologies={[
        "Ruby on Rails (Backend)",
        "PostgreSQL (Database)",
        "Bootstrap 5 + CSS (Frontend)",
      ]}
      features={[
        "Bulk import via Excel files",
        "Award management dashboard",
        "Multi-tenant support for multiple states",
        "Responsive & mobile-friendly design",
      ]}

      /* NEW FIELDS */
      quotes="A good system isn’t just functional—it must make complex processes feel effortless."
      position="Fullstack Developer"
      problems={[
        "Managing thousands of award recipients manually was slow and error-prone",
        "Admins needed a fast way to upload, verify, and correct awardee data",
        "Each state required its own isolated environment to prevent data mix-ups",
        "Public users needed an easy way to search award recipients across different categories",
      ]}
      solutions={[
        "Introduced a bulk Excel import feature with automatic data validation to reduce manual work",
        "Added a preview-and-edit flow so admins can verify data before saving",
        "Implemented multi-tenant architecture to separate data by state securely",
        "Created a clean, responsive search interface for public users to find award recipients easily",
      ]}
    />
  );
}
