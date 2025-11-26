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

      /* NEW FIELDS */
      quotes="Technology saves lives when information reaches the right hands at the right time."
      position="Project Manager & Frontend Developer"
      problems={[
        "Riders often don’t carry identification or emergency info during accidents",
        "Needed a fast way for responders to identify a rider with minimal steps",
        "Front-end had to be extremely simple for police and EMS officers to understand instantly",
      ]}
      solutions={[
        "Introduced QR-based identity cards that store rider info safely and can be accessed immediately by scanning",
        "Designed a clean, minimal UI focused on speed and clarity for emergency situations",
        "Built responsive layouts so the system works smoothly on mobile devices used by responders",
      ]}
    />
  );
}
