import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as inspectionActions from '../../actions/inspectionActions';
import TextInput from '../common/TextInput';
import toastr from 'toastr';

class InspectionItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.attentionRequired = this.attentionRequired.bind(this);
    this.inspectionResult = this.inspectionResult.bind(this);
    this.updateProblemNote = this.updateProblemNote.bind(this);
    this.state = {
      idInspection: props.idInspection,
      idQuestion: props.idQuestion,
      question: props.question,
      errors: {},
      saving: false,
      results: {}
    };
  }

  inspectionResult(event) {
    event.preventDefault();

    this.setState({saving: true});
    const inspection = {
      idInspection: this.state.idInspection,
      idQuestion: this.state.idQuestion,
      result: event.currentTarget.name
    };
    this.props.actions.saveInspectionResult(inspection)
      .then(() => {
        toastr.success('Inspection result saved');
        this.setState({saving: false});
      })
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  attentionRequired(event) {
    toastr.error(event.currentTarget.name);
    return true;
  }

  updateProblemNote(event) {
    let results = this.state.results;
    results.ProblemNote = event.target.value;
    return this.setState({results: results});
  }

  render() {
    const { question } = this.props;
    return (
      <div>
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 nopadding">
          <h4><span id="desc47">{question}</span></h4>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 text-center nopadding">
          <button
            type="button"
            className="icon btn btn-outline btn-lg btn-default"
            title="Good"
            name="Good"
            onClick={this.inspectionResult}>
            <i className="fa fa-thumbs-o-up"/>
          </button>
          <button
            type="button"
            className="icon btn btn-outline btn-lg btn-default"
            title="Needs Work"
            name="Needs Work"
            onClick={this.inspectionResult}>
            <i className="fa fa-wrench"/>
          </button>
          <button
            type="button"
            className="icon btn btn-outline btn-lg btn-default"
            title="Not Inspected"
            name="Not Inspected"
            onClick={this.inspectionResult}>
            <i className="fa fa-ban"/>
          </button>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6 nopadding">
          <div className="row center-block">
            <div className="input-group">
              <span className="input-group-btn">
              <button
                type="button"
                className="icon btn btn-outline btn-lg btn-default"
                title="AttRequired"
                onClick={this.attentionRequired}>
                <i className="fa fa-times-circle-o"/>
              </button>
              </span>
              <TextInput
                name="probNote"
                label="Problem Note"
                value={this.state.question.probNote}
                onChange={this.updateProblemNote}
                error={this.state.errors.probNote}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

InspectionItem.propTypes = {
  question: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  idInspection: PropTypes.number.isRequired,
  idQuestion: PropTypes.number.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(inspectionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(InspectionItem);
