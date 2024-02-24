import React, { useState } from "react";
import { validateFile } from "./FileValidator"; // Import the file validator function
import "./FileUpload.css";

const FileUpload = () => {
    const [validatorFile,setValidatorFile] = useState(null);
    const [validationFile,setValidationFile] = useState(null);
    const [validatorErrors, setValidatorErrors] = useState([]);
    const [validationErrors, setValidationErrors] = useState([]);

    const handleValidatorFileChange = (e) => {
        const file = e.target.files[0];
        const error = validateFile(file);

        if (error) {
            setValidatorErrors([...validatorErrors, error]);
        } else {
            setValidatorFile(file);
            setValidatorErrors([]);
        }
    };

    const handleValidationFileChange = (e) => {
        const file = e.target.files[0];
        const error = validateFile(file);

        if (error) {
            setValidationErrors([...validationErrors, error]);
        } else {
            setValidationFile(file);
            setValidationErrors([]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationErrors([]);
        if (validatorErrors.length > 0 || validationErrors.length > 0) {
            return;
        }

        // Handle the file upload logic here
    };

    return (
        <div className="file-upload">
            <div className="app-slogan"> Securely Upload and Validate your Files</div>
            <form onSubmit={handleSubmit} className="file-form">
                <div className="validation-group">
                    <label htmlFor="validator-file" className="file-label validator"></label>
                    <input
                        type="file"
                        id="validator-file"
                        onChange={handleValidatorFileChange}
                        className="file-input"
                    />
                    {validatorErrors.map((error, index) => (
                        <p key={index} className="file-error">
                            {error}
                        </p>
                    ))}
                </div>
                <div className="validation-group">
                    <label htmlFor="validation-file" className="file-label validation"></label>
                    <input
                        type="file"
                        id="validation-file"
                        onChange={handleValidationFileChange}
                        className="file-input"
                    />
                    {validationErrors.map((error, index) => (
                        <p key={index} className="file-error">
                            {error}
                        </p>
                    ))}
                </div>
            </form>
            <div>
                <button type="submit" className="upload-button">
                    Upload
                </button>
            </div>
        </div>
    );
};

export default FileUpload;