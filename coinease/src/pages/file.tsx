import { useState } from 'react'; 
import { WithdrawMoney, MoneyDeposit, BillPayment } from '.'; 

export const WithdrawMoneyWithBalance = () => {
  const [, setBalance] = useState<number | null>(null); 
 

  return <WithdrawMoney setBalance={setBalance} />; 
};

export const MoneyDepositWithBalance = () => {
  const [, setBalance] = useState<number | null>(null); 
  

  return <MoneyDeposit setBalance={setBalance} />; 
};


export const BillPaymentWithBalance = () => {
  const [, setBalance] = useState<number | null>(null); 
  

  return <BillPayment setBalance={setBalance} />; 
};
