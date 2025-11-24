import ProjectModule from "../../components/ProjectModule";
import { imageBasePath } from "../../lib/config";

export default function Project2() {
  return (
    <ProjectModule
      title="MyRiderID System"
      subtitle="A Ruby on Rails-based QR Rider Management system"
      breadcrumb="MyRiderID System"
      images={[
        `${imageBasePath}/project2-preview.webp`,
        `${imageBasePath}/project2-1.webp`,
        `${imageBasePath}/project2-2.webp`,
        `${imageBasePath}/project2-3.webp`,
        `${imageBasePath}/project2-4.webp`,
      ]}
      overview={`" MyRiderID is a comprehensive rider management platform designed to enhance safety and efficiency for motorcycle riders.
It uses QR code technology to store rider identity, emergency contact, and health information for quick access during emergencies.
The system is designed to help emergency responders identify riders instantly and provide faster assistance."`}
      technologies={[
        "Ruby on Rails (Backend)",
        "PostgreSQL (Database)",
        "JavaScript + Tailwind CSS (Frontend)",
      ]}
      features={[
        "Profile management dashboard",
        "QR code generation for riders in admin panel",
        "Emergency contact & health info storage",
        "Responsive & mobile-friendly design",
      ]}
    />
  );
}
