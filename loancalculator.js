const App = {
    data() {
      return {
        payment: 0,
        isMonthlyPaimentVisible: false,
        loanAmout: "",
        interestRate: "",
        monthsToPay: "",
        result: "",
        finalResult: ""
      }
    },
    
    methods:{
        getInputs(){
            let interest = this.loanAmout * (this.interestRate / 100)
            let loanPlusInterest = Number(this.loanAmout) + interest
            this.result = loanPlusInterest / Number(this.monthsToPay).toFixed(2)
            this.finalResult = this.result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
       
    }
  }
  
  Vue.createApp(App).mount('#loancal')