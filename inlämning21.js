let initialState = {
  account :{
     accountNo:4638965931,
     balance:1500,
     openAccount: true,

   },
   customer:{
     name:'person',
     email: "email@gmail.com",
     number: "07445256"
   }
}

function rootReducer(state=initialState, action) {
    switch(action.type) {
        case WITHDRAW:
            return {
                balance: state.balance - action.amount
            };
        default:
            return state;
            
        case DEPOSIT:
            return {
                balance: state.balance + action.amount
            };
        default:
            return state;
            
        case TRANSFERFUNDS:
            return {
                balance: state.balance - action.amount
            };
        default:
            return state;    
     }
}

const withdraw = 'WITHDRAW';
const deposit ='DEPOSIT';
const transferFunds ='TRANSFERFUNDS';
    
//ACTIONS
function withdraw (amount) {
   const action ={
    type: "WITHDRAW",
    amount:amount
  }
  return {action.type,action.amount}

}
function deposit (amount) {
   const action ={
    type: "DEPOSIT",
    amount:amount
  }
  return {action.type,action.amount}

}

function transferFunds (amount, destinationAccount)  {
   const action ={
    type: "TRANSFERFUNDS",
    amount:amount,
    destinationAccount:destinationAccount
  }
  return {action.type,action.amount,action.destinationAccount}

}

