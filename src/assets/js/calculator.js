if (window.location.href=='http://localhost:4200/calculator')
{
  $(window).on('load', function() 
  {
document.getElementById('montly_pension').innerText = document.getElementById('load_rate').value
  
  var slider = document.getElementById("myRange");
  let grossShare = document.getElementById('gIncome')
  grossShare.innerText = slider.value

  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
  slider.oninput = function () {
    output.innerHTML = this.value;
    let newValue = '0.' + this.value.toString()
    document.getElementById('firstyearinsurencege').innerText = (newInsurance + +newValue).toString().slice(0, 5)

    let salaryge = parseFloat(document.getElementById('salaryge').value)
    let incomege = salaryge / 12
    let load_ratege = parseFloat(document.getElementById('load_ratege').value)
    let tem_disabilityge = (incomege / 100) * this.value;
    document.getElementById('tem_disabilityge').innerText = (tem_disabilityge).toString().slice(0, 5)
    let per_disabilityge = tem_disabilityge * 120;
    document.getElementById('per_disabilityge').innerText = (per_disabilityge).toString().slice(0, 5)
    let montly_pensionge = salaryge / 24;
    document.getElementById('montly_pensionge').innerText = ((incomege / 100) * this.value).toString().slice(0, 5)
    document.getElementById('gIncome').innerText = this.value

    let imgStore = document.getElementById('germanimage')
    if (this.value >= 30 || this.value <= 30) {
      imgStore.innerHTML = `<div class="img-wrapper"><img src="./assets/img/30.jpg" alt="..."></div>`

    }
    if (this.value >= 50) {
      imgStore.innerHTML = `<div class="img-wrapper"><img src="./assets/img/50.jpg" alt="..."></div>`

    }
    if (this.value >= 60) {
      imgStore.innerHTML = `<div class="img-wrapper"><img src="./assets/img/60.jpg" alt="..."></div>`

    }
    if (this.value >= 70) {
      imgStore.innerHTML = `<div class="img-wrapper"><img src="./assets/img/69.jpg" alt="..."></div>`

    }




  }







  var slidereng = document.getElementById("myRangeeng");

  var outputeng = document.getElementById("demoeng");
  outputeng.innerHTML = slidereng.value;
  let salary = parseFloat(document.getElementById('salary').value)
  document.getElementById('tem_disability').innerText = (salary / 100) * slidereng.value
  slidereng.oninput = function () {
    outputeng.innerHTML = this.value;
    let newValueeng = '0.' + this.value.toString()
    document.getElementById('firstyearinsurence').innerText = (newInsurance + +newValueeng).toString().slice(0, 5)

   
    let load_rate = parseFloat(document.getElementById('load_rate').value)
    let tem_disability = (salary / 100) * +this.value;
    document.getElementById('tem_disability').innerText = (tem_disability).toString().slice(0, 5)

    let per_disability = tem_disability / 10;
    document.getElementById('per_disability').innerText = (tem_disability * 120).toString().slice(0, 5)





    let imgStoreeng = document.getElementById('germanimageeng')
    if (this.value >= 30 || this.value <= 30) {
      imgStoreeng.innerHTML = `<div class="img-wrapper"><img src="./assets/img/30.jpg" alt="..."></div>`

    }
    if (this.value >= 50) {
      imgStoreeng.innerHTML = `<div class="img-wrapper"><img src="./assets/img/50.jpg" alt="..."></div>`

    }
    if (this.value >= 60) {
      imgStoreeng.innerHTML = `<div class="img-wrapper"><img src="./assets/img/60.jpg" alt="..."></div>`

    }
    if (this.value >= 70) {
      imgStoreeng.innerHTML = `<div class="img-wrapper"><img src="./assets/img/69.jpg" alt="..."></div>`

    }

    document.getElementById('gross_income').innerText = this.value


    document.getElementById('montly_pension').innerText = (((salary / 12) / 100) * +this.value).toString().slice(0, 5)
  }


  document.getElementById('gross_income').innerText = slidereng.value









  const conditionsge = () => {
    let value = document.getElementById('divisionge')

    if (value.value == '12') {

      document.getElementById('firstyearinsurencege').innerText = newInsurance / 12

    } else if (value.value == '4') {
      document.getElementById('firstyearinsurencege').innerText = newInsurance / 4
    } else if (value.value == '2') {
      document.getElementById('firstyearinsurencege').innerText = newInsurance / 2
    } else {
      document.getElementById('firstyearinsurencege').innerText = newInsurance
    }
  }
  document.getElementById('calculatege').addEventListener('click', () => {


    if (document.getElementById('salaryge').value.length > 0 && document.getElementById('yearge').value
      .length > 0) {
      document.getElementById('ENenglish').style.display = 'none'

      document.getElementById('formge').style.display = 'none'
      document.getElementById('cardge').style.display = ''
      let value = document.getElementById('yearge').value
      yearge = today - value
      document.getElementById('yearsgege').innerText = yearge

      let salaryge = parseFloat(document.getElementById('salaryge').value)


      let load_ratege = parseFloat(document.getElementById('load_ratege').value)
      document.getElementById('loange').innerText = load_ratege.toString().slice(0, 5)

      document.getElementById('monthly_salaryge').innerText = salaryge.toString().slice(0, 5)


      let incomege = salaryge / 12;
      document.getElementById('incomege').innerText = incomege.toString().slice(0, 5)

      let montly_pensionge = (incomege / 100) * slider.value;
      document.getElementById('montly_pensionge').innerText = montly_pensionge.toString().slice(0, 6)
      let firstyearinsurencege = salaryge * 10 / 100;
      newInsurance = firstyearinsurencege
      document.getElementById('firstyearinsurencege').innerText = firstyearinsurencege.toString().slice(0,
        5)


      let tem_disabilityge = (incomege / 100) * slider.value;
      document.getElementById('tem_disabilityge').innerText = tem_disabilityge.toString().slice(0, 5)

      let per_disabilityge = tem_disabilityge * 120;
      document.getElementById('per_disabilityge').innerText = per_disabilityge.toString().slice(0, 5)

    } else {
      swal("Bitte geben Sie die richtigen Details ein", "Erforderliche Angaben", "warning", {
        button: "Abbrechen",

      });
    }


  })


  document.getElementById('DEgermen').style.background = 'orange'
  document.getElementById('DEgermen').style.boxShadow = '0px 0px 10px aqua'

  document.getElementById('abortge').addEventListener('click', () => {

    document.getElementById('cardge').style.display = 'none'
    document.getElementById('formge').style.display = ''
    document.getElementById('ENenglish').style.display = ''

  })



  document.getElementById('ToLookge').addEventListener('click', () => {
    document.getElementById('ToLookge').style.display = ''

    document.getElementById('cardge').style.display = 'none'

    document.getElementById('applicationge').style.display = ''
    document.getElementById('germen').style.display = 'none'

  })

  document.getElementById('AppAbrortge').addEventListener('click', () => {

    document.getElementById('cardge').style.display = ''
    document.getElementById('applicationge').style.display = 'none'
    document.getElementById('germen').style.display = 'none'

  })

  document.getElementById('DEgermen').addEventListener('click', () => {

    document.getElementById('DEgermen').style.background = 'orange'
    document.getElementById('DEgermen').style.boxShadow = '0px 0px 10px aqua'
    document.getElementById('ENenglish').style.background = '#f42f54'
    document.getElementById('ENenglish').style.boxShadow = ''
    document.getElementById('germen').style.display = ''
    document.getElementById('english').style.display = 'none'

  })
  document.getElementById('ENenglish').addEventListener('click', () => {
    document.getElementById('ENenglish').style.background = 'orange'
    document.getElementById('ENenglish').style.boxShadow = '0px 0px 10px aqua'


    document.getElementById('DEgermen').style.background = '#f42f54'
    document.getElementById('DEgermen').style.boxShadow = ''
    document.getElementById('english').style.display = ''
    document.getElementById('germen').style.display = 'none'

  })















  var today = new Date();
  let newInsurance = 0
  var yyyy = today.getFullYear();

  today = yyyy;



  document.getElementById('cardge').style.display = 'none'

  document.getElementById('applicationge').style.display = 'none'

  document.getElementById('english').style.display = 'none'

  document.getElementById('card').style.display = 'none'

  document.getElementById('application').style.display = 'none'

  const conditions = () => {
    let value = document.getElementById('division')

    if (value.value == '12') {

      document.getElementById('firstyearinsurence').innerText = newInsurance / 12

    } else if (value.value == '4') {
      document.getElementById('firstyearinsurence').innerText = newInsurance / 4
    } else if (value.value == '2') {
      document.getElementById('firstyearinsurence').innerText = newInsurance / 2
    } else {
      document.getElementById('firstyearinsurence').innerText = newInsurance
    }
  }


  document.getElementById('calculate').addEventListener('click', () => {




    if (document.getElementById('salary').value.length > 0 && document.getElementById('year').value.length >
      0) {


      document.getElementById('DEgermen').style.display = 'none'
      document.getElementById('form').style.display = 'none'
      document.getElementById('card').style.display = ''
      let value = document.getElementById('year').value
      year = today - value
      document.getElementById('years').innerText = year

      let salary = parseFloat(document.getElementById('salary').value)
      //console.log(typeof(salary))
      let load_rate = parseFloat(document.getElementById('load_rate').value)

      //console.log(typeof(load_rate))
      document.getElementById('loan').innerText = load_rate.toString().slice(0, 7)

      document.getElementById('monthly_salary').innerText = salary.toString().slice(0, 7)

      let income = salary / 12;
      let montly_pension = (income / 100) * parseFloat(slidereng.value);
      document.getElementById('montly_pension').innerText = montly_pension.toString().slice(0, 7)

      document.getElementById('income').innerText = income.toString().slice(0, 7)

      let firstyearinsurence = salary * 10 / 100;
      newInsurance = firstyearinsurence
      document.getElementById('firstyearinsurence').innerText = firstyearinsurence.toString().slice(0, 7)


      let tem_disability = (income / 100) * parseFloat(slidereng.value);
      console.log('slider value is : ', slidereng.value)
      document.getElementById('tem_disability').innerText = tem_disability.toString().slice(0, 7)

      let per_disability = tem_disability * 120;
      document.getElementById('per_disability').innerText = per_disability.toString().slice(0, 7)

    } else {
      swal("Please Enter Correct Details", "Required Details", "warning", {
        button: "Cancel",

      });
    }


  })

  document.getElementById('abort').addEventListener('click', () => {
    document.getElementById('DEgermen').style.display = ''
    document.getElementById('card').style.display = 'none'
    document.getElementById('form').style.display = ''
    document.getElementById('germen').style.display = 'none'

  })



  document.getElementById('ToLook').addEventListener('click', () => {
    document.getElementById('ToLook').style.display = ''

    document.getElementById('card').style.display = 'none'

    document.getElementById('application').style.display = ''
    document.getElementById('germen').style.display = 'none'

  })

  document.getElementById('AppAbrort').addEventListener('click', () => {

    document.getElementById('card').style.display = ''
    document.getElementById('application').style.display = 'none'
    document.getElementById('germen').style.display = 'none'

  })


  })
}