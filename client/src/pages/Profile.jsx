import "./Profile.modules.css";

import { useEffect } from "react";
import { Loading } from "../components/Loading";
import { CiSquarePlus } from "react-icons/ci";
import { useCV } from "../context/CV";
import { CVCard } from "../components/CVCard";
import { useModal } from "../context/Modal";
import { SelectTemplate } from "../components/SelectTemplate";

export const Profile = () => {
  const { fetchDocuments, documents } = useCV();
  const { showModal } = useModal();

  useEffect(() => {
    const loadDocs = async () => {
      await fetchDocuments();
    };

    loadDocs();
  }, []);

  if (!documents) {
    return <Loading />;
  }

  return (
    <div className="profile-container">
      <div className="documents-container">
        <div className="documents-heading">
          <h4>Your documents</h4>
        </div>
        <div className="documents">
          <div
            className="create-new animation-up"
            onClick={() => showModal(<SelectTemplate />)}
          >
            <CiSquarePlus size={"5em"} />
          </div>
          {documents.map((d) => (
            <CVCard document={d} key={d.cv_id} />
          ))}
        </div>
      </div>
    </div>
  );
};
