import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendClientsCallback} from '../actions/index';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar.jsx';
import SocialLikes from './SocialLikes'

class HeaderContent extends Component{

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('EMAIL', this.refs.email.value);
        roistatGoal.reach({name: this.refs.email.value, phone: '', email: this.refs.email.value, leadName: 'Лендинг_Чек_лист', text: 'Лендинг ЧЛ - 5 самых распростаранненных ошибок - получить бесплатно'});
        this.props.sendClientsCallback(formData);
        this.refs.email.value = '';
        yaCounter44418460.reachGoal('FIVE-ERRORS-GET');
        yaCounter44418460.reachGoal('ALL_FORMS')
    }

    clientsNotification() {
        let response = this.props.formState.clientsResp;
        let notification = (resp) => {
            switch (resp.response) {
                case true:
                    return <h5 className="free-form__notification">Ваша заявка принята, с Вами свяжется наш менеджер</h5>;
                    break;
                case false:
                    return <h5 className="free-form__notification free-form__notification--error">Произошла ошибка отправки письма</h5>;
                    break;
            }
        };

        if (response) {
            return notification(response);
        } else {
            return false;
        }
    }

    render() {
        return(
            <div>
                <section className="header-content-background">
                    <div className="content--background">
                        <NavBar/>
                        <div className="container header__content">
                            <div className="header__content-top">
                                <h1 className="header__content-title">5 самых распространённых ошибок,</h1>
                                <h2 className="title-h2">которые убивают Ваши продажи на сайте</h2>
                                <div className="header__text-lines">
                                    Используйте данное руководство и увеличьте Ваши продажи через интернет до 70%!
                                </div>
                            </div>

                            <div className="header__content-down">
                            <div className="header__content-item">
                                <img src="images/schedule2.png" alt="Заказать чек-лист: Генератор продаж" title="Заказать чек-лист: Генератор продаж"/>
                            </div>
                            <div className="header__content-item">
                                <div className="header__content-form">
                                    <p className="header__content-text">
                                        Для получения данного чек-листа, заполните
                                        форму ниже и мы вышлем его Вам на почту
                                    </p>
                                    <div className="header__content-arrows">
                                        <span className="arrow"></span>
                                        <span className="arrow"></span>
                                        <span className="arrow"></span>
                                    </div>
                        {this.clientsNotification()}
                        <form className="form-group free-form" onSubmit={this.btnSubmitHandler.bind(this)}>
                            {/*<input type="text" ref="name" className="form-control" placeholder="Имя *" required/>*/}
                            <input type="email" ref="email"  name="EMAIL" className="form-control" placeholder="Email *"  required/>
                            <input type="submit" className="btn"  value="Получить бесплатно"/>
                        </form>
                                    <p className="header__content-confirm">
                                        Нажимая кнопку "Получить бесплатно", я даю свое
                                        согласие на обработку моих персональных данных
                                    </p>
                                    <SocialLikes/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({sendClientsCallback}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent);
