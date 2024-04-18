import { useState } from 'react'; 
import { WithdrawMoney, MoneyDeposit } from '.'; 

export const WithdrawMoneyWithBalance = () => {
  const [, setBalance] = useState<number | null>(null); 
 

  return <WithdrawMoney setBalance={setBalance} />; 
};

export const MoneyDepositWithBalance = () => {
  const [, setBalance] = useState<number | null>(null); 
  

  return <MoneyDeposit setBalance={setBalance} />; 
};
