import "./Profile.modules.css";

import { useEffect, useState } from "react";
import { useCV } from "../../contexts/CV";
import { getDocuments } from "../../handlers/cv";

export const Profile = () => {
  const { loadCV } = useCV();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await getDocuments(1);
      setFiles(response);
    };
    fetchDocuments();
  }, []);

  return (
    <div className="profile-container">
      <div className="settings-container"></div>
      <div className="files-container">
        <div className="files-heading">
          <h5>Your documents</h5>
          <button onClick={() => loadCV()} className="btn-orange btn">
            +
          </button>
        </div>
        <div className="files">
          {files.map((f) => (
            <div
              className="file animation-up"
              key={f.cv_id}
              onClick={() => loadCV(f.cv_id, f)}
            >
              <img src="no-image.png" />
              <h5>{f.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
