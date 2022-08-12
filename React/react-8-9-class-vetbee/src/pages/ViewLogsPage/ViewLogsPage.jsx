import React from 'react';

const ViewLogsPage = (props) => {
  console.log('props ===', props);
  return (
    <div>
      <h1>{props.name}: Health Records </h1>
    </div>
  );
};

export default ViewLogsPage;
