import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showModal, sendCallback, nullCallbacks, setErrors} from '../actions/index';
import { bindActionCreators } from 'redux';
import MaskedInput from 'react-maskedinput';

class ModalForm extends Component{
    isShow() {
        if (this.props.formState.modalShow) {
             return {
                 display: 'block',
                 animation: 'popupAnimOpen 0.4s 1 linear'
             };
        } else {
            return {
                animation: 'popupAnimClose 0.4s 1 linear',
                display: 'none'
            };
        }
    }



    closeModalHandler(e) {
        e.stopPropagation();
        /*if (!this.props.formState.fiveErrors) {
            this.refs.name.value = '';
            this.refs.phone.mask.setValue('');
        } else {
            this.refs.name.value = '';
            this.refs.phone.mask.setValue('');
        }*/
        this.props.showModal(false);
        this.props.nullCallbacks(null, null);
        this.props.setErrors(false);
    }


    render() {
        return(
            <div className="popup-overlay" style={this.isShow()} onClick={this.closeModalHandler.bind(this)}>
              <div className="popup-form">
                  <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                  <h2>Получить чеклист</h2>
                  <p>
                      Почти закончено! Пожалуйста, подтвердите адрес электронной почты, следуя инструкциям в письме, которое мы только что отправили вам на указанный email.
                  </p>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, sendCallback, nullCallbacks, setErrors}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
