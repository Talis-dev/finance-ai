import { TransactionType } from "@prisma/client"
import { Banknote, Barcode, CreditCard, DiamondPercent, HandCoins, Landmark } from "lucide-react"





export const TRANSACTION_CATEGORY_LABELS = {
    HOUSING:"Moradia",
    TRANSPORTATION: "Transporte",
    FOOD: "Alimentação",
    ENTERTAINMENT: "Entreterimento",
    HEALTH: "Saúde",
    UTILITY: "Utilidades",
    SALARY: "Salário",
    EDUCATION: "Educação",
    OTHER: "Outros",
  }

   export const TRANSACTION_PAYMENT_METHOD_ICONS = {
    CREDIT_CARD: <CreditCard/>,
    DEBIT_CARD: <CreditCard/>,
    BANK_TRANSFER: <Landmark/>,
    BANK_SLIP: <Barcode/>,
    CASH: <Banknote/>,
    PIX: <DiamondPercent/>,
    OTHER: <HandCoins/>,
  }

  export const TRANSACTION_PAYMENT_METHOD_LAVELS = {
    CREDIT_CARD: "Cartão de Crédito",
    DEBIT_CARD: "Cartão de Débito",
    BANK_TRANSFER: "Transferência Bancária",
    BANK_SLIP: "Boleto Bancário",
    CASH: "Dinheiro",
    PIX: "Pix",
    OTHER: "Outros",
  }



export const TRANSACTION_TYPE_OPTION = [{
    value:TransactionType.EXPENSE,
    label:"Despesa",
},
{
value: TransactionType.DEPOSIT,
label: "Deposito"
},
{
value: TransactionType.INVESTMENT,
label: "Investimento"
},
]

export const PAYMENT_METHOD_OPTIONS = [
    {
       value:"CREDIT_CARD",
       label:"Cartão de Crédito"
    },
    {
       value:"DEBIT_CARD",
       label:"Cartão de Débito" 
    },
    {
        value:"BANK_TRANSFER",
        label:"Transferência Bancária" 
     },
     {
        value:"BANK_SLIP",
        label:"Boleto Bancário" 
     },
     {
        value:"CASH",
        label:"Dinheiro" 
     },  
     {
        value:"PIX",
        label:"Pix" 
     }, 
     {
        value:"OTHER",
        label:"Outros" 
     },      
]

export const TRANSACTION_CATEGORY_OPTIONS = [
    {
        value:"HOUSING",
        label:"Moradia"
    },
    {
        value:"TRANSPORTATION",
        label:"Transporte"
    },
    {
        value:"FOOD",
        label:"Alimentação"
    },
    {
        value:"ENTERTAINMENT",
        label:"Entreterimento"
    }, 
    {
        value:"HEALTH",
        label:"Saúde"
    }, 
    {
        value:"UTILITY",
        label:"Utilidades"
    },   
    {
        value:"SALARY",
        label:"Salário"
    }, 
    {
        value:"EDUCATION",
        label:"Educação"
    },     
    {
        value:"OTHER",
        label:"Outros"
    },  
]