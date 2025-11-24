import ProjectModule from "../../components/ProjectModule";
import { imageBasePath } from "../../lib/config";

export default function Project1() {
  return (
    <ProjectModule
      title="Lokalities Food System"
      subtitle="A Ruby on Rails-based kiosk management system"
      breadcrumb="Lokalities Food System"
      images={[
        `${imageBasePath}/project1-preview.webp`,
        `${imageBasePath}/project1-1.webp`,
        `${imageBasePath}/project1-2.webp`,
        `${imageBasePath}/project1-3.webp`,
      ]}
      overview={`" Lokalities Food System is a centralized kiosk management system that improves daily operations and product management.
          It provides a clean, intuitive dashboard with essential utilities, sales tracking, and stock monitoring.
          The goal is to support local businesses by bringing efficient tools with simple usability.`}
      technologies={[
              "Ruby on Rails (Framework)",
              "PostgreSQL (Database)",
              "Bootstrap 5 (frontend)",
      ]}
      features={[
        "Utility & product tracking dashboard",
        "CRUD product management",
        "Inventory alert notifications",
        "Responsive & mobile-friendly design",
      ]}
    />
  );
}
