export const sumLineItems = (lineItems: lineItem[] | undefined): number => {
    if (!lineItems) return 0;
    return lineItems.reduce((prevValue, curValue) => prevValue + curValue.amount, 0)
}

// convert cents to dollars
export const centsToDollars = (cents: number): string => {
    const dollars = cents/ 100;
    const addDecimals = twoDecimals(dollars);
    return addThousandsSeparator(addDecimals)
}

//add 2 decimals
export const twoDecimals = (myNum: number): string => {
    return myNum.toFixed(2)
}

// add commas to separare the thousands
export const addThousandsSeparator = (myNum: string): string => {
    return myNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",") // look for the third digit and add a comma 
}  
