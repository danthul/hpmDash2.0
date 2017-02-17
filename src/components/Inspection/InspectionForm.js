import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as criteriaActions from '../actions/criteriaActions';
import InspectionList from './InspectionList';

class InspectionForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  // componentWillReceiveProps(nextProps) {
  //   if (this.props.course.id != nextProps.course.id) {
  //     //Necessary to populate form when existing course is loaded directly
  //     this.setState({course: Object.assign({}, nextProps.course)});
  //   }
  // }

  render() {
    const { criteria } = this.props;
    return (
      <div className="panel">
        <form className="form-horizontal" role="form">
          {criteria.map(item =>
            <InspectionList
              key={item.id}
              criteria={item}
            />
          )}
          <h3>
            <button type="button" id="MarkComplete">Completed!</button>
            Mark inspection as complete?
          </h3>
          <div className="accordiondivs">
            <table>
              <tbody>
              <tr>
                <td>
                  <div className="pull-left">
                    Click the button above to mark the inspection as complete.
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    );
  }
}

InspectionForm.propTypes = {
  criteria: PropTypes.array.isRequired
  // actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    criteria: state.criteria
  };
}
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(criteriaActions, dispatch)
//   };
// }

export default connect(mapStateToProps)(InspectionForm);
// export default connect(mapStateToProps, mapDispatchToProps)(InspectionForm);
