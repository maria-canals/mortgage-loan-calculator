const App = {
    data() {
      return {
        loanAmount: "",
        interestRate: "",
        monthsToPay: "",
        result: "",
      }
    },
    
    methods:{
        getInputs(){
        const loanAmount = this.loanAmount
        const interest = loanAmount * (this.interestRate / 100)
        const months = this.monthsToPay

        if(interest && loanAmount && months){
          this.calculateMortgage(interest, months, loanAmount)
        }},

        calculateMortgage(interest, months, loanAmount){
          let payment = ((Number(loanAmount) + interest) / months).toFixed(2)
          payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          this.result = payment
        }
       
    }
  }
  
  Vue.createApp(App).mount('#loancal')