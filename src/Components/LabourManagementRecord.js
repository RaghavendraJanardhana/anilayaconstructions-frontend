import React from "react";

function LabourManagementRecord({ record, onEdit, onDelete }) {
  const {
    id,
    projectName,
    engineerName,
    createdDate,
    createdBy,
    typeOfLabour,
    labourCount,
  } = record;

  return (
    <tr className="border-b border-gray-300">
      <td className="px-4 py-2">{projectName}</td>
      <td className="px-4 py-2">{engineerName}</td>
      <td className="px-4 py-2">{createdDate}</td>
      <td className="px-4 py-2">{createdBy}</td>
      <td className="px-4 py-2">{typeOfLabour}</td>
      <td className="px-4 py-2">{labourCount}</td>
      <td className="px-4 py-2 flex space-x-2">
        <button
          onClick={() => onEdit(record)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default LabourManagementRecord;
