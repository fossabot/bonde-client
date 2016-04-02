import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as WidgetActions from './../actions/WidgetActions'
import * as Paths from '../Paths'
import { FormWidgetMenu, Loading, CloseButton, Label, ColorPicker } from './../components'
import reduxForm from 'redux-form'

function widgetFormValidation() {
  const errors = { valid: true }
  return errors
}

@connect(state => ({ form: state.widgetForm }))
@reduxForm('widgetForm', widgetFormValidation)
export default class DonationWidgetSettings extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    touchAll: PropTypes.func.isRequired,
    initializeForm: PropTypes.func.isRequired,
    dirty: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      initializing: true,
      submitting: false,
      hasSubmitted: false,
      error: null,
      bgClass: ''
    }
    //this.props.initializeForm({titleText: null, donationValue1: null, donationButtonText: null, donationValue2: null, donationValue3: null, donationValue4: null, donationValue5: null, paymentMethods: null, customerData: null})
  }

  handleColorClick(event) {
    this.setState({bgClass: event.currentTarget.getAttribute('data-bg-class')})
  }

  componentWillReceiveProps(nextProps) {
    const widget = this.widget(nextProps)
console.log(widget)
    if (widget) {
      if (this.state.initializing) {
        const { titleText: titleText, donationValue1:donationValue1, donationButtonText:donationButtonText, donationValue2:donationValue2, donationValue3:donationValue3, donationValue4:donationValue4, donationValue5:donationValue5, paymentMethods:paymentMethods, customerData:customerData } = (widget.settings || {titleText: null, donationValue1: null, donationButtonText: null, donationValue2: null, donationValue3: null, donationValue4: null, donationValue5: null, paymentMethods: null, customerData: null})
        this.props.initializeForm({titleText, donationValue1, donationValue2, donationButtonText, donationValue3, donationValue4, donationValue5, paymentMethods, customerData})
        this.setState({initializing: false})
      }
      this.state.submitting && this.setState({submitting: false})
      this.state.submitting && this.setState({hasSubmitted: true})
    }
  }

  widget(props = this.props) {
    const { widgets } = props
    return widgets.data[widgets.data.map((widget) => { return widget.id.toString()}).indexOf(this.props.params.widget_id)]
  }

  handleCancelClick(event) {
    event.preventDefault()
    Paths.editMobilization(this.props.mobilization.id)
  }

  handleSubmit(event) {
    event.preventDefault()
    const widget = this.widget()
    const { settings } = widget
    const { data, touchAll, valid, dispatch, mobilization, auth } = this.props
    console.log(data)
    this.setState({ submitting: true, hasSubmitted: false, error: null })
    if (valid) {
      const bindedWidgetActions = bindActionCreators(WidgetActions, dispatch)
      bindedWidgetActions.editWidget({
        mobilization_id: mobilization.id,
        widget_id: widget.id,
        credentials: auth.credentials,
        widget: { settings: {
          titleText: data.titleText,
          donationValue1: data.donationValue1,
          donationButtonText1: data.donationButtonText,
          donationValue2: data.donationValue2,
          donationValue3: data.donationValue3,
          donationValue4: data.donationValue4,
          donationValue5: data.donationValue5,
          paymentMethods: data.paymentMethods,
          customerData: data.customerData
        } }
      })
      this.props.initializeForm({
        titleText: data.titleText,
        donationValue1: data.donationValue1,
        donationButtonText1: data.donationButtonText,
        donationValue2: data.donationValue2,
        donationValue3: data.donationValue3,
        donationValue4: data.donationValue4,
        donationValue5: data.donationValue5,
        paymentMethods: data.paymentMethods,
        customerData: data.customerData
      })
    } else {
      touchAll()
      this.setState({ submitting: false })
    }
  }

  renderErrorMessage() {
    if (this.state.error) {
      return (
        <div className="red center mt2">{this.state.error}</div>
      )
    }
  }

  renderForm() {
    const {
      data: { titleText, donationButtonText, donationValue1, donationValue2, donationValue3, donationValue4, donationValue5, paymentMethods, customerData },
      errors: { callToAction: callToActionError },
      touched: { callToAction: callToActionTouched },
      handleChange,
      handleBlur,
      dirty
    } = this.props

    return (
      <form onSubmit={::this.handleSubmit}>
        <Label htmlFor="titleText">Título do bloco de pagamento</Label>
        {callToActionError && callToActionTouched && <span className="red ml2">{callToActionError}</span>}
        <input
          id="titleText"
          type="text"
          className="field-light block h3 full-width mt1 mb3"
          placeholder="Texto apresentado no topo do bloco"
          style={{height: '48px'}}
          value={titleText}
          onChange={handleChange('titleText')}
          onBlur={handleBlur('titleText')} />

        <div className="clearfix full-width meurio-scheme mb3">
          <Label htmlFor="formTitle">Cor do checkout transparente</Label>
          {callToActionError && callToActionTouched && <span className="red ml2">{callToActionError}</span>}
          <ColorPicker {...this.props} selectedClass={this.state.bgClass} onClick={::this.handleColorClick} />
        </div>

        <div className="clearfix">
          <div className="sm-col sm-col-2">
            <Label htmlFor="donationValue1">Valor 1</Label>
            {callToActionError && callToActionTouched && <span className="red ml2">{callToActionError}</span>}
            <input
              id="donationValue1"
              type="text"
              className="field-light block h3 mt1 mb3"
              placeholder="R$"
              style={{height: '48px', width: '90%'}}
              value={donationValue1}
              onChange={handleChange('donationValue1')}
              onBlur={handleBlur('donationValue1')} />
          </div>
          <div className="sm-col sm-col-2">
            <Label htmlFor="donationValue2">Valor 2</Label>
            {callToActionError && callToActionTouched && <span className="red ml2">{callToActionError}</span>}
            <input
              id="donationValue2"
              type="text"
              className="field-light block h3 mt1 mb3"
              placeholder="R$"
              style={{height: '48px', width: '90%'}}
              value={donationValue2}
              onChange={handleChange('donationValue2')}
              onBlur={handleBlur('donationValue2')} />
          </div>
          <div className="sm-col sm-col-2">
            <Label htmlFor="donationValue3">Valor 3</Label>
            {callToActionError && callToActionTouched && <span className="red ml2">{callToActionError}</span>}
            <input
              id="donationValue3"
              type="text"
              className="field-light block h3 mt1 mb3"
              placeholder="R$"
              style={{height: '48px', width: '90%'}}
              value={donationValue3}
              onChange={handleChange('donationValue3')}
              onBlur={handleBlur('donationValue3')} />
          </div>
          <div className="sm-col sm-col-2">
            <Label htmlFor="donationValue4">Valor 4</Label>
            {callToActionError && callToActionTouched && <span className="red ml2">{callToActionError}</span>}
            <input
              id="donationValue4"
              type="text"
              className="field-light block h3 mt1 mb3"
              placeholder="R$"
              style={{height: '48px', width: '90%'}}
              value={donationValue4}
              onChange={handleChange('donationValue4')}
              onBlur={handleBlur('donationValue4')} />
          </div>
          <div className="sm-col sm-col-2">
            <Label htmlFor="donationValue5">Valor 5</Label>
            {callToActionError && callToActionTouched && <span className="red ml2">{callToActionError}</span>}
            <input
              id="donationValue5"
              type="text"
              className="field-light block h3 mt1 mb3"
              placeholder="R$"
              style={{height: '48px', width: '90%'}}
              value={donationValue5}
              onChange={handleChange('donationValue5')}
              onBlur={handleBlur('donationValue5')} />
          </div>
        </div>
        <div className="sm-col sm-col-10">
          <Label htmlFor="donationButtonText">Texto Botão</Label>
          {callToActionError && callToActionTouched && <span className="red ml2">{callToActionError}</span>}
          <input
            id="donationButtonText"
            type="text"
            className="field-light block h3 half-width mt1 mb3"
            placeholder="Doe um cafezinho"
            style={{height: '48px'}}
            value={donationButtonText}
            onChange={handleChange('donationButtonText')}
            onBlur={handleBlur('donationButtonText')} />
        </div>
        <Label htmlFor="customerData">pedir dados do usuário</Label>
        {callToActionError && callToActionTouched && <span className="red ml2">{callToActionError}</span>}
        <p className="muted mt1 mb3">
        <input
          name="customerData"
          type="radio"
          value="sim"
          checked="checked"
          onChange={handleChange('customerData')}
          onBlur={handleBlur('customerData')} />
        SIM&nbsp;&nbsp;
        <input
          name="customerData"
          type="radio"
          value="sim"
          onChange={handleChange('customerData')}
          onBlur={handleBlur('customerData')} />
        NÃO
        </p>

        <Label htmlFor="paymentMethods">métodos de pagamento aceito</Label>
        {callToActionError && callToActionTouched && <span className="red ml2">{callToActionError}</span>}
        <p className="muted mt1 mb3">
        <input
          type="checkbox"
          id="paymentMethods"
          value="credit_card"
          checked="checked"
          onChange={handleChange('paymentMethods')}
          onBlur={handleBlur('paymentMethods')} />
        Cartão de Crédito&nbsp;&nbsp;
          <input
            type="checkbox"
            id="paymentMethods"
            value="boleto"
            checked="checked"
            onChange={handleChange('paymentMethods')}
            onBlur={handleBlur('paymentMethods')} />
          Boleto
        </p>

        <Label htmlFor="paymentMethods">conta bancária a ser creditada</Label>
        <p className="muted mb3">Este bloco de doação está associado à conta correspondente da cidade no Pagar.me.</p>

        <div className="clearfix">
          <button
            className="caps button bg-darken-3 h3 mt1 mr2"
            disabled={this.state.submitting}
            onClick={::this.handleCancelClick}>
            Cancelar
          </button>
          <input
            type="submit"
            className={classnames('caps button bg-aqua h3 mt1')}
            disabled={this.state.submitting || (!dirty)}
            value={this.state.submitting ? 'Salvando...' : 'Salvar'} />
        </div>

        {::this.renderErrorMessage()}
        { this.state.hasSubmitted && !dirty &&
          <div className="green mt2">Configurações do formulário atualizadas!</div> }
      </form>
    )
  }

  renderPage() {
    const { widgets, dirty } = this.props
    const widget = widgets.data[widgets.data.map((w) => { return w.id.toString()}).indexOf(this.props.params.widget_id)]
    return (
      <div className="flex-auto flex flex-column bg-silver gray relative">
        <div className="bg-white px3 clearfix">
          <h2 className="mb3">Configure o bloco de doação</h2>
        </div>
        <div className="p3 flex-auto overflow-scroll">
          { !this.state.initializing && this.renderForm() }
        </div>
        <CloseButton dirty={dirty} path={Paths.editMobilization(this.props.mobilization.id)} />
      </div>
    )
  }

  renderLoading() {
    return (
      <Loading />
    )
  }

  render() {
    return (this.props.widgets.data.length > 0 ? this.renderPage() : this.renderLoading())
  }
}
