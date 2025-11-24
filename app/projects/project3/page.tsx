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
    />
  );
}
