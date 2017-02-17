import React, {PropTypes} from 'react';
import InspectionItem from './InspectionItem';

const InspectionList = ({criteria}) => {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            <a href="#">{criteria.category}</a>
          </h3>
        </div>
        <div className="panel-collapse collapse in">
          <div className="panel-body">
            <div className="row form-group">
              {criteria.questions.map(item =>
                <InspectionItem
                  key={item.idQuestion}
                  idInspection={item.idQuestion}
                  idQuestion={item.idQuestion}
                  question={item.question}
                  category={criteria.category}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InspectionList.propTypes = {
  criteria: PropTypes.object.isRequired
};

export default InspectionList;
