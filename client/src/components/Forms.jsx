import { Card } from "./Card";

export function Forms() {
  const formFields = {
    personalInfo: {
      columns: 3,
      formFields: [
        {
          type: "text",
          inputField: "input",
          name: "firstName",
          placeholder: "Enter your first name",
        },
        {
          type: "text",
          inputField: "input",
          name: "lastName",
          placeholder: "Enter your last name",
        },
        {
          type: "text",
          inputField: "input",
          name: "country",
          placeholder: "Enter your country",
        },
        {
          type: "text",
          inputField: "input",
          name: "city",
          placeholder: "Enter your city",
        },
        {
          type: "text",
          inputField: "input",
          name: "address",
          placeholder: "Enter your address",
        },
        {
          type: "tel",
          inputField: "input",
          name: "phone",
          placeholder: "Enter your phone number",
        },
        {
          type: "email",
          inputField: "input",
          name: "email",
          placeholder: "Enter your email address",
        },
      ],
      formHeading: "personal Info",
    },

    workExperience: {
      addMore: true,
      columns: 2,
      formFields: [
        {
          type: "text",
          inputField: "input",
          name: "jobTitle",
          placeholder: "Job title (e.g. Software Engineer)",
        },
        {
          type: "text",
          inputField: "input",
          name: "company",
          placeholder: "Company name",
        },
        {
          type: "text",
          inputField: "input",
          name: "city",
          placeholder: "City",
        },
        {
          type: "text",
          inputField: "input",
          name: "country",
          placeholder: "Country",
        },
        {
          type: "text",
          inputField: "input",
          name: "duration",
          placeholder: "e.g. Jan 2022 - Present",
        },
        {
          type: "textarea",
          inputField: "textarea",
          name: "responsibilities",
          placeholder: "Describe your responsibilities and achievements",
        },
      ],
      formHeading: "work Experience",
    },

    education: {
      addMore: true,
      columns: 2,
      formFields: [
        {
          type: "text",
          inputField: "input",
          name: "degree",
          placeholder: "Degree (e.g. BSc Computer Science)",
        },
        {
          type: "text",
          inputField: "input",
          name: "institution",
          placeholder: "Institution name",
        },
        {
          type: "text",
          inputField: "input",
          name: "location",
          placeholder: "Location (e.g. Sofia, Bulgaria)",
        },
        {
          type: "text",
          inputField: "input",
          name: "graduationDate",
          placeholder: "Graduation date (e.g. June 2024)",
        },
        {
          type: "text",
          inputField: "input",
          name: "duration",
          placeholder: "e.g. 2020 - 2024",
        },
      ],
      formHeading: "education",
    },

    summary: {
      columns: 1,
      formFields: [
        {
          type: "textarea",
          inputField: "textarea",
          name: "summary",
          placeholder: "Write a short professional summary about yourself",
        },
      ],
      formHeading: "summary",
    },

    skills: {
      addMore: true,
      columns: 1,
      formFields: [
        {
          type: "text",
          inputField: "input",
          name: "skills",
          placeholder: "List a skill (e.g. JavaScript)",
        },
      ],
      formHeading: "skills",
    },

    languages: {
      addMore: true,
      columns: 1,
      formFields: [
        {
          type: "text",
          inputField: "input",
          name: "languages",
          placeholder: "Enter a language (e.g. English)",
        },
      ],
      formHeading: "languages",
    },

    socials: {
      addMore: true,
      columns: 1,
      formFields: [
        {
          type: "url",
          inputField: "input",
          name: "url",
          placeholder: "URL",
        },
      ],
      formHeading: "socials",
    },

    certifications: {
      addMore: true,
      columns: 2,
      formFields: [
        {
          type: "text",
          inputField: "input",
          name: "certificationName",
          placeholder: "Certification title",
        },
        {
          type: "text",
          inputField: "input",
          name: "issuer",
          placeholder: "Issued by (organization or institution)",
        },
        {
          type: "text",
          inputField: "input",
          name: "dateIssued",
          placeholder: "Date issued (e.g. Mar 2023)",
        },
        {
          type: "text",
          inputField: "input",
          name: "duration",
          placeholder: "e.g. 6 months",
        },
        {
          type: "url",
          inputField: "input",
          name: "link",
          placeholder: "Certification link (optional)",
        },
      ],
      formHeading: "certifications",
    },

    projects: {
      addMore: true,
      columns: 2,
      formFields: [
        {
          type: "text",
          inputField: "input",
          name: "projectTitle",
          placeholder: "Project title",
        },
        {
          type: "url",
          inputField: "input",
          name: "projectLink",
          placeholder: "Project URL (optional)",
        },
        {
          type: "url",
          inputField: "input",
          name: "codeLink",
          placeholder: "Code repository URL",
        },
        {
          type: "text",
          inputField: "input",
          name: "dates",
          placeholder: "Project dates (e.g. Jan 2023 - May 2023)",
        },
        {
          type: "textarea",
          inputField: "textarea",
          name: "projectDescription",
          placeholder: "Describe the project, tools used, and your role",
        },
      ],
      formHeading: "projects",
    },

    hobbies: {
      addMore: true,
      columns: 1,
      formFields: [
        {
          type: "text",
          inputField: "input",
          name: "hobbies",
          placeholder: "What are your hobbies or interests?",
        },
      ],
      formHeading: "hobbies",
    },

    references: {
      addMore: true,
      columns: 3,
      formFields: [
        {
          type: "text",
          inputField: "input",
          name: "referenceName",
          placeholder: "Reference name",
        },
        {
          type: "text",
          inputField: "input",
          name: "referenceContact",
          placeholder: "Contact info (e.g. email or phone)",
        },
        {
          type: "text",
          inputField: "input",
          name: "referenceRelation",
          placeholder: "Relation (e.g. Former Manager)",
        },
        {
          type: "textarea",
          inputField: "textarea",
          name: "referenceText",
          placeholder: "Additional context about this reference (optional)",
        },
      ],
      formHeading: "references",
    },
  };

  return (
    <>
      {Object.entries(formFields).map(([key, options]) => (
        <Card key={key} options={options} />
      ))}
    </>
  );
}
