import React, { useState } from "react";

function FileUploadTable() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newRow = {
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        file: selectedFile,
      };

      setTableData([...tableData, newRow]);
      setSelectedFile(null);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size (bytes)</th>
            <th>Type</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.size}</td>
              <td>{row.type}</td>
              <td>
                {row.type.startsWith("image/") ? (
                  <img
                    src={URL.createObjectURL(row.file)}
                    alt={row.name}
                    style={{ maxWidth: "100px" }}
                  />
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileUploadTable;
