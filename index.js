class FormSubmit{
  constructor(config){
    this.config = config
    this.form = document.querySelector(config.form)
    this.formButton = document.querySelector(config.button)

    if(this.form){
      this.url = this.form.getAttribute('action')
    }
    this.sendForm = this.sendForm.bind(this)
  }

  displaySucecess(){
    this.form.innerHTML = this.config.success
  }

  displayError(){
    this.form.innerHTML = this.config.error
  } 

  getFormObject(){
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]")
    fields.forEach((field) => {
      formObject[field.getAttribute('name')] = field.value
    });
    return formObject
  }

  onSumission(event){
    event.preventDefault()
    event.target.disabled = true
    event.target.innerHTML = "Enviando..."
  }

  async sendForm(event){
    try{
      this.onSumission(event)
      await fetch(this.url, {
        method: 'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }, body: JSON.stringify(this.getFormObject())});
        this.displaySucecess()
    }
    catch(error){
      this.displayError()
    }
  }

  init(){
    if(this.form) this.formButton.addEventListener('click', this.sendForm)
      return this
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h2 class='success'>Mensagem Enviada!</h2>",
  error: "<h2 class='error'>Não foi possivel enviar a mensagem</h2>"
})

formSubmit.init()